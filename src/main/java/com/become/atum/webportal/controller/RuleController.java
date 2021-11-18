package com.become.atum.webportal.controller;

import java.io.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.become.atum.webportal.model.*;
import com.become.atum.webportal.service.CommonService;
import com.become.atum.webportal.service.RuleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.apache.commons.io.IOUtils;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

@RestController
@RequestMapping("/office")
public class RuleController {

  private static final Logger logger = LoggerFactory.getLogger(GroupComponentController.class);

  @Autowired
  private RuleService ruleService;

  @Autowired
  private CommonService commonService;

  // 추가(2021.08.09, devYH) : 전체 class group 조회
  @GetMapping("/selectGroups/{projectId}")
  public ResponseEntity<List<ClassDefinition>> selectGroups(@PathVariable("projectId") String projectId) {
    ClassDefinition classDef = new ClassDefinition();
    classDef.setProjectId(projectId);
    List<ClassDefinition> classGroups = ruleService.selectClassGroups(classDef);
    return new ResponseEntity<List<ClassDefinition>>(classGroups, HttpStatus.OK);
  }

  //추가(2021.08.09, devYH)
  @GetMapping("/selectClassList/{projectId}/{groupId}")
  public ResponseEntity<List<ClassDefinition>> selectClassList(@PathVariable("projectId") String projectId, @PathVariable("groupId") String groupId) {
    ClassDefinition classDef = new ClassDefinition();
    classDef.setProjectId(projectId);
    classDef.setTableGroup(groupId);
    List<ClassDefinition> classGroups = ruleService.selectClassList(classDef);
    return new ResponseEntity<List<ClassDefinition>>(classGroups, HttpStatus.OK);
  }

  /* Language 조회 */
  @PutMapping("/getErrorLangData/{projectId}")
  public ResponseEntity<HashMap<String, Object>> getErrorLangData(@PathVariable("projectId") String projectId) {
    String errorLang = ruleService.getErrorLangData(projectId);
    HashMap<String, Object> map = new HashMap<String, Object>();
    map.put("result", errorLang);
    return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.OK);
  }

  /* Language 설정 저장 */
  @RequestMapping(value = "/saveLanguageOption", method = { RequestMethod.GET, RequestMethod.POST })
  public ModelAndView saveLanguageOption(HttpServletRequest request, HttpSession session) {
    ModelAndView model = new ModelAndView("jsonView");
    String projectId = (String) session.getAttribute("projectId");
    HashMap<String, Object> map = new HashMap<String, Object>();
    map.put("errorLang", request.getParameter("errorLang"));
    map.put("projectId", projectId);
    int result = ruleService.saveLanguageOption(map);
    session.setAttribute("errorLang", request.getParameter("errorLang"));
    session.setAttribute("errorLanguageId", request.getParameter("errorLang"));
    model.addObject("result", result == 1 ? "SUCCESS" : "FAIL");
    return model;
  }

  //refresh 버튼눌리면 tree, block 목록을 DB에서 다시 불러오기 위한 함수
  @RequestMapping(value = "/selectTreeData/{projectId}", method = { RequestMethod.GET })
  public String selectTreeData(HttpServletRequest request, @PathVariable("projectId") String projectId) {

    request.getSession().setAttribute("ruleName", null);
    request.getSession().setAttribute("functionName", "rule");

    DefRuleSource defRuleSource = new DefRuleSource();
    defRuleSource.setProjectId(projectId);
    defRuleSource.setGroup1("ALL");

    List<DefRuleSource> defRuleSourceList = ruleService.selectDefRuleSourceList(projectId);
    JSONArray jArray = new JSONArray();
    String treeData = "";
    if (defRuleSourceList.size() > 0) {
      List<String> titleList = new ArrayList<String>();
      JSONObject map = new JSONObject();
      JSONObject child = new JSONObject();

      DefRuleSource dataVO = new DefRuleSource();
      DefRuleSource chDataVO = new DefRuleSource();

      for (int i = 0; i < defRuleSourceList.size(); i++) {
        dataVO = (DefRuleSource) defRuleSourceList.get(i);
        if (!titleList.contains(dataVO.getGroup1()) && !titleList.contains(dataVO.getMessageGroup()) && !titleList.contains("MessageGroup")) {
          JSONArray cArray = new JSONArray();
          map = new JSONObject();

          if (dataVO.getGroup1() != null) {
            map.put("title", dataVO.getGroup1());

          } else if (dataVO.getGroup1() == null && dataVO.getMessageGroup() != null) {

            map.put("title", dataVO.getMessageGroup());
          } else {

            map.put("title", "MessageGroup");
          }

          map.put("expanded", true);
          map.put("folder", true);

          for (int j = 0; j < defRuleSourceList.size(); j++) {
            chDataVO = (DefRuleSource) defRuleSourceList.get(j);

            if (dataVO.getGroup1() != null && dataVO.getGroup1().equals(chDataVO.getGroup1())) {
              child = new JSONObject();
              child.put("title", chDataVO.getRuleName());
              child.put("RuleIdExist", "Y");
              cArray.add(child);
              titleList.add(dataVO.getGroup1());

            } else if (dataVO.getGroup1() == null && dataVO.getMessageGroup() == null) {
              child = new JSONObject();

              if (chDataVO.getRuleName() != null) {
                child.put("title", chDataVO.getRuleName());
                child.put("RuleIdExist", "Y");

              } else {
                child.put("title", chDataVO.getDetailMessageId()); //ruleName가 없을 때
                child.put("RuleIdExist", "N");

              }

              cArray.add(child);
              titleList.add("MessageGroup"); // messageGroup null 일때 화면에서 폴더 이름을 MessageGroup으로 해야함.

            } else if (dataVO.getGroup1() == null && dataVO.getMessageGroup() != null && dataVO.getMessageGroup().equals(chDataVO.getMessageGroup())) {
              child = new JSONObject();

              if (chDataVO.getRuleName() != null) {
                child.put("title", chDataVO.getRuleName());
                child.put("RuleIdExist", "Y");

              } else {
                child.put("title", chDataVO.getDetailMessageId()); //ruleName가 없을 때
                child.put("RuleIdExist", "N");
              }

              cArray.add(child);
              titleList.add(dataVO.getMessageGroup());

            }

          }
          map.put("children", cArray);
          jArray.add(map);

        }
      }
      JSONObject finalData = new JSONObject();
      finalData.put("title", "ALL");
      finalData.put("expanded", true);
      finalData.put("folder", true);
      finalData.put("children", jArray);
      treeData = finalData.toString();

    }
    return treeData;
  }

  /* 그룹별 Rule 목록 조회 */
  @GetMapping("/defRuleListWithWbs/{projectId}/{group1}")
  public ResponseEntity<List<DefRuleSource>> selectDefRuleSourceListWithWbs(@PathVariable("projectId") String projectId, @PathVariable("group1") String group1) {
    DefRuleSource defRuleSource = new DefRuleSource();
    defRuleSource.setProjectId(projectId);
    defRuleSource.setGroup1(group1);
    //defRuleSource.setMessageGroup(messageGroup);

    List<DefRuleSource> defRuleSourceList = ruleService.selectDefRuleSourceListWithWbs(defRuleSource);

    return new ResponseEntity<List<DefRuleSource>>(defRuleSourceList, HttpStatus.OK);
  }

  /* 그룹별 Rule 목록 (RuleName으로) 조회 */
  @GetMapping("/defRuleListWithWbs/{projectId}/{group1}/{ruleName}")
  public ResponseEntity<List<DefRuleSource>> selectDefRuleSourceListWithWbs2(@PathVariable("projectId") String projectId, @PathVariable("group1") String group1, @PathVariable("ruleName") String ruleName) {
    DefRuleSource defRuleSource = new DefRuleSource();
    defRuleSource.setProjectId(projectId);
    defRuleSource.setGroup1(group1);
    defRuleSource.setRuleName(ruleName);
    //defRuleSource.setMessageGroup(messageGroup);

    List<DefRuleSource> defRuleSourceList = ruleService.selectDefRuleSourceListWithWbs2(defRuleSource);

    return new ResponseEntity<List<DefRuleSource>>(defRuleSourceList, HttpStatus.OK);
  }

  /* Main Rule 삭제 */
  @DeleteMapping("treeAndRuleDelete/{projectId}")
  public ResponseEntity<Item> treeAndRuleDelete(@RequestBody Item itemVO, @PathVariable("projectId") String projectId, HttpServletRequest req) {
    //CustomerContextHolder.setProjectID("DEFAULT");
    Item existItem = new Item();
    Item item = new Item();
    BasicBlock basicBlock = new BasicBlock();
    BasicItem basicItem = new BasicItem();
    BasicLine basicLine = new BasicLine();
    DefRuleSource defRuleSource = new DefRuleSource();
    BizLogicLine bizLogicLineVO = new BizLogicLine();
    HashMap<String, Object> defMap = new HashMap<String, Object>();

    try {
      item.setProjectId(projectId);
      item.setRuleId(itemVO.getRuleId());

      existItem.setProjectId(projectId);
      existItem.setRuleId(itemVO.getRuleId());
      existItem.setRuleType("BR");

      String userId = (String) req.getSession().getAttribute("userId");
      defMap.put("projectId", projectId);
      defMap.put("ruleId", itemVO.getRuleId());
      defMap.put("version", itemVO.getVersion());
      defMap.put("userId", userId);
      defMap.put("eventId", "Delete");
      defMap.put("eventComment", "Delete");

      /* Item ruleInfo =  itemService.selectRuleItem(existItem);//Rule Info 존재 여부
      if(ruleInfo != null){
        item.setItemId(ruleInfo.getItemId());
        itemService.deleteRuleItemData(item); // rule info 삭제
        item.setMappingYn("Y");
        item.setMappingItemId(item.getItemId());
        modelingService.deleteMappingItemData(item); // 매핑 데이터 삭제
      } */

      // List<String> errorCdList = modelingService.getErrorCodeList(item);
      DefRuleSource defInfo = ruleService.getDefRuleInfo(item);
      ruleService.deleteFunctionErrorcodeData(defInfo); // FUNCTIONERRORCODERULE 삭제
      // 수정
      ruleService.deleteErrorcodeData(defInfo);//ERRORCODEDEFINITION 삭제
      ruleService.deleteRuleDefinition(defInfo);//ERRORCODEDEFINITION 삭제

      defRuleSource.setProjectId(projectId);
      basicBlock.setProjectId(projectId);
      basicLine.setProjectId(projectId);
      basicItem.setProjectId(projectId);
      bizLogicLineVO.setProjectId(projectId);
      //ruleModelingService.deleteRevisionHistory(item);
      if ("Y".equals(itemVO.getGroupYn()) && itemVO.getGroupYn() != null) {
        defRuleSource.setGroup1(itemVO.getRuleId());
        List<DefRuleSource> childList = ruleService.selectDefRuleSourceListWithWbs(defRuleSource);
        if (childList.size() > 0) {
          DefRuleSource childVO = new DefRuleSource();
          for (int i = 0; i < childList.size(); i++) {
            childVO = (DefRuleSource) childList.get(i);
            defRuleSource.setRuleId(childVO.getRuleId());
            basicBlock.setRuleId(childVO.getRuleId());
            basicItem.setRuleId(childVO.getRuleId());
            basicLine.setRuleId(childVO.getRuleId());
            bizLogicLineVO.setRuleId(childVO.getRuleId());

            ruleService.ruleSourceDefHisSave(defMap);

            ruleService.deleteDefSource(defRuleSource);
            ruleService.deleteAllBasicBlock(basicBlock); // 블럭 삭제
            ruleService.deleteAllBasicItem(basicItem); // 아이템 삭제
            ruleService.deleteAllBasicLine(basicLine); // 라인 삭제
            ruleService.deleteAllBizItem(basicItem); // Biz - 아이템 삭제
            ruleService.deleteAllBizLine(basicLine); // Biz- 라인 삭제

            ruleService.deleteVariableInUseData(bizLogicLineVO);
            ruleService.deleteVariableDeclareData(bizLogicLineVO);//VARIABLEINUSE에 있는 데이터 제외한 나머지

          }
        }
      } else {
        defRuleSource.setRuleId(itemVO.getRuleId());
        basicBlock.setRuleId(itemVO.getRuleId());
        basicItem.setRuleId(itemVO.getRuleId());
        basicLine.setRuleId(itemVO.getRuleId());
        bizLogicLineVO.setRuleId(itemVO.getRuleId());

        basicBlock.setVersion(itemVO.getVersion());
        bizLogicLineVO.setVersion(itemVO.getVersion());

        ruleService.ruleSourceDefHisSave(defMap);

        ruleService.deleteDefSource(defRuleSource);
        ruleService.deleteAllBasicBlock(basicBlock); // 블럭 삭제
        ruleService.deleteAllBasicItem(basicItem); // 아이템 삭제
        ruleService.deleteAllBasicLine(basicLine); // 라인 삭제

        ruleService.deleteAllBizItem(basicItem); // Biz - 아이템 삭제
        ruleService.deleteAllBizLine(basicLine); // Biz- 라인 삭제
        ruleService.deleteVariableInUseData(bizLogicLineVO);
        ruleService.deleteVariableDeclareData(bizLogicLineVO);//VARIABLEINUSE에 있는 데이터 제외한 나머지
      }

    } catch (Exception e) {
      System.out.println(e);
    }
    return new ResponseEntity<Item>(item, HttpStatus.OK);
  }

  /* 신규 Rule 생성화면 > rule,messge 정보 조회  */
  @PutMapping("/mesMessageIdList")
  public ResponseEntity<HashMap<String, Object>> selectMessageIdList(@RequestBody MessageBodyDefinition messageVO) {
    HashMap<String, Object> model = new HashMap<String, Object>();
    DefRuleSource defRuleSource = new DefRuleSource();
    defRuleSource.setProjectId(messageVO.getProjectId().toString());
    HashMap<String, Object> messageIdInfo = ruleService.selectMessageIds(messageVO);

    model.put("messageIdInfo", messageIdInfo);

    return new ResponseEntity<HashMap<String, Object>>(model, HttpStatus.OK);
  }

  // ***********************************************************
  // save 변경 버전
  // ***********************************************************
  @RequestMapping(value = "/saveNewItem", method = RequestMethod.POST)
  public ResponseEntity<HashMap<String, Object>> saveNewItem(@RequestBody Item itemVO, HttpServletRequest request, HttpSession session) {
    HashMap<String, Object> model = new HashMap<String, Object>();
    String projectId = (String) request.getSession().getAttribute("projectId");
    String userId = (String) request.getSession().getAttribute("userId");
    try {

      KhepriUser projectVO = new KhepriUser();
      projectVO.setProjectId(projectId);
      projectVO.setSystemType("4A");

      Project pjt = commonService.selectProjectDBList(projectVO);
      HashMap<String, Object> reqMap = new HashMap<String, Object>();
      reqMap.put("ruleId", itemVO.getRuleId());
      reqMap.put("detailMessageId", itemVO.getMessageId());
      reqMap.put("version", "0.0.1");
      reqMap.put("projectId", projectId);
      reqMap.put("userId", userId);
      reqMap.put("status", "Wait");
      reqMap.put("eventComment", "Insert");
      reqMap.put("revisionFlag", "N");
      reqMap.put("setErrorMessageId", pjt.getErrorcodeLanguage() == null ? "0" : pjt.getErrorcodeLanguage());
      MessageBodyDefinition messageBodyDef = ruleService.getMessageBodyData(reqMap);
      reqMap.put("messageBodyDef", messageBodyDef);
      reqMap.put("groupId", messageBodyDef.getMessageGroup());

      ruleService.insertFunctionError(reqMap);

      logger.info("[ML-DATA] PROJECTID=" + projectId 
      + ", MESSAGEGROUP="+messageBodyDef.getMessageGroup()+", RULEID=" + itemVO.getRuleId() + ", RULENAME=" + messageBodyDef.getRuleName()
      + ", MESSAGEID=" + messageBodyDef.getMessageId()+", SERVICENAME=" + messageBodyDef.getServiceName() + ", LEVEL=, BIZITEM=, ITEMID=, EDITLEVEL=Start");
      // ruleService.insertRuleInfoGroup(reqMap);//LCDP_RULEINFO
      // ruleService.insertRuleInfoRule(reqMap);//LCDP_RULEINFO

      /* LCDP_RuleInfo DB Table 없음! -> 테이블 제외 **/
      /* WBS 테이블 없음! -> 테이블 제외 ***/
      /* MESSAGEBODYDEFINITION 테이블에 MESSAGEGROUP 컬럼 없음! ***/
      /* BasicBlock Version int -> String 변경 ***/
      /* REVISION 테이블 없음 -> BizLogic 제외 ***/

      // DEFRULESOURCE
      int result = ruleService.insertDefRuleSource(reqMap);//WBSFUNCTIONGROUP
      ruleService.insertRuleDefinition(reqMap);

      //PRJ_RULEDEFINITION
      if (result > 0) {
        createSource(reqMap);
      }

      // reqMap.put("description", "최초등록");
      // ruleService.insertRevisionHistoryData(reqMap);
      ruleService.ruleSourceDefHisSave(reqMap);
    } catch (Exception e) {
      System.out.println(e.getMessage());
      model.put("RESULT", "FAIL");
      return new ResponseEntity<HashMap<String, Object>>(model, HttpStatus.FAILED_DEPENDENCY);
    }
    model.put("RESULT", "SUCCESS");
    return new ResponseEntity<HashMap<String, Object>>(model, HttpStatus.OK);
  }

  public void createSource(HashMap<String, Object> reqMap) {
    // RULE_BASICBLOCK
    List<HashMap<String, Object>> blockList = ruleService.getBlockList(reqMap);
    ruleService.insertBasicBlock(blockList);
    // BASICITEM
    List<HashMap<String, Object>> itemList = ruleService.getItemList(reqMap);
    ruleService.insertBasicItem(itemList);

    // BASICLINE
    List<HashMap<String, Object>> lineList = ruleService.getLineList(reqMap);
    int result = ruleService.insertBasicLine(lineList);
    if (result > 0) {
      ruleService.getChagneItemLineTemplate(reqMap);
    }
  }

  /* Block View 화면 이동 */
  @RequestMapping(value = "/blockView", method = RequestMethod.GET)
  public ModelAndView blockViewPage(HttpServletRequest request, HttpServletResponse response) {
    //CustomerContextHolder.setProjectID("DEFAULT");
    ModelAndView model = new ModelAndView();
    HttpSession session = request.getSession();

    session.setAttribute("functionName", "blockView");
    session.setAttribute("revisionCheck", "false");

    String ruleId = String.valueOf(request.getParameter("ruleId") == null || "".equals(request.getParameter("ruleId")) ? session.getAttribute("ruleId") : request.getParameter("ruleId"));
    String ruleVersion = String.valueOf(request.getParameter("ruleVersion") == null || "".equals(request.getParameter("ruleVersion")) ? session.getAttribute("ruleVersion") : request.getParameter("ruleVersion"));
    if (!"".equals(ruleId) && ruleId != null) {
      session.setAttribute("ruleId", ruleId);
      session.setAttribute("ruleVersion", ruleVersion);
    }

    String projectId = (String) session.getAttribute("projectId");
    BasicBlock basicBlock = new BasicBlock();
    basicBlock.setProjectId(projectId);
    basicBlock.setRuleId(ruleId);

    List<BasicBlock> menuList = ruleService.selectBasicBlockList(basicBlock);
    List<BasicBlock> groupList = new ArrayList<BasicBlock>();

    String groupNM = "";
    int i = 0;

    for (BasicBlock block : menuList) {
      if (i == 0) {
        groupNM = block.getBlockGroup();
        groupList.add(block);
      }
      if (!groupNM.equals(block.getBlockGroup())) {
        groupNM = block.getBlockGroup();
        groupList.add(block);
      }
      i++;
    }
    model.addObject("menuList", menuList);
    model.addObject("groupList", groupList);
    model.setViewName("functions/ATUM/rule/blockViewPages");
    return model;
  }

  /* Block View > 소스 조회 */
  @RequestMapping(value = "/getRuleBasicLine", method = RequestMethod.POST)
  public ResponseEntity<HashMap<String, Object>> selectRuleBasicLineList(HttpServletRequest request, HttpServletResponse response) {
    HashMap<String, Object> model = new HashMap<String, Object>();

    String projectId = String.valueOf(request.getParameter("projectId"));
    String ruleId = String.valueOf(request.getParameter("ruleId"));
    String version = String.valueOf(request.getParameter("version"));

    HashMap<String, Object> reqMap = new HashMap<String, Object>();
    reqMap.put("projectId", projectId);
    reqMap.put("ruleId", ruleId);
    reqMap.put("version", version);

    List<HashMap<String, Object>> basicLineList = ruleService.geJstBasicList(reqMap);
    List<HashMap<String, Object>> bizLineList = ruleService.getBizLineList(reqMap);

    model.put("bizLineList", bizLineList);
    model.put("basicLineList", basicLineList);

    return new ResponseEntity<HashMap<String, Object>>(model, HttpStatus.OK);
  }

  /* WBS 조회 */
  @RequestMapping(value = "/WBS", method = { RequestMethod.GET, RequestMethod.POST })
  public ModelAndView functionORG(HttpServletRequest request, HttpServletResponse response) {
    ModelAndView model = new ModelAndView();

    String projectId = (String) request.getSession().getAttribute("projectId");
    String userId = (String) request.getSession().getAttribute("userId");
    // String uiid = (String) request.getSession().getAttribute("uiid");
    // String devRuleId = request.getParameter("ruleId");

    HttpSession session = request.getSession();
    session.setAttribute("functionName", "WBS");

    model.addObject("projectId", projectId);

    // KhepriMenu kheprimenu = new KhepriMenu();
    // kheprimenu.setUserId(userId);
    // kheprimenu.setProjectId(projectId);
    // kheprimenu.setMenuType("F");
    // List<KhepriMenu> menuList = ruleService.getMenuList(kheprimenu);
    // model.addObject("menuList", menuList);
    model.setViewName("functions/ATUM/office/WBS");
    return model;
  }

  /* BizItem 조회 */
  @RequestMapping(value = "ruleModelingMenu/{projectId}", method = RequestMethod.GET)
  public ResponseEntity<List<KhepriMenu>> ruleModelingMenu(@PathVariable("projectId") String projectId, HttpSession session) {
    HashMap<String, Object> map = new HashMap<String, Object>();
    map.put("projectId", projectId);
    map.put("userId", session.getAttribute("userId"));
    List<KhepriMenu> menuList = ruleService.selectBizItemMenuList(map);
    return new ResponseEntity<List<KhepriMenu>>(menuList, HttpStatus.OK);
  }

  /* Biz Item Source 조회 */
  @PutMapping("/bizlogicLineList")
  public ResponseEntity<ModelAndView> selectBizlogicLineList(@RequestBody BizLogicLine bizLogicLineVO) {
    ModelAndView model = new ModelAndView("jsonView");
    List<HashMap<String, Object>> allList = ruleService.getBizLogicItem2(bizLogicLineVO);
    LinkedList<HashMap<String, Object>> ItemList = ruleService.getBizLogicItem(bizLogicLineVO);
    List<HashMap<String, Object>> lineList = new ArrayList<HashMap<String, Object>>();
    if (ItemList.size() > 1) {
      for (HashMap<String, Object> item : ItemList) {
        bizLogicLineVO.setItemId(item.get("ITEMID").toString());
        List<HashMap<String, Object>> line = ruleService.getBizLogicLine3(bizLogicLineVO);
        lineList.addAll(line);
      }
    } else {
      lineList = ruleService.getBizLogicLine3(bizLogicLineVO);
    }

    model.addObject("allList", allList);
    model.addObject("ItemList", ItemList);
    model.addObject("lineList", lineList);

    return new ResponseEntity<ModelAndView>(model, HttpStatus.OK);
  }

  @PutMapping("/getMessageBodydef")
  public ResponseEntity<HashMap<String, Object>> getMessageBodydef(@RequestBody Item itemVO, HttpServletRequest request, HttpServletResponse response) {
    HashMap<String, Object> map = ruleService.selectgetMessageBodydef(itemVO);

    return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.OK);
  }

  /* Message 조회 (Tree 구조) */
  @RequestMapping(value = "/getTreeData/{ruleId}/{version}", method = RequestMethod.GET)
  public ResponseEntity<HashMap<String, Object>> getRuleModeling(@PathVariable("ruleId") String ruleId, @PathVariable("version") String version, HttpServletRequest request, HttpSession session) {
    HashMap<String, Object> model = new HashMap<String, Object>();
    String projectId = (String) session.getAttribute("projectId");
    HashMap<String, Object> map = new HashMap<String, Object>();
    map.put("projectId", projectId);
    map.put("ruleId", ruleId);
    map.put("version", version);
    List<HashMap<String, Object>> messageList = ruleService.getMessageList(map);

    List<HashMap<String, Object>> variable = ruleService.getDBClassList(map);
    model.put("messageList", messageList);
    model.put("variable", variable);

    HashMap<String, Object> classVO = new HashMap<String, Object>();
    ArrayList<String> list = new ArrayList<String>();
    ClassAttributeDefinition classDefVO = new ClassAttributeDefinition();

    classDefVO.setProjectId(projectId);

    if (variable.size() > 0) {
      for (int x = 0; x < variable.size(); x++) {
        classVO = variable.get(x);
        list.add((String) classVO.get("TABLENAME"));
      }
      String[] classIds = new String[variable.size()];
      classIds = list.toArray(classIds);
      classDefVO.setClassIds(classIds);
    }

    List<ClassAttributeDefinition> classAttrList = ruleService.selectClassAttrDefList(classDefVO);

    model.put("classAttrs", classAttrList);
    return new ResponseEntity<HashMap<String, Object>>(model, HttpStatus.OK);
  }

  /* */
  @DeleteMapping("delete/variable")
  public ResponseEntity<ModelAndView> variableDelte(@RequestBody BizLogicLine bizLogicLineVO, HttpSession session) {
    ModelAndView model = new ModelAndView("jsonView"); 
    
    List<HashMap<String, Object>> variableNameList = ruleService.getVariableInUseName(bizLogicLineVO);
    if(variableNameList.size()>0){
      model.addObject("size", variableNameList.size());
    }else{
        ruleService.deleteVariableDeclareData(bizLogicLineVO);// VARIABLEINUSE에 있는 데이터 제외한 나머지
        if(bizLogicLineVO.getValuesData().toString().equals("GLOBAL")){
          bizLogicLineVO.setBlockId("DEFCLASS");
          bizLogicLineVO.setBlockItemId("DefGlobalVariableDeclere");
        }else{
          bizLogicLineVO.setBlockId("EXECUTELOGIC");
          if(bizLogicLineVO.getVariables().toString().equals("DBClass")){
            bizLogicLineVO.setBlockItemId("DefDbClassMainSet");              
          }else{
            bizLogicLineVO.setBlockItemId("DefVariableSet");
          }        
        } 
        ruleService.executeLogicDelete(bizLogicLineVO);// VARIABLEINUSE에 있는 데이터 제외한 나머지
    }

    logger.info("[ML-DATA] PROJECTID=" + bizLogicLineVO.getProjectId() 
    + ", MESSAGEGROUP=, RULEID=" + bizLogicLineVO.getRuleId() 
    + ", RULENAME="
    + ", MESSAGEID=, SERVICENAME=, LEVEL=, BIZITEM=, ITEMID=, EDITLEVEL=Delete");

    return new ResponseEntity<ModelAndView>(model, HttpStatus.OK);
  }
  /* BIZITEM 삭제 */
  @DeleteMapping("/delete/bizItem")
  public ResponseEntity<BizLogicLine> bizItemDeelte(@RequestBody BizLogicLine bizLogicLineVO, HttpSession session) {
    ModelAndView model = new ModelAndView("jsonView");
    String result = "success";
    try {
      // bizLogicLineVO.setBlockId("EXECUTELOGIC");
      List<HashMap<String, Object>> variableNameList = ruleService.getVariableInUseName(bizLogicLineVO);

      if (variableNameList.size() > 0) {
        // ruleService.deleteVariableInUseData(bizLogicLineVO);
        for (HashMap<String, Object> map : variableNameList) {
          bizLogicLineVO.setVariableName(map.get("VARIABLENAME").toString());
          ruleService.deleteVariableInUseData(bizLogicLineVO);
          HashMap<String, Object> variableName = ruleService.getVariableInUseData(bizLogicLineVO);
          int cnt = Integer.parseInt(variableName.get("CNT").toString());
          if (cnt == 0 && variableNameList.size() > 0) {
            ruleService.deleteVariableDeclareData(bizLogicLineVO);// VARIABLEINUSE에 있는 데이터 제외한 나머지

            bizLogicLineVO.setBlockId("DEFCLASS");
            bizLogicLineVO.setBlockItemId("DefGlobalVariableDeclere");
            ruleService.executeLogicDelete(bizLogicLineVO);// VARIABLEINUSE에 있는 데이터 제외한 나머지
            
            bizLogicLineVO.setBlockId("EXECUTELOGIC");
            bizLogicLineVO.setBlockItemId("DefDbClassMainSet");
            bizLogicLineVO.setVariableName(map.get("VARIABLENAME").toString());
            ruleService.executeLogicDelete(bizLogicLineVO);// VARIABLEINUSE에 있는 데이터 제외한 나머지

            bizLogicLineVO.setBlockItemId("DefVariableSet");
            ruleService.executeLogicDelete(bizLogicLineVO);// VARIABLEINUSE에 있는 데이터 제외한 나머지
            
           
          }
        }
      }

      logger.info("[ML-DATA] PROJECTID=" + bizLogicLineVO.getProjectId() 
      + ", MESSAGEGROUP=, RULEID=" + bizLogicLineVO.getRuleId() 
      + ", RULENAME="
      + ", MESSAGEID=, SERVICENAME=, LEVEL=, BIZITEM=, ITEMID="+bizLogicLineVO.getItemId()+", EDITLEVEL=Delete");

      ruleService.deleteErrorcodeData(bizLogicLineVO);
      ruleService.deleteBizLogicLineData(bizLogicLineVO);
      ruleService.deleteBizLogicItemData(bizLogicLineVO);

      /*
      *If 문 삭제일 경우
      */

    } catch (Exception e) {
      result = "fail";
    }
    model.addObject("result", result);
    return new ResponseEntity<BizLogicLine>(HttpStatus.OK);
  }

  /* RevisionData 가져오기 */
  //getRevisionData

  /* BASIC BLOCK TEMPLATE SEQ NUM 수정  */
  @PutMapping("/getRevisionData")
  public ResponseEntity<HashMap<String, Object>> getRevisionData(@RequestBody Item item) {

    HashMap<String, Object> map = ruleService.getRevisionData(item);

    return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.OK);
  }

  @PutMapping("/updateBasicBlockSeqNum/{projectId}")
  public ResponseEntity<List<HashMap<String, Object>>> updateBasicBlockSeqNum(@PathVariable("projectId") String projectId, @RequestBody List<HashMap<String, Object>> temp) {
    List<HashMap<String, Object>> list = new ArrayList<HashMap<String, Object>>();

    for (HashMap<String, Object> map : temp) {
      map.put("projectId", projectId);
      map.put("blockId", map.get("BLOCKID").toString());
      map.put("seqNum", map.get("SEQNUM").toString());
      list.add(map);
    }
    ruleService.updateBasicBlockSeqNum(list);
    return new ResponseEntity<List<HashMap<String, Object>>>(temp, HttpStatus.OK);
  }

  /* BASIC ITEM TEMPLATE SEQ NUM 수정  */
  @PutMapping("/updateBasicItemSeqNum/{projectId}")
  public ResponseEntity<List<HashMap<String, Object>>> updateBasicItemSeqNum(@PathVariable("projectId") String projectId, @RequestBody List<HashMap<String, Object>> temp) {

    for (HashMap<String, Object> map : temp) {
      map.put("projectId", projectId);
      map.put("blockId", map.get("BLOCKID").toString());
      map.put("itemId", map.get("ITEMID").toString());
      map.put("seqNum", map.get("SEQNUM").toString());
      ruleService.updateBasicItemSeqNum(map);
    }
    return new ResponseEntity<List<HashMap<String, Object>>>(temp, HttpStatus.OK);
  }

  /* BASIC LINE TEMPLATE SEQ NUM 수정  */
  @PutMapping("/updateBasicLineSeqNum/{projectId}")
  public ResponseEntity<List<HashMap<String, Object>>> updateBasicLineSeqNum(@PathVariable("projectId") String projectId, @RequestBody List<HashMap<String, Object>> temp) {
    for (HashMap<String, Object> map : temp) {
      ruleService.updateBasicLineSeqNum(map);
    }
    return new ResponseEntity<List<HashMap<String, Object>>>(temp, HttpStatus.OK);
  }

  // 블럭 삭제 후 시퀀스 넘버 업데이트 블럭
  @PutMapping("/updateSeqNum")
  public ResponseEntity<BasicBlockTemplate> updateSeqNum(@RequestBody BasicBlockTemplate basicBlockTemplateVO) {
    BasicBlockTemplate basicBlockTemplate = new BasicBlockTemplate();
    try {
      basicBlockTemplate.setProjectId(basicBlockTemplateVO.getProjectId());
      basicBlockTemplate.setSeqNum(basicBlockTemplateVO.getSeqNum());
      ruleService.updateSeqNum(basicBlockTemplate);
    } catch (Exception e) {
      System.out.println(e);
      return new ResponseEntity<BasicBlockTemplate>(basicBlockTemplateVO, HttpStatus.EXPECTATION_FAILED);
    }

    return new ResponseEntity<BasicBlockTemplate>(basicBlockTemplateVO, HttpStatus.OK);
  }

  /* BASIC ITEM 삭제시 LINE DATA 존재 여부 조회  */
  @GetMapping("/selectLineCount/{projectId}/{itemId}")
  public ResponseEntity<Integer> selectLineCount(@PathVariable("itemId") String itemId, @PathVariable("projectId") String projectId) {
    BasicLineTemplate basicLineTemplate = new BasicLineTemplate();
    basicLineTemplate.setProjectId(projectId);
    basicLineTemplate.setItemId(itemId);
    int BasicLineList = ruleService.selectLineCount(basicLineTemplate);
    return new ResponseEntity<Integer>(BasicLineList, HttpStatus.OK);

  }

  /* BASIC ITEM 재정렬 */
  @PutMapping("/updateSeqNumItem")
  public ResponseEntity<BasicItemTemplate> updateSeqNumItem(@RequestBody BasicItemTemplate basicItemTemplateVO) {
    BasicItemTemplate basicItemTemplate = new BasicItemTemplate();
    try {
      basicItemTemplate.setProjectId(basicItemTemplateVO.getProjectId());
      basicItemTemplate.setBlockId(basicItemTemplateVO.getBlockId());
      basicItemTemplate.setSeqNum(basicItemTemplateVO.getSeqNum());
      ruleService.updateSeqNumItem(basicItemTemplate);
    } catch (Exception e) {
      System.out.println(e);
    }

    return new ResponseEntity<BasicItemTemplate>(HttpStatus.OK);
  }

  /* BASIC LINE 재정렬 */
  @PutMapping("/updateSeqNumLine")
  public ResponseEntity<BasicLineTemplate> updateSeqNumLine(@RequestBody BasicLineTemplate basicLineTemplateVO) {
    BasicLineTemplate basicLineTemplate = new BasicLineTemplate();
    try {
      basicLineTemplate.setProjectId(basicLineTemplateVO.getProjectId());
      basicLineTemplate.setItemId(basicLineTemplateVO.getItemId());
      basicLineTemplate.setSeqNum(basicLineTemplateVO.getSeqNum());
      ruleService.updateSeqNumLine(basicLineTemplate);
    } catch (Exception e) {
      System.out.println(e);
    }
    return new ResponseEntity<BasicLineTemplate>(HttpStatus.OK);
  }

  /* BIZITEM 삭제시 메뉴 연계 삭제  */
  @RequestMapping(value = "/deleteKhepriMenu", method = RequestMethod.POST)
  public Map<String, Object> deleteKhepriMenu(@RequestBody KhepriMenu khepriMenuVO) {
    Map<String, Object> model = new HashMap<String, Object>();
    try {
      commonService.deleteKhepriMenu(khepriMenuVO);
      commonService.deleteKhepriUserByMenu(khepriMenuVO);
      //상위메뉴
      Integer upMenuCnt = commonService.selectExistSuperMenuList(khepriMenuVO);
      if (upMenuCnt == 0) {
        khepriMenuVO.setMenuId(khepriMenuVO.getSuperMenuId());
        commonService.deleteKhepriMenu(khepriMenuVO);
        commonService.deleteKhepriUserByMenu(khepriMenuVO);
      }
      //최상위메뉴
      khepriMenuVO.setSuperMenuId(khepriMenuVO.getCategory());
      Integer superMenuCnt = commonService.selectExistSuperMenuList(khepriMenuVO);
      if (superMenuCnt == 0) {
        khepriMenuVO.setMenuId(khepriMenuVO.getSuperMenuId());
        commonService.deleteKhepriMenu(khepriMenuVO);
        commonService.deleteKhepriUserByMenu(khepriMenuVO);
      }
      model.put("result", "success");
    } catch (Exception e) {
      System.out.println(e);
    }
    return model;
  }

  /* BIZITEM 등록시 메뉴 연계 등록  */
  @RequestMapping(value = "/insertKhepriMenu", method = RequestMethod.POST)
  public Map<String, Object> insertKhepriMenu(@RequestBody KhepriMenu khepriMenuVO) {
    Map<String, Object> model = new HashMap<String, Object>();
    try {
      commonService.insertKhepriMenu(khepriMenuVO);
      commonService.insertKhepriUserAuthority(khepriMenuVO);
      Integer upMenuCnt = commonService.selectExistSuperMenuId(khepriMenuVO);
      if (upMenuCnt == 0) {
        khepriMenuVO.setMenuId(khepriMenuVO.getSuperMenuId());
        khepriMenuVO.setCaption1(khepriMenuVO.getSuperMenuId());
        khepriMenuVO.setSuperMenuId(khepriMenuVO.getCategory());
        khepriMenuVO.setMenuLevel("2");
        commonService.insertKhepriMenu(khepriMenuVO);//상위메뉴 등록
        commonService.insertKhepriUserAuthority(khepriMenuVO);
      }
      Integer superMenuCnt = commonService.selectExistSuperMenuId(khepriMenuVO);
      if (superMenuCnt == 0) {
        khepriMenuVO.setMenuId(khepriMenuVO.getCategory());
        khepriMenuVO.setCaption1(khepriMenuVO.getCategory());
        khepriMenuVO.setSuperMenuId("");
        khepriMenuVO.setMenuLevel("1");
        commonService.insertKhepriMenu(khepriMenuVO);//최상위메뉴 등록
        commonService.insertKhepriUserAuthority(khepriMenuVO);
      }
      model.put("result", "success");
    } catch (Exception e) {
      System.out.println(e);
    }
    return model;
  }

  @PutMapping("/reorderErrorCode")
  public ResponseEntity<ModelAndView> reorderErrorCode(@RequestBody BizLogicLine item) {
    ModelAndView model = new ModelAndView("jsonView");
    item.setBlockId("EXECUTELOGIC");
    List<HashMap<String, Object>> allList = ruleService.reorderErrorCodeList(item);
    if(allList.size()>0){
      try {
        int success = ruleService.deleteErrorCode(allList);        
        success = ruleService.reorderErrorCode(allList);
        ruleService.reorderBizLineErrorCode(allList);
      } catch (Exception e) {
        int success = ruleService.reorderErrorCode(allList);
        success = ruleService.reorderBizLineErrorCode(allList);
      }
    }
    return new ResponseEntity<ModelAndView>(model, HttpStatus.OK);
  }

  /* Rule ItemUpdate Set -Insert/Delete/Update */
  @PutMapping("/ruleUpdateCheck")
  public ResponseEntity<ModelAndView> ruleUpdateCheck(@RequestBody Item item, HttpServletRequest request) {
    ModelAndView model = new ModelAndView("jsonView");
    try {
      item.setUserId(request.getSession().getAttribute("userId").toString());
      int success = ruleService.setSourceDefRevisionFlag(item);

      HashMap<String, Object> map = new HashMap<String, Object>();
      map.put("projectId", item.getProjectId());
      map.put("ruleId", item.getRuleId());
      map.put("version", item.getVersion());
      map.put("userId", item.getUserId());
      map.put("eventComment", item.getUpdateType());
      map.put("eventId", item.getUpdateType());
      ruleService.ruleSourceDefHisSave(map);

    } catch (Exception e) {
      System.out.println(e.getMessage());
    }

    return new ResponseEntity<ModelAndView>(model, HttpStatus.OK);
  }

  @PutMapping("/drawBizItem")
  public ResponseEntity<ModelAndView> bizlogicItemList3(@RequestBody BizLogicLine item) {
    // List<HashMap<String,Object>> allList = ruleService.testDraw(item);
    List<HashMap<String, Object>> allList = ruleService.getBizLogicItem2(item);
    ModelAndView model = new ModelAndView("jsonView");
    model.addObject("allList", allList);
    return new ResponseEntity<ModelAndView>(model, HttpStatus.OK);
  }

  public List<HashMap<String, Object>> listOrderSet(List<HashMap<String, Object>> getList, String level, String superItemId) {
    List<HashMap<String, Object>> resultList = new ArrayList<HashMap<String, Object>>();
    for (HashMap<String, Object> map : getList) {
      if (level.equals("0") && map.get("LEVEL").toString().equals("0")) {
        resultList.add(map);
      } else {
        if (map.get("LEVEL").toString().equals(level) && map.get("SUPERITEMID").toString().equals(superItemId)) {
          resultList.add(map);
        }
      }
    }
    return resultList;
  }

  /* Rule SourceCode Generation */
  @PostMapping("/codeGeneration_dev")
  public ResponseEntity<HashMap<String, Object>> codeGeneration_dev(@RequestBody BizLogicLine bizLogicLineVO, HttpServletRequest request) throws IOException {
    HashMap<String, Object> map = new HashMap<String, Object>();
    String errorLine = "";
    String projectId = bizLogicLineVO.getProjectId();
    String ruleId = bizLogicLineVO.getRuleId();

    HashMap<String, Object> reqMap = new HashMap<String, Object>();
    reqMap.put("projectId", bizLogicLineVO.getProjectId());
    reqMap.put("ruleId", bizLogicLineVO.getRuleId());
    reqMap.put("version", bizLogicLineVO.getVersion());

    List<HashMap<String, Object>> basicLineList = ruleService.geJstBasicList(reqMap);
    List<HashMap<String, Object>> bizLineList = ruleService.getBizLineList(reqMap);

    map.put("bizLineList", bizLineList);
    map.put("basicLineList", basicLineList);
    for (HashMap<String, Object> mapee : basicLineList) {
      System.out.println(mapee.get("SOURCECODE"));
    }

    String sourceHtml = "";
    if (basicLineList.size() > 0) {
      for (int i = 0; i < basicLineList.size(); i++) {
        if (basicLineList.get(i) != null && !"".equals(basicLineList.get(i).get("SOURCECODE")) && !("DefVariableSetEnd").equals(basicLineList.get(i).get("SOURCECODE"))) {
          // if(basicLineList.get(i).get("ITEMID").toString().trim().equals("ReplyMessageSetStart")){
          // for(HashMap<String, Object> hash : bizLineList){
          //   if(hash.get("BLOCKID").toString().equals("REPLYMESSAGE")){
          //     String source2 = hash.get("SOURCECODE").toString();
          //     source2 = source2.replace("&lt;", "<");
          //     source2 = source2.replace("&gt;", ">");                
          //     sourceHtml += source2 +"\n";
          //   }            
          // }
          // }else{
          sourceHtml += basicLineList.get(i).get("SOURCECODE") + "\n";
          // }  
        } else if (("DefVariableSetEnd").equals(basicLineList.get(i).get("ITEMID").toString())) {
          String source2 = bizLogicLineVO.getSourceCode().toString();
          source2 = source2.replace("&lt;", "<");
          source2 = source2.replace("&gt;", ">");
          sourceHtml += source2;
        } else {
          sourceHtml += "\n";
        }
      }
    }

    map.put("data", sourceHtml);

    // 생성된 Rule SourceDefinition Data 가져오기
    DefRuleSource soruceDefinition = ruleService.getDefrulesourceData(reqMap);
    // String fileName = soruceDefinition.getDetailMessageId().toString();
    String fileName = ruleId;
    map.put("title", fileName);

    File prjFile = new File(".");
    String rootPath = prjFile.getAbsoluteFile().toString();
    String javaCompilePath = rootPath.substring(0, rootPath.length() - 1) + "JavaCompile";
    File contextDirectory = new File(javaCompilePath);
    if (!contextDirectory.exists()) {
      contextDirectory.mkdirs();
    }
    String messageBuildJAVAPath = javaCompilePath + "\\sta\\" + soruceDefinition.getMessageId() + "\\";
    File complieMsgDirectory = new File(messageBuildJAVAPath);
    if (!complieMsgDirectory.exists()) {
      complieMsgDirectory.mkdirs();
    }

    String serviceBuildJAVAPath = messageBuildJAVAPath + "\\" + soruceDefinition.getServiceName() + "\\";
    String serviceCompileClassPath = messageBuildJAVAPath + "\\" + soruceDefinition.getServiceName() + "Service\\";
    File complieServiceDirectory = new File(serviceBuildJAVAPath);
    if (!complieServiceDirectory.exists()) {
      complieServiceDirectory.mkdirs();
    }
    String filePath = serviceBuildJAVAPath + fileName + ".java";

    logger.info("Start Create java File");
    FileWriter fileWriter = new FileWriter(filePath);
    try {
      fileWriter.write(sourceHtml);
      logger.error("Completed Create java File");
    } catch (Exception e) {
      logger.error("Error Create java File");
    } finally {
      try {
        map.put("result1", "Completed Create java File");
        fileWriter.close();
      } catch (IOException e) {
        e.printStackTrace();
        logger.error("Error Create java File");
        map.put("result1", "Error Create java File");
      }
    }

    logger.info("End Create java File");

    // 생성된 파일 불러오기
    File f = new File(filePath);
    // 파일 존재 여부 판단
    if (f.isFile()) {
      logger.info("Start Complie Java File From Class File");
      // String javaFile = request.getParameter("File");
      Process process = null;
      BufferedReader in = null;
      BufferedReader err = null;

      String javaBinPath = "\"C:\\Program Files\\Java\\jdk1.8.0_221\\bin\\";
      String classLibPath = javaCompilePath + "\\lib\\";
      String jdomPath = classLibPath + "jdom2-2.0.5.jar";
      String collections4Path = classLibPath + "commons-collections4-4.4.jar";
      String lang3Path = classLibPath + "commons-lang3-3.10.jar";
      String springBootPath = classLibPath + "spring-context-4.3.2.RELEASE.jar";
      String staEnginePath = classLibPath + "STAServerEngine-0.0.1-SNAPSHOT.jar";
      String complieLibList = javaCompilePath + ";" + classLibPath + ";" + staEnginePath + ";" + jdomPath + ";" + collections4Path + ";" + lang3Path + ";" + springBootPath;

      // String command = javaBinPath + "javac\" -encoding utf-8 -cp \"" + complieLibList + "\" " + filePath + " -d "
      String command = javaBinPath + "javac\" -encoding euc-kr -cp \"" + complieLibList + "\" " + filePath + " -d "
      // String command = javaBinPath + "javac\" -cp \"" + complieLibList + "\" " + filePath + " -d "
          + javaCompilePath;
      System.out.println(command);
      String s;
      try {
        process = Runtime.getRuntime().exec(command);
        in = new BufferedReader(new InputStreamReader(process.getInputStream(), "utf-8"));
        // while ((s = in.readLine()) != null) {
        //   System.out.println("count:" + cnt);
        //   cnt++;
        // }

        err = new BufferedReader(new InputStreamReader(process.getErrorStream(), "utf-8"));

        if (err != null && !err.ready()) {
          if (err.readLine() != null) {
            errorLine += err.readLine().toString() + "\n";
          }
        }
        ;
        // while (err.ready()) {
        // System.out.println(err.readLine().toString());
        // if(err.readLine() != null) errorLine.add(err.readLine().toString());
        // }
      } catch (Exception e) {
        // return new ResponseEntity<HashMap<String,Object>>(map, HttpStatus.INTERNAL_SERVER_ERROR);
      } finally {
        if (in != null)
          try {
            in.close();
          } catch (Exception sube) {
            in.close();
            System.out.println(new java.util.Date() + " javaCompile.jsp " + sube);
            map.put("errorCompileResult", "Fail Complie Class File To Java File1");
            return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.INTERNAL_SERVER_ERROR);
          }
        if (err != null)
          try {
            err.close();
            map.put("result2", "End Complie Class File To Java File");
          } catch (Exception sube) {
            err.close();
            map.put("errorCompileResult", "Fail Complie Class File To Java File2");
            return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.INTERNAL_SERVER_ERROR);
          }
      }

      logger.info("End Complie Class File To Java File");

      logger.info("Start Create Jar File");
      process = null;
      in = null;
      err = null;
      String jarCommand = javaBinPath + "jar.exe\" -cvfM " + serviceBuildJAVAPath + fileName + ".jar "
      // + serviceBuildJAVAPath + fileName + "*.class"; // 클래스 파일을 jar로 묶는건가?
          + serviceCompileClassPath + fileName + "*.class"; // 클래스 파일을 jar로 묶는건가?
      try {
        process = Runtime.getRuntime().exec(jarCommand);
        // in = new BufferedReader(new InputStreamReader(process.getInputStream(), "euc-kr"));
        in = new BufferedReader(new InputStreamReader(process.getInputStream(), "euc-kr"));
        while ((s = in.readLine()) != null) {
          logger.info(s);
        }
        err = new BufferedReader(new InputStreamReader(process.getErrorStream(), "euc-kr"));

        if (err != null && !err.ready()) {
          if (err.readLine() != null) {
            errorLine += err.readLine().toString() + "\n";
          }
        }
        ;

        // while (err.ready()) {
        //   logger.info(err.readLine());
        // }
      } catch (Exception e) {
        // System.out.println(e.getMessage());
        // map.put("errorLine", errorLine);
        // return new ResponseEntity<HashMap<String,Object>>(map, HttpStatus.INTERNAL_SERVER_ERROR);
        // return map;
      } finally {
        if (in != null) {
          try {
            in.close();
          } catch (Exception sube) {
            logger.error("ERROR :", sube.getMessage());
            map.put("errorLine", errorLine);
            return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.INTERNAL_SERVER_ERROR);
          }
        }
        if (err != null) {
          try {
            err.close();
          } catch (Exception sube) {
            logger.error("ERROR :", sube.getMessage());
            map.put("errorLine", errorLine);
            return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.INTERNAL_SERVER_ERROR);
          }
        }
      }

      System.out.println("blob >> Class Source Upload Start");

      boolean act_state = true;
      File sourceFile = null;
      File libDll = null;
      FileInputStream sourceFileStream = null;
      FileInputStream libDllStream = null;

      // HttpSession session = request.getSession();
      // User loginVO = (User) session.getAttribute("loginVO");
      MessageClass messageClassVO = new MessageClass();

      messageClassVO.setProjectId(projectId);
      messageClassVO.setClassType("Rule");
      messageClassVO.setClassId(bizLogicLineVO.getRuleId());
      messageClassVO.setClassGroup(soruceDefinition.getServiceName());
      // messageClassVO.setClassSourceFileName(soruceDefinition.getDetailMessageId() + ".java");
      messageClassVO.setClassSourceFileName(fileName + ".java");
      // messageClassVO.setClassLibDllName(soruceDefinition.getDetailMessageId() + ".jar");
      messageClassVO.setClassLibDllName(fileName + ".jar");
      messageClassVO.setGenUserId(request.getSession().getAttribute("userId").toString());
      messageClassVO.setCompileUserId(request.getSession().getAttribute("userId").toString());

      try {
        sourceFile = new File(serviceBuildJAVAPath + messageClassVO.getClassSourceFileName());
        sourceFileStream = new FileInputStream(sourceFile);
        libDll = new File(serviceBuildJAVAPath + messageClassVO.getClassLibDllName());
        libDllStream = new FileInputStream(libDll);
      } catch (Exception e) {
        System.out.print(e.getMessage());
        act_state = false;
        map.put("errorLine", errorLine);
        return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.INTERNAL_SERVER_ERROR);
      }

      if (act_state) {
        messageClassVO.setClassSourceFileData(IOUtils.toByteArray(sourceFileStream));
        messageClassVO.setClassLibDllData(IOUtils.toByteArray(libDllStream));
        messageClassVO.setClassType("rule");
        // messageClassVO.setClassId(request.getParameter("ruleId"));
        messageClassVO.setGenUserId(request.getSession().getAttribute("userId").toString());
        messageClassVO.setCompileUserId(request.getSession().getAttribute("userId").toString());
        int existData = ruleService.existClassSourceGenData(messageClassVO);
        if (existData > 0) {
          ruleService.updateClassSourceGenData(messageClassVO);
        } else {
          ruleService.insertClassSourceGenData(messageClassVO);
        }
      }

    } else {
      System.out.println("파일이 존재하지 않거나 파일명이 null입니다.");
      System.out.println("[ERROR] Not exist Java File!\n");
      map.put("errorLine", errorLine);
      return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    map.put("errorLine", errorLine);
    return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.OK);
  }

  public String reorderFunction(HashMap<String, Object> map) {
    String child = "";
    while (map.get("child") == null) {
      child += map.get("SOURCECODE").toString();
    }
    return child;
  }

}
