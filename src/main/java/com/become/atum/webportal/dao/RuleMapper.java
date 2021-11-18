package com.become.atum.webportal.dao;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

import com.become.atum.webportal.model.*;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RuleMapper {

  //추가(2021.08.09, devYH)
  List<ClassDefinition> selectClassGroups(ClassDefinition classDef);
  //추가(2021.08.09, devYH)
  List<ClassDefinition> selectClassList(ClassDefinition classDef);

  List<DefRuleSource> selectDefRuleSourceList(String defRule);

  List<DefRuleSource> selectDefRuleGroupList(String projectId);

  List<DefRuleSource> selectDefRuleSourceListWithWbs(DefRuleSource defRuleSource);

  List<DefRuleSource> selectDefRuleSourceListWithWbs2(DefRuleSource defRuleSource); //그룹의 하위 요소인 ruleName 선택했을 때 표시하기 위함

  //List<BizItem> selectBizItemList(BasicBlock basicBlock);

  LinkedList<BasicBlock> selectBasicBlockList(BasicBlock basicBlock);

  String getErrorMessage(HashMap<String, Object> map);

  void insertErrorCodeDef(HashMap<String, Object> map);

  void deleteAllBasicBlock(BasicBlock basicBlock);

  void deleteAllBasicItem(BasicItem basicItem);

  void deleteAllBasicLine(BasicLine basicLine);

  void deleteAllBizItem(BasicItem basicItem);

  void deleteAllBizLine(BasicLine basicLine);

  void insertBasicBlock(List<HashMap<String, Object>> blockList);

  void insertBasicItem(List<HashMap<String, Object>> blockList);

  int insertBasicLine(HashMap<String, Object> blockList);

  List<HashMap<String, Object>> getBasicLineList(HashMap<String, Object> reqMap);

  List<HashMap<String, Object>> getMessageBodyDefList(HashMap<String, Object> map);

  DefRuleSource getDefrulesourceData(HashMap<String, Object> line);

  void updateBasicLineList(List<HashMap<String, Object>> updateList);

  List<HashMap<String, Object>> getReqCheckBasicTemplateList(HashMap<String, Object> map);

  void updateDefRuleSource(HashMap<String, Object> msg);

  HashMap<String, Object> getFunctionErrorCodeRuleList(HashMap<String, Object> detailMessageId);

  //int insertBasicBlockPre(BasicBlockPre BasicBlockPre);

  Integer selectBasicDataCount(BasicItem basicItem);

  // BizItemTemplate etcSelectBizItem(BizItemTemplate bizItemTemplate);

  //  BizLineTemplate etcSelectBizLine(BizLineTemplate bizLineTemplate);

  //  BizNewItem etcSelect(BizNewItem bizNewItem);

  // List<BizItemTemplate> selectBizItemWithPre(BizItemTemplate bizItemTemplate);

  // List<BizLineTemplate> selectBizLineWithBizItem(BizLineTemplate bizLineTemplate);

  void insertDefRuleSource(DefRuleSource defRuleSource);

  List<HashMap<String, Object>> getBlockList(HashMap<String, Object> map);

  List<HashMap<String, Object>> getItemList(HashMap<String, Object> map);

  LinkedList<HashMap<String, Object>> getLineList(HashMap<String, Object> map);

  HashMap<String, Object> getFuncErrorCodeRule(HashMap<String, Object> map);

  MessageBodyDefinition getMessageBodyData(HashMap<String, Object> ruleId);

  void insertFunctionError(HashMap<String, Object> data);

  void insertRuleInfoGroup(HashMap<String, Object> data);

  // void insertRuleInfoRule(HashMap<String, Object> data);

  int insertDefRuleSource(HashMap<String, Object> data);

  void insertRevisionHistoryData(HashMap<String, Object> data);

  List<DefRuleSource> defRuleMessageId(DefRuleSource defRuleSource);

  LinkedList<HashMap<String, Object>> getChagneItemLineTemplate(HashMap<String, Object> map);

  // List<HashMap<String, Object>> getRuleIdList(String projectId);

  HashMap<String, Object> selectMessageIds(MessageBodyDefinition messageVO);

  void updateBasicBlockSeqNum(List<HashMap<String, Object>> block);

  void updateBasicItemSeqNum(HashMap<String, Object> list);

  void updateBasicLineSeqNum(HashMap<String, Object> list);

  LinkedList<HashMap<String, Object>> geJstBasicList(HashMap<String, Object> map);

  HashMap<String, Object> functionErrorCodeData(HashMap<String, Object> line);

  DefRuleSource getDefRuleInfo(Item item);

  void deleteFunctionErrorcodeData(DefRuleSource item);

  void deleteErrorcodeData(DefRuleSource item);

  void deleteDefSource(DefRuleSource defRuleSource);

  int saveLanguageOption(HashMap<String, Object> map);

  void updateSeqNum(BasicBlockTemplate basicBlockTemplate);

  int selectLineCount(BasicLineTemplate basicLineTemplate);

  Object basicItemTemplate(BasicItemTemplate basicItemTemplate);

  void updateSeqNumItem(BasicItemTemplate basicItemTemplate);

  void updateSeqNumLine(BasicLineTemplate basicLineTemplate);

  List<BizLogicLine> selectBizlogicLineList(BizLogicLine bizLogicLineVO);
  
  HashMap<String, Object> selectgetMessageBodydef(Item map);

  void deleteErrorcodeData_bizlogic(BizLogicLine bizLogicLineVO);

  void deleteVariableInUseData(BizLogicLine bizLogicLineVO);

  void deleteBizLogicLineData(BizLogicLine bizLogicLineVO);

  void deleteVariableDeclareData(BizLogicLine bizLogicLineVO);

  void deleteBizLogicItemData(BizLogicLine bizLogicLineVO);

  String getErrorLangData(String projectId);

  List<HashMap<String, Object>> getBizLineList(HashMap<String, Object> reqMap);

  List<BizLogicItem> selectBizlogicitemList(BizLogicItem bizLogicItemVO);

  List<BizItemTemplate> selectBizItemCategoryList(BizItemTemplate bizItemTemplateVO);

  List<KhepriMenu> selectBizItemMenuList(HashMap<String, Object> map);

  List<HashMap<String,Object>> getBizLogicLine3(BizLogicLine bizLogicLineVO);

  // List<HashMap<String,Object>> getBizLogicItem3(BizLogicLine bizLogicLineVO);

  List<HashMap<String, Object>> getMessageList(HashMap<String, Object> map);

	List<HashMap<String, Object>> getDBClassList(HashMap<String, Object> map);

  List<ClassAttributeDefinition> selectClassAttrDefList(ClassAttributeDefinition classDefVO);

  HashMap<String,Object> getVariableInUseData(BizLogicLine bizLogicLineVO);

  List<HashMap<String,Object>>getVariableInUseName(BizLogicLine bizLogicLineVO);
  
  LinkedList<HashMap<String, Object>> getBizLogicItem(BizLogicLine bizLogicLineVO);

  List<HashMap<String, Object>> getSingleBizItem(BizLogicLine bizLogicLineVO);
  
  List<HashMap<String, Object>> getBizLogicItem2(BizLogicLine item);

  void executeLogicDelete(BizLogicLine bizLogicLineVO);
  
  int existClassSourceGenData(MessageClass messageClassVO);

  void updateClassSourceGenData(MessageClass messageClassVO);

  void insertClassSourceGenData(MessageClass messageClassVO);

  void insertRuleDefinition(HashMap<String, Object> reqMap);
  
  void deleteRuleDefinition(DefRuleSource defInfo);

  List<BizLogicLine> getIfItemList(BizLogicLine bizLogicLineVO);

  void deleteIfItem(List<BizLogicLine> itemList);

  void deleteIfErrorcodeData(List<BizLogicLine> itemList);

  void deleteIfLine(List<BizLogicLine> itemList);
  
  void ruleSourceDefHisSave(HashMap<String, Object> reqMap);
  
  List<HashMap<String, Object>> reorderErrorCodeList(BizLogicLine item);
  
  int reorderErrorCode(List<HashMap<String, Object>> allList);
  
  int reorderBizLineErrorCode(List<HashMap<String, Object>> allList);
  
  int deleteErrorCode(List<HashMap<String, Object>> allList);
  
  List<HashMap<String, Object>> testDraw(BizLogicLine item);
  
  int setSourceDefRevisionFlag(Item item);
  
  HashMap<String, Object> getRevisionData(Item item);

}
