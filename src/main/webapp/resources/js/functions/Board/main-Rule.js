define([
  "angular",
  "common/global-definition",
  "multilanguage/multi-language",
  "component-util",
  "rules/runtime-rule",
  "custom-runtime-rules",
  "common/common-util",
  "common/global-definition",
  "commonBiz/common-window",
  "common/common",
  "jquery",
  "jquery-ui",
  "jquery-cookie",
  "jquery-contextmenu2",
  "../../../../../WebPortal/resources/lib/fancytree/jquery.fancytree",
  "../../../../../WebPortal/resources/lib/fancytree/jquery.fancytree.filter",
  "loading",
  // "menu/menu-message",
  // "menu/menu-class",
  // "menu/menu-querylist",
  // "menu/menu-queryinfo",
  // "menu/menu-tableinfo",

], function (angular, globalDefinition, multilanguage, componentUtil, rules, customRules, commonUtil, globalDef, commonWindow, common) {
  let projectId = sessionStorage.getItem("projectId");
  //angular.module("menu", ["menu.message",]);
  let ruleMainApp = angular.module('ruleMain', []);
  ruleMainApp.controller("officeMainCtrl", [
      "$scope",
      "CssLoadingService",
      function ($scope, CssLoadingService) {
        console.log("LOAD");
      },
  ]);

  let app = angular.module("mainApp", ["common","ruleMain" ,"multilanguage"]);
  app.config(function ($logProvider) {
    $logProvider.debugEnabled(true);
  });

  angular.element().ready(function () {
    angular.resumeBootstrap([app["name"]]);
  });
    
  $(function () {

      // $("body").loading({ overlay: $("#custom-overlay" , parent.document) });
      let treeData = $("#leftData").text();
      // initRuleItemList();
      sessionStorage.setItem("revisionCheck", "false");

       /* Rule Modeling 화면 이동 */
      $(document).on("click", ".WBSGo", function () {
        // $("#custom-overlay", parent.document).show();
        let officeWBS = "WBS";
        // let ruleId = "WBS";
        
        let currentURL = "../../../4A/" + projectId + "/rule/main";
        sessionStorage.setItem("currentURL", "../../../rule/WBSFUNCTION");

        window.parent.document.officeForm.officeWBS.value = officeWBS;
        // window.parent.document.officeForm.ruleId.value = ruleId;
        // $("#officeWBS", parent.document).show();
        // $("#officeWBS").css("disply", "block");
        window.open(currentURL, "_top"); 

      })
      
  });

  /*
  1 = Left   mouse button
  2 = Centre mouse button
  3 = Right  mouse button
  */

  $(".ruleItems").mousedown(function(e){
    if (e.which === 3) {
      $("#groupTitle").val($(this).data('group'));
    }
  });


});
