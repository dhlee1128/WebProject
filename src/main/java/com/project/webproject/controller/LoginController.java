package com.project.webproject.controller;

import java.security.Principal;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.webproject.model.UserProfile;
// import com.project.webproject.service.CommonService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import lombok.extern.slf4j.Slf4j;

/**
 * 로그인 Controller
 *
 * @author 
 * @date 2020.04.06
 * @version 1.0
 */
// @Controller
// @Slf4j
// public class LoginController {

  
  // @Autowired
  // private CommonService commonService;

  @RestController
  public class LoginController {

    @GetMapping("/login")
    public String Hello() {
      return "안녕하세요. 로그인페이지 입니다.";
    } 
  }


  // user login
  // @RequestMapping(value = "/4{systemType}/{projectId}/login", method = { RequestMethod.GET, RequestMethod.POST })
  // public ModelAndView syslogin(@RequestParam(value = "error", required = false) String error, Principal principal,HttpServletRequest request, @PathVariable("systemType") String systemType, @PathVariable("projectId") String projectId) {
  //   log.info("/system login start");
  //   String referrer = request.getHeader("Referer");
	// 	request.getSession().setAttribute("targetUrl", referrer);
  //   ModelAndView model = new ModelAndView();
    
  //   systemType = "4".concat(systemType);
  //   if (!"4A".equals(systemType) && !"4M".equals(systemType) && !"4K".equals(systemType)) {
  //     model.setViewName("khepri/access_denied");
  //     //return model;
  //   }
  //   if ("4K".equals(systemType) && !"KHEPRI".equals(projectId.toUpperCase().trim())) {
  //     model.addObject("error", "The projectId is invalid.");
  //   }

  //   if (error != null) {
  //       model.addObject("error", "Check your ID or password again.");
  //   } else {
  //     /*
  //     if (principal != null) {
        
  //       log.info("already loggined.");
  //       model.setViewName("redirect:/"+systemType+"/main");
  //      return model;
  //     }
  //     */
  //   }
  //   HttpSession session = request.getSession(false);
  //   session.invalidate();//세션 초기화
  //   model.addObject("projectId", projectId);
  //   model.addObject("systemType", systemType);

  //   model.setViewName("khepri/"+systemType+"/login");

  //   return model;

  // }

  //   // project , System user login
  //   @RequestMapping(value = "/4{systemType}/{projectId}/{uiid}/login", method = { RequestMethod.GET, RequestMethod.POST })
  //   public ModelAndView uilogin(@RequestParam(value = "error", required = false) String error, Principal principal,HttpServletRequest request, @PathVariable("systemType") String systemType, @PathVariable("projectId") String projectId, @PathVariable("uiid") String uiid) {
  //     log.info("/system login start");
  //     String referrer = request.getHeader("Referer");
  //     request.getSession().setAttribute("targetUrl", referrer);
  //     ModelAndView model = new ModelAndView();
  //     systemType = "4".concat(systemType);

  //     if (!"4A".equals(systemType) && !"4M".equals(systemType) && !"4K".equals(systemType)) {
  //       model.setViewName("khepri/access_denied");
  //       //return model;
  //     } else if ("4K".equals(systemType) && !"KHEPRI".equals(projectId.toUpperCase().trim())) {
  //       model.addObject("error", "The projectId is invalid.");
  //     }
  
  //     if (error != null) {
  //         model.addObject("error", "Check your ID or password again.");
  //     } else { /*
  //       if (principal != null) { 
  //         log.info("already loggined.");
  //         model.setViewName("redirect:/"+systemType+"/"+projectId+"/"+uiid+"/main");
  //         return model;
  //       }
  //       */
  //     }
  
  //     model.addObject("projectId", projectId);
  //     model.addObject("systemType", systemType);
  //     model.addObject("uiid", uiid);

  //     model.setViewName("khepri/"+systemType+"/login");
  
  //     return model;
  
  //   }

  //   @RequestMapping(value = "/4{systemType}/{projectId}", method = { RequestMethod.GET, RequestMethod.POST })
  //   public ModelAndView Project4S(HttpServletRequest request, HttpServletResponse response, @PathVariable("systemType") String systemType, @PathVariable("projectId") String projectId, Principal user) {
  
  //     log.info("Start UI Name={}", projectId);
    
  //     String referrer = request.getHeader("Referer");
  //     request.getSession().setAttribute("targetUrl", referrer);
  //     systemType = "4".concat(systemType);

  //     ModelAndView model = new ModelAndView();
  //     if (!"4A".equals(systemType) && !"4M".equals(systemType) && !"4K".equals(systemType)) {
  //       model.setViewName("khepri/access_denied");
  //       return model;
  //     }
  
  //     HttpSession session = request.getSession(false);    
  
  //     if (referrer == null || user == null) {
  //         log.info("Not Permit Direct Access.");
  //         if (session != null) {
  //           session.invalidate();
  //         }
  //         String redirectUrl = "redirect:/"+systemType+"/"+projectId+"/login";
  //         model.setViewName(redirectUrl);
  //         return model;
  //     } 

  //     // KhepriUser khepriUser = commonService.getUserData(user.getName());
  //     // if (!systemType.equals(khepriUser.getSystemType()) || !projectId.equals(khepriUser.getProjectId())) {
  //     //   if (session != null) {
  //     //     session.invalidate();
  //     //   }
  //     //   String redirectUrl = "redirect:/"+systemType+"/"+projectId+"/login";
  //     //   model.setViewName(redirectUrl);
  //     //   return model;
  //     // }

  //      model.setViewName("redirect:/"+systemType+"/"+projectId+"/"+"/main");
  //     return model;
   
  //   }

  // @RequestMapping(value = "/4{systemType}/{projectId}/{uiid}", method = { RequestMethod.GET, RequestMethod.POST })
  // public ModelAndView Ui4A(HttpServletRequest request, HttpServletResponse response, @PathVariable("systemType") String systemType, @PathVariable("projectId") String projectId, @PathVariable("uiid") String uiid, Principal user) {

  //   log.info("Start UI Name={}", uiid);
  
  //   // imsi 추후 삭제
  //   if ("manager".equals(uiid)) {
  //     uiid = "khepriadmin";
  //   }
  //   String referrer = request.getHeader("Referer");
	// 	request.getSession().setAttribute("targetUrl", referrer);
  //   systemType = "4".concat(systemType);

  //   ModelAndView model = new ModelAndView();
  //   /*
  //   if (!"4A".equals(systemType) && !"4M".equals(systemType) && !"4K".equals(systemType)) {
  //     model.setViewName("khepri/access_denied");
  //     return model;
  //   }
  //   */
  //   HttpSession session = request.getSession(false);    

  //   if (referrer == null || user == null) {
  //       log.info("Not Permit Direct Access.");
  //       if (session != null) {
  //         session.invalidate();
  //       }
  //       String redirectUrl = "redirect:/"+systemType+"/"+projectId+"/"+uiid+"/login";
  //       model.setViewName(redirectUrl);

  //       return model;
  //   }

  //   // KhepriUser khepriUser = commonService.getUserData(user.getName());
  //   // if (!systemType.equals(khepriUser.getSystemType()) 
  //   //       || (!projectId.equals(khepriUser.getProjectId()) && !projectId.equals("KHEPRI") && !uiid.equals("khepriadmin"))) {
  //   //     if (session != null) {
  //   //       session.invalidate();
  //   //     }
  //   //     String redirectUrl = "redirect:/"+systemType+"/"+projectId+"/login";
  //   //     model.setViewName(redirectUrl);
  //   //     return model;
  //   // }

  //   model.setViewName("redirect:/"+systemType+"/"+projectId+"/"+uiid+"/main");
  //   return model;
 
  // }


  // @RequestMapping(value = "info/userInfo", method = { RequestMethod.GET, RequestMethod.POST })
  // @ResponseBody
  // public String userinfo(HttpServletRequest request) {

  //   Authentication auth = SecurityContextHolder.getContext().getAuthentication();

  //   ObjectMapper mapper = new ObjectMapper();
  //   String returnVal = "";

  //   if (auth != null) {
  //     try {
  //       returnVal = mapper.writeValueAsString(auth);
  //     } catch (Exception e) {
  //     }
  //   }
  //   return returnVal;
  // }

// }