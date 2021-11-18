<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> <%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%> <%@ page language="java"
contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%> <% request.setCharacterEncoding("UTF-8"); %>
<!DOCTYPE html>
<html>
  <head>
    <title>WBSFUNCTION</title>
    <meta name="viewport" content="width=device-width,height=device-height, initial-scale=1.0" />
    <link rel="shortcut icon" href="#" />
    <link href="../resources/css/dock/dock-manager.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/dock/font-awesome.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/jqplot/jquery.jqplot.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/jqgrid/ui.jqgrid.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/jqgrid/ui.jqgridgroupheader.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/jquery/jquery-ui-1.8.2.custom.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/theme/normal/popup.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/jquery/jquery.inputpicker.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/jquery/contextmenu_modeler.css" type="text/css" rel="stylesheet"/>
    <link href="../resources/css/dynatree/ui.dynatree.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/dynatree/ui.dynatree2.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/gantt/gantt.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/chart/d3Chart.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/theme/RULEDESIGNER/Badge.css" type="text/css" rel="stylesheet" />
<!-- <link href="../../../resources/css/theme/RULEDESIGNER/Button.css" type="text/css" rel="stylesheet" /> -->
    <link href="../resources/css/theme/RULEDESIGNER/CheckBox.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/theme/RULEDESIGNER/Combo.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/theme/RULEDESIGNER/Date.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/theme/RULEDESIGNER/DateTimeLocal.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/theme/RULEDESIGNER/Div.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/theme/RULEDESIGNER/Label.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/theme/RULEDESIGNER/Number.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/theme/RULEDESIGNER/Tab.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/theme/RULEDESIGNER/Table.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/theme/RULEDESIGNER/TextArea.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/theme/RULEDESIGNER/TextBox.css" type="text/css" rel="stylesheet" />
    <link href="../resources/css/theme/ATUM/style_button.css" type="text/css" rel="stylesheet" />


    <style type="text/css">
      /* The whole thing */
      .gridContextMenu {
        display: none;
        z-index: 1000;
        position: absolute;
        overflow: hidden;
        border: 1px solid #ccc;
        white-space: nowrap;
        font-family: sans-serif;
        background: #fff;
        color: #333;
        border-radius: 5px;
        padding: 0;
      }

      /* Each of the items in the list */
      .gridContextMenu label {
        padding: 8px 12px;
        cursor: pointer;
        list-style-type: none;
        transition: all 0.3s ease;
        user-select: none;
      }

      .gridContextMenu label:hover {
        background-color: #def;
      }

      .badge {
        display: none !important;
      }

      input,
      label {
        pointer-events: "";
      }
    </style>
    <script src="../resources/lib/require/require.js"></script>
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

      function download(id, seq) {
        var projectId = document.getElementById("projectCodeFromServer").innerText;
        window.location.assign(
          "http://" +
            window.location.host +
            "/KhepriWeb/attachFileDownload?fileId=" +
            encodeURIComponent(id) +
            "&fileSeq=" +
            encodeURIComponent(seq) +
            "&pid=" +
            encodeURIComponent(projectId)
        );
      }

      function downloadZip(id) {
        window.location.assign("http://" + window.location.host + "/KhepriWeb/attachFileDownloadZip?fileId=" + encodeURIComponent(id));
      }

      function deleteFile(id, seq, formId) {
        var projectId = document.getElementById("projectCodeFromServer").innerText;
        $.get(
          "http://" +
            window.location.host +
            "/KhepriWeb/attachFileDelete?fileId=" +
            encodeURIComponent(id) +
            "&fileSeq=" +
            encodeURIComponent(seq) +
            "&pid=" +
            encodeURIComponent(projectId),
          function (response) {
            var data = response.fileList;
            var resultHtml = "";
            if (data.length > 0) {
              $("#" + formId)
                .find("input[type=hidden]")
                .val(data[0].fileId);
              for (var i = 0; i < data.length; i++) {
                resultHtml += "<a href=\"javascript:download('" + data[i].fileId + "'," + data[i].fileSeq + ')" >';
                resultHtml += data[i].fileOrgNm + "	[" + data[i].fileSize + " byte]</a>";
                returnHtml += "<a href=\"javascript:deleteFile('" + list[i].fileId + "'," + list[i].fileSeq + ",'" + formId + "')\" >&nbsp;";
                returnHtml += '<span style="color:red;font-size: 16px;">ⓧ</span></a><br/>';
              }
            } else {
              $("#" + formId)
                .find("input[type=hidden]")
                .val("");
            }
            $("#" + formId)
              .find("div")
              .empty()
              .append(resultHtml);
          }
        );
      }

      window.addEventListener('DOMContentLoaded', function(){
         showMultilangLoading();
      });
      require(["../resources/js/main.js"], function () {
        require(['../resources/js/app.js','../resources/js/functions/ATUM/rule/WBSFUNCTION.js'], function () {});
      });
    </script>
  </head>
  <body data-ng-controller="multilanguageCtrl">
    <div id="container"><form onSubmit="return false;">
<!-- Start Genererated HTML -->
	<div id="grd0" hewidget="jqueryui" templatename="JqGridSearch" style="position: absolute; top: 0px; left: 300px; width: 700px; height: 700px;" editorvalue="{  &quot;colModel&quot;:[                                                                                                                                                                             {&quot;name&quot;:&quot;name&quot;,   &quot;index&quot;:&quot;name&quot;,   &quot;width&quot;:150,&quot;sortable&quot;:true,&quot;editable&quot;:false,&quot;edittype&quot;:&quot;&quot;,&quot;editoptions&quot;:&quot;&quot;,&quot;formatter&quot;:&quot;&quot;,&quot;title&quot;:true,&quot;hidden&quot;:false,&quot;cellattr&quot;:&quot;&quot;,&quot;resizable&quot;:true},            {&quot;name&quot;:&quot;age&quot;,    &quot;index&quot;:&quot;age&quot;,    &quot;width&quot;:150,&quot;sortable&quot;:true,&quot;editable&quot;:false,&quot;edittype&quot;:&quot;&quot;,&quot;editoptions&quot;:&quot;&quot;,&quot;formatter&quot;:&quot;&quot;,&quot;title&quot;:true,&quot;hidden&quot;:false,&quot;cellattr&quot;:&quot;&quot;,&quot;resizable&quot;:true},              {&quot;name&quot;:&quot;address&quot;,&quot;index&quot;:&quot;address&quot;,&quot;width&quot;:150,&quot;sortable&quot;:true,&quot;editable&quot;:false,&quot;edittype&quot;:&quot;&quot;,&quot;editoptions&quot;:&quot;&quot;,&quot;formatter&quot;:&quot;&quot;,&quot;title&quot;:true,&quot;hidden&quot;:false,&quot;cellattr&quot;:&quot;&quot;,&quot;resizable&quot;:true}],     &quot;colNames&quot;:[&quot;name&quot;,&quot;age&quot;,&quot;address&quot;],                                                                                                                                                     &quot;datatype&quot;:&quot;local&quot; , &quot;caption&quot;:&quot;gridSearch&quot;      }" class="oneData">
		<table id="child-grd0">
		</table>
	</div>
	<div id="tre0" hewidget="jqueryui" templatename="Tree" style="position: absolute; top: 0px; left: 0px; width: 290px; height: 700px;" editorvalue="{ children:{title:'Folder 1',isFolder:true,key:'folder1',children:[{title:'Sub-item 1.1'},{title:'Sub-item 1.2'}]} }">
		<div id="child-tre0">
		</div>
	</div>
	<div id="grdEditor" hewidget="jqueryui" templatename="JqGrid" style="position: absolute; top: 0px; left: 1010px; width: 360px; height: 700px;" editorvalue="{  &quot;colModel&quot;:[ {&quot;name&quot;:&quot;name&quot;,   &quot;index&quot;:&quot;name&quot;,  &quot;width&quot;:150,&quot;sortable&quot;:true,&quot;editable&quot;:false,&quot;edittype&quot;:&quot;&quot;,&quot;editoptions&quot;:&quot;&quot;,&quot;formatter&quot;:&quot;&quot;,&quot;title&quot;:true,&quot;hidden&quot;:false,&quot;cellattr&quot;:&quot;&quot;,&quot;resizable&quot;:true}, {&quot;name&quot;:&quot;age&quot;,    &quot;index&quot;:&quot;age&quot;,    &quot;width&quot;:150,&quot;sortable&quot;:true,&quot;editable&quot;:false,&quot;edittype&quot;:&quot;&quot;,&quot;editoptions&quot;:&quot;&quot;,&quot;formatter&quot;:&quot;&quot;,&quot;title&quot;:true,&quot;hidden&quot;:false,&quot;cellattr&quot;:&quot;&quot;,&quot;resizable&quot;:true}, {&quot;name&quot;:&quot;address&quot;,&quot;index&quot;:&quot;address&quot;,&quot;width&quot;:150,&quot;sortable&quot;:true,&quot;editable&quot;:false,&quot;edittype&quot;:&quot;&quot;,&quot;editoptions&quot;:&quot;&quot;,&quot;formatter&quot;:&quot;&quot;,&quot;title&quot;:true,&quot;hidden&quot;:false,&quot;cellattr&quot;:&quot;&quot;,&quot;resizable&quot;:true}], &quot;colNames&quot;:[&quot;name&quot;,&quot;age&quot;,&quot;address&quot;],                                                                                                                                                     &quot;datatype&quot;:&quot;local&quot;, &quot;caption&quot;:&quot;grid&quot;}" class="oneData">
		<table id="child-grdEditor">
		</table>
	</div>
	<button id="btnCreate" templatename="Button" class="c-button c-button--create" style="position: absolute; top: 710px; left: 1060px; width: 95px; height: 40px;">
	Create</button>
	<button id="btnUpdate" templatename="Button" class="c-button c-button--update" style="position: absolute; top: 710px; left: 1161px; width: 95px; height: 40px;">
	Update</button>
	<button id="btnDelete" templatename="Button" class="c-button c-button--delete" style="position: absolute; top: 710px; left: 1262px; width: 95px; height: 40px;">
	Delete</button>

	<div class="cd-dropdown-wrapper gridContextMenu" id="gridContextMenu0" style="display:none;">
    <nav class="cd-dropdown-trigger">
      <ul class="cd-dropdown-content" >	
        <li class="has-children">
          <a href="javascript:void(0);"><img src="../resources/img/excel_icon.png" width="24">&nbsp;Download</a>
          <ul class="cd-dropdown-icons is-hidden">							
            <li><a href="javascript:void(0);" id="downloadAllDataMenu0" >All Data</a></li>
            <li><a href="javascript:void(0);" id="downloadGridDataMenu0" >Grid Data</a></li>
          </ul> 
        </li>
        <li class="has-children">
          <a href="javascript:void(0);"><img src="../resources/img/excel_icon.png" width="24">&nbsp;Upload</a>
          <ul class="cd-dropdown-icons is-hidden">							
            <li><a href="javascript:void(0);" id="uploadAppendMenu0">Append</a></li>
            <li><a href="javascript:void(0);" id="uploadUpdateInsertMenu0">Update Insert</a></li>
            <li><a href="javascript:void(0);" id="uploadDeleteInsertMenu0">Delete Insert</a></li>
          </ul> 
        </li>
      </ul> 
    </nav>
  </div>

<!-- End Genererated HTML -->
</form></div>
    <!-- style="height:1080px;" -->

    <label id="passDataFromServer" style="display: none">${passData}</label>
    <label id="functionNameFromServer" style="display: none">WBSFUNCTION</label>
    <label id="projectCodeFromServer" style="display: none">RULEDESIGNER</label>
    <!-- 인코딩한 화면 정보 -->
        <label id="exportedHtmlData" style="display: none">${exportedHtmlData}</label>
    <label id="exportedCompData" style="display: none">${exportedCompData}</label>
    <label id="exportedActionData" style="display: none">${exportedActionData}</label>
    <label id="exportedScriptData" style="display: none">${exportedScriptData}</label>
    <label id="exportedDocData" style="display: none">${exportedDocData}</label>
    <label id="previewMode" style="display: none"></label>
  </body>
</html>
