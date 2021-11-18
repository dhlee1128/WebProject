define([
  "angular",
  "common/global-definition",
  "multilanguage/multi-language",
  "component-util",
  "runtime-rules",
  "custom-runtime-rules",
  "common/common-util",
  "common/global-definition",
  "commonBiz/common-window",
  "jquery",
  "jquery-ui",
  "jquery-cookie",
  // "dynatree",
  "common/common",
  "models/common-model",
  "jqgrid",
  "jqplot-plugin",
  "multiCombo",
  "jqgrid-formatter",
  // "jquery-contextmenu2",
  "jqgrid-fmatter2",
  // "gantt",
  // "tabComponentLib",
  // "context-menu",
  "../../../../../../../WebPortal/resources/lib/fancytree/jquery.fancytree",
  "../../../../../../../WebPortal/resources/lib/fancytree/jquery.fancytree.filter",
], function (
  angular,
  globalDefinition,
  multilanguage,
  componentUtil,
  rules,
  customRules,
  commonUtil,
  globalDef,
  commonWindow,
  jquery,
  jqueryUi,
  jqueryCookie,
  // dynatree,
  common,
  commonModel,
  jqgrid,
  jqplotPlugin,
  multiCombo,
  jqgridFormatter,
  // jqueryContextmenu2,
  jqgridFmatter2
  // gantt,
  // tabComponentLib,
) {
  sessionStorage.setItem("templateFlag", "N");
  let ruleModelingApp = angular.module("ruleModeling", []);
  ruleModelingApp.controller("ruleModelingCtrl", [
    "$scope",
    "CssLoadingService",
    "DataSyncService",
    function ($scope, CssLoadingService, DataSyncService) {
      
      $("#blockNav,#itemNav", parent.document).show();
      
      var codeLang = commonUtil.getCookiesLanguage();

      CssLoadingService.loadCss([
        "../resources/css/partials/editor-component.css",
        "../resources/css/partials/editor-template.css",
        "../resources/css/jquery/jquery.dialog.css",
        "../resources/css/jquery/jquery-ui-1.8.2.custom.css",
      ]);

      $scope.getToolComponents = function () {
        var url = "../rule/ruleModelingMenu/" + sessionStorage.getItem("projectId");
        $.ajax({
          url: url,
          type: "GET",
          dataType: "json",
          async: false,
          error: function (xhr, status) {
            alert(status);
          },
          success: function (result) {
            var depth1 = [];
            result.forEach((d) => {
              if (d.menuLevel == 1) {
                d["img"] = d.iconImage;
                // d["img"]= d.caption1.toUpperCase();
                depth1.push(d);
              }
            });

            // 2 Depth
            var depth33 = [];
            var depth2 = [];
            depth1.forEach((d) => {
              for (var index in result) {
                var depth3 = [];
                var component = result[index];
                if (component.menuLevel == 2 && d.menuId == component.superMenuId) {
                  component["img"] = component.iconImage;
                  for (var index2 in result) {
                    var chlid = result[index2];
                    //3 Depth
                    if (chlid.menuLevel == 3 && component.menuId == chlid.superMenuId) {
                      depth3.push(chlid);
                      depth33.push(chlid);
                    }
                  }
                  component.children = depth3;
                  depth2.push(component);
                }
              }
            });
            $scope.depth1 = depth1;
            $scope.depth2 = depth2;
            $scope.depth33 = depth33;
          },
        });
      };

      $scope.$watch("searchKeyword", function (newvalue, oldvalue) {
        if (newvalue != undefined && newvalue != oldvalue) {
          setTimeout(function () {
            DataSyncService.searchFilterBroadCast(newvalue);
          }, 100);
        } else {
          return;
        }
      });

      // Left menu search 동작하기 위해 broadcast로 값을 가져온다.
      $scope.$on("searchFilter", function (event, value) {
        $scope.searchtool = value;
        $scope.$apply();
      });

      $scope.toolItemsShow = function (event) {
        var target = event.target;
        if (target == undefined) {
          return;
        }

        if ($(target).attr("class") == "tool_group_open ng-binding") {
          $(target).removeClass("tool_group_open ng-binding");
          $(target).addClass("tool_group_close ng-binding");
          $(target).next("div").css("display", "none");
        } else if ($(target).attr("class") == "tool_group_close ng-binding") {
          $(target).removeClass("tool_group_close ng-binding");
          $(target).addClass("tool_group_open ng-binding");
          $(target).next("div").css("display", "");
        }
      };

      $scope.allList = new Array();

      $scope.setBizItem = function () {
        let searchParams = new URLSearchParams(window.location.search); //Url Get Parameter
        var ruleId = searchParams.get("ruleId");
        var version =
          sessionStorage.getItem("ruleVersion") == null || sessionStorage.getItem("ruleVersion") == ""
            ? window.parent.document.blockForm.ruleVersion.value
            : sessionStorage.getItem("ruleVersion");
        $("#popupVersion").val(version);
        $("#popupRuleId").val(ruleId);

        var data = JSON.stringify({
          projectId: sessionStorage.getItem("projectId"),
          blockId: "EXECUTELOGIC",
          ruleId: $("#popupRuleId").val(),
          version: $("#popupVersion").val(),
        });

        $.ajax({
          url: "../rule/drawBizItem",
          contentType: "application/json",
          type: "PUT",
          data: data,
          dataType: "json",
          async: false,
          error: function (xhr, status) {
            alert(status);
          },
          success: function (result) {
            $("#ruleDesigner_editor").html("");
            var allList = result.model.allList;
            var html = "";
            let executeLogicList = allList.filter((x) => {
              return x.BLOCKID == "EXECUTELOGIC";
            });
            // let replyList = allList.filter(x=>{ return x.BLOCKID =='REPLYMESSAGE';  });

            /**
             * EXECUTELOGIC ITEM
             */

            for (var i = 0; i < 13; i++) {
              executeLogicList.forEach((data) => {
                if (data.LEVEL == i) {
                  html = "";

                  if (
                    data.ITEMNAME == "IF-MAINBLOCK" ||
                    data.ITEMNAM == "FOR-MAINLOOP" ||
                    data.ITEMNAME == "WHILE-MAINLOOP" ||
                    data.ITEMNAME == "ELSEBLOCK" ||
                    data.ITEMNAME == "ELSEIFBLOCK"
                  ) {
                    html += "<div id=" + data.ITEMID + " class='rulebody02_div' data-id='" + data.ITEMID + "' ";
                    html += "data-level='" + data.LEVEL + "' data-superid='" + data.SUPERITEMID + "' data-itemtype='" + data.ITEMTYPE + "'>";
                  } else {
                    html +=
                      "<div id=" +
                      data.ITEMID +
                      " data-id='" +
                      data.ITEMID +
                      "' data-level='" +
                      data.LEVEL +
                      "' data-superid='" +
                      data.SUPERITEMID +
                      "' data-itemtype='" +
                      data.ITEMTYPE +
                      "' >";
                  }

                  if (
                    data.ITEMNAME.indexOf("HEAD") == -1 &&
                    data.ITEMNAME.indexOf("TAIL") == -1 &&
                    data.ITEMNAME.indexOf("BODY") == -1 &&
                    data.ITEMNAME != "IFBLOCK"
                  ) {
                    html += '        <button class="bizItems mat-button mat-button-base" style="display:block;" ';
                    html +=
                      'data-id="' +
                      data.ITEMID +
                      '" data-superid="' +
                      data.SUPERITEMID +
                      '" data-itemtype="' +
                      data.ITEMTYPE +
                      '" data-level="' +
                      data.LEVEL +
                      '" data-blockid="' +
                      data.BLOCKID +
                      '" >';
                    html += '          <span class="mat-button-wrapper" >';
                    html += '            <div class="button-icon ' + data.ITEMTYPE + " " + data.ICONNAME.toLowerCase() + '">';
                    html += '              <img src="/WebPortal/resources/img/assets/images/icon/' + data.ICONIMAGE + '" style="height: 30px;">';
                    html += "            </div>";
                    if (data.ITEMTYPE == "ReadyUDF") html += "            <span >ReadyUDF</span>";
                    else html += "            <span >" + data.ITEMNAME + "</span>";
                    html += "          </span>";
                    html += "          <hr>";
                    html += '          <span class="mat-button-wrapper" >';
                    if (data.TABLENAME != undefined && data.ITEMTYPE != "ReadyUDF") {
                      var tooltip = data.TABLENAME.length > 25 ? data.TABLENAME.substring(0, 25) + "..." : data.TABLENAME;
                      if (data.TABLENAME.length > 25) {
                        html += "            <span data-tooltip-text='" + data.TABLENAME + "'>" + tooltip + "</span>";
                      } else {
                        html += "            <span  >" + data.TABLENAME + "</span>";
                      }
                    } else if (data.ITEMTYPE == "ReadyUDF") html += "            <span>" + data.ITEMNAME + "</span>";
                    html += "          </span>";
                    html += "        </button>";
                    html += '                        <i class="uil uil-arrow-down"></i>';
                    html += "                        </div>";
                  } else {
                    html += "                        </div>";
                  }

                  if (i == 0) {
                    $("#ruleDesigner_editor").append(html);
                  } else {
                    $("#" + data.SUPERITEMID).append(html);
                  }
                }
              });
            }

            /**
             * TEST
             *
             */
            //  let levelArr = [0,3,5,7];
            //                  for(var i = 0;i<13;i++){
            //                 //  for(const key in levelArr){
            //                   executeLogicList.forEach((data)=>{
            //                     console.log(data.LEVELNO / 2 );
            //                     if(data.LEVELNO == i && (data.LEVELNO != 1 && data.LEVELNO != 2 && data.LEVELNO != 4&& data.LEVELNO != 5) ){
            //                       html = "";
            //                         console.log(i+'번째: '+data.ITEMID+"/"+data.SUPERITEMID);
            //                         // if(data.ITEMNAME == 'IF-MAINBLOCK' || data.ITEMNAM == 'FOR-MAINLOOP' || data.ITEMNAME == 'WHILE-MAINLOOP'
            //                         if(data.ITEMNAME == 'IF-MAINBLOCK' || data.ITEMNAM == 'FOR-MAINLOOP' || data.ITEMNAME == 'WHILE-MAINLOOP'
            //                         || data.ITEMNAME == 'ELSEBLOCK' || data.ITEMNAME == 'ELSEIFBLOCK'){
            //                           html += "<div id="+data.ITEMID+" class='rulebody02_div' data-id='"+data.ITEMID+"' ";
            //                           html += "data-level='"+data.LEVELNO+"' data-superid='"+data.SUPERITEMID+"' data-itemtype='"+data.ITEMTYPE+"'>";
            // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //                             html += '        <button class="bizItems mat-button mat-button-base" style="display:block;" ';
            //                             html += 'data-id="'+data.ITEMID+'" data-superid="'+data.SUPERITEMID+'" data-itemtype="'+data.ITEMTYPE+'" data-level="'+data.LEVELNO+'" data-blockid="'+data.BLOCKID+'" >';
            //                             html += '          <span class="mat-button-wrapper" >';
            //                             html += '            <div class="button-icon '+data.ITEMTYPE+' '+data.ICONNAME.toLowerCase()+'">';
            //                             html += '              <img src="/WebPortal/resources/img/assets/images/icon/'+data.ICONIMAGE +'" style="height: 30px;">';
            //                             html += '            </div>';
            //                             if(data.ITEMTYPE == 'ReadyUDF') html += '            <span >ReadyUDF</span>';
            //                             else  html += '            <span >'+data.ITEMNAME+'</span>';
            //                             html += '          </span>';
            //                             html += '          <hr>';
            //                             html += '          <span class="mat-button-wrapper" >';
            //                             if(data.TABLENAME != undefined && data.ITEMTYPE != 'ReadyUDF') {
            //                               var tooltip = data.TABLENAME.length >25? data.TABLENAME.substring(0,25)+'...':data.TABLENAME;
            //                               if(data.TABLENAME.length >25){
            //                                 html += '            <span data-tooltip-text="'+data.TABLENAME+'">'+tooltip+'</span>';
            //                               }else{
            //                                 html += '            <span  >'+data.TABLENAME+'</span>';
            //                                 }
            //                               }
            //                             else if(data.ITEMTYPE == 'ReadyUDF') html += '            <span>'+data.ITEMNAME+'</span>';
            //                             html += '          </span>';
            //                             html += '        </button>';
            //                             html +='                        <i class="uil uil-arrow-down"></i>';
            //                             html +='                        </div>';
            // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //                           html +="</div>";
            //                         }else{
            //                           html += "<div id="+data.ITEMID+" data-id='"+data.ITEMID+"' data-level='"+data.LEVELNO+"' data-superid='"+data.SUPERITEMID+"' data-itemtype='"+data.ITEMTYPE+"' >";
            //                           ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //                           html += '        <button class="bizItems mat-button mat-button-base" style="display:block;" ';
            //                           html += 'data-id="'+data.ITEMID+'" data-superid="'+data.SUPERITEMID+'" data-itemtype="'+data.ITEMTYPE+'" data-level="'+data.LEVELNO+'" data-blockid="'+data.BLOCKID+'" >';
            //                           html += '          <span class="mat-button-wrapper" >';
            //                           html += '            <div class="button-icon '+data.ITEMTYPE+' '+data.ICONNAME.toLowerCase()+'">';
            //                           html += '              <img src="/WebPortal/resources/img/assets/images/icon/'+data.ICONIMAGE +'" style="height: 30px;">';
            //                           html += '            </div>';
            //                           if(data.ITEMTYPE == 'ReadyUDF') html += '            <span >ReadyUDF</span>';
            //                           else  html += '            <span >'+data.ITEMNAME+'</span>';
            //                           html += '          </span>';
            //                           html += '          <hr>';
            //                           html += '          <span class="mat-button-wrapper" >';
            //                           if(data.TABLENAME != undefined && data.ITEMTYPE != 'ReadyUDF') {
            //                             var tooltip = data.TABLENAME.length >25? data.TABLENAME.substring(0,25)+'...':data.TABLENAME;
            //                             if(data.TABLENAME.length >25){
            //                               html += '            <span data-tooltip-text="'+data.TABLENAME+'">'+tooltip+'</span>';
            //                             }else{
            //                               html += '            <span  >'+data.TABLENAME+'</span>';
            //                               }
            //                             }
            //                           else if(data.ITEMTYPE == 'ReadyUDF') html += '            <span>'+data.ITEMNAME+'</span>';
            //                           html += '          </span>';
            //                           html += '        </button>';
            //                           html +='                        <i class="uil uil-arrow-down"></i>';
            //                           html +='                        </div>';
            // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //                           html +="</div>";

            //                         }
            //                         // if(levelArr[key] == 0) {
            //                         if(i == 0) {
            //                           $("#ruleDesigner_editor").append(html);
            //                         }else{
            //                             $("#"+data.SUPERITEMID).append(html);
            //                         }
            //                     }else {
            //                       html ="";
            //                       html += "<div id="+data.ITEMID+" data-id='"+data.ITEMID+"' ";
            //                       html += "data-level='"+data.LEVELNO+"' data-superid='"+data.SUPERITEMID+"' data-itemtype='"+data.ITEMTYPE+"'>";
            //                       html += "</div>";
            //                       $("#"+data.SUPERITEMID).append(html);
            //                     }
            //                     // if(data.LEVELNO == i){
            //                     //     html ="";
            //                     //     if(data.ITEMNAME == 'IF-MAINBLOCK' || data.ITEMNAM == 'FOR-MAINLOOP' || data.ITEMNAME == 'WHILE-MAINLOOP' || data.ITEMNAME == 'ELSEBLOCK' || data.ITEMNAME == 'ELSEIFBLOCK'){
            //                     //       html += "<div id="+data.ITEMID+" class='rulebody02_div' data-id='"+data.ITEMID+"' ";
            //                     //       html += "data-level='"+data.LEVELNO+"' data-superid='"+data.SUPERITEMID+"' data-itemtype='"+data.ITEMTYPE+"'>";
            //                     //     }else{
            //                     //       html += "<div id="+data.ITEMID+" data-id='"+data.ITEMID+"' data-level='"+data.LEVELNO+"' data-superid='"+data.SUPERITEMID+"' data-itemtype='"+data.ITEMTYPE+"' >";
            //                     //     }
            //                     //     // if( data.ITEMNAME.indexOf('HEAD') == -1 && data.ITEMNAME.indexOf('TAIL') ==-1 && data.ITEMNAME.indexOf('BODY') == -1  && data.ITEMNAME != 'IFBLOCK'){
            //                     //       if( data.ITEMNAME.indexOf('HEAD') == -1 && data.ITEMNAME.indexOf('TAIL') ==-1 && data.ITEMNAME.indexOf('BODY') == -1  && data.ITEMNAME != 'IFBLOCK'){
            //                     //         html += '        <button class="bizItems mat-button mat-button-base" style="display:block;" ';
            //                     //         html += 'data-id="'+data.ITEMID+'" data-superid="'+data.SUPERITEMID+'" data-itemtype="'+data.ITEMTYPE+'" data-level="'+data.LEVELNO+'" data-blockid="'+data.BLOCKID+'" >';
            //                     //         html += '          <span class="mat-button-wrapper" >';
            //                     //         html += '            <div class="button-icon '+data.ITEMTYPE+' '+data.ICONNAME.toLowerCase()+'">';
            //                     //         html += '              <img src="/WebPortal/resources/img/assets/images/icon/'+data.ICONIMAGE +'" style="height: 30px;">';
            //                     //         html += '            </div>';
            //                     //         if(data.ITEMTYPE == 'ReadyUDF') html += '            <span >ReadyUDF</span>';
            //                     //         else  html += '            <span >'+data.ITEMNAME+'</span>';
            //                     //         html += '          </span>';
            //                     //         html += '          <hr>';
            //                     //         html += '          <span class="mat-button-wrapper" >';
            //                     //         if(data.TABLENAME != undefined && data.ITEMTYPE != 'ReadyUDF') {
            //                     //           var tooltip = data.TABLENAME.length >25? data.TABLENAME.substring(0,25)+'...':data.TABLENAME;
            //                     //           if(data.TABLENAME.length >25){
            //                     //             html += '            <span data-tooltip-text="'+data.TABLENAME+'">'+tooltip+'</span>';
            //                     //           }else{
            //                     //             html += '            <span  >'+data.TABLENAME+'</span>';
            //                     //             }
            //                     //           }
            //                     //         else if(data.ITEMTYPE == 'ReadyUDF') html += '            <span>'+data.ITEMNAME+'</span>';
            //                     //         html += '          </span>';
            //                     //         html += '        </button>';
            //                     //         html +='                        <i class="uil uil-arrow-down"></i>';
            //                     //         html +='                        </div>';
            //                     //       }

            //                     //   if(i == 0) {
            //                     //     $("#ruleDesigner_editor").append(html);
            //                     //   }else{
            //                     //     if(data.SUPERITEMID.indexOf("IF") >-1  && data.ITEMID.indexOf("ELSE")>-1){

            //                     //     }else{
            //                     //       $("#"+data.SUPERITEMID).append(html);
            //                     //     }
            //                     //   }
            //                     // }
            //                   });

            //                 }
            $(document).on("click", ".bizItems", function (e) {
              e.stopImmediatePropagation(); //이벤트 전파 중단
              goCodePreview(e);
            });
          },
        });
      };

      $scope.treeSet = function () {
        var version =
          window.parent.document.blockForm.ruleVersion.value == "" || window.parent.document.blockForm.ruleVersion.value == null
            ? sessionStorage.getItem("ruleVersion")
            : window.parent.document.blockForm.ruleVersion.value;
        $.ajax({
          url: "../rule/getTreeData/" + $("#popupRuleId").val() + "/" + version,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          type: "GET",
          data: {},
          dataType: "json",
          async: false, //동기
          error: function (xhr, status) {
            console.error("Ajax Error:" + xhr.responseText);
          },
          success: function (result) {
            // $("#message_treeData").
            let html = "";
            let messageList = result.messageList; //MESSAGE
            let variable = result.variable; //DECLEAR
            let classAttrs = result.classAttrs; //ATTR
            let ruleId = $("#popupRuleId").val();

            //MESSAGE ATTR 정의
            var inputList = new Array();
            var outputList = new Array();

            $.each(messageList, function (index, element) {
              if (element.MESSAGETYPE == "Input") inputList.push(element);
              else outputList.push(element);
            });

            html += "Message<ul>";
            html += '<li class="folder">Input';
            html += "<ul>";
            inputList.forEach((data) => {
              if (data.LEVEL == "1") {
                if (data.PARAMETERTYPE == "Class") {
                  html += '<li class="folder">' + data.PARAMETER;
                  html += "<ul>";
                  inputList.forEach((mainData) => {
                    if (mainData.LEVEL == "2" && mainData.PARENTPARAMETER == data.PARAMETER) {
                      html += "<li>" + mainData.PARAMETER + "</li>";
                    }
                  });
                  html += "</ul>";
                  html += "</li>";
                } else {
                  html += "<li>" + data.PARAMETER + "</li>";
                }
              }
            });

            html += "</ul>";
            html += "</li>";
            html += '<li class="folder">Output';
            html += "<ul>";

            outputList.forEach((data) => {
              if (data.LEVEL == "1") {
                if (data.PARAMETERTYPE == "Class") {
                  html += '<li class="folder">' + data.PARAMETER;
                  html += "<ul>";
                  outputList.forEach((mainData) => {
                    if (mainData.LEVEL == "2" && mainData.PARENTPARAMETER == data.PARAMETER) {
                      html += "<li>" + mainData.PARAMETER + "</li>";
                    }
                  });
                  html += "</ul>";
                  html += "</li>";
                } else {
                  html += "<li>" + data.PARAMETER + "</li>";
                }
              }
            });

            html += "</li>";
            html += "</li>";
            $("#message_treeData").html(html);

            //DBCLASS 정의
            html = "";
            html += "DBClass<ul>";

            variable.forEach((data) => {
              if (data.RULEID == ruleId && data.CATEGORY == "DBCLASS") {
                html += "<li class='folder' data-deletetype='Y' data-global = 'LOCAL'>" + data.VARIABLENAME;
                html += "<ul>";
                classAttrs.forEach((attr) => {
                  if (attr.tableId == data.TABLENAME) {
                    html += "<li data-deletetype='N' >" + attr.columnId + "</li>";
                  }
                });
                html += "</ul>";
              }
            });

            html += "</ul>";
            $("#dbclass_tree").html(html);

            //VARIABLE 정의
            html = "";
            html += "VARIABLE<ul>";

            variable.forEach((data) => {
              if (data.RULEID == ruleId && data.CATEGORY == "VARIABLE") {
                html += "<li class='folder' data-deletetype='Y' data-global = 'LOCAL'>" + data.VARIABLENAME + "</li>";
              }
            });

            html += "</ul>";

            $("#variable2_tree").html(html);
            //VARIABLE 정의
            html = "";
            html += "VARIABLE<ul>";

            variable.forEach((data) => {
              if (data.RULEID == ruleId && data.CATEGORY == "GLOBAL_VARIABLE") {
                html += "<li class='folder' data-deletetype='Y' data-global = 'GLOBAL'>" + data.VARIABLENAME + "</li>";
              }
            });

            html += "</ul>";

            $("#glbVariable_tree").html(html);
            //VARIABLE 정의
            html = "";
            html += "DBClass<ul>";

            variable.forEach((data) => {
              if (data.RULEID == ruleId && data.CATEGORY == "GLOBAL_DBCLASS") {
                html += "<li class='folder' data-deletetype='Y' data-global = 'GLOBAL'>" + data.VARIABLENAME;
                html += "<ul>";
                classAttrs.forEach((attr) => {
                  // var tableNM = data.VARIABLENAME.substr(3,data.VARIABLENAME.length);
                  if (attr.tableId == data.TABLENAME) {
                    html += "<li data-deletetype='N'>" + attr.columnId + "</li>";
                  }
                });
                html += "</ul>";
                html += "</li>";
              }
            });
            html += "</ul>";

            $("#glbDbclass_tree").html(html);

            $("#message_tree")
              .fancytree({
                clickFolderMode: 2, // 1:activate, 2:expand, 3:activate and expand, 4:activate (dblclick expands)
                hideExpandedCounter: true,
                blurTree: function (event, data) {},
                init: function (event, data, flag) {},
                focusTree: function (event, data) {},
                restore: function (event, data) {},
                activate: function (event, data) {},
                dblclick: function (event, data) {},
              })
              .on("fancytreeactivate", function (event, data) {
                // alternative way to bind to 'activate' event
              });

            $("#variable_tree")
              .fancytree({
                clickFolderMode: 2,
                hideExpandedCounter: true,
                blurTree: function (event, data) {},
                init: function (event, data, flag) {},
                focusTree: function (event, data) {},
                restore: function (event, data) {},
                activate: function (event, data) {},
                dblclick: function (event, data) {},
              })
              .on("fancytreeactivate", function (event, data) {
                // alternative way to bind to 'activate' event
              });
            $("#grobal_tree")
              .fancytree({
                clickFolderMode: 2,
                hideExpandedCounter: true,
                blurTree: function (event, data) {},
                init: function (event, data, flag) {},
                focusTree: function (event, data) {},
                restore: function (event, data) {},
                activate: function (event, data) {},
                dblclick: function (event, data) {},
              })
              .on("fancytreeactivate", function (event, data) {
                // alternative way to bind to 'activate' event
              });
          },
        });
      };

      $scope.addElseIf = function () {
        var ifId = $scope.contextItemId;
        $("#popupSuperItemId").val(ifId);
        var returnVal;
        returnVal = rules.showpopup(
          {
            data: {
              sendContinue: true,
              checkComponent: "",
              checkComponentHeaderName: "",
              checkComponentHeaderNameDisable: true,
              subFormName: "ElseIfBlock",
              selectedParameterGrid: [
                {
                  Component: "popupRuleId",
                  Boolean: "true",
                },
                {
                  Component: "popupVersion",
                  Boolean: "true",
                },
                {
                  Component: "popupSuperItemId",
                  Boolean: "true",
                },
                {
                  Component: "popupLevelNo",
                  Boolean: "true",
                },
                {
                  Component: "popupMessageId",
                  Boolean: "true",
                },
                {
                  Component: "popupServiceName",
                  Boolean: "true",
                },
                {
                  Component: "popupMessageGroup",
                  Boolean: "true",
                },
                {
                  Component: "popupDetailMessageId",
                  Boolean: "true",
                },
                {
                  Component: "popupRuleName",
                  Boolean: "true",
                },
              ],
              selectedExpressionID: "btnCancel_ShowPopup_7",
              heightSize: 505,
              widthSize: 450,
              popupName: "ElseIfBlock",
              gridInstance: {
                _setdata: [
                  {
                    Component: "popupRuleId",
                    Boolean: "true",
                  },
                  {
                    Component: "popupVersion",
                    Boolean: "true",
                  },
                  {
                    Component: "popupSuperItemId",
                    Boolean: "true",
                  },
                  {
                    Component: "popupLevelNo",
                    Boolean: "true",
                  },
                  {
                    Component: "popupMessageId",
                    Boolean: "true",
                  },
                  {
                    Component: "popupServiceName",
                    Boolean: "true",
                  },
                  {
                    Component: "popupMessageGroup",
                    Boolean: "true",
                  },
                  {
                    Component: "popupDetailMessageId",
                    Boolean: "true",
                  },
                  {
                    Component: "popupRuleName",
                    Boolean: "true",
                  },
                ],
              },
            },
            actionName: "ShowPopup",
            id: "btnCancel",
          },
          function74,
          null
        );

        function function74() {
          $scope.setBizItem();
          $scope.getToolComponents();
          $scope.treeSet();
        }
      };

      $scope.addElse = function () {
        var ifId = $scope.contextItemId;
        var ifLevel = $scope.contextLevel;
        var returnVal;
        returnVal = rules.sendmessage(
          {
            data: {
              selectedExpressionID: "btnConfirm_SendMessage_6",
              componentURL: "",
              message: {
                name: "SendMessage",
                url: "bindsendmessage.html",
              },
              MSGGridInstance: {
                gridObj: "#MSGParameter",
                _setdata: [
                  {
                    Parameter: "DetailMessageId",
                    Mandatory: "Y",
                    InputType: "Component",
                    Value: "popupDetailMessageId",
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "RuleName",
                    Mandatory: "N",
                    InputType: "Component",
                    Value: "popupRuleName",
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "MessageId",
                    Mandatory: "N",
                    InputType: "Component",
                    Value: "popupMessageId",
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "ServiceName",
                    Mandatory: "N",
                    InputType: "Component",
                    Value: "popupServiceName",
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "MessageGroup",
                    Mandatory: "N",
                    InputType: "Component",
                    Value: "popupMessageGroup",
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "ProjectId",
                    Mandatory: "Y",
                    InputType: "Text",
                    Value: sessionStorage.getItem("projectId"),
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "RuleId",
                    Mandatory: "Y",
                    InputType: "Component",
                    Value: "popupRuleId",
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "Version",
                    Mandatory: "N",
                    InputType: "Component",
                    Value: "popupVersion",
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "SuperItemId",
                    Mandatory: "N",
                    InputType: "text",
                    Value: ifId,
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "Level",
                    Mandatory: "N",
                    InputType: "text",
                    Value: ifLevel,
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "Category",
                    Mandatory: "Y",
                    InputType: "text",
                    Value: "IFBlock",
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "EditLevel",
                    Mandatory: "Y",
                    InputType: "text",
                    Value: "Create",
                    Column: "",
                    Parentparameter: "",
                  },
                ],
              },
              headerValue: "",
              gridColumnList: {},
              MessageID: "ExeRule",
              ServiceName: "Txn",
              DetailMessageID: "TxnBizElseSave",
              QueryRuleID: "",
              parameter: "",
              headerInputType: "",
              headerInputValue: "",
              headerColumn: "",
              setDataFlag: false,
              simulationFlag: false,
              simulData: "",
              ruleId: "BR_BizElseSave",
              simulationOutputText: "",
              simulationOutputCnt: 0,
              selectedMSGParameterGrid: [
                {
                  Parameter: "DetailMessageId",
                  Mandatory: "Y",
                  InputType: "Component",
                  Value: "popupDetailMessageId",
                  Column: "",
                  Parentparameter: "",
                },
                {
                  Parameter: "RuleName",
                  Mandatory: "N",
                  InputType: "Component",
                  Value: "popupRuleName",
                  Column: "",
                  Parentparameter: "",
                },
                {
                  Parameter: "MessageId",
                  Mandatory: "N",
                  InputType: "Component",
                  Value: "popupMessageId",
                  Column: "",
                  Parentparameter: "",
                },
                {
                  Parameter: "ServiceName",
                  Mandatory: "N",
                  InputType: "Component",
                  Value: "popupServiceName",
                  Column: "",
                  Parentparameter: "",
                },
                {
                  Parameter: "MessageGroup",
                  Mandatory: "N",
                  InputType: "Component",
                  Value: "popupMessageGroup",
                  Column: "",
                  Parentparameter: "",
                },
                {
                  Parameter: "ProjectId",
                  Mandatory: "Y",
                  InputType: "Text",
                  Value: sessionStorage.getItem("projectId"),
                  Column: "",
                  Parentparameter: "",
                },
                {
                  Parameter: "RuleId",
                  Mandatory: "Y",
                  InputType: "Component",
                  Value: "popupRuleId",
                  Column: "",
                  Parentparameter: "",
                },
                {
                  Parameter: "Version",
                  Mandatory: "N",
                  InputType: "Component",
                  Value: "popupVersion",
                  Column: "",
                  Parentparameter: "",
                },
                {
                  Parameter: "SuperItemId",
                  Mandatory: "N",
                  InputType: "text",
                  Value: ifId,
                  Column: "",
                  Parentparameter: "",
                },
                {
                  Parameter: "Level",
                  Mandatory: "N",
                  InputType: "text",
                  Value: ifLevel,
                  Column: "",
                  Parentparameter: "",
                },
                {
                  Parameter: "Category",
                  Mandatory: "Y",
                  InputType: "text",
                  Value: "IFBlock",
                  Column: "",
                  Parentparameter: "",
                },
                {
                  Parameter: "EditLevel",
                  Mandatory: "Y",
                  InputType: "text",
                  Value: "Create",
                  Column: "",
                  Parentparameter: "",
                },
              ],
            },
            actionName: "SendMessage",
            id: "btnConfirm",
          },
          function () {
            $scope.setBizItem();
            $scope.getToolComponents();
            $scope.treeSet();
          }
        );
      };

      $scope.ruleUpdateCheck = function (type) {
        var data = { projectId: sessionStorage.getItem("projectId"), ruleId: $("#popupRuleId").val(), version: $("#popupVersion").val(), updateType: type };
        $.ajax({
          url: "../rule/ruleUpdateCheck/",
          contentType: "application/json",
          type: "PUT",
          dataType: "json",
          data: JSON.stringify(data),
          async: false, //동기
          error: function (xhr, status) {
            console.error("Ajax Error:" + xhr.responseText);
          },
          success: function (result) {
            $("#codeGeneration").addClass("mat-flat-r-button");
            $("#codeGeneration").removeClass("mat-flat-c-button");
            $("#revision").addClass("mat-flat-c-button");
            $("#revision").removeClass("mat-flat-r-button");
            $("#codeGeneration").prop("disabled", true);
            $("#revision").prop("disabled", false);
          },
        });
      };

      $scope.insertBizItem = function (e) {
        let popupName = e.target.dataset.id.trim();
        let popupMenu = e.target.dataset.menutype.trim();
        let ruleId = $("#popupRuleId").val();
        commonModel.setRuleModelingData("RuleModeling", ruleId, null);
        var level = $scope.contextLevel;
        $("#popupEditLevel").val("Insert");
        /**
         * 팝업없이 소스 생성 Item일 경우
         */
        if (popupMenu != "" && popupMenu == "NonePopup") {
          // if(superid == undefined){
          //   superid = "None";
          // }else if(id.indexOf("ELSE")){
          //   superid = id;
          // }
          // if(level == undefined){level = "0";}
          returnVal = rules.sendmessage(
            {
              data: {
                selectedExpressionID: "btnConfirm_SendMessage_6",
                componentURL: "",
                message: {
                  name: "SendMessage",
                  url: "bindsendmessage.html",
                },
                MSGGridInstance: {
                  gridObj: "#MSGParameter",
                  _setdata: [
                    {
                      Parameter: "DetailMessageId",
                      Mandatory: "Y",
                      InputType: "Component",
                      Value: "popupDetailMessageId",
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "ProjectId",
                      Mandatory: "Y",
                      InputType: "Text",
                      Value: sessionStorage.getItem("projectId"),
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "RuleId",
                      Mandatory: "Y",
                      InputType: "Component",
                      Value: "popupRuleId",
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "Version",
                      Mandatory: "N",
                      InputType: "Component",
                      Value: "popupVersion",
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "itemName",
                      Mandatory: "Y",
                      InputType: "text",
                      Value: popupName,
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "SuperItemId",
                      Mandatory: "N",
                      InputType: "Component",
                      Value: "popupSuperItemId",
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "Level",
                      Mandatory: "N",
                      InputType: "text",
                      Value: level,
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "PreItemId",
                      Mandatory: "N",
                      InputType: "Component",
                      Value: "popupPreItemId",
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "RuleName",
                      Mandatory: "Y",
                      InputType: "Component",
                      Value: "popupRuleName",
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "MessageId",
                      Mandatory: "Y",
                      InputType: "Component",
                      Value: "popupMessageId",
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "ServiceName",
                      Mandatory: "Y",
                      InputType: "Component",
                      Value: "popupServiceName",
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "MessageGroup",
                      Mandatory: "Y",
                      InputType: "Component",
                      Value: "popupMessageGroup",
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "EditLevel",
                      Mandatory: "Y",
                      InputType: "Component",
                      Value: "popupEditLevel",
                      Column: "",
                      Parentparameter: "",
                    },
                  ],
                },
                headerValue: "",
                gridColumnList: {},
                MessageID: "ExeRule",
                ServiceName: "Txn",
                DetailMessageID: "TxnBizReadyUdfSave",
                QueryRuleID: "",
                parameter: "",
                headerInputType: "",
                headerInputValue: "",
                headerColumn: "",
                setDataFlag: false,
                simulationFlag: false,
                simulData: "",
                ruleId: "BR_BizReadyUdfSave",
                simulationOutputText: "",
                simulationOutputCnt: 0,
                selectedMSGParameterGrid: [
                  {
                    Parameter: "DetailMessageId",
                    Mandatory: "Y",
                    InputType: "Component",
                    Value: "popupDetailMessageId",
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "ProjectId",
                    Mandatory: "Y",
                    InputType: "Text",
                    Value: sessionStorage.getItem("projectId"),
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "RuleId",
                    Mandatory: "Y",
                    InputType: "Component",
                    Value: "popupRuleId",
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "Version",
                    Mandatory: "N",
                    InputType: "Component",
                    Value: "popupVersion",
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "itemName",
                    Mandatory: "Y",
                    InputType: "text",
                    Value: popupName,
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "SuperItemId",
                    Mandatory: "N",
                    InputType: "Component",
                    Value: "popupSuperItemId",
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "Level",
                    Mandatory: "N",
                    InputType: "Text",
                    Value: level,
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "PreItemId",
                    Mandatory: "N",
                    InputType: "Component",
                    Value: "popupPreItemId",
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "RuleName",
                    Mandatory: "Y",
                    InputType: "Component",
                    Value: "popupRuleName",
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "MessageId",
                    Mandatory: "Y",
                    InputType: "Component",
                    Value: "popupMessageId",
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "ServiceName",
                    Mandatory: "Y",
                    InputType: "Component",
                    Value: "popupServiceName",
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "MessageGroup",
                    Mandatory: "Y",
                    InputType: "Component",
                    Value: "popupMessageGroup",
                    Column: "",
                    Parentparameter: "",
                  },
                  {
                    Parameter: "EditLevel",
                    Mandatory: "Y",
                    InputType: "Component",
                    Value: "popupEditLevel",
                    Column: "",
                    Parentparameter: "",
                  },
                ],
              },
              actionName: "SendMessage",
              id: "btnConfirm",
            },
            function () {
              $scope.setBizItem();
              $scope.getToolComponents();
              $scope.treeSet();
              var reply = commonModel.getRuleModelingData("RuleModeling");
              if (reply != null && reply.ERRORCODE.trim() == "0") {
                $scope.ruleUpdateCheck("Insert");
              }
            }
          );
        } else {

        /**
         * 팝업 Item일 경우
         */
          require.undef("../resources/js/functions/ATUM/rule/" + popupName + ".js");
          var returnVal;
          returnVal = rules.showpopup(
            {
              data: {
                sendContinue: true,
                checkComponent: "",
                checkComponentHeaderName: "",
                checkComponentHeaderNameDisable: true,
                subFormName: popupName,
                selectedParameterGrid: [
                  {
                    Component: "popupName",
                    Boolean: "true",
                  },
                  {
                    Component: "popupProjectId",
                    Boolean: "true",
                  },
                  {
                    Component: "popupRuleId",
                    Boolean: "true",
                  },
                  {
                    Component: "popupVersion",
                    Boolean: "true",
                  },
                  {
                    Component: "popupSuperItemId",
                    Boolean: "true",
                  },
                  {
                    Component: "popupLevelNo",
                    Boolean: "true",
                  },
                  {
                    Component: "popupPreItemId",
                    Boolean: "true",
                  },
                  {
                    Component: "popupMessageId",
                    Boolean: "true",
                  },
                  {
                    Component: "popupRuleName",
                    Boolean: "true",
                  },
                  {
                    Component: "popupServiceName",
                    Boolean: "true",
                  },
                  {
                    Component: "popupMessageGroup",
                    Boolean: "true",
                  },
                  {
                    Component: "popupDetailMessageId",
                    Boolean: "true",
                  },
                  {
                    Component: "popupEditLevel",
                    Boolean: "true",
                  },
                ],
                selectedExpressionID: "btnCancel_ShowPopup_57",
                heightSize: 504,
                widthSize: 454,
                popupName: popupName,
                gridInstance: {
                  _setdata: [
                    {
                      Component: "popupName",
                      Boolean: "true",
                    },
                    {
                      Component: "popupProjectId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupRuleId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupVersion",
                      Boolean: "true",
                    },
                    {
                      Component: "popupPreItemId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupMessageId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupRuleName",
                      Boolean: "true",
                    },
                    {
                      Component: "popupServiceName",
                      Boolean: "true",
                    },
                    {
                      Component: "popupMessageGroup",
                      Boolean: "true",
                    },
                    {
                      Component: "popupDetailMessageId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupLevelNo",
                      Boolean: "true",
                    },
                    {
                      Component: "popupSuperItemId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupEditLevel",
                      Boolean: "true",
                    },
                  ],
                },
              },
              actionName: "ShowPopup",
              id: "divClose",
            },
            function49,
            e
          );
          if (returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false) {
            if (returnVal.result == false) {
              if (returnVal.ignoreValidation == false) {
                if (returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined)
                  commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode, codeLang);
              }
            }
          } else {
            if (returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined)
              commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode, codeLang);
          }

          function function49() {
            require.undef("../resources/js/functions/ATUM/rule/ruleModeling-Rule.js");
            $scope.treeSet();
            $scope.setBizItem();
            $scope.getToolComponents();
            var reply = commonModel.getRuleModelingData("RuleModeling");
            if (reply != null && reply.ERRORCODE.trim() == "0") {
              $scope.ruleUpdateCheck("Insert");
            }
          }
        }
      };

      // $scope.setErrorSeq = function(){
      function setErrorSeq() {
        let data = {
          projectId: $("#popupProjectId").val(),
          ruleId: $("#popupRuleId").val(),
          version: $("#popupVersion").val(),
          blockId: $("#popupBlockId").val(),
        };
        $.ajax({
          url: commonUtil.getDataServiceURL("rule/reorderErrorCode"),
          contentType: "application/json",
          type: "PUT",
          dataType: "json",
          async: false,
          data: JSON.stringify(data),
          error: function (xhr, status) {
            $("#custom-overlay", parent.document).attr("style", "display:none;");
            console.log("Ajax Error:" + status);
            console.error("Ajax Error:" + xhr.responseText);
            // openDialog("Rule registration failed.", "");
          },
          success: function (result) {},
        });
      }

      $scope.updateItem = function (e) {
        $("#popupSaveType").val("UPDATE");
        $("#popupEditLevel").val("Update");
        let popupName = "UDF";
        require.undef("../resources/js/functions/ATUM/rule/" + popupName + ".js");
        let itemName = "UDF";
        var id = $scope.contextItemId;
        var superid = $scope.contextSuperItemId;
        if (id != null && id != "") {
          if (id.indexOf("UDF") > -1 && id.indexOf("Ready") == -1) {
            $.ajax({
              url: commonUtil.getDataServiceURL("rule/bizlogicLineList"),
              contentType: "application/json",
              type: "PUT",
              dataType: "json",
              async: false,
              data: JSON.stringify({
                projectId: sessionStorage.getItem("projectId"),
                ruleId: $("#popupRuleId").val(),
                version: $("#popupVersion").val(),
                itemId: id,
              }),
              error: function (xhr, status) {
                $("#custom-overlay", parent.document).attr("style", "display:none;");
                console.log("Ajax Error:" + status);
                console.error("Ajax Error:" + xhr.responseText);
                // openDialog("Rule registration failed.", "");
              },
              success: function (result) {
                let source = "";
                let lineList = result.model.lineList;
                let itemList = result.model.ItemList;

                itemList = itemList.filter((i) => {
                  return i.ITEMNAME == "UDF-BODY" && i.SUPERITEMID == id;
                });

                itemList.forEach((i) => {
                  lineList.forEach((d) => {
                    if (i.ITEMID == d.ITEMID) {
                      source += d.SOURCECODE;
                      source += "<br/>";
                    }
                  });
                });
                $("#popupUpdateData").val(source);
              },
            });

            var returnVal;
            returnVal = rules.showpopup(
              {
                data: {
                  sendContinue: true,
                  checkComponent: "",
                  checkComponentHeaderName: "",
                  checkComponentHeaderNameDisable: true,
                  subFormName: popupName,
                  selectedParameterGrid: [
                    {
                      Component: "popupName",
                      Boolean: "true",
                    },
                    {
                      Component: "popupProjectId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupRuleId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupVersion",
                      Boolean: "true",
                    },
                    {
                      Component: "popupSuperItemId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupLevelNo",
                      Boolean: "true",
                    },
                    {
                      // "Component" : "popupPreItemId",
                      // "Boolean" : "true"
                      // },{
                      Component: "popupSaveType",
                      Boolean: "true",
                    },
                    {
                      Component: "popupUpdateData",
                      Boolean: "true",
                    },
                    {
                      Component: "popupItemId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupDetailMessageId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupRuleName",
                      Boolean: "true",
                    },
                    {
                      Component: "popupMessageId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupServiceName",
                      Boolean: "true",
                    },
                    {
                      Component: "popupMessageGroup",
                      Boolean: "true",
                    },
                    {
                      Component: "popupEditLevel",
                      Boolean: "true",
                    },
                  ],
                  selectedExpressionID: "btnCancel_ShowPopup_57",
                  heightSize: 504,
                  widthSize: 454,
                  popupName: popupName,
                  gridInstance: {
                    _setdata: [
                      {
                        Component: "popupName",
                        Boolean: "true",
                      },
                      {
                        Component: "popupProjectId",
                        Boolean: "true",
                      },
                      {
                        Component: "popupRuleId",
                        Boolean: "true",
                      },
                      {
                        Component: "popupVersion",
                        Boolean: "true",
                      },
                      {
                        // "Component" : "popupPreItemId",
                        // "Boolean" : "true"
                        // },{
                        Component: "popupLevelNo",
                        Boolean: "true",
                      },
                      {
                        Component: "popupSuperItemId",
                        Boolean: "true",
                      },
                      {
                        Component: "popupSaveType",
                        Boolean: "true",
                      },
                      {
                        Component: "popupUpdateData",
                        Boolean: "true",
                      },
                      {
                        Component: "popupItemId",
                        Boolean: "true",
                      },
                      {
                        Component: "popupDetailMessageId",
                        Boolean: "true",
                      },
                      {
                        Component: "popupRuleName",
                        Boolean: "true",
                      },
                      {
                        Component: "popupMessageId",
                        Boolean: "true",
                      },
                      {
                        Component: "popupServiceName",
                        Boolean: "true",
                      },
                      {
                        Component: "popupMessageGroup",
                        Boolean: "true",
                      },
                      {
                        Component: "popupEditLevel",
                        Boolean: "true",
                      },
                    ],
                  },
                },
                actionName: "ShowPopup",
                id: "divClose",
              },
              function1,
              null
            );
            if (returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false) {
              if (returnVal.result == false) {
                if (returnVal.ignoreValidation == false) {
                  if (returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined)
                    commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode, codeLang);
                }
              }
            } else {
              if (returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined)
                commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode, codeLang);
            }
            function function1() {
              require.undef("../resources/js/functions/ATUM/rule/ruleModeling-Rule.js");
              $scope.treeSet();
              $scope.setBizItem();
              $scope.getToolComponents();
              var reply = commonModel.getRuleModelingData("RuleModeling");
              console.log("reply:", reply);
              if (reply != null && reply.ERRORCODE.trim() == "0") {
                $scope.ruleUpdateCheck("Update");
              }
            }
          }
        }
      };

      $scope.deleteVariable = function (e) {
        
        let data = {
          projectId : $("#popupProjectId").val()
          ,ruleId : $("#popupRuleId").val()
          ,version : $("#popupVersion").val()
          ,variableName:$scope.contextVariable
          ,variables : $scope.variableType
          ,valuesData:$scope.valuesData
         };
        
        $.ajax({
          url: "../rule/delete/variable",
          contentType: "application/json",
          type: "DELETE",
          data: JSON.stringify(data),
          error: function (xhr, status) {
            alert(status);
          },
          beforeSend: function () {
            $("#custom-overlay").show();
          },
          complete: function () {
            //마우스 커서를 원래대로 돌린다
            $("#custom-overlay").hide();
          },
          success: function (result) {
            if(result.model.size>0){
              commonWindow.ruleErrorCodeWindow("WRUL006A080", codeLang);
            }else{
              $scope.treeSet();
            }          
            $("#variableContextMenu").hide();
          },
        });

      };

      $scope.deleteItem = function () {
        var id = $scope.contextItemId;
        var superid = $scope.contextSuperItemId;
        var projectId = sessionStorage.getItem("projectId");
        var blockId = $scope.contextBlockId;
        var level = $scope.contextLevel;
        var ruleId = window.parent.document.blockForm.ruleId.value;
        var version = $("#popupVersion").val() == null ? sessionStorage.getIten("ruleVersion") : $("#popupVersion").val();
        $.ajax({
          url: "../rule/delete/bizItem",
          contentType: "application/json",
          type: "DELETE",
          data: JSON.stringify({ projectId: projectId, ruleId: ruleId, blockId: blockId, itemId: id, superItemId: superid, version: version, level: level }),
          error: function (xhr, status) {
            alert(status);
          },
          beforeSend: function () {
            $("#custom-overlay").show();
          },
          complete: function () {
            //마우스 커서를 원래대로 돌린다
            $("#custom-overlay").hide();
          },
          success: function (result) {
            $scope.setBizItem();
            $scope.getToolComponents();
            $scope.treeSet();
            $scope.ruleUpdateCheck("DELETE");
            $("#sourceContent").html("");
            $("#pseudoContent").html("");
            $("#sourceAllContent").html("");
          },
        });
      };

      $(document).ready(function () {
        
        /**
         * ContextMenu
         * Tree 메뉴
         */
        $(document).on("contextmenu", "#variable_tree, #grobal_tree", function (e) {
          var tree = $(this).fancytree("getTree");
          // console.log(tree.focusNode.folder);
          console.log(":::", tree._lastMousedownNode.title);
          if ( tree._lastMousedownNode.title != null && tree._lastMousedownNode.title != "DBClass" && tree._lastMousedownNode.title != "VARIABLE") {
            console.log(":::", tree._lastMousedownNode.data.deletetype);
            if(tree._lastMousedownNode.data.deletetype == "Y"){
              try {
                e.preventDefault();
                var returnVal;
                $scope.contextVariable = tree._lastMousedownNode.title;
                $scope.variableType = tree._lastMousedownNode.parent.title;
                $scope.valuesData = tree._lastMousedownNode.data.global;
                returnVal = rules.showcontextmenu(
                  {
                    data: {
                      checkComponent: "",
                      checkComponentHeaderName: "",
                      checkComponentHeaderNameDisable: false,
                      selectedParameterGrid: [],
                      selectedSQLExpression: "",
                      selectedDefineString: "",
                      selectedGetValueColumn: "",
                      selectedExpressionID: "",
                      gridID: "variableContextMenu",
                      contextMenuID: "variableContextMenu",
                    },
                    id: "variableContextMenu",
                  },
                  function () {
                    $(e.target).removeAttr("disabled");
                  },
                  e
                );

                let curTop = e.clientY;
                  $("#variableContextMenu").css({
                    position: "absolute",
                    top: curTop + "px",
                    height: "auto",
                    display: "block",
                    "z-index": "9999",
                  });
              } catch (err) {
                console.error("Function exception: " + err); //예외처리 메세지
                console.trace(); //호출 스택을 출력
                $(e.target).removeAttr("disabled");
              } finally {
                $(e.target).removeAttr("disabled");
              }


            }
  
          }

          $(document).bind("mouseup", function (e) {
            $("#variableContextMenu").hide();
          });

        });

        /**
         * ContextMenu
         * If 문 이외으 BizItem 메뉴에선 Delete 만 보여짐
         */
        //e.target.parentElement.parentElement.style

        $(document).on("contextmenu", ".bizItems", function (e) {
          $scope.contextItemId = e.currentTarget.dataset.id;
          $scope.contextSuperItemId = e.currentTarget.dataset.superid;
          $scope.contextLevel = e.currentTarget.dataset.level;
          $scope.contextBlockId = e.currentTarget.dataset.blockid;
          $("#popupItemId").val($scope.contextItemId);
          $("#popupPreItemId").val($scope.contextItemId);
          var superid = $scope.contextSuperItemId;
          $("#popupSuperItemId").val($scope.contextSuperItemId);
          var level = $scope.contextLevel;
          $("#popupLevelNo").val(level);
          // console.log(e.target.parentElement.parentElement.style.top);

          //추후에 정리 필요!
          if ($scope.contextItemId.indexOf("IF") > -1 && $scope.contextItemId.indexOf("ELSE") == -1) {
            $("#elseIfMenu").css({ display: "block" });
            $("#elseMenu").css({ display: "block" });
            if ($scope.contextItemId.indexOf("IF") > -1) {
              $("#insertMenu").css({ display: "block" });
            } else {
              $("#insertMenu").css({ display: "none" });
            }
          } else {
            $("#insertMenu").css({ display: "block" });
            $("#elseIfMenu").css({ display: "none" });
            $("#elseMenu").css({ display: "none" });
          }

          if ($scope.contextItemId.indexOf("UDF") == -1) {
            $("#updateMenu").css({ display: "none" });
          } else {
            $("#updateMenu").css({
              display: "block",
            });
          }

          e.preventDefault();
          window.onerror = function (msg, url, line, col, error) {
            console.log("Error: " + msg + " Script: " + url + " Line: " + line + " StackTrace: " + error);
          };
          try {
            var returnVal;
            returnVal = rules.showcontextmenu(
              {
                data: {
                  checkComponent: "",
                  checkComponentHeaderName: "",
                  checkComponentHeaderNameDisable: false,
                  selectedParameterGrid: [],
                  selectedSQLExpression: "",
                  selectedDefineString: "",
                  selectedGetValueColumn: "",
                  selectedExpressionID: "",
                  gridID: "ruleModelingContextMenu",
                  contextMenuID: "ruleModelingContextMenu",
                },
                id: "ruleModelingContextMenu",
              },
              function () {
                $(e.target).removeAttr("disabled");
              },
              e
            );
            if (this.getAttribute("templatename") == "Button") {
              this.disabled = true;
            } else if (this.getAttribute("templatename") == "JqGridPager") {
              var classN = $(e.target).attr("class");
              if (classN == "ui-pg-selbox") return false;
            }
            if ($(this).hasClass("eleFocus")) {
              $(this).removeClass("eleFocus");
            }
          } catch (err) {
            console.error("Function exception: " + err); //예외처리 메세지
            console.trace(); //호출 스택을 출력
            $(e.target).removeAttr("disabled");
          } finally {
            $(e.target).removeAttr("disabled");
          }

          let top = 0;
          let curTop = e.clientY;
          let hightTop = curTop + 300;
          let contextMenuDiv = document.getElementById("ruleModelingContextMenu");

          if (contextMenuDiv.offsetHeight + curTop > 845) {
            var test = curTop - contextMenuDiv.offsetHeight;
            $("#ruleModelingContextMenu").css({
              position: "absolute",
              top: test + "px",
              height: "auto",
              display: "block",
              "z-index": "9999",
            });
          }
        });

        let searchParams = new URLSearchParams(window.location.search); //Url Get Parameter
        var ruleId = searchParams.get("ruleId");
        var version = searchParams.get("ruleVersion");
        var serviceName = "Txn";
        var messageId = "ExeRule";
        
        window.parent.document.blockForm.ruleId.value = ruleId != null && ruleId != ""|| ruleId != undefined? ruleId : sessionStorage.getItem("ruleId");
        window.parent.document.blockForm.ruleVersion.value = version != null && version != undefined && version != "" ? version :sessionStorage.getItem("ruleVersion");
        var parent = window.parent.document;
        parent.querySelector('#itemNav').innerHTML = "> ExecuteLogic["+ruleId+"]";
        
        $("#popupProjectId").val(sessionStorage.getItem("projectId"));
        $("#popupVersion").val(version);
        $("#popupRuleId").val(ruleId);

        setTimeout(function () {
          $("#container2").css("visibility", "visible");
        }, 10);

        $.ajax({
          url: "../rule/getMessageBodydef",
          contentType: "application/json",
          type: "PUT",
          data: JSON.stringify({
            projectId: sessionStorage.getItem("projectId"),
            ruleId: ruleId,
            version: version,
          }),
          dataType: "json",
          async: false, //동기
          error: function (xhr, status) {
            console.error("Ajax Error:" + xhr.responseText);
          },
          success: function (result) {
            $("#popupRuleName").val(result.RULENAME);
            $("#popupMessageId").val(result.MESSAGEID);
            $("#popupDetailMessageId").val(result.DETAILMESSAGEID);
            $("#popupServiceName").val(result.SERVICENAME);
            $("#popupMessageGroup").val(result.MESSAGEGROUP);
          },
        });

        /* All Source 보기 */
        
        // 더블클릭 방지
        var acceessableCount = true; 
        $("#sourceAllTab").off().on("click", function () {
          if (!acceessableCount) {
          } else {
            acceessableCount = false;
            allSourceCodes();
          }
          acceessableCount =true;
        });

        $("#reOrderSeq").on("click", function () {
          reOrderSeq();
        });

        $("#codeGeneration").on("click", function () {
          codeGenerateSource();
        });

        $(".bizItems").on("click", function (e) {
          goCodePreview(e);
        });

        $(".codeTabs").on("click", function () {
          $(".nav-link.text-uppercase").removeClass("active");
          $(this).find(".nav-link.text-uppercase").addClass("active");
          let id = $(this).prop("id");
          if (id == "pseudoTab") {
            $("#pseudoContent").show();
            $("#sourceContent,#sourceAllContent").hide();
          } else if (id == "sourceTab") {
            $("#pseudoContent,#sourceAllContent").hide();
            $("#sourceContent").show();
          } else {
            $("#pseudoContent,#sourceContent").hide();
            $("#sourceAllContent").show();
          }
        });

        $("#custom-overlay", parent.document).hide(); //loading

        $("#addDeclare").on("click", function (e) {
          window.onerror = function (msg, url, line, col, error) {
            console.log("Error: " + msg + " Script: " + url + " Line: " + line + " StackTrace: " + error);
          };
          try {
            if (this.getAttribute("templatename") == "Button") {
              this.disabled = true;
            } else if (this.getAttribute("templatename") == "JqGridPager") {
              var classN = $(e.target).attr("class");
              if (classN == "ui-pg-selbox") return false;
            }
            if ($(this).hasClass("eleFocus")) {
              $(this).removeClass("eleFocus");
            }

            commonModel.setRuleModelingData("RuleModeling", ruleId, null);

            var returnVal;
            returnVal = rules.showpopup(
              {
                data: {
                  sendContinue: true,
                  checkComponent: "",
                  checkComponentHeaderName: "",
                  checkComponentHeaderNameDisable: true,
                  subFormName: "VariableDeclare",
                  selectedParameterGrid: [
                    {
                      Component: "popupName",
                      Boolean: "true",
                    },
                    {
                      Component: "popupProjectId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupRuleId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupVersion",
                      Boolean: "true",
                    },
                    {
                      Component: "popupRuleName",
                      Boolean: "true",
                    },
                    {
                      Component: "popupMessageId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupServiceName",
                      Boolean: "true",
                    },
                    {
                      Component: "popupMessageGroup",
                      Boolean: "true",
                    },
                    {
                      Component: "popupDetailMessageId",
                      Boolean: "true",
                    },
                  ],
                  selectedExpressionID: "btnCancel_ShowPopup_57",
                  heightSize: 504,
                  widthSize: 454,
                  popupName: "VariableDeclare",
                  gridInstance: {
                    _setdata: [
                      {
                        Component: "popupName",
                        Boolean: "true",
                      },
                      {
                        Component: "popupProjectId",
                        Boolean: "true",
                      },
                      {
                        Component: "popupRuleId",
                        Boolean: "true",
                      },
                      {
                        Component: "popupVersion",
                        Boolean: "true",
                      },
                      {
                        Component: "popupRuleName",
                        Boolean: "true",
                      },
                      {
                        Component: "popupMessageId",
                        Boolean: "true",
                      },
                      {
                        Component: "popupServiceName",
                        Boolean: "true",
                      },
                      {
                        Component: "popupMessageGroup",
                        Boolean: "true",
                      },
                      {
                        Component: "popupDetailMessageId",
                        Boolean: "true",
                      },
                    ],
                  },
                },
                actionName: "ShowPopup",
                id: "divClose",
              },
              function48,
              e
            );
            if (returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false) {
              if (returnVal.result == false) {
                if (returnVal.ignoreValidation == false) {
                  if (returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined)
                    commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode, codeLang);
                }
              }
            } else {
              if (returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined)
                commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode, codeLang);
            }
          } catch (err) {
            console.error("Function exception: " + err); //예외처리 메세지
            console.trace(); //호출 스택을 출력
            $(e.target).removeAttr("disabled");
          } finally {
            $(e.target).removeAttr("disabled");
          }

          function function48() {
            $scope.treeSet();
            var reply = commonModel.getRuleModelingData("RuleModeling");
            if (reply != null && reply.ERRORCODE.trim() == "0") {
              $scope.ruleUpdateCheck("Create");
            }
          }
        });

        $("#addGlobalDeclare").on("click", function (e) {
          window.onerror = function (msg, url, line, col, error) {
            console.log("Error: " + msg + " Script: " + url + " Line: " + line + " StackTrace: " + error);
          };
          try {
            if (this.getAttribute("templatename") == "Button") {
              this.disabled = true;
            } else if (this.getAttribute("templatename") == "JqGridPager") {
              var classN = $(e.target).attr("class");
              if (classN == "ui-pg-selbox") return false;
            }
            if ($(this).hasClass("eleFocus")) {
              $(this).removeClass("eleFocus");
            }
            commonModel.setRuleModelingData("RuleModeling", ruleId, null);
            var returnVal;
            returnVal = rules.showpopup(
              {
                data: {
                  sendContinue: true,
                  checkComponent: "",
                  checkComponentHeaderName: "",
                  checkComponentHeaderNameDisable: true,
                  subFormName: "GlobalVariableDeclare",
                  selectedParameterGrid: [
                    {
                      Component: "popupName",
                      Boolean: "true",
                    },
                    {
                      Component: "popupProjectId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupRuleId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupVersion",
                      Boolean: "true",
                    },
                    {
                      Component: "popupRuleName",
                      Boolean: "true",
                    },
                    {
                      Component: "popupMessageId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupServiceName",
                      Boolean: "true",
                    },
                    {
                      Component: "popupMessageGroup",
                      Boolean: "true",
                    },
                    {
                      Component: "popupDetailMessageId",
                      Boolean: "true",
                    },
                  ],
                  selectedExpressionID: "btnCancel_ShowPopup_57",
                  heightSize: 504,
                  widthSize: 454,
                  popupName: "GlobalVariableDeclare",
                  gridInstance: {
                    _setdata: [
                      {
                        Component: "popupName",
                        Boolean: "true",
                      },
                      {
                        Component: "popupProjectId",
                        Boolean: "true",
                      },
                      {
                        Component: "popupRuleId",
                        Boolean: "true",
                      },
                      {
                        Component: "popupVersion",
                        Boolean: "true",
                      },
                      {
                        Component: "popupRuleName",
                        Boolean: "true",
                      },
                      {
                        Component: "popupMessageId",
                        Boolean: "true",
                      },
                      {
                        Component: "popupServiceName",
                        Boolean: "true",
                      },
                      {
                        Component: "popupMessageGroup",
                        Boolean: "true",
                      },
                      {
                        Component: "popupDetailMessageId",
                        Boolean: "true",
                      },
                    ],
                  },
                },
                actionName: "ShowPopup",
                id: "divClose",
              },
              function48,
              e
            );
            if (returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false) {
              if (returnVal.result == false) {
                if (returnVal.ignoreValidation == false) {
                  if (returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined)
                    commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode, codeLang);
                }
              } else {
                function48();
              }
            } else {
              if (returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) {
                commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode, codeLang);
              } else {
                function48();
              }
            }
          } catch (err) {
            console.error("Function exception: " + err); //예외처리 메세지
            console.trace(); //호출 스택을 출력
            $(e.target).removeAttr("disabled");
          } finally {
            $(e.target).removeAttr("disabled");
          }

          function function48() {
            $scope.treeSet();
            var reply = commonModel.getRuleModelingData("RuleModeling");
            if (reply != null && reply.ERRORCODE.trim() == "0") {
              $scope.ruleUpdateCheck("Variable");
            }
          }
        });

        $("#revision").on("click", function (e) {
          window.onerror = function (msg, url, line, col, error) {
            console.log("Error: " + msg + " Script: " + url + " Line: " + line + " StackTrace: " + error);
          };

          try {
            commonModel.setRuleModelingData("RuleModeling", ruleId, null);
            if (this.getAttribute("templatename") == "Button") {
              this.disabled = true;
            } else if (this.getAttribute("templatename") == "JqGridPager") {
              var classN = $(e.target).attr("class");
              if (classN == "ui-pg-selbox") return false;
            }
            if ($(this).hasClass("eleFocus")) {
              $(this).removeClass("eleFocus");
            }
            var returnVal;
            returnVal = rules.showpopup(
              {
                data: {
                  sendContinue: true,
                  checkComponent: "",
                  checkComponentHeaderName: "",
                  checkComponentHeaderNameDisable: true,
                  subFormName: "Revision",
                  selectedParameterGrid: [
                    {
                      Component: "popupName",
                      Boolean: "true",
                    },
                    {
                      Component: "popupProjectId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupRuleId",
                      Boolean: "true",
                    },
                    {
                      Component: "popupVersion",
                      Boolean: "true",
                    },
                  ],
                  selectedExpressionID: "btnCancel_ShowPopup_57",
                  heightSize: 504,
                  widthSize: 454,
                  popupName: "Revision",
                  gridInstance: {
                    _setdata: [
                      {
                        Component: "popupName",
                        Boolean: "true",
                      },
                      {
                        Component: "popupProjectId",
                        Boolean: "true",
                      },
                      {
                        Component: "popupRuleId",
                        Boolean: "true",
                      },
                      {
                        Component: "popupVersion",
                        Boolean: "true",
                      },
                    ],
                  },
                },
                actionName: "ShowPopup",
                id: "divClose",
              },
              function () {
                // $("#codeGeneration").addClass('mat-flat-c-button');
                // $("#codeGeneration").removeClass("mat-flat-r-button");
                // $("#revision").addClass("mat-flat-r-button");
                // $("#revision").removeClass("mat-flat-c-button");
                // $('#codeGeneration').prop('disabled', false);
                // $('#revision').prop('disabled', true);
                var reply = commonModel.getRuleModelingData("RuleModeling");
                if (reply != null) {
                  $("#codeGeneration").addClass("mat-flat-c-button");
                  $("#codeGeneration").removeClass("mat-flat-r-button");
                  $("#revision").addClass("mat-flat-r-button");
                  $("#revision").removeClass("mat-flat-c-button");
                  $("#codeGeneration").prop("disabled", false);
                  $("#revision").prop("disabled", true);
                }
              },
              e
            );
            if (returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false) {
              if (returnVal.result == false) {
                if (returnVal.ignoreValidation == false) {
                  if (returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined)
                    commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode, codeLang);
                }
              }
            } else {
              if (returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) {
                commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode, codeLang);
              }
            }
          } catch (err) {
            console.error("Function exception: " + err); //예외처리 메세지
            console.trace(); //호출 스택을 출력
            $(e.target).removeAttr("disabled");
          } finally {
            $(e.target).removeAttr("disabled");
          }
        });

        setRevision();
      });

      function setRevision() {
        var ruleId = $("#popupRuleId").val();
        $.ajax({
          url: "../rule/getRevisionData",
          contentType: "application/json",
          type: "PUT",
          data: JSON.stringify({
            projectId: sessionStorage.getItem("projectId"),
            ruleId: ruleId,
            version: $("#popupVersion").val(),
          }),
          dataType: "json",
          async: false, //동기
          error: function (xhr, status) {
            console.error("Ajax Error:" + xhr.responseText);
          },
          success: function (result) {
            if (result.RULEID == ruleId) {
              if (result.REVISIONFLAG == "Y") {
                $("#codeGeneration").addClass("mat-flat-r-button");
                $("#revision").addClass("mat-flat-c-button");
                $("#codeGeneration").prop("disabled", true);
              } else {
                $("#revision").addClass("mat-flat-r-button");
                $("#codeGeneration").addClass("mat-flat-c-button");
                $("#revision").prop("disabled", true);
              }
            }
          },
        });
      }
    },
  ]);

  ruleModelingApp.directive("dragItem", function () {
    return {
      restrict: "EA",
      scope: true,
      link: function (scope, elem, attr, controller) {
        // Add drag event
        elem.bind("dragstart", function (evt) {
          $("#dropIdtxt").val(elem.text().trim());
          $("#txtPopupMenu").val(elem.context.dataset.menutype);
        });
      },
    };
  });

  ruleModelingApp.directive("dropItem", function () {
    return {
      restrict: "EA",
      scope: true,
      link: function (scope, elem, attr, controller) {
        var codeLang = commonUtil.getCookiesLanguage();
        elem.bind("dragover", function (evt) {
          evt.stopPropagation();
          evt.preventDefault();
          evt.originalEvent.dataTransfer.dropEffect = "copy";
          if (evt.target.dataset.level != undefined) {
            // 추후 호버 css 고려
          }
        });

        elem.bind("drop", function (evt) {
          evt.stopPropagation();
          evt.preventDefault();
          let popupMenu = $("#txtPopupMenu").val();
          let itemName = $("#dropIdtxt").val();
          let level = $(evt.target).closest("div").data("level");
          let superid = $(evt.target).closest("div").data("superid");
          var id = $(evt.target).closest("div").data("id");
          $("#popupSaveType").val("INSERT");
          $("#popupEditLevel").val("Create");
          
          /**
           * 팝업없이 소스 생성 Item일 경우
           */
          commonModel.setRuleModelingData("RuleModeling", ruleId, null);
          if (popupMenu != "" && popupMenu == "NonePopup") {
            let itemCategory = "";

            if (superid == undefined) {
              superid = "None";
            } else if (id.indexOf("ELSE")) {
              superid = id;
            }
            if (level == undefined) {
              level = "0";
            }
            returnVal = rules.sendmessage(
              {
                data: {
                  selectedExpressionID: "btnConfirm_SendMessage_6",
                  componentURL: "",
                  message: {
                    name: "SendMessage",
                    url: "bindsendmessage.html",
                  },
                  MSGGridInstance: {
                    gridObj: "#MSGParameter",
                    _setdata: [
                      {
                        Parameter: "DetailMessageId",
                        Mandatory: "Y",
                        InputType: "Component",
                        Value: "popupDetailMessageId",
                        Column: "",
                        Parentparameter: "",
                      },
                      {
                        Parameter: "ProjectId",
                        Mandatory: "Y",
                        InputType: "Text",
                        Value: sessionStorage.getItem("projectId"),
                        Column: "",
                        Parentparameter: "",
                      },
                      {
                        Parameter: "RuleId",
                        Mandatory: "Y",
                        InputType: "Component",
                        Value: "popupRuleId",
                        Column: "",
                        Parentparameter: "",
                      },
                      {
                        Parameter: "Version",
                        Mandatory: "N",
                        InputType: "Component",
                        Value: "popupVersion",
                        Column: "",
                        Parentparameter: "",
                      },
                      {
                        Parameter: "itemName",
                        Mandatory: "Y",
                        InputType: "text",
                        Value: itemName,
                        Column: "",
                        Parentparameter: "",
                      },
                      {
                        Parameter: "SuperItemId",
                        Mandatory: "N",
                        InputType: "text",
                        Value: id,
                        Column: "",
                        Parentparameter: "",
                      },
                      {
                        Parameter: "Level",
                        Mandatory: "N",
                        InputType: "text",
                        Value: level,
                        Column: "",
                        Parentparameter: "",
                      },
                      {
                        Parameter: "Category",
                        Mandatory: "Y",
                        InputType: "text",
                        Value: itemCategory,
                        Column: "",
                        Parentparameter: "",
                      },
                      {
                        Parameter: "RuleName",
                        Mandatory: "Y",
                        InputType: "Component",
                        Value: "popupRuleName",
                        Column: "",
                        Parentparameter: "",
                      },
                      {
                        Parameter: "MessageId",
                        Mandatory: "Y",
                        InputType: "Component",
                        Value: "popupMessageId",
                        Column: "",
                        Parentparameter: "",
                      },
                      {
                        Parameter: "ServiceName",
                        Mandatory: "Y",
                        InputType: "Component",
                        Value: "popupServiceName",
                        Column: "",
                        Parentparameter: "",
                      },
                      {
                        Parameter: "MessageGroup",
                        Mandatory: "Y",
                        InputType: "Component",
                        Value: "popupMessageGroup",
                        Column: "",
                        Parentparameter: "",
                      },
                      {
                        Parameter: "EditLevel",
                        Mandatory: "Y",
                        InputType: "Component",
                        Value: "popupEditLevel",
                        Column: "",
                        Parentparameter: "",
                      },
                    ],
                  },
                  headerValue: "",
                  gridColumnList: {},
                  MessageID: "ExeRule",
                  ServiceName: "Txn",
                  DetailMessageID: "TxnBizReadyUdfSave",
                  QueryRuleID: "",
                  parameter: "",
                  headerInputType: "",
                  headerInputValue: "",
                  headerColumn: "",
                  setDataFlag: false,
                  simulationFlag: false,
                  simulData: "",
                  ruleId: "BR_BizReadyUdfSave",
                  simulationOutputText: "",
                  simulationOutputCnt: 0,
                  selectedMSGParameterGrid: [
                    {
                      Parameter: "DetailMessageId",
                      Mandatory: "Y",
                      InputType: "Component",
                      Value: "popupDetailMessageId",
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "ProjectId",
                      Mandatory: "Y",
                      InputType: "Text",
                      Value: sessionStorage.getItem("projectId"),
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "RuleId",
                      Mandatory: "Y",
                      InputType: "Component",
                      Value: "popupRuleId",
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "Version",
                      Mandatory: "N",
                      InputType: "Component",
                      Value: "popupVersion",
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "itemName",
                      Mandatory: "Y",
                      InputType: "text",
                      Value: itemName,
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "SuperItemId",
                      Mandatory: "N",
                      InputType: "text",
                      Value: id,
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "Level",
                      Mandatory: "N",
                      InputType: "text",
                      Value: level,
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "Category",
                      Mandatory: "Y",
                      InputType: "text",
                      Value: "READYUDF",
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "RuleName",
                      Mandatory: "Y",
                      InputType: "Component",
                      Value: "popupRuleName",
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "MessageId",
                      Mandatory: "Y",
                      InputType: "Component",
                      Value: "popupMessageId",
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "ServiceName",
                      Mandatory: "Y",
                      InputType: "Component",
                      Value: "popupServiceName",
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "MessageGroup",
                      Mandatory: "Y",
                      InputType: "Component",
                      Value: "popupMessageGroup",
                      Column: "",
                      Parentparameter: "",
                    },
                    {
                      Parameter: "EditLevel",
                      Mandatory: "Y",
                      InputType: "Component",
                      Value: "popupEditLevel",
                      Column: "",
                      Parentparameter: "",
                    },
                  ],
                },
                actionName: "SendMessage",
                id: "btnConfirm",
              },
              function () {
                scope.setBizItem();
                scope.getToolComponents();
                scope.treeSet();
                var reply = commonModel.getRuleModelingData("RuleModeling");
                if (reply != null) {
                  scope.ruleUpdateCheck("Create");
                }
              }
            );
          }

          /**
           * 팝업 Item일 경우
           */

          if (popupMenu != "" && popupMenu == "Popup") {
            var dialName = "dialog-popup-form-" + itemName;
            $("body").append('<div id="' + dialName + '"></div>');
            var dial = $("#" + dialName);

            require.undef("../resources/js/functions/ATUM/rule/" + itemName + ".js");

            function getURL(url, callback) {
              $.ajax({
                url: url,
                type: "GET",
                dataType: "html",
                async: false,
                error: function (xhr, status) {
                  console.error("showPopupFunction Ajax Error:" + xhr.responseText);
                },
                success: function (result) {
                  $(".ui-dialog-titlebar-close").hide();
                  if (callback != undefined && callback != null) callback(result);
                },
              });
            }

            getURL("../functions/ATUM/rule/" + itemName, function (result) {
              //jquery로 append하는 경우 angularjs에서 확인이 불가하여 다국어 처리가 안되는 문제 발생
              //html을 append하기 전에 angular를 호출하여 compile후 append 처리하여 다국어 적용
              var $injector = angular.element(document.body).injector();
              var $scope = angular.element(document.body).scope();
              var $compile = $injector.get("$compile");
              var $rootScope = $injector.get("$rootScope");

              dial.append($compile(result)($scope));

              if (window.dialogStack == undefined) {
                window.dialogStack = Array();
              }

              function closeDialog() {
                dial.dialog("close");
              }

              window.dialogStack.push({ closeParentFunction: closeDialog, closeChildFunction: null });
              let searchParams = new URLSearchParams(window.location.search); //Url Get Parameter
              var ruleId = searchParams.get("ruleId");
              var version =
                searchParams.get("ruleVersion") == null || searchParams.get("ruleVersion") == ""
                  ? window.parent.document.blockForm.ruleVersion.value
                  : searchParams.get("ruleVersion");

              var parameter = {
                popupRuleId: ruleId,
                popupVersion: version,
                popupSuperItemId: id,
                popupLevelNo: level,
                popupDetailMessageId: $("#popupDetailMessageId").val(),
                popupRuleName: $("#popupRuleName").val(),
                popupMessageId: $("#popupMessageId").val(),
                popupServiceName: $("#popupServiceName").val(),
                popupMessageGroup: $("#popupMessageGroup").val(),
                popupEditLevel: $("#popupEditLevel").val(),
              };
              globalDefinition.getInstance().setPassParams(parameter);

              dial.dialog({
                // title: title,
                dialogClass: "no-close",
                resizable: false,
                height: 505,
                width: 450,
                modal: true,
                open: function (event, ui) {
                  $(".ui-dialog-titlebar-close").hide();
                },
                beforeClose: function (event, ui) {
                  var stack = window.dialogStack.pop();
                  dial.empty();
                  dial.remove();
                  scope.setBizItem();
                  scope.treeSet();
                  scope.getToolComponents();
                  // scope.ruleUpdateCheck("CREATE");
                  var reply = commonModel.getRuleModelingData("RuleModeling");
                  if (reply != null) {
                    scope.ruleUpdateCheck("Create");
                  }
                },
                afterClose: function (evnet, ui) {
                  require.undef("../resources/js/functions/ATUM/rule/ruleModeling-Rule.js");
                },
              });
            });
          }
        });
      },
    };
  });

  var app = angular.module("myApp", ["common", "ruleModeling", "multilanguage", "editor.service"]);
  app.config(function ($logProvider) {
    $logProvider.debugEnabled(true);
  });

  angular.element().ready(function () {
    angular.resumeBootstrap([app["name"]]);
  });

  let ruleId = "";

  window.designMode = "run";

  //다국어 설정 스크립트
  let element = angular.element(document.querySelector("#container2"));
  angular.element(document).ready(function () {
    //This will be truthy if initialized and falsey otherwise.
    let isInitialized = element.injector();
    if (!isInitialized) {
      //레이어 팝업이 존재하는 경우 2번이상 호출될 수 있어 bootstrap 실행여부 체크.
      angular.bootstrap(document, ["multilanguage"]);
      angular.resumeBootstrap();
      setTimeout(function () {
        //multilanguage angular 모듈 로드 이후 loading 이미지 제거
        let loadDiv = $("#multilangMask, #multiLangloading");
        if (loadDiv.length > 0) {
          //check exist
          loadDiv.hide();
          loadDiv.remove();
        }
      }, 300);
    }
  });

  function reOrderSeq() {
    let searchParams = new URLSearchParams(window.location.search); //Url Get Parameter
    ruleId = searchParams.get("ruleId");
    var version = searchParams.get("ruleVersion");
    $("#allSourceDiv").html("");
    $.ajax({
      url: "../rule/reorderErrorCode",
      contentType: "application/json",
      type: "PUT",
      data: JSON.stringify({
        projectId: sessionStorage.getItem("projectId"),
        ruleId: ruleId,
        blockId: "EXECUTELOGIC",
        version: version,
      }),
      dataType: "json",
      error: function (xhr, status) {
        console.log(status);
      },
      success: function (result) {
        $("#sourceAllContent").html("");
        allSourceCodes();
      },
    });
  }

  function codeGenerateSource() {
    let searchParams = new URLSearchParams(window.location.search); //Url Get Parameter
    ruleId = searchParams.get("ruleId");
    var version = searchParams.get("ruleVersion");
    $("#allSourceDiv").html("");
    $.ajax({
      url: "../rule/bizlogicLineList",
      contentType: "application/json",
      type: "PUT",
      data: JSON.stringify({
        projectId: sessionStorage.getItem("projectId"),
        ruleId: ruleId,
        blockId: "EXECUTELOGIC",
        version: version,
      }),
      dataType: "json",
      error: function (xhr, status) {
        console.log(status);
      },
      success: function (result) {
        var allList = result.model.allList;
        var lineList = result.model.lineList;

        for (var i = 0; i < 13; i++) {
          allList.forEach((data) => {
            var html = "";
            if (data.LEVEL == i) {
              html += "<div id='source_hide" + data.ITEMID + "'></div>";
              if (i == 0) {
                $("#allSourceDiv").append(html);
              } else {
                $("#source_hide" + data.SUPERITEMID).append(html);
              }
            }
          });
        }

        var sourceRealHtml = "";
        allList.forEach((item) => {
          var sourceHtml = "";
          lineList.forEach((line) => {
            if (item.ITEMID == line.ITEMID) {
              sourceHtml += "<pre>";
              for (var j = 0; j < item.LEVEL; j++) {
                sourceHtml += "&nbsp;";
              }
              line.SOURCECODE = line.SOURCECODE.replace(/</g, "&lt;");
              line.SOURCECODE = line.SOURCECODE.replace(/>/g, "&gt;");
              sourceHtml += line.SOURCECODE + "</pre>";
            }
          });
          $("#source_hide" + item.ITEMID).append(sourceHtml);
        });
        $("#allSourceDiv").append(sourceRealHtml);
        setTimeout(function () {
          codeGeneration();
        }, 0.2);
      },
    });
  }

  function allSourceCodes() {
    $("#sourceAllContent").html("");
    $.ajax({
      url: "../rule/bizlogicLineList",
      contentType: "application/json",
      type: "PUT",
      data: JSON.stringify({
        projectId: sessionStorage.getItem("projectId"),
        ruleId: $("#popupRuleId").val(),
        blockId: "EXECUTELOGIC",
        version: $("#popupVersion").val(),
      }),
      dataType: "json",
      error: function (xhr, status) {
        console.log(status);
      },
      success: function (result) {
        var allList = result.model.allList;
        var lineList = result.model.lineList;

        for (var i = 0; i < 13; i++) {
          allList.forEach((data) => {
            var html = "";
            if (data.LEVEL == i) {
              html += "<div id='source_" + data.ITEMID + "'></div>";
              if (i == 0) {
                $("#sourceAllContent").append(html);
              } else {
                $("#source_" + data.SUPERITEMID).append(html);
              }
            }
          });
        }

        var sourceRealHtml = "";
        allList.forEach((item) => {
          var sourceHtml = "";
          lineList.forEach((line) => {
            if (item.ITEMID == line.ITEMID) {
              sourceHtml += "<pre>";
              for (var j = 0; j < item.LEVEL; j++) {
                sourceHtml += "&nbsp;";
              }
              line.SOURCECODE = line.SOURCECODE.replace(/</g, "&lt;");
              line.SOURCECODE = line.SOURCECODE.replace(/>/g, "&gt;");
              sourceHtml += line.SOURCECODE + "</pre>";
            }
          });
          $("#source_" + item.ITEMID).append(sourceHtml);
        });
        $("#sourceAllDiv").append(sourceRealHtml);
      },
    });
  }

  function goCodePreview(evt) {
    evt.stopImmediatePropagation(); //이벤트 전파 중단
    $("#pseudoContent,#sourceContent").html("");
    var ITEMID = $(evt.target).closest("div").data("id");
    var SUPERITEMID = $(evt.target).closest("div").data("superid");
    var blockId = evt.currentTarget.dataset.blockid;

    $.ajax({
      url: "../rule/bizlogicLineList",
      contentType: "application/json",
      type: "PUT",
      data: JSON.stringify({
        projectId: sessionStorage.getItem("projectId"),
        blockId: blockId,
        ruleId: $("#popupRuleId").val(),
        itemId: ITEMID,
        superItemId: SUPERITEMID,
        version: $("#popupVersion").val(),
      }),
      dataType: "json",
      error: function (xhr, status) {
        alert(status);
      },
      success: function (result) {
        var itemList = result.model.ItemList;
        var lineList = result.model.lineList;
        let sourceHtml = "";
        let pseudoHtml = "";
        if (ITEMID != undefined && ITEMID.substring(0, 2) == "IF") {
          itemList = itemList.filter((x) => {
            return x.ITEMID.substring(0, 2) == ITEMID.substring(0, 2);
          });
        }

        //ITEM 정렬
        itemList = itemList.sort(function (a, b) {
          return a.SEQNUM < b.SEQNUM ? -1 : a.SEQNUM > b.SEQNUM ? 1 : 0;
        });

        itemList.forEach((item) => {
          lineList.forEach((line) => {
            if (item.ITEMID == line.ITEMID) {
              if (line.SOURCECODE !== null && line.SOURCECODE != "") {
                sourceHtml += "<pre>";
                for (var j = 0; j < item.LEVEL; j++) {
                  sourceHtml += "&nbsp;&nbsp;&nbsp;";
                }

                line.SOURCECODE = line.SOURCECODE.replace(/</g, "&lt;");
                line.SOURCECODE = line.SOURCECODE.replace(/>/g, "&gt;");
                sourceHtml += line.SOURCECODE + "</pre>";
              } else {
                sourceHtml += "<br/>";
              }
              if (line.PSEUDOCODE !== undefined && line.PSEUDOCODE != "") {
                pseudoHtml += line.PSEUDOCODE + "</br>";
              }
            }
          });
        });

        $("#pseudoContent").html("<pre>" + pseudoHtml + "</pre>");
        $("#sourceContent").html(sourceHtml);
      },
    });
  }

  function codeGeneration() {
    var htmlTest = $("#allSourceDiv").html();
    htmlTest = htmlTest.replace(/<\/pre>/gi, "\n");
    htmlTest = htmlTest.replace(/&nbsp;/gi, "\t");
    htmlTest = htmlTest.replace(/&amp;/gi, "&");
    htmlTest = htmlTest.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi, "");
    $.ajax({
      url: "../rule/codeGeneration_dev",
      contentType: "application/json",
      type: "POST",
      dataType: "json",
      async: false,
      data: JSON.stringify({
        projectId: sessionStorage.getItem("projectId"),
        blockId: "EXECUTELOGIC",
        ruleId: $("#popupRuleId").val(),
        version: $("#popupVersion").val(),
        sourceCode: htmlTest,
      }),
      error: function (request, status, error) {
        console.log(error);
        console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
      },
      success: function (result) {
        let content = "";
        let list = result.data;
        let title = result.title + ".java";
        let errorLine = result.errorLine;
        if (list.length > 0) {
          $.each(list, function (index, item) {
            if (item !== null && item !== "") {
              content += item;
            } else {
              content += "\n";
            }
          });
          const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
          const objURL = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.download = title;
          a.href = objURL;
          a.click();
        }
        let codeLang = commonUtil.getCookiesLanguage();
        if (codeLang == null) codeLang = 0;

        if (errorLine != null && errorLine != undefined && errorLine.indexOf("error") > -1) {
          commonWindow.ruleErrorCodeWindow(errorLine, codeLang);
          errorLine = errorLine.substring(errorLine.indexOf(ruleId));
          let html = "<div style='width:100%; overflow-y:auto'><b> " + errorLine + "</b></div>";
          $("#dialog-popup-form").append(html);
        } else {
          commonWindow.ruleErrorCodeWindow("SUXD000A010", codeLang);
        }
      },
    });
  }
});
