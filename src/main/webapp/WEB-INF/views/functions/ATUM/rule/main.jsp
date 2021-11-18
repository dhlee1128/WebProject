<%
/*************************************************************************
* Function 명   : Main 
* 담 당 자      : 김효은
* 개 발 일 자   : 2021년 3월 10일
* 설    명      : Rule-Designer Home 화면
* ------------------------- H I S T O R Y ------------------------
* 번호    담 당 자     작   업   일       변 경 내 용           비  고
* ----  --------  -----------------  -------------------------  -----------
*  1     김효은      2021년 3월 10일     최 초 작 업
*  2     김효은      2021년 3월 11일     트리 화면 기능 추가 및 디자인 수정
*  3     김효은      2021년 4월 30일     화면이동
**************************************************************************/
%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/views/layouts/include/common-include.jspf" %>
<!DOCTYPE html>
<html data-ng-app="mainApp">
  <head>
    <%-- <style>
      ul.fancytree-container{
        height: 780px;
      }
    </style> --%>
    <link href="../../../resources/css/jquery/jquery-ui-1.8.2.custom.css" type="text/css" rel="stylesheet"/>
    <link href="../../../resources/lib/fancytree/skin-win8/ui.fancytree.css" type="text/css" rel="stylesheet" />
    <link href="../../../resources/lib/jquery/jquery-contextMenu/jquery.contextMenu.min.css" type="text/css" rel="stylesheet" />
    <link href="../../../resources/lib/jquery/jquery-loading/jquery.loading.css" type="text/css" rel="stylesheet" />
    <link href="../../../resources/css/theme/normal/ux_left_style.css" type="text/css" rel="stylesheet" />
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css?ver0.1'>
    <script src="../../../resources/lib/require/require.js"></script> 
    <script src="../../../resources/lib/jquery/jquery.js"></script> 
    <script src="../../../resources/lib/jquery/jquery-contextMenu/jquery.contextMenu.js"></script> 


    <script type="text/javascript">
      let projectId = sessionStorage.getItem("projectId");
      $("#officeWBS" , parent.document).hide();
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
        require(["../../../resources/js/main-UITemplate.js"], function () {
          require(['../../../resources/js/app.js','../../../resources/js/functions/ATUM/rule/main-Rule.js'], function () {});
        });

       });

       /* RuleItem 의 Image 가 없을 때 처리 */ 
      function noImage(event){
        var error = new Image();
        error.src = "../../../resources/img/assets/images/wbs/"+sessionStorage.getItem("projectId")+"/bizitem.png";
          error.onload=function(){
            event.attr("src", "../../../resources/img/assets/images/wbs/"+sessionStorage.getItem("projectId")+"/bizitem.png"); 
          }
          error.onerror=function(){
            // $(this).attr({"visibility":'collapse'});
          }
      }
          
    </script>
  </head>
  <body data-ng-controller="multilanguageCtrl">
    <div id="containerMain" data-ng-controller="officeMainCtrl">
      <!-- RULE BLOCK LIST -->
      <div class="workspace_container">
        <div class="pcoded-main-container" > 
          <div class="pcoded-content" >
            <div class="card flat-card ">
              <div class="card-header" id="rule_title">
                <h2 style="margin-bottom: 0px">
                  <i class="uil uil-circuit"></i>&ensp;ATUM Office
                </h2>
              </div>
              <div id="ruleBlockList" class="card-body" style="max-height:735px; min-height: 735px;">
                <app-view _nghost-tum-c90="">
                  <div _ngcontent-tum-c90="" class="my-3 my-md-5">
                    <div _ngcontent-tum-c90="" class="container">
                      <div _ngcontent-tum-c90="" class="row row-cards row-deck">
                        <div _ngcontent-tum-c90="" class="col-md-6 col-lg-12">
                          <div _ngcontent-tum-c90="" class="row">
                            <div _ngcontent-tum-c90="" class="WBSGo col-sm-4 col-lg-2" style="cursor: pointer;">
                              <div _ngcontent-tum-c90="" class="card">
                                <div _ngcontent-tum-c90="" class="card-body p-5 text-center">
                                <img _ngcontent-tum-c90="" src="../../../resources/img/assets/images/wbs/${projectId}/WBS.png" class="mb-5">
                                <div _ngcontent-tum-c90="" class="h1 m-0">WBS</div>
                                </div>
                              </div>
                            </div>
                            <div _ngcontent-tum-c90="" class="col-sm-4 col-lg-2" style="cursor: pointer;">
                              <div _ngcontent-tum-c90="" class="card">
                                <div _ngcontent-tum-c90="" class="card-body p-5 text-center">
                                  <img _ngcontent-tum-c90="" src="../../../resources/img/assets/images/wbs/${projectId}/WBS.png" class="mb-5">
                                  <div _ngcontent-tum-c90="" class="h1 m-0">PMS</div>
                                </div>
                              </div>
                            </div>
                            <div _ngcontent-tum-c90="" class="col-sm-4 col-lg-2" style="cursor: pointer;">
                              <div _ngcontent-tum-c90="" class="card">
                                <div _ngcontent-tum-c90="" class="card-body p-5 text-center">
                                  <img _ngcontent-tum-c90="" src="../../../resources/img/assets/images/wbs/${projectId}/WBS.png" class="mb-5">
                                  <div _ngcontent-tum-c90="" class="h1 m-0">Specification</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </app-view>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <input type="hidden" id="groupTitle" value="ALL"/>
    <%-- container end --%>
    </div>
    <div id="informMainAlarm"><div>
    <div id="dialog_popup" ><div>
    </div></div>
    <div id="leftData" style="display:none;">${treeData}</div>
  </body>
</html>
