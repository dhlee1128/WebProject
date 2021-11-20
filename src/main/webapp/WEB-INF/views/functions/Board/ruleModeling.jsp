<%
/*************************************************************************
* Function 명   : Main 
* 담 당 자      : 김효은
* 개 발 일 자   : 2021년 3월 16일
* 설    명      : Rule-Designer Modeling 화면
* ------------------------- H I S T O R Y ------------------------
* 번호    담 당 자     작   업   일       변 경 내 용           비  고
* ----  --------  -----------------  -------------------------  -----------
*  1     김효은      2021년 3월 16일     최 초 작 업
**************************************************************************/
%>
<html data-ng-app="myApp"> 
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/views/layouts/include/common-include.jspf" %>  
<link href="../resources/css/theme/normal/ux_left_style.css" type="text/css" rel="stylesheet" />
<link href="../resources/css/jquery/contextmenu_modeler.css" type="text/css" rel="stylesheet"/>
<!-- font icons-->
<link rel="stylesheet" type="text/css" href="../resources/css/menu/fonts/icomoon.css">
<%-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-contextmenu/2.7.1/jquery.contextMenu.min.css"> --%>
<link href="../resources/css/theme/normal/popup.css" type="text/css" rel="stylesheet"/>
<script src="../resources/lib/require/require.js"></script> 
<script src="../resources/lib/jquery/jquery.js"></script> 
<!-- 추가 -->
<%-- <script src="../resources/lib/jquery/jquery-contextMenu/jquery.contextMenu.js"></script>  --%>

<script type="text/javascript">  

      /**
       * @method: showMultilangLoading
       * @description: 다국어 실행 전에 loading 이미지 설정
       */

    var showMultilangLoading = function () {
        let maskHeight = window.document.body.offsetHeight;
        let maskWidth = window.document.body.clientWidth;
        let maskSize = "width: " + maskWidth + "px; height:" + maskHeight + "px;";
        let mask = "<div id='multilangMask' style='" + maskSize + " position:fixed; z-index:9000; background-color:#FFFFFF; left:0; top:0;'></div>";
        let loadingImg = "";
        loadingImg += "<div id='multiLangloading' style='position:absolute; left:50%; top:40%; z-index:10000;'>";
        //loadingImg += " <img width='200' src='img/loadingbar.gif'/>";
        loadingImg += "</div>";
        let bodyTag = document.getElementsByTagName("BODY")[0];
        bodyTag.insertAdjacentHTML("afterbegin", mask);
        let maskTag = document.getElementById("multilangMask");
        maskTag.insertAdjacentHTML("afterbegin", loadingImg);
        let loadingImgTag = document.getElementById("multiLangloading");
    }; 
 

    window.addEventListener('DOMContentLoaded', function(){
      // showMultilangLoading();
      require(["../resources/js/main.js"], function () {
        require(['../resources/js/htmleditor/editor.js'],function(){
          require(['../resources/js/app.js','../resources/js/functions/ATUM/rule/ruleModeling-Rule.js'], function () {
          });
        });
      });
    });

  $(function(){
    /*  $.contextMenu({
          selector: ".bizItems",
          items: {
            "delete": {name: "Delete", icon: "delete",
                callback: function(key, opt){
                    $( "#informMainAlarm" ).dialog({
                      resizable: false,
                      modal: true,
                      title: '삭제',
                      open: function( event, ui ) {
                        //$('#informMainAlarm').text('Delete 할 DBClass 변수를 선택하세요.');
                        $('#informMainAlarm').text("정말로 삭제하시겠습니까?");
                      },
                      buttons: [
                        {
                          text: '확인',
                          class: "pr_btn_01",
                          click: function () { 
                            bizItemDeleteDo(opt.$trigger.data("id"),opt.$trigger.data("superid"));
                            sessionStorage.setItem("revisionCheck","true");
                            $( this ).dialog( "close" );  
                          },
                        },
                      {
                        text: '취소',
                          class: "pr_btn_02",
                          click: function () {
                            $( this ).dialog( "close" ); 
                          },
                      }], 
                    });
                  }
                },
            }
        });
        */

        // function bizItemDeleteDo(id,superid){
        //   var projectId = sessionStorage.getItem("projectId");
        //     var ruleId = window.parent.document.blockForm.ruleId.value;
        //     var version = $("#popupVersion").val() == null? sessionStorage.getIten("ruleVersion") : $("#popupVersion").val();
            
        //     $.ajax({
        //       url: "../rule/delete/bizItem",
        //       contentType: "application/json",
        //       type: "DELETE",
        //       data:JSON.stringify({ "projectId":projectId,"ruleId":ruleId,"itemId": id ,"superItemId": superid,version:version}),
        //       error: function (xhr, status) {
        //         alert(status);
        //       },
        //       beforeSend: function() { 
        //         $("#custom-overlay").show();
        //       },
        //       complete: function() { //마우스 커서를 원래대로 돌린다 
        //         $("#custom-overlay").hide();
        //       },
        //       success: function (result) {
        //         // window.location.reload(); 
        //         //  $("body").loading({ overlay: $("#custom-overlay" , parent.document) });
        //           $("#custom-overlay",parent.document).show(); 
        //           $("#maincontents", parent.document).attr(
        //             "src",
        //             "../../../rule/ruleModeling?ruleId="+sessionStorage.getItem("ruleId")+"&ruleVersion="+$("#popupVersion").val()+"&uiid="+sessionStorage.getItem("uiid") 
        //           );
        //       },
        //     }); 
        // }
     })
 
 </script>
<style>
  .cdk-drop-list .rulebody_div{
  border:1px solid #bbb;
  border-radius: 5px;
  background-color: #fff;
  width: fit-content;
  padding: 7px 17px;
  margin-top: 14px;
}

.cdk-drop-list .rulebody02_div{
  border:1px solid #c30185;
  border-radius: 5px;
  background-color: #fff;
  width: fit-content;
  padding: 7px 17px;
  margin-top: 14px;
  margin-bottom: 14px;
}

.cdk-drop-list .rulebody_div .bizItems_empty,
.cdk-drop-list .rulebody02_div .bizItems_empty{
	padding: 47px;
	border: 2px dashed #bbb;
	box-shadow: none;
	background-color: #bbbbbb40;
}

.bizItems_empty:hover{
	opacity:0.7;
	border:none;
	background-color:transparent;
}

    [data-tooltip-text]:hover {
    /* [data-tooltip-text] { */
      position: relative;
    }
    [data-tooltip-text]:hover:after {
    /* [data-tooltip-text]{ */
      background-color: #fff;

      -webkit-box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0.4);
      -moz-box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0.4);

      box-shadow: 0 2px 2px #cecece;

      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      border: 1px solid #d7d8d9;

      color: #000000;
      font-size: 12px;
      content: attr(data-tooltip-text);

      margin-bottom: 10px;
      top: 0;
      left: 90%;    
      /* top: 150%;
      left: 0;     */
      padding: 1px 12px;
      position: absolute;
      /* width: 500px; */
      /* width: auto; */
      min-width: 100px;
      max-width: 500px;
      word-wrap: break-word;

      z-index: 9999; 
      /* overflow-x: scroll; */
    
    } 

    .tool_group_open {
      display: inline-block !important;
      width: 100%;
      height: 26px;
      padding: 8px 10px;
      font-size: 20px;
      text-align: left;
      font-weight: 700;
      cursor: pointer;
      color: #8557d8;
      line-height: 14px;
      font-weight: 500;
      transition: color 0.3s ease;
      text-transform: uppercase;
      display: block;
      text-decoration: underline;
    }
    .tool_group_close {
      display: block;
      /* float: left; */
      width: 100%;
      height: 26px;
      padding: 8px 10px;
      font-size: 20px;
      text-align: left;
      font-weight: 500;
      cursor: pointer;
      color: #55595c;
      text-transform: uppercase;
      line-height: 14px;
    }

    .table_name{
      font-size: 18px;
      padding: 10px 15px;
      color: #43474a;
    }

    .left_toolbox_bg{
          position: relative;
        display: block;
        float: left;
        width: 47px;
        height: calc(100% - 41px);
        background-color: #6f6f6f;
        background-image: linear-gradient(  45deg  , #f0f6ff, transparent)
    }

    .left_toolbox_sub_bg{    
      position: relative;
      display: block;
      float: left;
      width: 248px;
      height: calc(100% - 41px);
      background-color: #ffffff;
      overflow-x: hidden;
      overflow-y: auto;
      display: none;
    }
    .leftSelected {
      background-color: #fff;
    }
    .comp_txt_00 {
      color: #222;
      padding-top: 8px;
      font-size: 10px;
      line-height: 9px
    }

 </style>

 <body data-ng-controller="multilanguageCtrl">

  <div id="container2" style="visibility:hidden;" data-ng-controller="ruleModelingCtrl">
    <input type="hidden" id="dropIdtxt">
    
    <!-- Left Navigation -->
    <div class ="pcoded-navbar work_body">
        <div class="left_area">
          
          <!-- Search -->
          <div class="comp_search">
            <input class="search_input" id="search" ng-model="searchKeyword" draggable="false" ondrop="return false;">
            <img class="search_img" src="/WebPortal/resources/img/assets/images/icon/search.png">
          </div>
          <!-- Search End-->
          <!-- left Menu -->
          <div id="left_toolbox_bg">
            <div id="toolbox" class="comp_inactive leftSelected">
              <div id="tool"></div>
              <div class="comp_txt_00">EXECUTE LOGIC</div>
            </div>
          </div>
          <!-- left Menu End-->
          <!-- BizItem Menu -->
          <div id="left_toolbox_sub_bg" style="display: block;" ng-init="getToolComponents()"> 
            <div class="toolbox_sub_contain"> 
              <div id="toolbox2" class="comp_inactive leftSelected">
                <div id="tool2"></div>              
                <div > 
                    <div id="componentContainer" class="toolbox_sub_contain_main mCustomScrollbar" >
                      <ng-container ng-repeat="componentToolType in depth1">
                        <div class="tool_group_open" ng-click="toolItemsShow($event)">
                          {{componentToolType.caption1}}
                        </div>
                        <div class="tool_group">
                          <ul>
                            <!--  Tool Component  -->
                            <li class="tool_type" ng-repeat="menu in depth2" oncontextmenu="return false" >
                              <span ng-if="menu.menuLevel == '2' && menu.superMenuId == componentToolType.menuId " style="width:260px">
                              <img class="tool_image" ng-src="/WebPortal/resources/img/assets/images/icon/{{menu.img}}" style="width:18px; height:18px;"/> 
                                {{menu.caption1}}
                              </span>
                              <%-- <ul> --%>
                                <ng-container ng-repeat="componentTool in menu.children | filter: searchtool">   
                                  <dragItem
                                    ng-if="componentTool.superMenuId == menu.menuId && menu.superMenuId == componentToolType.menuId"
                                    class="tool_item droptarget"
                                    id="{{componentTool.menuId}}"
                                    properties="{{componentTool.menuId}}"
                                    ng-mouseover="rollover($event)" 
                                    data-menutype="{{componentTool.popupMenu}}"
                                    draggable="true"                                    
                                    drag-item                                    
                                  >                                                   
                                      {{componentTool.caption1}}  
                                  </dragItem>
                                </ng-container>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </ng-container>
                     <input id="txtPopupMenu"  hidden>
                    </div>
                </div>
                
              </div>
            </div>
          </div>
          <!-- BizItem Menu End -->
        </div>
    </div>
    <!-- Left Navigation End -->
    <!-- BizItem  -->
    <div class="pcoded-main-container">
      <div class="pcoded-content" drop-item >
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="card flat-card" style="width: 69%;float: right;">
              <div class="row-table">                
                <div class="cdk-drop-list col-sm-6 card-body canvas"
                 style="height:94.8vh;overflow-y: auto;max-width: 100% !important;"
                  id="ruleDesigner_editor"  ng-init="setBizItem()">
                </div>
                
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-" style="padding-left: 0px">
            <div class="card" style="height: 365px; margin-bottom: 17px">
              <div class="card-body2" >
                <ul id="myTab" role="tablist" class="nav nav-tabs mb-3">
                  <li class="nav-item codeTabs" id="sourceTab"><a class="nav-link text-uppercase active">Source Code</a></li>
                  <li class="nav-item codeTabs" id="pseudoTab" ><a class="nav-link text-uppercase">Pseudo Code</a></li>
                  <li class="nav-item codeTabs" id="sourceAllTab"><a class="nav-link text-uppercase">All Source Code</a></li>
                  <li class="nav-item"> 

                     <%-- <button class="mat-focus-indicator mat-flat-r-button mat-button-base code-gen-btn" id="revision"  --%>
                     <button class="mat-focus-indicator mat-button-base code-gen-btn" id="revision" 
                     style="height: 35px;position: absolute;right: 145px;"> 
                      <span class="mat-button-wrapper">
                        <i class="icon-history"></i> &nbsp;Revision</span>
                    </button>  
                    <button class="mat-focus-indicator mat-flat-e-button mat-button-base code-gen-btn" id="reOrderSeq" 
                    style="height: 35px;position: absolute;right: 250px;">
                      <span class="mat-button-wrapper">
                        <i class="icon-menu2"></i> &nbsp;ErrorSeqnum</span>
                    </button> 
                    <button class="mat-focus-indicator mat-button-base code-gen-btn" id="codeGeneration" 
                    style="height: 35px;position: absolute;right: 0;"> 
                      <span class="mat-button-wrapper">
                        <i class="feather icon-server"></i> &nbsp;Code Generation</span>
                    </button> 
                  </li>  
                </ul> 
                <div id="pseudoContent" class="tab-content tabText"  style="display:none;"></div>
                <div id="sourceContent" class="tab-content tabText"></div>
                <div id="sourceAllContent" class="tab-content tabText" style="display:none;"></div>
              </div>
            </div>
              <div id="sourceAllDiv"></div>
            <div class="card" >
              <div class="card-group" ng-init="treeSet()">
                <div class="card">
                  <div class="card-body" style="border-right: 1px solid #e9e9e9">
                    <h5 class="card-title">Message</h5>
                    <div style="height: 385px; border-top: 3px solid #e8daff">
                        <div id="message_tree">
                          <ul>
                            <li class="folder expanded" id="message_treeData">Message
                            </li>
                          </ul>
                          
                        </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body" style="border-right: 1px solid #e9e9e9;">
                    <h5 class="card-title">Variable<button type ="button" id="addDeclare" class="block-plus">+</button></h5>
                    <div style="height: 385px; border-top: 3px solid #e8daff">
                      <div>
                        <div>
                          <div class="" style="height: auto">
                            <div id="variable_tree" class="angular-tree-component">
                              <ul>
                                <li class="folder expanded"> VARIABLE
                                    <ul>
                                      <li class="folder" id="dbclass_tree">DBClass</li>
                                      <li class="folder" id="variable2_tree">Variable</li>
                                    </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body" style="border-right: 1px solid #e9e9e9;">
                    <h5 class="card-title">Global Variable<button type ="button" id="addGlobalDeclare" class="block-plus">+</button></h5>
                    <div style="height: 385px; border-top: 3px solid #e8daff">
                      <div>
                        <div>
                          <div class="" style="height: auto">
                            <div id="grobal_tree" class="angular-tree-component">
                              <ul>
                                <li class="folder expanded"> VARIABLE
                                 <ul>
                                      <li class="folder" id="glbDbclass_tree">DBClass</li>
                                      <li class="folder" id="glbVariable_tree">Variable</li>
                                    </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      
      <input id="popupName" hidden value="variableDeclare" >
      <input id="popupProjectId" hidden>
      <input id="popupRuleId" hidden>
      <input id="popupRuleName" hidden>
      <input id="popupVersion" hidden>
      <input id="popupMessageId" hidden>
      <input id="popupServiceName" hidden>
      <input id="popupMessageGroup" hidden>
      <input id="popupDetailMessageId" hidden>
      <input id="popupEditLevel" hidden>
      <input id="popupSuperItemId" hidden>
      <input id="popupPreItemId" hidden>
      <input id="popupLevelNo" hidden>
      <input id="popupSaveType" hidden>
      <input id="popupUpdateData" hidden>
      <input id="popupItemId" hidden>
      <div id="informMainAlarm"></div> 
      <div id="allSourceDiv" hidden></div>
    </div>
    <!--Context Menu -->
    <div class="cd-dropdown-wrapper ruleModelingContextMenu" id="ruleModelingContextMenu" style="height:auto;">
         <nav class="cd-dropdown-trigger">
          <ul class="cd-dropdown-content" >	
            <a href="javascript:void(0);" id="deleteMenu" ng-click="deleteItem()">Delete</a>
            <a href="javascript:void(0);" id="updateMenu" ng-click="updateItem($event)">update</a>
            <a href="javascript:void(0);" id="elseIfMenu" ng-click="addElseIf()">else if</a>
            <a href="javascript:void(0);" id="elseMenu" ng-click="addElse()">else</a>
            <li class="has-children"  id="insertMenu">
                <a href="javascript:void(0);" id="insertMenu">Insert</a>
                  <ul class="cd-dropdown-icons is-hidden" style="    overflow-y: scroll;    min-height: 0px;    max-height: 250px;">
                    <li >
                        <ng-container ng-repeat="componentToolType in depth33">
                          <a href="javascript:void(0);"
                           data-id="{{componentToolType.caption1}}"
                           data-menutype="{{componentToolType.popupMenu}}"
                           ng-click="insertBizItem($event);">{{componentToolType.caption1}}  </a>
                        </ng-container>
                    </li>
                  </ul>
            </li>
          </ul> 
      </nav>
    </div>
    <!--Context Menu -->
    <!--Context Menu -->
    <div class="cd-dropdown-wrapper variableContextMenu" id="variableContextMenu" style="height:auto;">
         <nav class="cd-dropdown-trigger">
          <ul class="cd-dropdown-content" >	
            <a href="javascript:void(0);" id="deleteVariable" ng-click="deleteVariable($event)">Delete</a>
          </ul> 
      </nav>
    </div>
    <!--Context Menu -->
    <!-- BizItem End -->
    </div>
  </div>
</body>
</html>