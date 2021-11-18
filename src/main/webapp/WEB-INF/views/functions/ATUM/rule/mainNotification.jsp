<%---------------------------------------------------
File: mainNotification.jsp
Description: 메인화면에서 공통으로 사용하는 Alarm/EEN/Inform Note 알림 화면
DB Table:

Author: sinope
Date: 2020.04.07
Version: 0.2
----------------------------------------------------%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<ul class="nav navbar-nav">
   <!-- Menu Control 
   <li class="nav-item hidden-sm-down"><a class="nav-link nav-menu-main menu-toggle hidden-xs"><i class="icon-menu5"></i></a></li>-->
   <!-- Inform Note -->
   <li class="dropdown dropdown-notification nav-item">
      <a href="#" id="infomBtn" data-toggle="dropdown" class="nav-link nav-link-label" aria-expanded="true">
         <i class="ficon icon-clipboard4"></i><span class="tag tag-pill tag-default tag-info tag-default tag-up" id="infomCnt" >0</span>
      </a>
   </li>
   <!-- Error Notice -->
   <li class="dropdown dropdown-notification nav-item">
      <a href="#" data-toggle="dropdown" class="nav-link nav-link-label" id="alarmBtn">
         <i class="ficon icon-bell4"></i><span class="tag tag-pill tag-default tag-danger tag-default tag-up" id="alarmCnt">0</span>
      </a>
   </li>
   <!-- Error Message -->
   <li id="status_message" class="nav-item hidden-sm-down"><a href="#" class="btn btn-secondary alarm" style="width: 30rem;text-align: left;">No alarm message.</a></li>
</ul>
<div id="dialog-popup-form-InformNote"></div>