define([
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
  "dynatree",
  "common/common",
  "models/common-model",
  "jqgrid",
  "jqplot-plugin",
  // "multiCombo",
  "jqgrid-formatter",
  "jquery-contextmenu2",
  "jqgrid-fmatter2",
  "gantt",
  "tabComponentLib",
], function (
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
  dynatree,
  common,
  commonModel,
  jqgrid,
  jqplotPlugin,
  // multiCombo,
  jqgridFormatter,
  jqueryContextmenu2,
  jqgridFmatter2,
  gantt,
  tabComponentLib
) {
  sessionStorage.setItem("templateFlag", "N");
  commonUtil.loadCssConfig(
    '../resources/css/theme/' + globalDef.getInstance().theme + "/",
    globalDef.getInstance().theme,
    function (result) {
      commonUtil.loadCss(result);
    },
    true
  );
  $("input,label").css("pointer-events", "");
  var codeLang = commonUtil.getCookiesLanguage();
  $(document).ready(function () {
    try {
      var passData = $("#passDataFromServer").text();

      if (passData != undefined && passData != null && passData != "") {
        passData = passData.replace(/@@/g, '"');
        var data = JSON.parse(passData);
        globalDef.getInstance().setPassParams(data);
      }

      var gFunctionName = $("#functionNameFromServer").text();

      if (gFunctionName != undefined && gFunctionName != null) {
        gFunctionName = gFunctionName.replace(/@@/g, '"');
        globalDef.getInstance().setFunctionName(gFunctionName);
      }

      var gProjectCode = $("#projectCodeFromServer").text();

      if (gProjectCode != undefined && gProjectCode != null) {
        gProjectCode = gProjectCode.replace(/@@/g, '"');
        globalDef.getInstance().setProjectName(gProjectCode);
      }

      $("[templatename=Tab]").click(function (event) {
        var tab_id = $(event.target).attr("data-tab");
        if (tab_id != undefined && tab_id != "") {
          tabComponentLib.changeTab(event);
        }
      });
      $('input[type="text"]').keydown(function(event) {
        if (event.keyCode === 13) {
          let id = event.target.id;
          let eventList =  $._data($('#'+id)[0], 'events');
          let chgEvt = false;
          if(eventList["change"].length>0) chgEvt = true;
          if (chgEvt) {
            $('#'+id).trigger("change");
          }
          event.preventDefault();	
        }
        });
    } catch (err) {}
  });

  
  
  
  // window.designMode='run';

		//다국어 설정 스크립트
		// var element = angular.element(document.querySelector('#container'));
		// angular.element(document).ready(function () {
		// 	//This will be truthy if initialized and falsey otherwise.
		// 	let isInitialized = element.injector();
		// 	if(!isInitialized) { //레이어 팝업이 존재하는 경우 2번이상 호출될 수 있어 bootstrap 실행여부 체크.
		// 		angular.bootstrap(document, ['multilanguage']);
		// 		angular.resumeBootstrap();
		// 		setTimeout(function() {
		// 			//multilanguage angular 모듈 로드 이후 loading 이미지 제거
		// 			let loadDiv = $('#multilangMask, #multiLangloading');
		// 			if(loadDiv.length > 0) { //check exist
		// 				loadDiv.hide();
		// 				loadDiv.remove();
		// 			}
		// 		}, 300);
		// 	}
		// });


$(document).ready(function() {
	 //********************
	 //* JqueryUI Initialize  
	 //********************

	 $('input,textarea').keyup(function(){    
	 if($(this).hasClass('eleFocus')){    
	 $(this).removeClass('eleFocus');    
	 }    
	  });
	    
var jqueryObj;
jqueryObj=$('#child-grd0').jqGrid({"userData":{},"loadtext":"Loading...","selarrrow":[],"onSelectAll":null,"xmlReader":{"repeatitems":true,"userdata":"userdata","total":"rows>total","records":"rows>records","root":"rows","row":"row","page":"rows>page","id":"[id]","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","row":"row","cell":"cell"}},"onHeaderClick":null,"caption":"PRJ_QUERY_RULE_DEFINITION","autoencode":false,"mtype":"GET","subGridModel":[],"treeReader":{},"keyIndex":false,"beforeProcessing":null,"id":"child-grd0","beforeRequest":null,"deselectAfterSort":true,"height":613,"recordtext":"{0} - {1} of {2}","lastsort":0,"autowidth":false,"scrollrows":false,"scroll":false,"lastpage":0,
"colModel":[
{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"PROJECTID","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"PROJECTID","width":150,"editoptions":""},
{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"QUERYRULEID","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"QUERYRULEID","width":150,"editoptions":""},
{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"QUERYGROUP","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"QUERYGROUP","width":150,"editoptions":""},
{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"SQLSTATEMENT1","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":200,"formatter":"","formatoptions":"","name":"SQLSTATEMENT1","width":200,"editoptions":""},
{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"SQLSTATEMENT2","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":200,"formatter":"","formatoptions":"","name":"SQLSTATEMENT2","width":200,"editoptions":""},
{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"SQLSTATEMENT3","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":200,"formatter":"","formatoptions":"","name":"SQLSTATEMENT3","width":200,"editoptions":""},{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"INPUTPARAMETERS","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"INPUTPARAMETERS","width":150,"editoptions":""},{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"OUTPUTPARAMETERS","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"OUTPUTPARAMETERS","width":150,"editoptions":""},{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"QUERYTYPE","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"QUERYTYPE","width":150,"editoptions":""},{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"SERVICENAME","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"SERVICENAME","width":150,"editoptions":""},{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"DESCRIPTION","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"DESCRIPTION","width":150,"editoptions":""}],"grouping":false,"footerrow":false,"disableClick":false,"sortname":"","multiselect":false,"altRows":false,"treeANode":-1,"subGrid":false,"multiboxonly":false,"viewrecords":true,"tree_root_level":0,"pgbuttons":true,"pginput":true,"search":false,"datatype":"local","ignoreCase":false,"sortorder":"asc","recordpos":"right","editurl":null,"onInitGrid":null,"altclass":"ui-priority-secondary","gridstate":"visible","loadonce":false,"url":"","loadui":"enable","toolbar":[false,""],"hoverrows":true,"rowTotal":null,"width":700,"multiSort":false,"postData":{"nd":1628141810760,"page":1,"sord":"asc","rows":20,"_search":false,"sidx":""},"multikey":false,"subGridWidth":20,"data":[],"forceFit":false,"loadBeforeSend":null,"pager":"","hiddengrid":false,"cellsubmit":"clientArray","ondblClickRow":null,"scrollOffset":18,"cmTemplate":{},"treeGrid":false,"useProp":true,"groupingView":{"summary":[],"groupOrder":[],"plusicon":"ui-icon-circlesmall-plus","showSummaryOnHide":false,"summaryval":[],"groupField":[],"minusicon":"ui-icon-circlesmall-minus","sortitems":[],"groupSummary":[],"groupText":[],"displayField":[],"groupColumnShow":[],"sortnames":[]},"pgtext":"Page {0} of {1}","loadError":null,"headertitles":false,"jsonReader":{"repeatitems":true,"userdata":"userdata","total":"total","records":"records","root":"rows","page":"page","id":"id","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","cell":"cell"}},"savedRow":[],"shrinkToFit":false,"totaltime":0,"remapColumns":[],"page":1,"viewsortcols":[false,"vertical",true],"selrow":null,"multiselectWidth":20,"userDataOnFooter":false,"hidegrid":false,"_index":{},"records":0,"nv":0,"ExpandColumn":null,"idPrefix":"","beforeSelectRow":null,"cellEdit":true,"reccount":0,"onRightClickRow":null,"rownumWidth":25,"scrollTimeout":40,"onPaging":null,"gridComplete":null,"afterInsertRow":null,"emptyrecords":"No records to view","onSortCol":null,"toppager":false,"prmNames":{"subgridid":"id","sort":"sidx","rows":"rows","editoper":"edit","search":"_search","nd":"nd","deloper":"del","totalrows":"totalrows","addoper":"add","oper":"oper","page":"page","id":"id","order":"sord","npage":null},"direction":"ltr","resizeclass":"","keyName":false,"localReader":{"repeatitems":false,"userdata":"userdata","total":"total","records":"records","root":"rows","page":"page","id":"id","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","cell":"cell"}},"cellLayout":5,"gridview":false,"ajaxGridOptions":{},"loadComplete":null,"treeGridModel":"nested","pagerpos":"center","tblwidth":682,"onSelectRow":null});
componentUtil.getInstance().setObject("grd0",jqueryObj);

// multilanguage.executeMultiLanguageJqgrid(jqueryObj);

$("#child-grd0").jqGrid("filterToolbar", {
  stringResult: true,
  searchOnEnter: false,
  defaultSearch: "cn",
});


jqueryObj=$('#child-grdEditor').jqGrid({"userData":{},"loadtext":"Loading...","selarrrow":[],"onSelectAll":null,"xmlReader":{"repeatitems":true,"userdata":"userdata","total":"rows>total","records":"rows>records","root":"rows","row":"row","page":"rows>page","id":"[id]","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","row":"row","cell":"cell"}},"onHeaderClick":null,"caption":"Editor","autoencode":false,"mtype":"GET","subGridModel":[],"treeReader":{},"keyIndex":false,"beforeProcessing":null,"id":"child-grdEditor","beforeRequest":null,"deselectAfterSort":true,"height":643,"recordtext":"{0} - {1} of {2}","lastsort":0,"autowidth":false,"scrollrows":false,"scroll":false,"lastpage":0,"colModel":[{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"Name","lso":"","sortable":true,"align":"left","title":true,"widthOrg":100,"edittype":"","formatter":"","formatoptions":"","name":"Name","width":145,"editoptions":""},{"hidden":false,"resizable":true,"editable":true,"cellattr":"","index":"Value","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":100,"formatter":"","formatoptions":"","name":"Value","width":145,"editoptions":""}],"grouping":false,"footerrow":false,"disableClick":false,"sortname":"","multiselect":false,"altRows":false,"treeANode":-1,"subGrid":false,"multiboxonly":false,"viewrecords":true,"tree_root_level":0,"pgbuttons":true,"pginput":true,"search":false,"datatype":"local","ignoreCase":false,"sortorder":"asc","recordpos":"right","editurl":null,"onInitGrid":null,"altclass":"ui-priority-secondary","gridstate":"visible","loadonce":false,"url":"","loadui":"enable","toolbar":[false,""],"hoverrows":true,"rowTotal":null,"width":300,"multiSort":false,"postData":{"nd":1628141810799,"page":1,"sord":"asc","rows":20,"_search":false,"sidx":""},"multikey":false,"subGridWidth":20,"data":[],"forceFit":false,"loadBeforeSend":null,"pager":"","hiddengrid":false,"cellsubmit":"clientArray","ondblClickRow":null,"scrollOffset":18,"cmTemplate":{},"treeGrid":false,"useProp":true,"groupingView":{"summary":[],"groupOrder":[],"plusicon":"ui-icon-circlesmall-plus","showSummaryOnHide":false,"summaryval":[],"groupField":[],"minusicon":"ui-icon-circlesmall-minus","sortitems":[],"groupSummary":[],"groupText":[],"displayField":[],"groupColumnShow":[],"sortnames":[]},"pgtext":"Page {0} of {1}","loadError":null,"headertitles":false,"jsonReader":{"repeatitems":true,"userdata":"userdata","total":"total","records":"records","root":"rows","page":"page","id":"id","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","cell":"cell"}},"savedRow":[],"shrinkToFit":false,"totaltime":0,"remapColumns":[],"page":1,"viewsortcols":[false,"vertical",true],"selrow":null,"multiselectWidth":20,"userDataOnFooter":false,"hidegrid":false,"_index":{},"records":0,"nv":0,"ExpandColumn":null,"idPrefix":"","beforeSelectRow":null,"cellEdit":true,"reccount":0,"onRightClickRow":null,"rownumWidth":25,"scrollTimeout":40,"onPaging":null,"gridComplete":null,"afterInsertRow":null,"emptyrecords":"No records to view","onSortCol":null,"toppager":false,"prmNames":{"subgridid":"id","sort":"sidx","rows":"rows","editoper":"edit","search":"_search","nd":"nd","deloper":"del","totalrows":"totalrows","addoper":"add","oper":"oper","page":"page","id":"id","order":"sord","npage":null},"direction":"ltr","resizeclass":"","keyName":false,"localReader":{"repeatitems":false,"userdata":"userdata","total":"total","records":"records","root":"rows","page":"page","id":"id","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","cell":"cell"}},"cellLayout":5,"gridview":false,"ajaxGridOptions":{},"loadComplete":null,"treeGridModel":"nested","pagerpos":"center","tblwidth":282,"onSelectRow":null});
componentUtil.getInstance().setObject("grdEditor",jqueryObj);
multilanguage.executeMultiLanguageJqgrid(jqueryObj);

setTimeout(function () { $('#container').css('visibility','visible'); },10);

	 //******************************
	 //* grd0 Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
    $("#grd0").on("click",function(e) {  
      window.onerror = function(msg, url, line, col, error) { 
          console.log('Error: ' + msg + ' Script: ' + url + ' Line: ' + line + ' StackTrace: '+error);
      };  
      try{    
          if(this.getAttribute('templatename')=='Button'){    
              this.disabled = true;    
          }else if(this.getAttribute('templatename')=='JqGridPager'){    
              var classN  = $(e.target).attr('class');    
              if(classN == 'ui-pg-selbox')  return false;   
          }    
          if($(this).hasClass('eleFocus')){ 
              $(this).removeClass('eleFocus');    
          } 
      var returnVal;     
      returnVal =  rules.getgridrowdata({
  "data" : {
    "gridID" : "grd0",
    "selectedExpressionID" : "grd0_getgridrowdata_2",
    "dataSource" : {
      "tableId" : "PRJ_QUERY_RULE_DEFINITION",
      "columns" : [ {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : "프로젝트 아이디, 해당 PM이 선정하는 프로젝트 코드[ATUM|BECOME|...]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYRULEID",
        "POSITION" : "2",
        "DESCRIPTION" : "QUERYRULE의 아이디[MENU_B2YFL|MENU_TreeData|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "100",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYGROUP",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "100",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT1",
        "POSITION" : "4",
        "DESCRIPTION" : "ORACLE SQL문, 원하는 데이터만을 불러오기 위한 SQL 소스코드[SELECT * FROM BASICLINETEMPLATE|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT2",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT3",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "INPUTPARAMETERS",
        "POSITION" : "7",
        "DESCRIPTION" : "SQL QEURY문에서 INPUT 값으로 받아올 변수[BLOCKID|ITEMID|PROJECTID|...]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "2000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "OUTPUTPARAMETERS",
        "POSITION" : "8",
        "DESCRIPTION" : "QUERY 결과 OUTPUT값으로 받을 변수[SEQNUM,PROJECTID,BLOCKID|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "2000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYTYPE",
        "POSITION" : "9",
        "DESCRIPTION" : "QUERY가 자동으로 생성된 것인지 사용자가 지정해 준 것인지 구분[AUTO|MANUAL]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "10",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : "AUTO",
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SERVICENAME",
        "POSITION" : "10",
        "DESCRIPTION" : "OUTPUT 값이 단일값인지 리스트인지 구분[Lst|Info]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "10",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : "Lst",
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "DESCRIPTION",
        "POSITION" : "11",
        "DESCRIPTION" : "QUERY_RULE에 대한 설명, 용도",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      } ],
      "functionClassAttr" : [ {
        "CLASSATTRIBUTE" : "PROJECTID",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "SQL",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "SELECT DISTINCT PROJECTID FROM PRJ_QUERY_RULE_DEFINITION WHERE PROJECTID=@PROJECTID",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYRULEID",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYGROUP",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "Y",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT1",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT2",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT3",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "INPUTPARAMETERS",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "OUTPUTPARAMETERS",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYTYPE",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "Define",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "AUTO|MANUAL",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SERVICENAME",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "Define",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "Lst",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "DESCRIPTION",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      } ],
      "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_Grcdu",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_PROJECTID_IeoI3",
        "sessionFlag": "Y",
        "parameterId":"projectId"
      } ],
      "hasSort" : true
    }
  },
  "id" : "grd0"
},ruleFunction1,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction1();
						 } 
				 } else { 
						 ruleFunction1();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		function ruleFunction1(){ 
			 returnVal =  rules.bindpropertydata({
  "data" : {
    "listExpressionID" : "grd0_getgridrowdata_2",
    "selectedExpressionID" : "grd0_bindpropertydata_3",
    "gridID" : "grdEditor"
  },
  "id" : "grd0"
},function(){$(e.target).removeAttr('disabled');},e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } 
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		 } catch(err) {
				 console.error('Function exception: '+err);//예외처리 메세지
				 console.trace();//호출 스택을 출력
				 $(e.target).removeAttr('disabled');
		 } finally {
				 $(e.target).removeAttr('disabled');
		 }
		 });
     
		 //********************
		 //* contextmenu Event
		 //********************
		 $("#grd0").on("contextmenu",function(e) {  
e.preventDefault();
			 window.onerror = function(msg, url, line, col, error) { 
					 console.log('Error: ' + msg + ' Script: ' + url + ' Line: ' + line + ' StackTrace: '+error);
			 };  
			 try{    
					 if(this.getAttribute('templatename')=='Button'){    
							 this.disabled = true;    
					 }else if(this.getAttribute('templatename')=='JqGridPager'){    
							 var classN  = $(e.target).attr('class');    
							 if(classN == 'ui-pg-selbox')  return false;   
					 }    
					 if($(this).hasClass('eleFocus')){ 
							 $(this).removeClass('eleFocus');    
					 } 
			 var returnVal;     
			 returnVal =  rules.showcontextmenu({
    "data" : {
      "checkComponent" : "",
      "checkComponentHeaderName" : "",
      "checkComponentHeaderNameDisable" : false,
      "selectedParameterGrid" : [ ],
      "selectedSQLExpression" : "",
      "selectedDefineString" : "",
      "selectedGetValueColumn" : "",
      "selectedExpressionID" : "grd0_ShowContextMenu_22",
      "gridID" : "grd0",
      "contextMenuID" : "gridContextMenu0",
      "dataSource" : {
        "tableId" : "PRJ_QUERY_RULE_DEFINITION",
        "columns" : [ {
          "SYSTEMID" : "ATUM",
          "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
          "COLUMNID" : "PROJECTID",
          "POSITION" : "1",
          "DESCRIPTION" : "프로젝트 아이디, 해당 PM이 선정하는 프로젝트 코드[ATUM|BECOME|...]",
          "AVAILABILITY" : "Available",
          "COLUMNTYPE" : "STND",
          "DATATYPE" : "VARCHAR2",
          "DATASIZE" : "40",
          "ISPRIMARY" : "Y",
          "ISNOTNULL" : "Y",
          "DEFAULTVALUE" : null,
          "CONSTRAINT" : null,
          "FOREIGNKEY" : null,
          "COMMENTS" : null,
          "EXAMPLE" : null,
          "RELEVANTTYPE" : "Current",
          "RELEVANTCOLMNID" : null,
          "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
          "UPDATEUSER" : null,
          "COLUMNCHGDATE" : null,
          "COLUMNCHGUSER" : null,
          "REFERENCETABLE" : null,
          "TOCOLUMNID" : null,
          "FOREIGNKEYID" : null,
          "CONSTRAINTID" : null,
          "TABLETYPE" : null,
          "TABLEKIND" : null,
          "TABLEGROUP" : null,
          "RELEVANTCLASSID" : null,
          "RECORDHISTORY" : null,
          "TABLESPACE" : null,
          "TABLEINDEX" : null,
          "RECORDSIZE" : null,
          "RECORDCOUNT" : null,
          "TABLESIZE" : null,
          "TABLECHGDATE" : null,
          "TABLECHGUSER" : null,
          "DBCLASSMAKEFLAG" : null,
          "MAKECLASSREQ" : null,
          "MAKEFUNCTIONREQ" : null,
          "SYSTEMTYPE" : null,
          "isSortable" : true
        }, {
          "SYSTEMID" : "ATUM",
          "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
          "COLUMNID" : "QUERYRULEID",
          "POSITION" : "2",
          "DESCRIPTION" : "QUERYRULE의 아이디[MENU_B2YFL|MENU_TreeData|…]",
          "AVAILABILITY" : "Available",
          "COLUMNTYPE" : "STND",
          "DATATYPE" : "VARCHAR2",
          "DATASIZE" : "100",
          "ISPRIMARY" : "Y",
          "ISNOTNULL" : "Y",
          "DEFAULTVALUE" : null,
          "CONSTRAINT" : null,
          "FOREIGNKEY" : null,
          "COMMENTS" : null,
          "EXAMPLE" : null,
          "RELEVANTTYPE" : "Current",
          "RELEVANTCOLMNID" : null,
          "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
          "UPDATEUSER" : null,
          "COLUMNCHGDATE" : null,
          "COLUMNCHGUSER" : null,
          "REFERENCETABLE" : null,
          "TOCOLUMNID" : null,
          "FOREIGNKEYID" : null,
          "CONSTRAINTID" : null,
          "TABLETYPE" : null,
          "TABLEKIND" : null,
          "TABLEGROUP" : null,
          "RELEVANTCLASSID" : null,
          "RECORDHISTORY" : null,
          "TABLESPACE" : null,
          "TABLEINDEX" : null,
          "RECORDSIZE" : null,
          "RECORDCOUNT" : null,
          "TABLESIZE" : null,
          "TABLECHGDATE" : null,
          "TABLECHGUSER" : null,
          "DBCLASSMAKEFLAG" : null,
          "MAKECLASSREQ" : null,
          "MAKEFUNCTIONREQ" : null,
          "SYSTEMTYPE" : null,
          "isSortable" : true
        }, {
          "SYSTEMID" : "ATUM",
          "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
          "COLUMNID" : "QUERYGROUP",
          "POSITION" : "3",
          "DESCRIPTION" : null,
          "AVAILABILITY" : "Available",
          "COLUMNTYPE" : "STND",
          "DATATYPE" : "VARCHAR2",
          "DATASIZE" : "100",
          "ISPRIMARY" : "N",
          "ISNOTNULL" : "Y",
          "DEFAULTVALUE" : null,
          "CONSTRAINT" : null,
          "FOREIGNKEY" : null,
          "COMMENTS" : null,
          "EXAMPLE" : null,
          "RELEVANTTYPE" : "Current",
          "RELEVANTCOLMNID" : null,
          "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
          "UPDATEUSER" : null,
          "COLUMNCHGDATE" : null,
          "COLUMNCHGUSER" : null,
          "REFERENCETABLE" : null,
          "TOCOLUMNID" : null,
          "FOREIGNKEYID" : null,
          "CONSTRAINTID" : null,
          "TABLETYPE" : null,
          "TABLEKIND" : null,
          "TABLEGROUP" : null,
          "RELEVANTCLASSID" : null,
          "RECORDHISTORY" : null,
          "TABLESPACE" : null,
          "TABLEINDEX" : null,
          "RECORDSIZE" : null,
          "RECORDCOUNT" : null,
          "TABLESIZE" : null,
          "TABLECHGDATE" : null,
          "TABLECHGUSER" : null,
          "DBCLASSMAKEFLAG" : null,
          "MAKECLASSREQ" : null,
          "MAKEFUNCTIONREQ" : null,
          "SYSTEMTYPE" : null,
          "isSortable" : true
        }, {
          "SYSTEMID" : "ATUM",
          "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
          "COLUMNID" : "SQLSTATEMENT1",
          "POSITION" : "4",
          "DESCRIPTION" : "ORACLE SQL문, 원하는 데이터만을 불러오기 위한 SQL 소스코드[SELECT * FROM BASICLINETEMPLATE|…]",
          "AVAILABILITY" : "Available",
          "COLUMNTYPE" : "STND",
          "DATATYPE" : "VARCHAR2",
          "DATASIZE" : "4000",
          "ISPRIMARY" : "N",
          "ISNOTNULL" : "N",
          "DEFAULTVALUE" : null,
          "CONSTRAINT" : null,
          "FOREIGNKEY" : null,
          "COMMENTS" : null,
          "EXAMPLE" : null,
          "RELEVANTTYPE" : "Current",
          "RELEVANTCOLMNID" : null,
          "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
          "UPDATEUSER" : null,
          "COLUMNCHGDATE" : null,
          "COLUMNCHGUSER" : null,
          "REFERENCETABLE" : null,
          "TOCOLUMNID" : null,
          "FOREIGNKEYID" : null,
          "CONSTRAINTID" : null,
          "TABLETYPE" : null,
          "TABLEKIND" : null,
          "TABLEGROUP" : null,
          "RELEVANTCLASSID" : null,
          "RECORDHISTORY" : null,
          "TABLESPACE" : null,
          "TABLEINDEX" : null,
          "RECORDSIZE" : null,
          "RECORDCOUNT" : null,
          "TABLESIZE" : null,
          "TABLECHGDATE" : null,
          "TABLECHGUSER" : null,
          "DBCLASSMAKEFLAG" : null,
          "MAKECLASSREQ" : null,
          "MAKEFUNCTIONREQ" : null,
          "SYSTEMTYPE" : null,
          "isSortable" : true
        }, {
          "SYSTEMID" : "ATUM",
          "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
          "COLUMNID" : "SQLSTATEMENT2",
          "POSITION" : "5",
          "DESCRIPTION" : null,
          "AVAILABILITY" : "Available",
          "COLUMNTYPE" : "STND",
          "DATATYPE" : "VARCHAR2",
          "DATASIZE" : "4000",
          "ISPRIMARY" : "N",
          "ISNOTNULL" : "N",
          "DEFAULTVALUE" : null,
          "CONSTRAINT" : null,
          "FOREIGNKEY" : null,
          "COMMENTS" : null,
          "EXAMPLE" : null,
          "RELEVANTTYPE" : "Current",
          "RELEVANTCOLMNID" : null,
          "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
          "UPDATEUSER" : null,
          "COLUMNCHGDATE" : null,
          "COLUMNCHGUSER" : null,
          "REFERENCETABLE" : null,
          "TOCOLUMNID" : null,
          "FOREIGNKEYID" : null,
          "CONSTRAINTID" : null,
          "TABLETYPE" : null,
          "TABLEKIND" : null,
          "TABLEGROUP" : null,
          "RELEVANTCLASSID" : null,
          "RECORDHISTORY" : null,
          "TABLESPACE" : null,
          "TABLEINDEX" : null,
          "RECORDSIZE" : null,
          "RECORDCOUNT" : null,
          "TABLESIZE" : null,
          "TABLECHGDATE" : null,
          "TABLECHGUSER" : null,
          "DBCLASSMAKEFLAG" : null,
          "MAKECLASSREQ" : null,
          "MAKEFUNCTIONREQ" : null,
          "SYSTEMTYPE" : null,
          "isSortable" : true
        }, {
          "SYSTEMID" : "ATUM",
          "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
          "COLUMNID" : "SQLSTATEMENT3",
          "POSITION" : "6",
          "DESCRIPTION" : null,
          "AVAILABILITY" : "Available",
          "COLUMNTYPE" : "STND",
          "DATATYPE" : "VARCHAR2",
          "DATASIZE" : "4000",
          "ISPRIMARY" : "N",
          "ISNOTNULL" : "N",
          "DEFAULTVALUE" : null,
          "CONSTRAINT" : null,
          "FOREIGNKEY" : null,
          "COMMENTS" : null,
          "EXAMPLE" : null,
          "RELEVANTTYPE" : "Current",
          "RELEVANTCOLMNID" : null,
          "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
          "UPDATEUSER" : null,
          "COLUMNCHGDATE" : null,
          "COLUMNCHGUSER" : null,
          "REFERENCETABLE" : null,
          "TOCOLUMNID" : null,
          "FOREIGNKEYID" : null,
          "CONSTRAINTID" : null,
          "TABLETYPE" : null,
          "TABLEKIND" : null,
          "TABLEGROUP" : null,
          "RELEVANTCLASSID" : null,
          "RECORDHISTORY" : null,
          "TABLESPACE" : null,
          "TABLEINDEX" : null,
          "RECORDSIZE" : null,
          "RECORDCOUNT" : null,
          "TABLESIZE" : null,
          "TABLECHGDATE" : null,
          "TABLECHGUSER" : null,
          "DBCLASSMAKEFLAG" : null,
          "MAKECLASSREQ" : null,
          "MAKEFUNCTIONREQ" : null,
          "SYSTEMTYPE" : null,
          "isSortable" : true
        }, {
          "SYSTEMID" : "ATUM",
          "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
          "COLUMNID" : "INPUTPARAMETERS",
          "POSITION" : "7",
          "DESCRIPTION" : "SQL QEURY문에서 INPUT 값으로 받아올 변수[BLOCKID|ITEMID|PROJECTID|...]",
          "AVAILABILITY" : "Available",
          "COLUMNTYPE" : "STND",
          "DATATYPE" : "VARCHAR2",
          "DATASIZE" : "2000",
          "ISPRIMARY" : "N",
          "ISNOTNULL" : "N",
          "DEFAULTVALUE" : null,
          "CONSTRAINT" : null,
          "FOREIGNKEY" : null,
          "COMMENTS" : null,
          "EXAMPLE" : null,
          "RELEVANTTYPE" : "Current",
          "RELEVANTCOLMNID" : null,
          "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
          "UPDATEUSER" : null,
          "COLUMNCHGDATE" : null,
          "COLUMNCHGUSER" : null,
          "REFERENCETABLE" : null,
          "TOCOLUMNID" : null,
          "FOREIGNKEYID" : null,
          "CONSTRAINTID" : null,
          "TABLETYPE" : null,
          "TABLEKIND" : null,
          "TABLEGROUP" : null,
          "RELEVANTCLASSID" : null,
          "RECORDHISTORY" : null,
          "TABLESPACE" : null,
          "TABLEINDEX" : null,
          "RECORDSIZE" : null,
          "RECORDCOUNT" : null,
          "TABLESIZE" : null,
          "TABLECHGDATE" : null,
          "TABLECHGUSER" : null,
          "DBCLASSMAKEFLAG" : null,
          "MAKECLASSREQ" : null,
          "MAKEFUNCTIONREQ" : null,
          "SYSTEMTYPE" : null,
          "isSortable" : true
        }, {
          "SYSTEMID" : "ATUM",
          "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
          "COLUMNID" : "OUTPUTPARAMETERS",
          "POSITION" : "8",
          "DESCRIPTION" : "QUERY 결과 OUTPUT값으로 받을 변수[SEQNUM,PROJECTID,BLOCKID|…]",
          "AVAILABILITY" : "Available",
          "COLUMNTYPE" : "STND",
          "DATATYPE" : "VARCHAR2",
          "DATASIZE" : "2000",
          "ISPRIMARY" : "N",
          "ISNOTNULL" : "N",
          "DEFAULTVALUE" : null,
          "CONSTRAINT" : null,
          "FOREIGNKEY" : null,
          "COMMENTS" : null,
          "EXAMPLE" : null,
          "RELEVANTTYPE" : "Current",
          "RELEVANTCOLMNID" : null,
          "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
          "UPDATEUSER" : null,
          "COLUMNCHGDATE" : null,
          "COLUMNCHGUSER" : null,
          "REFERENCETABLE" : null,
          "TOCOLUMNID" : null,
          "FOREIGNKEYID" : null,
          "CONSTRAINTID" : null,
          "TABLETYPE" : null,
          "TABLEKIND" : null,
          "TABLEGROUP" : null,
          "RELEVANTCLASSID" : null,
          "RECORDHISTORY" : null,
          "TABLESPACE" : null,
          "TABLEINDEX" : null,
          "RECORDSIZE" : null,
          "RECORDCOUNT" : null,
          "TABLESIZE" : null,
          "TABLECHGDATE" : null,
          "TABLECHGUSER" : null,
          "DBCLASSMAKEFLAG" : null,
          "MAKECLASSREQ" : null,
          "MAKEFUNCTIONREQ" : null,
          "SYSTEMTYPE" : null,
          "isSortable" : true
        }, {
          "SYSTEMID" : "ATUM",
          "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
          "COLUMNID" : "QUERYTYPE",
          "POSITION" : "9",
          "DESCRIPTION" : "QUERY가 자동으로 생성된 것인지 사용자가 지정해 준 것인지 구분[AUTO|MANUAL]",
          "AVAILABILITY" : "Available",
          "COLUMNTYPE" : "STND",
          "DATATYPE" : "VARCHAR2",
          "DATASIZE" : "10",
          "ISPRIMARY" : "N",
          "ISNOTNULL" : "Y",
          "DEFAULTVALUE" : "AUTO",
          "CONSTRAINT" : null,
          "FOREIGNKEY" : null,
          "COMMENTS" : null,
          "EXAMPLE" : null,
          "RELEVANTTYPE" : "Current",
          "RELEVANTCOLMNID" : null,
          "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
          "UPDATEUSER" : null,
          "COLUMNCHGDATE" : null,
          "COLUMNCHGUSER" : null,
          "REFERENCETABLE" : null,
          "TOCOLUMNID" : null,
          "FOREIGNKEYID" : null,
          "CONSTRAINTID" : null,
          "TABLETYPE" : null,
          "TABLEKIND" : null,
          "TABLEGROUP" : null,
          "RELEVANTCLASSID" : null,
          "RECORDHISTORY" : null,
          "TABLESPACE" : null,
          "TABLEINDEX" : null,
          "RECORDSIZE" : null,
          "RECORDCOUNT" : null,
          "TABLESIZE" : null,
          "TABLECHGDATE" : null,
          "TABLECHGUSER" : null,
          "DBCLASSMAKEFLAG" : null,
          "MAKECLASSREQ" : null,
          "MAKEFUNCTIONREQ" : null,
          "SYSTEMTYPE" : null,
          "isSortable" : true
        }, {
          "SYSTEMID" : "ATUM",
          "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
          "COLUMNID" : "SERVICENAME",
          "POSITION" : "10",
          "DESCRIPTION" : "OUTPUT 값이 단일값인지 리스트인지 구분[Lst|Info]",
          "AVAILABILITY" : "Available",
          "COLUMNTYPE" : "STND",
          "DATATYPE" : "VARCHAR2",
          "DATASIZE" : "10",
          "ISPRIMARY" : "N",
          "ISNOTNULL" : "Y",
          "DEFAULTVALUE" : "Lst",
          "CONSTRAINT" : null,
          "FOREIGNKEY" : null,
          "COMMENTS" : null,
          "EXAMPLE" : null,
          "RELEVANTTYPE" : "Current",
          "RELEVANTCOLMNID" : null,
          "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
          "UPDATEUSER" : null,
          "COLUMNCHGDATE" : null,
          "COLUMNCHGUSER" : null,
          "REFERENCETABLE" : null,
          "TOCOLUMNID" : null,
          "FOREIGNKEYID" : null,
          "CONSTRAINTID" : null,
          "TABLETYPE" : null,
          "TABLEKIND" : null,
          "TABLEGROUP" : null,
          "RELEVANTCLASSID" : null,
          "RECORDHISTORY" : null,
          "TABLESPACE" : null,
          "TABLEINDEX" : null,
          "RECORDSIZE" : null,
          "RECORDCOUNT" : null,
          "TABLESIZE" : null,
          "TABLECHGDATE" : null,
          "TABLECHGUSER" : null,
          "DBCLASSMAKEFLAG" : null,
          "MAKECLASSREQ" : null,
          "MAKEFUNCTIONREQ" : null,
          "SYSTEMTYPE" : null,
          "isSortable" : true
        }, {
          "SYSTEMID" : "ATUM",
          "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
          "COLUMNID" : "DESCRIPTION",
          "POSITION" : "11",
          "DESCRIPTION" : "QUERY_RULE에 대한 설명, 용도",
          "AVAILABILITY" : "Available",
          "COLUMNTYPE" : "STND",
          "DATATYPE" : "VARCHAR2",
          "DATASIZE" : "1000",
          "ISPRIMARY" : "N",
          "ISNOTNULL" : "N",
          "DEFAULTVALUE" : null,
          "CONSTRAINT" : null,
          "FOREIGNKEY" : null,
          "COMMENTS" : null,
          "EXAMPLE" : null,
          "RELEVANTTYPE" : "Current",
          "RELEVANTCOLMNID" : null,
          "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
          "UPDATEUSER" : null,
          "COLUMNCHGDATE" : null,
          "COLUMNCHGUSER" : null,
          "REFERENCETABLE" : null,
          "TOCOLUMNID" : null,
          "FOREIGNKEYID" : null,
          "CONSTRAINTID" : null,
          "TABLETYPE" : null,
          "TABLEKIND" : null,
          "TABLEGROUP" : null,
          "RELEVANTCLASSID" : null,
          "RECORDHISTORY" : null,
          "TABLESPACE" : null,
          "TABLEINDEX" : null,
          "RECORDSIZE" : null,
          "RECORDCOUNT" : null,
          "TABLESIZE" : null,
          "TABLECHGDATE" : null,
          "TABLECHGUSER" : null,
          "DBCLASSMAKEFLAG" : null,
          "MAKECLASSREQ" : null,
          "MAKEFUNCTIONREQ" : null,
          "SYSTEMTYPE" : null,
          "isSortable" : true
        } ],
        "functionClassAttr" : [ {
          "CLASSATTRIBUTE" : "PROJECTID",
          "INPUTTYPE" : "Create",
          "INPUTMETHOD" : "ChooseOnly",
          "CHOOSEMETHOD" : "SQL",
          "PROPERTYREFERENCE" : "N",
          "INPUTEXPRESSION" : "SELECT DISTINCT PROJECTID FROM PRJ_QUERY_RULE_DEFINITION WHERE PROJECTID=@PROJECTID",
          "CHARACTERCASING" : "N",
          "TRIMFLAG" : "N",
          "ISNOTNULL" : "",
          "ISPRIMARY" : "Y",
          "PARAMETERID" : ""
        }, {
          "CLASSATTRIBUTE" : "QUERYRULEID",
          "INPUTTYPE" : "Create",
          "INPUTMETHOD" : "DirectOnly",
          "CHOOSEMETHOD" : "None",
          "PROPERTYREFERENCE" : "N",
          "INPUTEXPRESSION" : "",
          "CHARACTERCASING" : "N",
          "TRIMFLAG" : "N",
          "ISNOTNULL" : "",
          "ISPRIMARY" : "Y",
          "PARAMETERID" : ""
        }, {
          "CLASSATTRIBUTE" : "QUERYGROUP",
          "INPUTTYPE" : "Always",
          "INPUTMETHOD" : "DirectOnly",
          "CHOOSEMETHOD" : "None",
          "PROPERTYREFERENCE" : "N",
          "INPUTEXPRESSION" : "",
          "CHARACTERCASING" : "N",
          "TRIMFLAG" : "N",
          "ISNOTNULL" : "",
          "ISPRIMARY" : "N",
          "PARAMETERID" : ""
        },  {
          "CLASSATTRIBUTE" : "SQLSTATEMENT1",
          "INPUTTYPE" : "Always",
          "INPUTMETHOD" : "DirectOnly",
          "CHOOSEMETHOD" : "None",
          "PROPERTYREFERENCE" : "N",
          "INPUTEXPRESSION" : "",
          "CHARACTERCASING" : "N",
          "TRIMFLAG" : "N",
          "ISNOTNULL" : "",
          "ISPRIMARY" : "N",
          "PARAMETERID" : ""
        }, {
          "CLASSATTRIBUTE" : "SQLSTATEMENT2",
          "INPUTTYPE" : "Always",
          "INPUTMETHOD" : "DirectOnly",
          "CHOOSEMETHOD" : "None",
          "PROPERTYREFERENCE" : "N",
          "INPUTEXPRESSION" : "",
          "CHARACTERCASING" : "N",
          "TRIMFLAG" : "N",
          "ISNOTNULL" : "",
          "ISPRIMARY" : "N",
          "PARAMETERID" : ""
        }, {
          "CLASSATTRIBUTE" : "SQLSTATEMENT3",
          "INPUTTYPE" : "Always",
          "INPUTMETHOD" : "DirectOnly",
          "CHOOSEMETHOD" : "None",
          "PROPERTYREFERENCE" : "N",
          "INPUTEXPRESSION" : "",
          "CHARACTERCASING" : "N",
          "TRIMFLAG" : "N",
          "ISNOTNULL" : "",
          "ISPRIMARY" : "N",
          "PARAMETERID" : ""
        }, {
          "CLASSATTRIBUTE" : "INPUTPARAMETERS",
          "INPUTTYPE" : "Always",
          "INPUTMETHOD" : "DirectOnly",
          "CHOOSEMETHOD" : "None",
          "PROPERTYREFERENCE" : "N",
          "INPUTEXPRESSION" : "",
          "CHARACTERCASING" : "N",
          "TRIMFLAG" : "N",
          "ISNOTNULL" : "",
          "ISPRIMARY" : "N",
          "PARAMETERID" : ""
        }, {
          "CLASSATTRIBUTE" : "OUTPUTPARAMETERS",
          "INPUTTYPE" : "Always",
          "INPUTMETHOD" : "DirectOnly",
          "CHOOSEMETHOD" : "None",
          "PROPERTYREFERENCE" : "N",
          "INPUTEXPRESSION" : "",
          "CHARACTERCASING" : "N",
          "TRIMFLAG" : "N",
          "ISNOTNULL" : "",
          "ISPRIMARY" : "N",
          "PARAMETERID" : ""
        }, {
          "CLASSATTRIBUTE" : "QUERYTYPE",
          "INPUTTYPE" : "Always",
          "INPUTMETHOD" : "ChooseOnly",
          "CHOOSEMETHOD" : "Define",
          "PROPERTYREFERENCE" : "N",
          "INPUTEXPRESSION" : "AUTO|MANUAL",
          "CHARACTERCASING" : "N",
          "TRIMFLAG" : "N",
          "ISNOTNULL" : "",
          "ISPRIMARY" : "N",
          "PARAMETERID" : ""
        }, {
          "CLASSATTRIBUTE" : "SERVICENAME",
          "INPUTTYPE" : "Always",
          "INPUTMETHOD" : "ChooseOnly",
          "CHOOSEMETHOD" : "Define",
          "PROPERTYREFERENCE" : "N",
          "INPUTEXPRESSION" : "Lst",
          "CHARACTERCASING" : "N",
          "TRIMFLAG" : "N",
          "ISNOTNULL" : "",
          "ISPRIMARY" : "N",
          "PARAMETERID" : ""
        }, {
          "CLASSATTRIBUTE" : "DESCRIPTION",
          "INPUTTYPE" : "Always",
          "INPUTMETHOD" : "DirectOnly",
          "CHOOSEMETHOD" : "None",
          "PROPERTYREFERENCE" : "N",
          "INPUTEXPRESSION" : "",
          "CHARACTERCASING" : "N",
          "TRIMFLAG" : "N",
          "ISNOTNULL" : "",
          "ISPRIMARY" : "N",
          "PARAMETERID" : ""
        } ],
        "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_Grcdu",
        "functionClassAttrQueryRuleId" : [ {
          "classAttribute" : "PROJECTID",
          "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_PROJECTID_IeoI3",
          "sessionFlag": "Y",
          "parameterId":"projectId"
        } ],
        "hasSort" : true
      }
    },
    "id" : "grd0"
  },function(){$(e.target).removeAttr('disabled');},e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } 
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		 } catch(err) {
				 console.error('Function exception: '+err);//예외처리 메세지
				 console.trace();//호출 스택을 출력
				 $(e.target).removeAttr('disabled');
		 } finally {
				 $(e.target).removeAttr('disabled');
		 }
		 });


	 //******************************
	 //* uploadAppendMenu0 Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#uploadAppendMenu0").on("click",function(e) {  
			 window.onerror = function(msg, url, line, col, error) { 
					 console.log('Error: ' + msg + ' Script: ' + url + ' Line: ' + line + ' StackTrace: '+error);
			 };  
			 try{    
					 if(this.getAttribute('templatename')=='Button'){    
							 this.disabled = true;    
					 }else if(this.getAttribute('templatename')=='JqGridPager'){    
							 var classN  = $(e.target).attr('class');    
							 if(classN == 'ui-pg-selbox')  return false;   
					 }    
					 if($(this).hasClass('eleFocus')){ 
							 $(this).removeClass('eleFocus');    
					 } 
			 var returnVal;     
			 returnVal =  rules.uploadexcelfile({
  "data" : {
    "selectedExpressionID" : "uploadAppendMenu0_DownloadExcelFile_31",
    "gridID" : "grd0",
    "mode" : "Append"
  },
  "id" : "uploadAppendMenu0"
},ruleFunction4,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction4();
						 } 
				 } else { 
						 ruleFunction4();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		function ruleFunction4(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [
      {
        Parameter: "PROJECTID",
        Mandatory: "Y",
        InputType: "Text",
          Value: sessionStorage.getItem("projectId"),
          Column: "PROJECTID",
      },
    ],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "ruleName" : "BR_STDQuery",
    "QueryRuleID" : "PRJ_QUERY_RULE_DEFINITION_Grcdu",
    "selectedExpressionID" : "uploadAppendMenu0_SendMessage_32",
    "MSGGridInstance" : {
      "_setdata" : [{
        "Parameter" : "PROJECTID",
        "Mandatory" : "N",
        "InputType" : "Text",
        "Value" : sessionStorage.getItem("projectId"),
        "Column" : "PROJECTID", MultiKey : "",
        "Required" : "N"
      }]
    }
  },
  "id" : "uploadAppendMenu0"
},ruleFunction5,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction5();
						 } 
				 } else { 
						 ruleFunction5();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction5(){ 
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "uploadAppendMenu0_BindGridData_33",
    "listExpressionID" : "uploadAppendMenu0_SendMessage_32",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "QUERYRULEID",
      "ColumnID" : "QUERYRULEID"
    }, {
      "ParameterID" : "QUERYGROUP",
      "ColumnID" : "QUERYGROUP",
    }, {
      "ParameterID" : "SQLSTATEMENT1",
      "ColumnID" : "SQLSTATEMENT1"
    }, {
      "ParameterID" : "SQLSTATEMENT2",
      "ColumnID" : "SQLSTATEMENT2"
    }, {
      "ParameterID" : "SQLSTATEMENT3",
      "ColumnID" : "SQLSTATEMENT3"
    }, {
      "ParameterID" : "INPUTPARAMETERS",
      "ColumnID" : "INPUTPARAMETERS"
    }, {
      "ParameterID" : "OUTPUTPARAMETERS",
      "ColumnID" : "OUTPUTPARAMETERS"
    }, {
      "ParameterID" : "QUERYTYPE",
      "ColumnID" : "QUERYTYPE"
    }, {
      "ParameterID" : "SERVICENAME",
      "ColumnID" : "SERVICENAME"
    }, {
      "ParameterID" : "DESCRIPTION",
      "ColumnID" : "DESCRIPTION"
    } ],
    "gridID" : "grd0",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID"
      }, {
        "ParameterID" : "QUERYRULEID",
        "ColumnID" : "QUERYRULEID"
      }, {
        "ParameterID" : "QUERYGROUP",
        "ColumnID" : "QUERYGROUP",
      }, {
        "ParameterID" : "SQLSTATEMENT1",
        "ColumnID" : "SQLSTATEMENT1"
      }, {
        "ParameterID" : "SQLSTATEMENT2",
        "ColumnID" : "SQLSTATEMENT2"
      }, {
        "ParameterID" : "SQLSTATEMENT3",
        "ColumnID" : "SQLSTATEMENT3"
      }, {
        "ParameterID" : "INPUTPARAMETERS",
        "ColumnID" : "INPUTPARAMETERS"
      }, {
        "ParameterID" : "OUTPUTPARAMETERS",
        "ColumnID" : "OUTPUTPARAMETERS"
      }, {
        "ParameterID" : "QUERYTYPE",
        "ColumnID" : "QUERYTYPE"
      }, {
        "ParameterID" : "SERVICENAME",
        "ColumnID" : "SERVICENAME"
      }, {
        "ParameterID" : "DESCRIPTION",
        "ColumnID" : "DESCRIPTION"
      } ]
    }
  },
  "id" : "uploadAppendMenu0"
},ruleFunction6,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction6();
						 } 
				 } else { 
						 ruleFunction6();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction6(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "uploadAppendMenu0_ClearGridData_69",
    "gridID" : "grdEditor"
  },
  "id" : "uploadAppendMenu0"
},ruleFunction7,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction7();
						 } 
				 } else { 
						 ruleFunction7();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction7(){ 
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "uploadAppendMenu0_BindPropertyData3_84",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "PRJ_QUERY_RULE_DEFINITION",
      "columns" : [ {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : "프로젝트 아이디, 해당 PM이 선정하는 프로젝트 코드[ATUM|BECOME|...]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYRULEID",
        "POSITION" : "2",
        "DESCRIPTION" : "QUERYRULE의 아이디[MENU_B2YFL|MENU_TreeData|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "100",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYGROUP",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "100",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT1",
        "POSITION" : "4",
        "DESCRIPTION" : "ORACLE SQL문, 원하는 데이터만을 불러오기 위한 SQL 소스코드[SELECT * FROM BASICLINETEMPLATE|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT2",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT3",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "INPUTPARAMETERS",
        "POSITION" : "7",
        "DESCRIPTION" : "SQL QEURY문에서 INPUT 값으로 받아올 변수[BLOCKID|ITEMID|PROJECTID|...]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "2000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "OUTPUTPARAMETERS",
        "POSITION" : "8",
        "DESCRIPTION" : "QUERY 결과 OUTPUT값으로 받을 변수[SEQNUM,PROJECTID,BLOCKID|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "2000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYTYPE",
        "POSITION" : "9",
        "DESCRIPTION" : "QUERY가 자동으로 생성된 것인지 사용자가 지정해 준 것인지 구분[AUTO|MANUAL]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "10",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : "AUTO",
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SERVICENAME",
        "POSITION" : "10",
        "DESCRIPTION" : "OUTPUT 값이 단일값인지 리스트인지 구분[Lst|Info]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "10",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : "Lst",
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "DESCRIPTION",
        "POSITION" : "11",
        "DESCRIPTION" : "QUERY_RULE에 대한 설명, 용도",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      } ],
      "functionClassAttr" : [ {
        "CLASSATTRIBUTE" : "PROJECTID",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "SQL",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "SELECT DISTINCT PROJECTID FROM PRJ_QUERY_RULE_DEFINITION WHERE PROJECTID=@PROJECTID",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYRULEID",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYGROUP",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT1",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT2",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT3",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "INPUTPARAMETERS",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "OUTPUTPARAMETERS",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYTYPE",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "Define",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "AUTO|MANUAL",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SERVICENAME",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "Define",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "Lst",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "DESCRIPTION",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      } ],
      "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_Grcdu",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_PROJECTID_IeoI3",
        "sessionFlag": "Y",
        "parameterId":"projectId"

      } ],
      "hasSort" : true
    }
  },
  "id" : "uploadAppendMenu0"
},function(){$(e.target).removeAttr('disabled');},e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } 
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		 } catch(err) {
				 console.error('Function exception: '+err);//예외처리 메세지
				 console.trace();//호출 스택을 출력
				 $(e.target).removeAttr('disabled');
		 } finally {
				 $(e.target).removeAttr('disabled');
		 }
		 });


	 //******************************
	 //* btnUpdate Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#btnUpdate").on("click",function(e) {  
			 window.onerror = function(msg, url, line, col, error) { 
					 console.log('Error: ' + msg + ' Script: ' + url + ' Line: ' + line + ' StackTrace: '+error);
			 };  
			 try{    
					 if(this.getAttribute('templatename')=='Button'){    
							 this.disabled = true;    
					 }else if(this.getAttribute('templatename')=='JqGridPager'){    
							 var classN  = $(e.target).attr('class');    
							 if(classN == 'ui-pg-selbox')  return false;   
					 }    
					 if($(this).hasClass('eleFocus')){ 
							 $(this).removeClass('eleFocus');    
					 } 
			 var returnVal;     
			 returnVal =  customRules.confirm({
  "data" : {
    "confirmMessage" : "DoYouWantToUpdate",
    "selectedExpressionID" : "btnUpdate_Confirm_89"
  },
  "actionName" : "Confirm",
  "id" : "btnUpdate"
},ruleFunction9,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction9();
						 } 
				 } else { 
						 ruleFunction9();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		function ruleFunction9(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [ {
      "Parameter" : "settingData",
      "Mandatory" : "N",
      "InputType" : "Component",
      "Value" : "grdEditor",
      "Column" : ""
    }, {
      "Parameter" : "DMLType",
      "Mandatory" : "Y",
      "InputType" : "Direct",
      "Value" : "UPDATE",
      "Column" : ""
    } ],
    "MessageID" : "QueryRule",
    "ServiceName" : "Txn",
    "DetailMessageID" : "TxnQuery",
    "ruleId" : "BR_STDWizard",
    "ruleName" : "BR_STDWizard",
    "selectedExpressionID" : "btnUpdate_SendMessage_12",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "Parameter" : "settingData",
        "Mandatory" : "N",
        "InputType" : "Component",
        "Value" : "grdEditor",
        "Column" : ""
      }, {
        "Parameter" : "DMLType",
        "Mandatory" : "Y",
        "InputType" : "Direct",
        "Value" : "UPDATE",
        "Column" : ""
      } ]
    },
    "GetGridRowDataType" : "1"
  },
  "id" : "btnUpdate"
},ruleFunction10,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction10();
						 } 
				 } else { 
						 ruleFunction10();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction10(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [
      {
        Parameter: "PROJECTID",
        Mandatory: "Y",
        InputType: "Text",
          Value: sessionStorage.getItem("projectId"),
          Column: "PROJECTID",
      },
    ],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "ruleName" : "BR_STDQuery",
    "QueryRuleID" : "PRJ_QUERY_RULE_DEFINITION_Grcdu",
    "selectedExpressionID" : "btnUpdate_SendMessage_13",
    "MSGGridInstance" : {
      "_setdata" : [{
        "Parameter" : "PROJECTID",
        "Mandatory" : "N",
        "InputType" : "Text",
        "Value" : sessionStorage.getItem("projectId"),
        "Column" : "PROJECTID", MultiKey : "",
        "Required" : "N"
      }]
    }
  },
  "id" : "btnUpdate"
},ruleFunction11,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction11();
						 } 
				 } else { 
						 ruleFunction11();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction11(){ 
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "btnUpdate_BindGridData_14",
    "listExpressionID" : "btnUpdate_SendMessage_13",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "QUERYRULEID",
      "ColumnID" : "QUERYRULEID"
    }, {
      "ParameterID" : "QUERYGROUP",
      "ColumnID" : "QUERYGROUP"
    }, {
      "ParameterID" : "SQLSTATEMENT1",
      "ColumnID" : "SQLSTATEMENT1"
    }, {
      "ParameterID" : "SQLSTATEMENT2",
      "ColumnID" : "SQLSTATEMENT2"
    }, {
      "ParameterID" : "SQLSTATEMENT3",
      "ColumnID" : "SQLSTATEMENT3"
    }, {
      "ParameterID" : "INPUTPARAMETERS",
      "ColumnID" : "INPUTPARAMETERS"
    }, {
      "ParameterID" : "OUTPUTPARAMETERS",
      "ColumnID" : "OUTPUTPARAMETERS"
    }, {
      "ParameterID" : "QUERYTYPE",
      "ColumnID" : "QUERYTYPE"
    }, {
      "ParameterID" : "SERVICENAME",
      "ColumnID" : "SERVICENAME"
    }, {
      "ParameterID" : "DESCRIPTION",
      "ColumnID" : "DESCRIPTION"
    } ],
    "gridID" : "grd0",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID"
      }, {
        "ParameterID" : "QUERYRULEID",
        "ColumnID" : "QUERYRULEID"
      }, {
        "ParameterID" : "QUERYGROUP",
        "ColumnID" : "QUERYGROUP"
      }, {
        "ParameterID" : "SQLSTATEMENT1",
        "ColumnID" : "SQLSTATEMENT1"
      }, {
        "ParameterID" : "SQLSTATEMENT2",
        "ColumnID" : "SQLSTATEMENT2"
      }, {
        "ParameterID" : "SQLSTATEMENT3",
        "ColumnID" : "SQLSTATEMENT3"
      }, {
        "ParameterID" : "INPUTPARAMETERS",
        "ColumnID" : "INPUTPARAMETERS"
      }, {
        "ParameterID" : "OUTPUTPARAMETERS",
        "ColumnID" : "OUTPUTPARAMETERS"
      }, {
        "ParameterID" : "QUERYTYPE",
        "ColumnID" : "QUERYTYPE"
      }, {
        "ParameterID" : "SERVICENAME",
        "ColumnID" : "SERVICENAME"
      }, {
        "ParameterID" : "DESCRIPTION",
        "ColumnID" : "DESCRIPTION"
      } ]
    }
  },
  "id" : "btnUpdate"
},ruleFunction12,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction12();
						 } 
				 } else { 
						 ruleFunction12();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction12(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "btnUpdate_ClearGridData_65",
    "gridID" : "grdEditor"
  },
  "id" : "btnUpdate"
},ruleFunction13,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction13();
						 } 
				 } else { 
						 ruleFunction13();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction13(){ 
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "btnUpdate_BindPropertyData3_81",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "PRJ_QUERY_RULE_DEFINITION",
      "columns" : [ {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : "프로젝트 아이디, 해당 PM이 선정하는 프로젝트 코드[ATUM|BECOME|...]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYRULEID",
        "POSITION" : "2",
        "DESCRIPTION" : "QUERYRULE의 아이디[MENU_B2YFL|MENU_TreeData|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "100",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYGROUP",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "100",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT1",
        "POSITION" : "4",
        "DESCRIPTION" : "ORACLE SQL문, 원하는 데이터만을 불러오기 위한 SQL 소스코드[SELECT * FROM BASICLINETEMPLATE|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT2",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT3",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "INPUTPARAMETERS",
        "POSITION" : "7",
        "DESCRIPTION" : "SQL QEURY문에서 INPUT 값으로 받아올 변수[BLOCKID|ITEMID|PROJECTID|...]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "2000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "OUTPUTPARAMETERS",
        "POSITION" : "8",
        "DESCRIPTION" : "QUERY 결과 OUTPUT값으로 받을 변수[SEQNUM,PROJECTID,BLOCKID|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "2000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYTYPE",
        "POSITION" : "9",
        "DESCRIPTION" : "QUERY가 자동으로 생성된 것인지 사용자가 지정해 준 것인지 구분[AUTO|MANUAL]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "10",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : "AUTO",
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SERVICENAME",
        "POSITION" : "10",
        "DESCRIPTION" : "OUTPUT 값이 단일값인지 리스트인지 구분[Lst|Info]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "10",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : "Lst",
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "DESCRIPTION",
        "POSITION" : "11",
        "DESCRIPTION" : "QUERY_RULE에 대한 설명, 용도",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      } ],
      "functionClassAttr" : [ {
        "CLASSATTRIBUTE" : "PROJECTID",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "SQL",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "SELECT DISTINCT PROJECTID FROM PRJ_QUERY_RULE_DEFINITION WHERE PROJECTID=@PROJECTID",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYRULEID",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYGROUP",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT1",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT2",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT3",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "INPUTPARAMETERS",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "OUTPUTPARAMETERS",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYTYPE",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "Define",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "AUTO|MANUAL",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SERVICENAME",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "Define",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "Lst",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "DESCRIPTION",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      } ],
      "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_Grcdu",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_PROJECTID_IeoI3",
        "sessionFlag": "Y",
        "parameterId":"projectId"

      } ],
      "hasSort" : true
    }
  },
  "id" : "btnUpdate"
},function(){$(e.target).removeAttr('disabled');},e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } 
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		 } catch(err) {
				 console.error('Function exception: '+err);//예외처리 메세지
				 console.trace();//호출 스택을 출력
				 $(e.target).removeAttr('disabled');
		 } finally {
				 $(e.target).removeAttr('disabled');
		 }
		 });


	 //******************************
	 //* btnCreate Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#btnCreate").on("click",function(e) {  
			 window.onerror = function(msg, url, line, col, error) { 
					 console.log('Error: ' + msg + ' Script: ' + url + ' Line: ' + line + ' StackTrace: '+error);
			 };  
			 try{    
					 if(this.getAttribute('templatename')=='Button'){    
							 this.disabled = true;    
					 }else if(this.getAttribute('templatename')=='JqGridPager'){    
							 var classN  = $(e.target).attr('class');    
							 if(classN == 'ui-pg-selbox')  return false;   
					 }    
					 if($(this).hasClass('eleFocus')){ 
							 $(this).removeClass('eleFocus');    
					 } 
			 var returnVal;     
			 returnVal =  customRules.confirm({
  "data" : {
    "confirmMessage" : "DoYouWantToCreate",
    "selectedExpressionID" : "btnCreate_Confirm_88"
  },
  "actionName" : "Confirm",
  "id" : "btnCreate"
},ruleFunction15,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction15();
						 } 
				 } else { 
						 ruleFunction15();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		function ruleFunction15(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [ {
      "Parameter" : "settingData",
      "Mandatory" : "N",
      "InputType" : "Component",
      "Value" : "grdEditor",
      "Column" : ""
    }, {
      "Parameter" : "DMLType",
      "Mandatory" : "Y",
      "InputType" : "Direct",
      "Value" : "CREATE",
      "Column" : ""
    } ],
    "MessageID" : "QueryRule",
    "ServiceName" : "Txn",
    "DetailMessageID" : "TxnQuery",
    "ruleId" : "BR_STDWizard",
    "ruleName" : "BR_STDWizard",
    "selectedExpressionID" : "btnCreate_SendMessage_8",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "Parameter" : "settingData",
        "Mandatory" : "N",
        "InputType" : "Component",
        "Value" : "grdEditor",
        "Column" : ""
      }, {
        "Parameter" : "DMLType",
        "Mandatory" : "Y",
        "InputType" : "Direct",
        "Value" : "CREATE",
        "Column" : ""
      } ]
    },
    "GetGridRowDataType" : "1"
  },
  "id" : "btnCreate"
},ruleFunction16,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction16();
						 } 
				 } else { 
						 ruleFunction16();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction16(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [
      {
        Parameter: "PROJECTID",
        Mandatory: "Y",
        InputType: "Text",
          Value: sessionStorage.getItem("projectId"),
          Column: "PROJECTID",
      },
    ],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "ruleName" : "BR_STDQuery",
    "QueryRuleID" : "PRJ_QUERY_RULE_DEFINITION_Grcdu",
    "selectedExpressionID" : "btnCreate_SendMessage_9",
    "MSGGridInstance" : {
      "_setdata" : [{
        "Parameter" : "PROJECTID",
        "Mandatory" : "N",
        "InputType" : "Text",
        "Value" : sessionStorage.getItem("projectId"),
        "Column" : "PROJECTID", MultiKey : "",
        "Required" : "N"
      }]
    }
  },
  "id" : "btnCreate"
},ruleFunction17,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction17();
						 } 
				 } else { 
						 ruleFunction17();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction17(){ 
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "btnCreate_BindGridData_10",
    "listExpressionID" : "btnCreate_SendMessage_9",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "QUERYRULEID",
      "ColumnID" : "QUERYRULEID"
    }, {
      "ParameterID" : "QUERYGROUP",
      "ColumnID" : "QUERYGROUP"
    }, {
      "ParameterID" : "SQLSTATEMENT1",
      "ColumnID" : "SQLSTATEMENT1"
    }, {
      "ParameterID" : "SQLSTATEMENT2",
      "ColumnID" : "SQLSTATEMENT2"
    }, {
      "ParameterID" : "SQLSTATEMENT3",
      "ColumnID" : "SQLSTATEMENT3"
    }, {
      "ParameterID" : "INPUTPARAMETERS",
      "ColumnID" : "INPUTPARAMETERS"
    }, {
      "ParameterID" : "OUTPUTPARAMETERS",
      "ColumnID" : "OUTPUTPARAMETERS"
    }, {
      "ParameterID" : "QUERYTYPE",
      "ColumnID" : "QUERYTYPE"
    }, {
      "ParameterID" : "SERVICENAME",
      "ColumnID" : "SERVICENAME"
    }, {
      "ParameterID" : "DESCRIPTION",
      "ColumnID" : "DESCRIPTION"
    } ],
    "gridID" : "grd0",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID"
      }, {
        "ParameterID" : "QUERYRULEID",
        "ColumnID" : "QUERYRULEID"
      }, {
        "ParameterID" : "QUERYGROUP",
        "ColumnID" : "QUERYGROUP"
      }, {
        "ParameterID" : "SQLSTATEMENT1",
        "ColumnID" : "SQLSTATEMENT1"
      }, {
        "ParameterID" : "SQLSTATEMENT2",
        "ColumnID" : "SQLSTATEMENT2"
      }, {
        "ParameterID" : "SQLSTATEMENT3",
        "ColumnID" : "SQLSTATEMENT3"
      }, {
        "ParameterID" : "INPUTPARAMETERS",
        "ColumnID" : "INPUTPARAMETERS"
      }, {
        "ParameterID" : "OUTPUTPARAMETERS",
        "ColumnID" : "OUTPUTPARAMETERS"
      }, {
        "ParameterID" : "QUERYTYPE",
        "ColumnID" : "QUERYTYPE"
      }, {
        "ParameterID" : "SERVICENAME",
        "ColumnID" : "SERVICENAME"
      }, {
        "ParameterID" : "DESCRIPTION",
        "ColumnID" : "DESCRIPTION"
      } ]
    }
  },
  "id" : "btnCreate"
},ruleFunction18,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction18();
						 } 
				 } else { 
						 ruleFunction18();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction18(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "btnCreate_ClearGridData_64",
    "gridID" : "grdEditor"
  },
  "id" : "btnCreate"
},ruleFunction19,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction19();
						 } 
				 } else { 
						 ruleFunction19();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction19(){ 
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "btnCreate_BindPropertyData3_80",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "PRJ_QUERY_RULE_DEFINITION",
      "columns" : [ {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : "프로젝트 아이디, 해당 PM이 선정하는 프로젝트 코드[ATUM|BECOME|...]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYRULEID",
        "POSITION" : "2",
        "DESCRIPTION" : "QUERYRULE의 아이디[MENU_B2YFL|MENU_TreeData|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "100",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYGROUP",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "100",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT1",
        "POSITION" : "4",
        "DESCRIPTION" : "ORACLE SQL문, 원하는 데이터만을 불러오기 위한 SQL 소스코드[SELECT * FROM BASICLINETEMPLATE|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT2",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT3",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "INPUTPARAMETERS",
        "POSITION" : "7",
        "DESCRIPTION" : "SQL QEURY문에서 INPUT 값으로 받아올 변수[BLOCKID|ITEMID|PROJECTID|...]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "2000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "OUTPUTPARAMETERS",
        "POSITION" : "8",
        "DESCRIPTION" : "QUERY 결과 OUTPUT값으로 받을 변수[SEQNUM,PROJECTID,BLOCKID|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "2000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYTYPE",
        "POSITION" : "9",
        "DESCRIPTION" : "QUERY가 자동으로 생성된 것인지 사용자가 지정해 준 것인지 구분[AUTO|MANUAL]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "10",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : "AUTO",
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SERVICENAME",
        "POSITION" : "10",
        "DESCRIPTION" : "OUTPUT 값이 단일값인지 리스트인지 구분[Lst|Info]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "10",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : "Lst",
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "DESCRIPTION",
        "POSITION" : "11",
        "DESCRIPTION" : "QUERY_RULE에 대한 설명, 용도",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      } ],
      "functionClassAttr" : [ {
        "CLASSATTRIBUTE" : "PROJECTID",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "SQL",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "SELECT DISTINCT PROJECTID FROM PRJ_QUERY_RULE_DEFINITION WHERE PROJECTID=@PROJECTID",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYRULEID",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYGROUP",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT1",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT2",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT3",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "INPUTPARAMETERS",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "OUTPUTPARAMETERS",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYTYPE",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "Define",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "AUTO|MANUAL",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SERVICENAME",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "Define",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "Lst",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "DESCRIPTION",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      } ],
      "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_Grcdu",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_PROJECTID_IeoI3",
        "sessionFlag": "Y",
        "parameterId":"projectId"

      } ],
      "hasSort" : true
    }
  },
  "id" : "btnCreate"
},function(){$(e.target).removeAttr('disabled');},e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } 
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		 } catch(err) {
				 console.error('Function exception: '+err);//예외처리 메세지
				 console.trace();//호출 스택을 출력
				 $(e.target).removeAttr('disabled');
		 } finally {
				 $(e.target).removeAttr('disabled');
		 }
		 });


	 //******************************
	 //* downloadGridDataMenu0 Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#downloadGridDataMenu0").on("click",function(e) {  
			 window.onerror = function(msg, url, line, col, error) { 
					 console.log('Error: ' + msg + ' Script: ' + url + ' Line: ' + line + ' StackTrace: '+error);
			 };  
			 try{    
					 if(this.getAttribute('templatename')=='Button'){    
							 this.disabled = true;    
					 }else if(this.getAttribute('templatename')=='JqGridPager'){    
							 var classN  = $(e.target).attr('class');    
							 if(classN == 'ui-pg-selbox')  return false;   
					 }    
					 if($(this).hasClass('eleFocus')){ 
							 $(this).removeClass('eleFocus');    
					 } 
			 var returnVal;     
			 returnVal =  rules.downloadgriddata({
  "data" : {
    "selectedExpressionID" : "downloadGridDataMenu0_DownloadExcelFile_30",
    "gridID" : "grd0"
  },
  "id" : "downloadGridDataMenu0"
},function(){$(e.target).removeAttr('disabled');},e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } 
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		 } catch(err) {
				 console.error('Function exception: '+err);//예외처리 메세지
				 console.trace();//호출 스택을 출력
				 $(e.target).removeAttr('disabled');
		 } finally {
				 $(e.target).removeAttr('disabled');
		 }
		 });


	 //********************
	 //* Initialize Event  
	 //********************
		 var returnVal; 
			 returnVal =  rules.querylst({
  "data" : {
    "selectedExpressionID" : "Initialize_QueryLst_87",
    "componentURL" : "",
    "message" : {
      "name" : "QueryList",
      "url" : "querylst.html"
    },
    "MSGGridInstance" : {
      "_setdata" : [ {
        "Parameter" : "PROJECTID",
        "Mandatory" : "N",
        "InputType" : "Text",
        "Value" : sessionStorage.getItem("projectId"),
        "Column" : "",
        "MultiKey" : "",
        "Required" : "N"
      } ]
    },
    "currentQueryRuleID" : "QueryRuleDefinition_Lst",
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "QueryRuleID" : "QueryRuleDefinition_Lst",
    "ruleId" : "BR_STDQuery",
    "simulationOutputText" : "DESCRIPTION,INPUTPARAMETERS,SQLSTATEMENT2,SQLSTATEMENT1,OUTPUTPARAMETERS,PROJECTID,QUERYRULEID,QUERYGROUP,QUERYTYPE,SERVICENAME",
    "simulationOutputCnt" : 9,
    "selectedMSGParameterGrid" : [ {
      Parameter: "PROJECTID",
      Mandatory: "Y",
      InputType: "Text",
      Value: sessionStorage.getItem("projectId"),
      Column: "PROJECTID",
      "MultiKey" : "",
      "Required" : "N"
    } ]
  },
  "actionName" : "QueryLst"
},ruleFunction22);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
									 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
											 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
									 } else { 
											 ruleFunction22();
									 } 
						 } else { 
								 ruleFunction22();
						 } 
				 }else {
						 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
						 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
				 } 
		function ruleFunction22(){ 
      returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "Initialize_BindGridData_1",
    "listExpressionID" : "Initialize_QueryLst_87",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID",
      "MultiKey" : ""
    }, {
      "ParameterID" : "QUERYRULEID",
      "ColumnID" : "QUERYRULEID",
      "MultiKey" : ""
    }, {
      "ParameterID" : "QUERYGROUP",
      "ColumnID" : "QUERYGROUP",
      "MultiKey" : ""
    }, {
      "ParameterID" : "SQLSTATEMENT1",
      "ColumnID" : "SQLSTATEMENT1",
      "MultiKey" : ""
    }, {
      "ParameterID" : "SQLSTATEMENT2",
      "ColumnID" : "SQLSTATEMENT2",
      "MultiKey" : ""
    }, {
      "ParameterID" : "SQLSTATEMENT3",
      "ColumnID" : "SQLSTATEMENT3",
      "MultiKey" : ""
    }, {
      "ParameterID" : "INPUTPARAMETERS",
      "ColumnID" : "INPUTPARAMETERS",
      "MultiKey" : ""
    }, {
      "ParameterID" : "OUTPUTPARAMETERS",
      "ColumnID" : "OUTPUTPARAMETERS",
      "MultiKey" : ""
    }, {
      "ParameterID" : "QUERYTYPE",
      "ColumnID" : "QUERYTYPE",
      "MultiKey" : ""
    }, {
      "ParameterID" : "SERVICENAME",
      "ColumnID" : "SERVICENAME",
      "MultiKey" : ""
    }, {
      "ParameterID" : "DESCRIPTION",
      "ColumnID" : "DESCRIPTION",
      "MultiKey" : "Description"
    } ],
    "gridID" : "grd0",
    "MSGGridInstance" : {
      "gridObj" : "#GridInfo",
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID",
        "MultiKey" : ""
      }, {
        "ParameterID" : "QUERYRULEID",
        "ColumnID" : "QUERYRULEID",
        "MultiKey" : ""
      }, {
        "ParameterID" : "QUERYGROUP",
        "ColumnID" : "QUERYGROUP",
        "MultiKey" : ""
      }, {
        "ParameterID" : "SQLSTATEMENT1",
        "ColumnID" : "SQLSTATEMENT1",
        "MultiKey" : ""
      }, {
        "ParameterID" : "SQLSTATEMENT2",
        "ColumnID" : "SQLSTATEMENT2",
        "MultiKey" : ""
      }, {
        "ParameterID" : "SQLSTATEMENT3",
        "ColumnID" : "SQLSTATEMENT3",
        "MultiKey" : ""
      }, {
        "ParameterID" : "INPUTPARAMETERS",
        "ColumnID" : "INPUTPARAMETERS",
        "MultiKey" : ""
      }, {
        "ParameterID" : "OUTPUTPARAMETERS",
        "ColumnID" : "OUTPUTPARAMETERS",
        "MultiKey" : ""
      }, {
        "ParameterID" : "QUERYTYPE",
        "ColumnID" : "QUERYTYPE",
        "MultiKey" : ""
      }, {
        "ParameterID" : "SERVICENAME",
        "ColumnID" : "SERVICENAME",
        "MultiKey" : ""
      }, {
        "ParameterID" : "DESCRIPTION",
        "ColumnID" : "DESCRIPTION",
        "MultiKey" : "Description"
      } ]
    },
    "bindComponentID" : "grd0"
  },
  "actionName" : "BindGridData",
  "bindComponentID" : "grd0"
    },ruleFunction23);
      if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
          if(returnVal.result==false){  
              if(returnVal.ignoreValidation==false){ 
                    if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
                        commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
                    } else { 
                        ruleFunction23();
                    } 
              } else { 
                  ruleFunction23();
              } 
          }else {
              if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
              commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
          } 
		};
		function ruleFunction23(){
			  returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "Initialize_BindPropertyData3_63",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "PRJ_QUERY_RULE_DEFINITION",
      "columns" : [ {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : "프로젝트 아이디, 해당 PM이 선정하는 프로젝트 코드[ATUM|BECOME|...]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYRULEID",
        "POSITION" : "2",
        "DESCRIPTION" : "QUERYRULE의 아이디[MENU_B2YFL|MENU_TreeData|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "100",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYGROUP",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "100",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT1",
        "POSITION" : "4",
        "DESCRIPTION" : "ORACLE SQL문, 원하는 데이터만을 불러오기 위한 SQL 소스코드[SELECT * FROM BASICLINETEMPLATE|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT2",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT3",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "INPUTPARAMETERS",
        "POSITION" : "7",
        "DESCRIPTION" : "SQL QEURY문에서 INPUT 값으로 받아올 변수[BLOCKID|ITEMID|PROJECTID|...]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "2000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "OUTPUTPARAMETERS",
        "POSITION" : "8",
        "DESCRIPTION" : "QUERY 결과 OUTPUT값으로 받을 변수[SEQNUM,PROJECTID,BLOCKID|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "2000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYTYPE",
        "POSITION" : "9",
        "DESCRIPTION" : "QUERY가 자동으로 생성된 것인지 사용자가 지정해 준 것인지 구분[AUTO|MANUAL]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "10",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : "AUTO",
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SERVICENAME",
        "POSITION" : "10",
        "DESCRIPTION" : "OUTPUT 값이 단일값인지 리스트인지 구분[Lst|Info]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "10",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : "Lst",
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "DESCRIPTION",
        "POSITION" : "11",
        "DESCRIPTION" : "QUERY_RULE에 대한 설명, 용도",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      } ],
      "functionClassAttr" : [ {
        "CLASSATTRIBUTE" : "PROJECTID",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "SQL",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "SELECT DISTINCT PROJECTID FROM PRJ_QUERY_RULE_DEFINITION WHERE PROJECTID=@PROJECTID",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYRULEID",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYGROUP",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT1",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT2",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT3",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "INPUTPARAMETERS",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "OUTPUTPARAMETERS",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYTYPE",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "Define",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "AUTO|MANUAL",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SERVICENAME",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "Define",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "Lst",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "DESCRIPTION",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      } ],
      "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_Grcdu",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_PROJECTID_IeoI3",
        "sessionFlag": "Y",
        "parameterId":"projectId"

      } ],
      "hasSort" : true
    }
  }
    },function(){/*final function*/});
      if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
          if(returnVal.result==false){  
              if(returnVal.ignoreValidation==false){ 
                    if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
                        commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
              } 
          }  
		}else {
        if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
        commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		};


	 //******************************
	 //* downloadAllDataMenu0 Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#downloadAllDataMenu0").on("click",function(e) {  
			 window.onerror = function(msg, url, line, col, error) { 
					 console.log('Error: ' + msg + ' Script: ' + url + ' Line: ' + line + ' StackTrace: '+error);
			 };  
			 try{    
					 if(this.getAttribute('templatename')=='Button'){    
							 this.disabled = true;    
					 }else if(this.getAttribute('templatename')=='JqGridPager'){    
							 var classN  = $(e.target).attr('class');    
							 if(classN == 'ui-pg-selbox')  return false;   
					 }    
					 if($(this).hasClass('eleFocus')){ 
							 $(this).removeClass('eleFocus');    
					 } 
			 var returnVal;     
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [
      {
        Parameter: "PROJECTID",
        Mandatory: "Y",
        InputType: "Text",
          Value: sessionStorage.getItem("projectId"),
          Column: "PROJECTID",
      },
    ],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "ruleName" : "BR_STDQuery",
    "QueryRuleID" : "PRJ_QUERY_RULE_DEFINITION_Grcdu",
    "selectedExpressionID" : "downloadAllDataMenu0_SendMessage_28",
    "MSGGridInstance" : {
      "_setdata" : [{
        "Parameter" : "PROJECTID",
        "Mandatory" : "N",
        "InputType" : "Text",
        "Value" : sessionStorage.getItem("projectId"),
        "Column" : "PROJECTID", MultiKey : "",
        "Required" : "N"
      }]
    }
  },
  "id" : "downloadAllDataMenu0"
},ruleFunction25,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction25();
						 } 
				 } else { 
						 ruleFunction25();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		function ruleFunction25(){ 
			 returnVal =  rules.downloadalldata({
  "data" : {
    "selectedExpressionID" : "downloadAllDataMenu0_DownloadExcelFile_29",
    "listExpressionID" : "downloadAllDataMenu0_SendMessage_28",
    "gridID" : "grd0"
  },
  "id" : "downloadAllDataMenu0"
},function(){$(e.target).removeAttr('disabled');},e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } 
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		 } catch(err) {
				 console.error('Function exception: '+err);//예외처리 메세지
				 console.trace();//호출 스택을 출력
				 $(e.target).removeAttr('disabled');
		 } finally {
				 $(e.target).removeAttr('disabled');
		 }
		 });


	 //******************************
	 //* uploadDeleteInsertMenu0 Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#uploadDeleteInsertMenu0").on("click",function(e) {  
			 window.onerror = function(msg, url, line, col, error) { 
					 console.log('Error: ' + msg + ' Script: ' + url + ' Line: ' + line + ' StackTrace: '+error);
			 };  
			 try{    
					 if(this.getAttribute('templatename')=='Button'){    
             
							 this.disabled = true;    
					 }else if(this.getAttribute('templatename')=='JqGridPager'){    
							 var classN  = $(e.target).attr('class');    
							 if(classN == 'ui-pg-selbox')  return false;   
					 }    
					 if($(this).hasClass('eleFocus')){ 
							 $(this).removeClass('eleFocus');    
					 } 
			 var returnVal;     
			 returnVal =  rules.uploadexcelfile({
  "data" : {
    "selectedExpressionID" : "uploadDeleteInsertMenu0_DownloadExcelFile_39",
    "gridID" : "grd0",
    "mode" : "delete insert6",
    "projectId" : sessionStorage.getItem("projectId"),
    "serviceName":"Lst",
  },
  "id" : "uploadDeleteInsertMenu0"
},ruleFunction27,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction27();
						 } 
				 } else { 
						 ruleFunction27();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		function ruleFunction27(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [
      {
        Parameter: "PROJECTID",
        Mandatory: "Y",
        InputType: "Text",
          Value: sessionStorage.getItem("projectId"),
          Column: "PROJECTID",
      },
    ],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "ruleName" : "BR_STDQuery",
    "QueryRuleID" : "PRJ_QUERY_RULE_DEFINITION_Grcdu",
    "selectedExpressionID" : "uploadDeleteInsertMenu0_SendMessage_40",
    "MSGGridInstance" : {
      "_setdata" : [{
        "Parameter" : "PROJECTID",
        "Mandatory" : "N",
        "InputType" : "Text",
        "Value" : sessionStorage.getItem("projectId"),
        "Column" : "PROJECTID", MultiKey : "",
        "Required" : "N"
      }]
    }
  },
  "id" : "uploadDeleteInsertMenu0"
},ruleFunction28,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction28();
						 } 
				 } else { 
						 ruleFunction28();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction28(){ 
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "uploadDeleteInsertMenu0_BindGridData_41",
    "listExpressionID" : "uploadDeleteInsertMenu0_SendMessage_40",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "QUERYRULEID",
      "ColumnID" : "QUERYRULEID"
    }, {
      "ParameterID" : "QUERYGROUP",
      "ColumnID" : "QUERYGROUP"
    }, {
      "ParameterID" : "SQLSTATEMENT1",
      "ColumnID" : "SQLSTATEMENT1"
    }, {
      "ParameterID" : "SQLSTATEMENT2",
      "ColumnID" : "SQLSTATEMENT2"
    }, {
      "ParameterID" : "SQLSTATEMENT3",
      "ColumnID" : "SQLSTATEMENT3"
    }, {
      "ParameterID" : "INPUTPARAMETERS",
      "ColumnID" : "INPUTPARAMETERS"
    }, {
      "ParameterID" : "OUTPUTPARAMETERS",
      "ColumnID" : "OUTPUTPARAMETERS"
    }, {
      "ParameterID" : "QUERYTYPE",
      "ColumnID" : "QUERYTYPE"
    }, {
      "ParameterID" : "SERVICENAME",
      "ColumnID" : "SERVICENAME"
    }, {
      "ParameterID" : "DESCRIPTION",
      "ColumnID" : "DESCRIPTION"
    } ],
    "gridID" : "grd0",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID"
      }, {
        "ParameterID" : "QUERYRULEID",
        "ColumnID" : "QUERYRULEID"
      }, {
        "ParameterID" : "QUERYGROUP",
        "ColumnID" : "QUERYGROUP"
      }, {
        "ParameterID" : "SQLSTATEMENT1",
        "ColumnID" : "SQLSTATEMENT1"
      }, {
        "ParameterID" : "SQLSTATEMENT2",
        "ColumnID" : "SQLSTATEMENT2"
      }, {
        "ParameterID" : "SQLSTATEMENT3",
        "ColumnID" : "SQLSTATEMENT3"
      }, {
        "ParameterID" : "INPUTPARAMETERS",
        "ColumnID" : "INPUTPARAMETERS"
      }, {
        "ParameterID" : "OUTPUTPARAMETERS",
        "ColumnID" : "OUTPUTPARAMETERS"
      }, {
        "ParameterID" : "QUERYTYPE",
        "ColumnID" : "QUERYTYPE"
      }, {
        "ParameterID" : "SERVICENAME",
        "ColumnID" : "SERVICENAME"
      }, {
        "ParameterID" : "DESCRIPTION",
        "ColumnID" : "DESCRIPTION"
      } ]
    }
  },
  "id" : "uploadDeleteInsertMenu0"
},ruleFunction29,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction29();
						 } 
				 } else { 
						 ruleFunction29();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction29(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "uploadDeleteInsertMenu0_ClearGridData_71",
    "gridID" : "grdEditor"
  },
  "id" : "uploadDeleteInsertMenu0"
},ruleFunction30,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction30();
						 } 
				 } else { 
						 ruleFunction30();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction30(){ 
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "uploadDeleteInsertMenu0_BindPropertyData3_86",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "PRJ_QUERY_RULE_DEFINITION",
      "columns" : [ {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : "프로젝트 아이디, 해당 PM이 선정하는 프로젝트 코드[ATUM|BECOME|...]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYRULEID",
        "POSITION" : "2",
        "DESCRIPTION" : "QUERYRULE의 아이디[MENU_B2YFL|MENU_TreeData|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "100",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYGROUP",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "100",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT1",
        "POSITION" : "4",
        "DESCRIPTION" : "ORACLE SQL문, 원하는 데이터만을 불러오기 위한 SQL 소스코드[SELECT * FROM BASICLINETEMPLATE|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT2",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT3",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "INPUTPARAMETERS",
        "POSITION" : "7",
        "DESCRIPTION" : "SQL QEURY문에서 INPUT 값으로 받아올 변수[BLOCKID|ITEMID|PROJECTID|...]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "2000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "OUTPUTPARAMETERS",
        "POSITION" : "8",
        "DESCRIPTION" : "QUERY 결과 OUTPUT값으로 받을 변수[SEQNUM,PROJECTID,BLOCKID|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "2000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYTYPE",
        "POSITION" : "9",
        "DESCRIPTION" : "QUERY가 자동으로 생성된 것인지 사용자가 지정해 준 것인지 구분[AUTO|MANUAL]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "10",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : "AUTO",
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SERVICENAME",
        "POSITION" : "10",
        "DESCRIPTION" : "OUTPUT 값이 단일값인지 리스트인지 구분[Lst|Info]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "10",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : "Lst",
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "DESCRIPTION",
        "POSITION" : "11",
        "DESCRIPTION" : "QUERY_RULE에 대한 설명, 용도",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      } ],
      "functionClassAttr" : [ {
        "CLASSATTRIBUTE" : "PROJECTID",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "SQL",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "SELECT DISTINCT PROJECTID FROM PRJ_QUERY_RULE_DEFINITION WHERE PROJECTID=@PROJECTID",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYRULEID",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYGROUP",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT1",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT2",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT3",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "INPUTPARAMETERS",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "OUTPUTPARAMETERS",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYTYPE",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "Define",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "AUTO|MANUAL",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SERVICENAME",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "Define",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "Lst",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "DESCRIPTION",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      } ],
      "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_Grcdu",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_PROJECTID_IeoI3",
        "sessionFlag": "Y",
        "parameterId":"projectId"

      } ],
      "hasSort" : true
    }
  },
  "id" : "uploadDeleteInsertMenu0"
},function(){$(e.target).removeAttr('disabled');},e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } 
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		 } catch(err) {
				 console.error('Function exception: '+err);//예외처리 메세지
				 console.trace();//호출 스택을 출력
				 $(e.target).removeAttr('disabled');
		 } finally {
				 $(e.target).removeAttr('disabled');
		 }
		 });


	 //******************************
	 //* btnDelete Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#btnDelete").on("click",function(e) {  
			 window.onerror = function(msg, url, line, col, error) { 
					 console.log('Error: ' + msg + ' Script: ' + url + ' Line: ' + line + ' StackTrace: '+error);
			 };  
			 try{    
					 if(this.getAttribute('templatename')=='Button'){    
							 this.disabled = true;    
					 }else if(this.getAttribute('templatename')=='JqGridPager'){    
							 var classN  = $(e.target).attr('class');    
							 if(classN == 'ui-pg-selbox')  return false;   
					 }    
					 if($(this).hasClass('eleFocus')){ 
							 $(this).removeClass('eleFocus');    
					 } 
			 var returnVal;     
			 returnVal =  customRules.confirm({
  "data" : {
    "confirmMessage" : "DoYouWantToDelete",
    "selectedExpressionID" : "btnDelete_Confirm_90"
  },
  "actionName" : "Confirm",
  "id" : "btnDelete"
},ruleFunction32,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction32();
						 } 
				 } else { 
						 ruleFunction32();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		function ruleFunction32(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [ {
      "Parameter" : "settingData",
      "Mandatory" : "N",
      "InputType" : "Component",
      "Value" : "grdEditor",
      "Column" : ""
    }, {
      "Parameter" : "DMLType",
      "Mandatory" : "Y",
      "InputType" : "Direct",
      "Value" : "DELETE",
      "Column" : ""
    } ],
    "MessageID" : "QueryRule",
    "ServiceName" : "Txn",
    "DetailMessageID" : "TxnQuery",
    "ruleId" : "BR_STDWizard",
    "ruleName" : "BR_STDWizard",
    "selectedExpressionID" : "btnDelete_SendMessage_16",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "Parameter" : "settingData",
        "Mandatory" : "N",
        "InputType" : "Component",
        "Value" : "grdEditor",
        "Column" : ""
      }, {
        "Parameter" : "DMLType",
        "Mandatory" : "Y",
        "InputType" : "Direct",
        "Value" : "DELETE",
        "Column" : ""
      } ]
    },
    "GetGridRowDataType" : "1"
  },
  "id" : "btnDelete"
},ruleFunction33,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction33();
						 } 
				 } else { 
						 ruleFunction33();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction33(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [
      {
        Parameter: "PROJECTID",
        Mandatory: "Y",
        InputType: "Text",
          Value: sessionStorage.getItem("projectId"),
          Column: "PROJECTID",
      },
    ],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "ruleName" : "BR_STDQuery",
    "QueryRuleID" : "PRJ_QUERY_RULE_DEFINITION_Grcdu",
    "selectedExpressionID" : "btnDelete_SendMessage_17",
    "MSGGridInstance" : {
      "_setdata" : [{
        "Parameter" : "PROJECTID",
        "Mandatory" : "N",
        "InputType" : "Text",
        "Value" : sessionStorage.getItem("projectId"),
        "Column" : "PROJECTID", MultiKey : "",
        "Required" : "N"
      }]
    }
  },
  "id" : "btnDelete"
},ruleFunction34,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction34();
						 } 
				 } else { 
						 ruleFunction34();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction34(){ 
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "btnDelete_BindGridData_18",
    "listExpressionID" : "btnDelete_SendMessage_17",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "QUERYRULEID",
      "ColumnID" : "QUERYRULEID"
    }, {
      "ParameterID" : "QUERYGROUP",
      "ColumnID" : "QUERYGROUP"
    }, {
      "ParameterID" : "SQLSTATEMENT1",
      "ColumnID" : "SQLSTATEMENT1"
    }, {
      "ParameterID" : "SQLSTATEMENT2",
      "ColumnID" : "SQLSTATEMENT2"
    }, {
      "ParameterID" : "SQLSTATEMENT3",
      "ColumnID" : "SQLSTATEMENT3"
    }, {
      "ParameterID" : "INPUTPARAMETERS",
      "ColumnID" : "INPUTPARAMETERS"
    }, {
      "ParameterID" : "OUTPUTPARAMETERS",
      "ColumnID" : "OUTPUTPARAMETERS"
    }, {
      "ParameterID" : "QUERYTYPE",
      "ColumnID" : "QUERYTYPE"
    }, {
      "ParameterID" : "SERVICENAME",
      "ColumnID" : "SERVICENAME"
    }, {
      "ParameterID" : "DESCRIPTION",
      "ColumnID" : "DESCRIPTION"
    } ],
    "gridID" : "grd0",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID"
      }, {
        "ParameterID" : "QUERYRULEID",
        "ColumnID" : "QUERYRULEID"
      }, {
        "ParameterID" : "QUERYGROUP",
        "ColumnID" : "QUERYGROUP"
      }, {
        "ParameterID" : "SQLSTATEMENT1",
        "ColumnID" : "SQLSTATEMENT1"
      }, {
        "ParameterID" : "SQLSTATEMENT2",
        "ColumnID" : "SQLSTATEMENT2"
      }, {
        "ParameterID" : "SQLSTATEMENT3",
        "ColumnID" : "SQLSTATEMENT3"
      }, {
        "ParameterID" : "INPUTPARAMETERS",
        "ColumnID" : "INPUTPARAMETERS"
      }, {
        "ParameterID" : "OUTPUTPARAMETERS",
        "ColumnID" : "OUTPUTPARAMETERS"
      }, {
        "ParameterID" : "QUERYTYPE",
        "ColumnID" : "QUERYTYPE"
      }, {
        "ParameterID" : "SERVICENAME",
        "ColumnID" : "SERVICENAME"
      }, {
        "ParameterID" : "DESCRIPTION",
        "ColumnID" : "DESCRIPTION"
      } ]
    }
  },
  "id" : "btnDelete"
},ruleFunction35,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction35();
						 } 
				 } else { 
						 ruleFunction35();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction35(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "btnDelete_ClearGridData_66",
    "gridID" : "grdEditor"
  },
  "id" : "btnDelete"
},ruleFunction36,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction36();
						 } 
				 } else { 
						 ruleFunction36();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction36(){ 
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "btnDelete_BindPropertyData3_82",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "PRJ_QUERY_RULE_DEFINITION",
      "columns" : [ {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : "프로젝트 아이디, 해당 PM이 선정하는 프로젝트 코드[ATUM|BECOME|...]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYRULEID",
        "POSITION" : "2",
        "DESCRIPTION" : "QUERYRULE의 아이디[MENU_B2YFL|MENU_TreeData|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "100",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYGROUP",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "100",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT1",
        "POSITION" : "4",
        "DESCRIPTION" : "ORACLE SQL문, 원하는 데이터만을 불러오기 위한 SQL 소스코드[SELECT * FROM BASICLINETEMPLATE|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT2",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT3",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "INPUTPARAMETERS",
        "POSITION" : "7",
        "DESCRIPTION" : "SQL QEURY문에서 INPUT 값으로 받아올 변수[BLOCKID|ITEMID|PROJECTID|...]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "2000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "OUTPUTPARAMETERS",
        "POSITION" : "8",
        "DESCRIPTION" : "QUERY 결과 OUTPUT값으로 받을 변수[SEQNUM,PROJECTID,BLOCKID|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "2000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYTYPE",
        "POSITION" : "9",
        "DESCRIPTION" : "QUERY가 자동으로 생성된 것인지 사용자가 지정해 준 것인지 구분[AUTO|MANUAL]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "10",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : "AUTO",
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SERVICENAME",
        "POSITION" : "10",
        "DESCRIPTION" : "OUTPUT 값이 단일값인지 리스트인지 구분[Lst|Info]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "10",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : "Lst",
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "DESCRIPTION",
        "POSITION" : "11",
        "DESCRIPTION" : "QUERY_RULE에 대한 설명, 용도",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      } ],
      "functionClassAttr" : [ {
        "CLASSATTRIBUTE" : "PROJECTID",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "SQL",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "SELECT DISTINCT PROJECTID FROM PRJ_QUERY_RULE_DEFINITION WHERE PROJECTID=@PROJECTID",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYRULEID",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYGROUP",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT1",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT2",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT3",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "INPUTPARAMETERS",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "OUTPUTPARAMETERS",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYTYPE",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "Define",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "AUTO|MANUAL",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SERVICENAME",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "Define",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "Lst",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "DESCRIPTION",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      } ],
      "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_Grcdu",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_PROJECTID_IeoI3",
        "sessionFlag": "Y",
        "parameterId":"projectId"

      } ],
      "hasSort" : true
    }
  },
  "id" : "btnDelete"
},function(){$(e.target).removeAttr('disabled');},e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } 
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		 } catch(err) {
				 console.error('Function exception: '+err);//예외처리 메세지
				 console.trace();//호출 스택을 출력
				 $(e.target).removeAttr('disabled');
		 } finally {
				 $(e.target).removeAttr('disabled');
		 }
		 });


	 //******************************
	 //* uploadUpdateInsertMenu0 Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#uploadUpdateInsertMenu0").on("click",function(e) {  
			 window.onerror = function(msg, url, line, col, error) { 
					 console.log('Error: ' + msg + ' Script: ' + url + ' Line: ' + line + ' StackTrace: '+error);
			 };  
			 try{    
					 if(this.getAttribute('templatename')=='Button'){    
							 this.disabled = true;    
					 }else if(this.getAttribute('templatename')=='JqGridPager'){    
							 var classN  = $(e.target).attr('class');    
							 if(classN == 'ui-pg-selbox')  return false;   
					 }    
					 if($(this).hasClass('eleFocus')){ 
							 $(this).removeClass('eleFocus');    
					 } 
			 var returnVal;     
			 returnVal =  rules.uploadexcelfile({
  "data" : {
    "selectedExpressionID" : "uploadUpdateInsertMenu0_DownloadExcelFile_35",
    "gridID" : "grd0",
    "mode" : "Update Insert"
  },
  "id" : "uploadUpdateInsertMenu0"
},ruleFunction38,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction38();
						 } 
				 } else { 
						 ruleFunction38();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		function ruleFunction38(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [
      {
        Parameter: "PROJECTID",
        Mandatory: "Y",
        InputType: "Text",
          Value: sessionStorage.getItem("projectId"),
          Column: "PROJECTID",
      },
    ],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "ruleName" : "BR_STDQuery",
    "QueryRuleID" : "PRJ_QUERY_RULE_DEFINITION_Grcdu",
    "selectedExpressionID" : "uploadUpdateInsertMenu0_SendMessage_36",
    "MSGGridInstance" : {
      "_setdata" : [{
        "Parameter" : "PROJECTID",
        "Mandatory" : "N",
        "InputType" : "Text",
        "Value" : sessionStorage.getItem("projectId"),
        "Column" : "PROJECTID", MultiKey : "",
        "Required" : "N"
      }]
    }
  },
  "id" : "uploadUpdateInsertMenu0"
},ruleFunction39,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction39();
						 } 
				 } else { 
						 ruleFunction39();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction39(){ 
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "uploadUpdateInsertMenu0_BindGridData_37",
    "listExpressionID" : "uploadUpdateInsertMenu0_SendMessage_36",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "QUERYRULEID",
      "ColumnID" : "QUERYRULEID"
    }, {
      "ParameterID" : "QUERYGROUP",
      "ColumnID" : "QUERYGROUP"
    }, {
      "ParameterID" : "SQLSTATEMENT1",
      "ColumnID" : "SQLSTATEMENT1"
    }, {
      "ParameterID" : "SQLSTATEMENT2",
      "ColumnID" : "SQLSTATEMENT2"
    }, {
      "ParameterID" : "SQLSTATEMENT3",
      "ColumnID" : "SQLSTATEMENT3"
    }, {
      "ParameterID" : "INPUTPARAMETERS",
      "ColumnID" : "INPUTPARAMETERS"
    }, {
      "ParameterID" : "OUTPUTPARAMETERS",
      "ColumnID" : "OUTPUTPARAMETERS"
    }, {
      "ParameterID" : "QUERYTYPE",
      "ColumnID" : "QUERYTYPE"
    }, {
      "ParameterID" : "SERVICENAME",
      "ColumnID" : "SERVICENAME"
    }, {
      "ParameterID" : "DESCRIPTION",
      "ColumnID" : "DESCRIPTION"
    } ],
    "gridID" : "grd0",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID"
      }, {
        "ParameterID" : "QUERYRULEID",
        "ColumnID" : "QUERYRULEID"
      }, {
        "ParameterID" : "QUERYGROUP",
        "ColumnID" : "QUERYGROUP"
      }, {
        "ParameterID" : "SQLSTATEMENT1",
        "ColumnID" : "SQLSTATEMENT1"
      }, {
        "ParameterID" : "SQLSTATEMENT2",
        "ColumnID" : "SQLSTATEMENT2"
      }, {
        "ParameterID" : "SQLSTATEMENT3",
        "ColumnID" : "SQLSTATEMENT3"
      }, {
        "ParameterID" : "INPUTPARAMETERS",
        "ColumnID" : "INPUTPARAMETERS"
      }, {
        "ParameterID" : "OUTPUTPARAMETERS",
        "ColumnID" : "OUTPUTPARAMETERS"
      }, {
        "ParameterID" : "QUERYTYPE",
        "ColumnID" : "QUERYTYPE"
      }, {
        "ParameterID" : "SERVICENAME",
        "ColumnID" : "SERVICENAME"
      }, {
        "ParameterID" : "DESCRIPTION",
        "ColumnID" : "DESCRIPTION"
      } ]
    }
  },
  "id" : "uploadUpdateInsertMenu0"
},ruleFunction40,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction40();
						 } 
				 } else { 
						 ruleFunction40();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction40(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "uploadUpdateInsertMenu0_ClearGridData_70",
    "gridID" : "grdEditor"
  },
  "id" : "uploadUpdateInsertMenu0"
},ruleFunction41,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction41();
						 } 
				 } else { 
						 ruleFunction41();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction41(){ 
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "uploadUpdateInsertMenu0_BindPropertyData3_85",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "PRJ_QUERY_RULE_DEFINITION",
      "columns" : [ {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : "프로젝트 아이디, 해당 PM이 선정하는 프로젝트 코드[ATUM|BECOME|...]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYRULEID",
        "POSITION" : "2",
        "DESCRIPTION" : "QUERYRULE의 아이디[MENU_B2YFL|MENU_TreeData|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "100",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYGROUP",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "100",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT1",
        "POSITION" : "4",
        "DESCRIPTION" : "ORACLE SQL문, 원하는 데이터만을 불러오기 위한 SQL 소스코드[SELECT * FROM BASICLINETEMPLATE|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT2",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT3",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "INPUTPARAMETERS",
        "POSITION" : "7",
        "DESCRIPTION" : "SQL QEURY문에서 INPUT 값으로 받아올 변수[BLOCKID|ITEMID|PROJECTID|...]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "2000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "OUTPUTPARAMETERS",
        "POSITION" : "8",
        "DESCRIPTION" : "QUERY 결과 OUTPUT값으로 받을 변수[SEQNUM,PROJECTID,BLOCKID|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "2000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYTYPE",
        "POSITION" : "9",
        "DESCRIPTION" : "QUERY가 자동으로 생성된 것인지 사용자가 지정해 준 것인지 구분[AUTO|MANUAL]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "10",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : "AUTO",
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SERVICENAME",
        "POSITION" : "10",
        "DESCRIPTION" : "OUTPUT 값이 단일값인지 리스트인지 구분[Lst|Info]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "10",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : "Lst",
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "DESCRIPTION",
        "POSITION" : "11",
        "DESCRIPTION" : "QUERY_RULE에 대한 설명, 용도",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      } ],
      "functionClassAttr" : [ {
        "CLASSATTRIBUTE" : "PROJECTID",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "SQL",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "SELECT DISTINCT PROJECTID FROM PRJ_QUERY_RULE_DEFINITION WHERE PROJECTID=@PROJECTID",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYRULEID",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYGROUP",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT1",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT2",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT3",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "INPUTPARAMETERS",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "OUTPUTPARAMETERS",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYTYPE",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "Define",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "AUTO|MANUAL",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SERVICENAME",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "Define",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "Lst",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "DESCRIPTION",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      } ],
      "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_Grcdu",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_PROJECTID_IeoI3",
        "sessionFlag": "Y",
        "parameterId":"projectId"

      } ],
      "hasSort" : true
    }
  },
  "id" : "uploadUpdateInsertMenu0"
},function(){$(e.target).removeAttr('disabled');},e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } 
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		 } catch(err) {
				 console.error('Function exception: '+err);//예외처리 메세지
				 console.trace();//호출 스택을 출력
				 $(e.target).removeAttr('disabled');
		 } finally {
				 $(e.target).removeAttr('disabled');
		 }
		 });


	 //******************************
	 //* deleteMenu0 Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#deleteMenu0").on("click",function(e) {  
			 window.onerror = function(msg, url, line, col, error) { 
					 console.log('Error: ' + msg + ' Script: ' + url + ' Line: ' + line + ' StackTrace: '+error);
			 };  
			 try{    
					 if(this.getAttribute('templatename')=='Button'){    
							 this.disabled = true;    
					 }else if(this.getAttribute('templatename')=='JqGridPager'){    
							 var classN  = $(e.target).attr('class');    
							 if(classN == 'ui-pg-selbox')  return false;   
					 }    
					 if($(this).hasClass('eleFocus')){ 
							 $(this).removeClass('eleFocus');    
					 } 
			 var returnVal;     
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [ {
      "Parameter" : "settingData",
      "Mandatory" : "N",
      "InputType" : "Component",
      "Value" : "grd0",
      "Column" : ""
    }, {
      "Parameter" : "DMLType",
      "Mandatory" : "Y",
      "InputType" : "Direct",
      "Value" : "DELETE",
      "Column" : ""
    } ],
    "MessageID" : "QueryRule",
    "ServiceName" : "Txn",
    "DetailMessageID" : "TxnQuery",
    "ruleId" : "BR_STDWizard",
    "ruleName" : "BR_STDWizard",
    "selectedExpressionID" : "deleteMenu0_SendMessage_24",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "Parameter" : "settingData",
        "Mandatory" : "N",
        "InputType" : "Component",
        "Value" : "grd0",
        "Column" : ""
      }, {
        "Parameter" : "DMLType",
        "Mandatory" : "Y",
        "InputType" : "Direct",
        "Value" : "DELETE",
        "Column" : ""
      } ]
    },
    "GetGridRowDataType" : "2"
  },
  "id" : "deleteMenu0"
},ruleFunction43,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction43();
						 } 
				 } else { 
						 ruleFunction43();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		function ruleFunction43(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [
      {
        Parameter: "PROJECTID",
        Mandatory: "Y",
        InputType: "Text",
          Value: sessionStorage.getItem("projectId"),
          Column: "PROJECTID",
      },
    ],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "ruleName" : "BR_STDQuery",
    "QueryRuleID" : "PRJ_QUERY_RULE_DEFINITION_Grcdu",
    "selectedExpressionID" : "deleteMenu0_SendMessage_25",
    "MSGGridInstance" : {
      "_setdata" : [{
        "Parameter" : "PROJECTID",
        "Mandatory" : "N",
        "InputType" : "Text",
        "Value" : sessionStorage.getItem("projectId"),
        "Column" : "PROJECTID", MultiKey : "",
        "Required" : "N"
      }]
    }
  },
  "id" : "deleteMenu0"
},ruleFunction44,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction44();
						 } 
				 } else { 
						 ruleFunction44();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction44(){ 
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "deleteMenu0_BindGridData_26",
    "listExpressionID" : "deleteMenu0_SendMessage_25",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "QUERYRULEID",
      "ColumnID" : "QUERYRULEID"
    }, {
      "ParameterID" : "QUERYGROUP",
      "ColumnID" : "QUERYGROUP"
    }, {
      "ParameterID" : "SQLSTATEMENT1",
      "ColumnID" : "SQLSTATEMENT1"
    }, {
      "ParameterID" : "SQLSTATEMENT2",
      "ColumnID" : "SQLSTATEMENT2"
    }, {
      "ParameterID" : "SQLSTATEMENT3",
      "ColumnID" : "SQLSTATEMENT3"
    }, {
      "ParameterID" : "INPUTPARAMETERS",
      "ColumnID" : "INPUTPARAMETERS"
    }, {
      "ParameterID" : "OUTPUTPARAMETERS",
      "ColumnID" : "OUTPUTPARAMETERS"
    }, {
      "ParameterID" : "QUERYTYPE",
      "ColumnID" : "QUERYTYPE"
    }, {
      "ParameterID" : "SERVICENAME",
      "ColumnID" : "SERVICENAME"
    }, {
      "ParameterID" : "DESCRIPTION",
      "ColumnID" : "DESCRIPTION"
    } ],
    "gridID" : "grd0",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID"
      }, {
        "ParameterID" : "QUERYRULEID",
        "ColumnID" : "QUERYRULEID"
      }, {
        "ParameterID" : "QUERYGROUP",
        "ColumnID" : "QUERYGROUP"
      }, {
        "ParameterID" : "SQLSTATEMENT1",
        "ColumnID" : "SQLSTATEMENT1"
      }, {
        "ParameterID" : "SQLSTATEMENT2",
        "ColumnID" : "SQLSTATEMENT2"
      }, {
        "ParameterID" : "SQLSTATEMENT3",
        "ColumnID" : "SQLSTATEMENT3"
      }, {
        "ParameterID" : "INPUTPARAMETERS",
        "ColumnID" : "INPUTPARAMETERS"
      }, {
        "ParameterID" : "OUTPUTPARAMETERS",
        "ColumnID" : "OUTPUTPARAMETERS"
      }, {
        "ParameterID" : "QUERYTYPE",
        "ColumnID" : "QUERYTYPE"
      }, {
        "ParameterID" : "SERVICENAME",
        "ColumnID" : "SERVICENAME"
      }, {
        "ParameterID" : "DESCRIPTION",
        "ColumnID" : "DESCRIPTION"
      } ]
    }
  },
  "id" : "deleteMenu0"
},ruleFunction45,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction45();
						 } 
				 } else { 
						 ruleFunction45();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction45(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "deleteMenu0_ClearGridData_68",
    "gridID" : "grdEditor"
  },
  "id" : "deleteMenu0"
},ruleFunction46,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction46();
						 } 
				 } else { 
						 ruleFunction46();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction46(){ 
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "deleteMenu0_BindPropertyData3_83",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "PRJ_QUERY_RULE_DEFINITION",
      "columns" : [ {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : "프로젝트 아이디, 해당 PM이 선정하는 프로젝트 코드[ATUM|BECOME|...]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYRULEID",
        "POSITION" : "2",
        "DESCRIPTION" : "QUERYRULE의 아이디[MENU_B2YFL|MENU_TreeData|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "100",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYGROUP",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "100",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT1",
        "POSITION" : "4",
        "DESCRIPTION" : "ORACLE SQL문, 원하는 데이터만을 불러오기 위한 SQL 소스코드[SELECT * FROM BASICLINETEMPLATE|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT2",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SQLSTATEMENT3",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "4000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "INPUTPARAMETERS",
        "POSITION" : "7",
        "DESCRIPTION" : "SQL QEURY문에서 INPUT 값으로 받아올 변수[BLOCKID|ITEMID|PROJECTID|...]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "2000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "OUTPUTPARAMETERS",
        "POSITION" : "8",
        "DESCRIPTION" : "QUERY 결과 OUTPUT값으로 받을 변수[SEQNUM,PROJECTID,BLOCKID|…]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "2000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:02:20.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "QUERYTYPE",
        "POSITION" : "9",
        "DESCRIPTION" : "QUERY가 자동으로 생성된 것인지 사용자가 지정해 준 것인지 구분[AUTO|MANUAL]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "10",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : "AUTO",
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "SERVICENAME",
        "POSITION" : "10",
        "DESCRIPTION" : "OUTPUT 값이 단일값인지 리스트인지 구분[Lst|Info]",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "10",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : "Lst",
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-08-05T00:03:08.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      }, {
        "SYSTEMID" : "ATUM",
        "TABLEID" : "PRJ_QUERY_RULE_DEFINITION",
        "COLUMNID" : "DESCRIPTION",
        "POSITION" : "11",
        "DESCRIPTION" : "QUERY_RULE에 대한 설명, 용도",
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLMNID" : null,
        "UPDATEDATE" : "2021-06-11T01:18:00.000+0000",
        "UPDATEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
        "RELEVANTCLASSID" : null,
        "RECORDHISTORY" : null,
        "TABLESPACE" : null,
        "TABLEINDEX" : null,
        "RECORDSIZE" : null,
        "RECORDCOUNT" : null,
        "TABLESIZE" : null,
        "TABLECHGDATE" : null,
        "TABLECHGUSER" : null,
        "DBCLASSMAKEFLAG" : null,
        "MAKECLASSREQ" : null,
        "MAKEFUNCTIONREQ" : null,
        "SYSTEMTYPE" : null,
        "isSortable" : true
      } ],
      "functionClassAttr" : [ {
        "CLASSATTRIBUTE" : "PROJECTID",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "SQL",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "SELECT DISTINCT PROJECTID FROM PRJ_QUERY_RULE_DEFINITION WHERE PROJECTID=@PROJECTID",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYRULEID",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYGROUP",
        "INPUTTYPE" : "Create",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT1",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT2",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SQLSTATEMENT3",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "INPUTPARAMETERS",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "OUTPUTPARAMETERS",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "QUERYTYPE",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "Define",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "AUTO|MANUAL",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "SERVICENAME",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "ChooseOnly",
        "CHOOSEMETHOD" : "Define",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "Lst",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "DESCRIPTION",
        "INPUTTYPE" : "Always",
        "INPUTMETHOD" : "DirectOnly",
        "CHOOSEMETHOD" : "None",
        "PROPERTYREFERENCE" : "N",
        "INPUTEXPRESSION" : "",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "N",
        "PARAMETERID" : ""
      } ],
      "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_Grcdu",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "PRJ_QUERY_RULE_DEFINITION_PROJECTID_IeoI3",
        "sessionFlag": "Y",
        "parameterId":"projectId"
      } ],
      "hasSort" : true
    }
  },
  "id" : "deleteMenu0"
},function(){$(e.target).removeAttr('disabled');},e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } 
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		 } catch(err) {
				 console.error('Function exception: '+err);//예외처리 메세지
				 console.trace();//호출 스택을 출력
				 $(e.target).removeAttr('disabled');
		 } finally {
				 $(e.target).removeAttr('disabled');
		 }
		 });


})



  //Step8. 우클릭 시 메뉴구성
  function bindFunctionContextMenu(span, panelID, functionID) {
    $(span).contextMenuCustom("rightClickMenu", {
      bindings: {
        Create: function () {
          $("#btnCreate").trigger("click");
        },
        Modify: function () {
          $("#btnModify").trigger("click");
        },
        Remove: function () {
          $("#btnRemove").trigger("click");
        },
        Refresh: function () {
          $("#btnClear").trigger("click");
        },
        Save: function () {
          $("#btnOK").trigger("click");
        },
        Download_ALLData: function () {
          commonUtil.ExcelDownloadAlldata(functionID, panelID);
        },
        Download_GridData: function () {
          var returnVal;
          var object = {
            data: {
              messageCheckedError: false,
              messageCheckedSuccess: false,
              messageCheckedConfirm: false,
              messageCheckedSend: false,
              messageCheckedWatting: false,
              messageCodeerror: "",
              messageCodesuccess: "",
              messageCodeconfirm: "",
              messageContinue: false,
              checkComponent: "",
              checkComponentHeaderName: "",
              checkComponentHeaderNameDisable: true,
              selectedGetOK: "",
              selectedGetCancle: "",
              GridID: "",
              selectedExpressionID: "",
              checkboxSelection: "allData",
            },

            id: "",
          };

          object.data.GridID = panelID;

          returnVal = rules.exceloutput(object, function () {});
        },
        Upload_Append: function () {
          commonUtil.showPopupExcelUploadFunction("Excel Upload", "append", 300, 400, arguments[1], "", functionID, panelID);
        },
        Upload_UpdateInsert: function () {
          commonUtil.showPopupExcelUploadFunction("Excel Upload", "updateinsert", 300, 400, arguments[1], "", functionID, panelID);
        },
        Upload_DeleteInsert: function () {
          commonUtil.showPopupExcelUploadFunction("Excel Upload", "deleteinsert", 300, 400, arguments[1], "", functionID, panelID);
        },
      },
    });
  }

  function bindFunctionContextMenu2(span, panelID2, functionID2) {
    $(span).contextMenuCustom("rightClickMenu2", {
      bindings: {
        Create: function () {
          $("#btnCreate").trigger("click");
        },
        Modify: function () {
          $("#btnModify").trigger("click");
        },
        Remove: function () {
          $("#btnRemove").trigger("click");
        },
        Refresh: function () {
          $("#btnClear").trigger("click");
        },
        Save: function () {
          $("#btnOK").trigger("click");
        },
        Download_ALLData: function () {
          commonUtil.ExcelDownloadAlldata(functionID2, panelID2);
        },
        Download_GridData: function () {
          var returnVal;
          var object = {
            data: {
              messageCheckedError: false,
              messageCheckedSuccess: false,
              messageCheckedConfirm: false,
              messageCheckedSend: false,
              messageCheckedWatting: false,
              messageCodeerror: "",
              messageCodesuccess: "",
              messageCodeconfirm: "",
              messageContinue: false,
              checkComponent: "",
              checkComponentHeaderName: "",
              checkComponentHeaderNameDisable: true,
              selectedGetOK: "",
              selectedGetCancle: "",
              GridID: "",
              selectedExpressionID: "",
              checkboxSelection: "allData",
            },

            id: "",
          };

          object.data.GridID = panelID2;

          returnVal = rules.exceloutput(object, function () {});
        },
        Upload_Append: function () {
          commonUtil.showPopupExcelUploadFunction("Excel Upload", "append", 300, 400, arguments[1], "", functionID2, panelID2);
        },
        Upload_UpdateInsert: function () {
          commonUtil.showPopupExcelUploadFunction("Excel Upload", "updateinsert", 300, 400, arguments[1], "", functionID2, panelID2);
        },
        Upload_DeleteInsert: function () {
          commonUtil.showPopupExcelUploadFunction("Excel Upload", "deleteinsert", 300, 400, arguments[1], "", functionID2, panelID2);
        },
      },
    });
  }
  //커스텀 포매터 테스트 중 (추후에 따로 뺄 것)
  // function custom_img_F(cellvalue, options, rowObject) {
  //   if (cellvalue.length > 0) {
  //     var html = "<img class='cell-image' src='../resources/css/theme/normal/images/" + cellvalue + ".png' width='40' height='40'/>";
  //     return html;
  //   } else {
  //     return "";
  //   }
  // }

  // function custom_date_F(cellval, opts) {
  //   var date = new Date(cellval);
  //   opts = $.extend({}, $.jgrid.formatter.date, opts);
  //   return $.fmatter2.util.DateFormat("", date, "Y-m-d", opts);
  // }

  // function custom_file_F(cellvalue, options, rowObject) {
  //   var str = "";
  //   if (rowObject.AttachID != "" && rowObject.AttachID != undefined) {
  //     str = "<span onclick='downloadZip(\"" + rowObject.AttachID + "\")' style='text-decoration: underline;' >FILE DOWNLOAD</span>";
  //   }
  //   return str;
  // }
});
