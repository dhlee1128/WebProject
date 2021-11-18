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
  "multiCombo",
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
  multiCombo,
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

  
  
  
  window.designMode='run';

		//다국어 설정 스크립트
		let element = angular.element(document.querySelector('#container'));
		angular.element(document).ready(function () {
			//This will be truthy if initialized and falsey otherwise.
			let isInitialized = element.injector();
			if(!isInitialized) { //레이어 팝업이 존재하는 경우 2번이상 호출될 수 있어 bootstrap 실행여부 체크.
				angular.bootstrap(document, ['multilanguage']);
				angular.resumeBootstrap();
				setTimeout(function() {
					//multilanguage angular 모듈 로드 이후 loading 이미지 제거
					let loadDiv = $('#multilangMask, #multiLangloading');
					if(loadDiv.length > 0) { //check exist
						loadDiv.hide();
						loadDiv.remove();
					}
				}, 300);
			}
		});


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
jqueryObj=$('#child-grd0').jqGrid({"userData":{},"loadtext":"Loading...","selarrrow":[],"onSelectAll":null,"xmlReader":{"repeatitems":true,"userdata":"userdata","total":"rows>total","records":"rows>records","root":"rows","row":"row","page":"rows>page","id":"[id]","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","row":"row","cell":"cell"}},"onHeaderClick":null,"caption":"WBS_FUNCTION","autoencode":false,"mtype":"GET","subGridModel":[],"treeReader":{},"keyIndex":false,"beforeProcessing":null,"id":"child-grd0","beforeRequest":null,"deselectAfterSort":true,"height":612,"recordtext":"{0} - {1} of {2}","lastsort":0,"autowidth":false,"scrollrows":false,"scroll":false,"lastpage":0,"colModel":[{"hidden":true,"resizable":true,"editable":false,"cellattr":"","index":"PROJECTID","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"PROJECTID","width":150,"editoptions":""},{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"FUNCTIONGROUPID","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"FUNCTIONGROUPID","width":150,"editoptions":""},{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"FUNCTIONSUBGROUPID","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"FUNCTIONSUBGROUPID","width":150,"editoptions":""},{"hidden":true,"resizable":true,"editable":false,"cellattr":"","index":"FUNCTIONID","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"FUNCTIONID","width":150,"editoptions":""},{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"FUNCTIONNAME","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"FUNCTIONNAME","width":150,"editoptions":""},{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"FUNCTIONDISCRIPTION","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"FUNCTIONDISCRIPTION","width":150,"editoptions":""},{"hidden":true,"resizable":true,"editable":false,"cellattr":"","index":"PROGRAMTYPE","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"PROGRAMTYPE","width":150,"editoptions":""},{"hidden":true,"resizable":true,"editable":false,"cellattr":"","index":"PROGRAMID","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"PROGRAMID","width":150,"editoptions":""},{"hidden":true,"resizable":true,"editable":false,"cellattr":"","index":"POSITION","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"POSITION","width":150,"editoptions":""},{"hidden":true,"resizable":true,"editable":false,"cellattr":"","index":"CREATETIME","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"CREATETIME","width":150,"editoptions":""},{"hidden":true,"resizable":true,"editable":false,"cellattr":"","index":"CREATEUSERID","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"CREATEUSERID","width":150,"editoptions":""},{"hidden":true,"resizable":true,"editable":false,"cellattr":"","index":"DESCRIPTION","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":150,"formatter":"","formatoptions":"","name":"DESCRIPTION","width":150,"editoptions":""}],"grouping":false,"footerrow":false,"disableClick":false,"sortname":"","multiselect":false,"altRows":false,"treeANode":-1,"rowList":[],"subGrid":false,"multiboxonly":false,"viewrecords":true,"tree_root_level":0,"pgbuttons":true,"pginput":true,"search":false,"datatype":"local","ignoreCase":false,"sortorder":"asc","recordpos":"right","editurl":null,"onInitGrid":null,"altclass":"ui-priority-secondary","gridstate":"visible","loadonce":false,"url":"","loadui":"enable","toolbar":[false,""],"hoverrows":true,"rowTotal":null,"width":700,"multiSort":false,"postData":{"nd":1635815935507,"page":1,"sord":"asc","rows":20,"_search":false,"sidx":""},"multikey":false,"subGridWidth":20,"data":[],"forceFit":false,"loadBeforeSend":null,"pager":"","hiddengrid":false,"rowNum":"","cellsubmit":"clientArray","ondblClickRow":null,"scrollOffset":18,"cmTemplate":{},"treeGrid":false,"useProp":true,"groupingView":{"summary":[],"groupOrder":[],"plusicon":"ui-icon-circlesmall-plus","showSummaryOnHide":false,"summaryval":[],"groupField":[],"minusicon":"ui-icon-circlesmall-minus","sortitems":[],"groupSummary":[],"groupText":[],"displayField":[],"groupColumnShow":[],"sortnames":[]},"pgtext":"Page {0} of {1}","loadError":null,"headertitles":false,"jsonReader":{"repeatitems":true,"userdata":"userdata","total":"total","records":"records","root":"rows","page":"page","id":"id","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","cell":"cell"}},"savedRow":[],"shrinkToFit":false,"totaltime":0,"remapColumns":[],"page":1,"viewsortcols":[false,"vertical",true],"selrow":null,"multiselectWidth":20,"userDataOnFooter":false,"hidegrid":false,"_index":{},"records":0,"nv":0,"ExpandColumn":null,"idPrefix":"","beforeSelectRow":null,"cellEdit":true,"reccount":0,"onRightClickRow":null,"rownumWidth":25,"scrollTimeout":40,"onPaging":null,"gridComplete":null,"afterInsertRow":null,"emptyrecords":"No records to view","onSortCol":null,"toppager":false,"prmNames":{"subgridid":"id","sort":"sidx","rows":"rows","editoper":"edit","search":"_search","nd":"nd","deloper":"del","totalrows":"totalrows","addoper":"add","oper":"oper","page":"page","id":"id","order":"sord","npage":null},"direction":"ltr","resizeclass":"","keyName":false,"localReader":{"repeatitems":false,"userdata":"userdata","total":"total","records":"records","root":"rows","page":"page","id":"id","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","cell":"cell"}},"cellLayout":5,"gridview":false,"gridMultiLang":false,"ajaxGridOptions":{},"loadComplete":null,"treeGridModel":"nested","pagerpos":"center","tblwidth":1800,"onSelectRow":null,"rownumbers":false});
componentUtil.getInstance().setObject("grd0",jqueryObj);

multilanguage.executeMultiLanguageJqgrid(jqueryObj);

jqueryObj=$('#child-tre0').dynatree({"children":{"isFolder":true,"children":[{"title":"Sub-item 1.1"},{"title":"Sub-item 1.2"}],"title":"Folder 1","key":"folder1"}});
componentUtil.getInstance().setObject("tre0",jqueryObj);

multilanguage.executeMultiLanguageJqgrid(jqueryObj);

jqueryObj=$('#child-grdEditor').jqGrid({"userData":{},"loadtext":"Loading...","selarrrow":[],"onSelectAll":null,"xmlReader":{"repeatitems":true,"userdata":"userdata","total":"rows>total","records":"rows>records","root":"rows","row":"row","page":"rows>page","id":"[id]","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","row":"row","cell":"cell"}},"onHeaderClick":null,"caption":"Editor","autoencode":false,"mtype":"GET","subGridModel":[],"treeReader":{},"keyIndex":false,"beforeProcessing":null,"id":"child-grdEditor","beforeRequest":null,"deselectAfterSort":true,"height":642,"recordtext":"{0} - {1} of {2}","lastsort":0,"autowidth":false,"scrollrows":false,"scroll":false,"lastpage":0,"colModel":[{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"Name","lso":"","sortable":true,"align":"left","title":true,"widthOrg":140,"edittype":"","formatter":"","formatoptions":"","name":"Name","width":185,"editoptions":""},{"hidden":false,"resizable":true,"editable":true,"cellattr":"","index":"Value","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":130,"formatter":"","formatoptions":"","name":"Value","width":175,"editoptions":""}],"grouping":false,"footerrow":false,"disableClick":false,"sortname":"","multiselect":false,"altRows":false,"treeANode":-1,"subGrid":false,"multiboxonly":false,"viewrecords":true,"tree_root_level":0,"pgbuttons":true,"pginput":true,"search":false,"datatype":"local","ignoreCase":false,"sortorder":"asc","recordpos":"right","editurl":null,"onInitGrid":null,"altclass":"ui-priority-secondary","gridstate":"visible","loadonce":false,"url":"","loadui":"enable","toolbar":[false,""],"hoverrows":true,"rowTotal":null,"width":290,"multiSort":false,"postData":{"nd":1635815935530,"page":1,"sord":"asc","rows":20,"_search":false,"sidx":""},"multikey":false,"subGridWidth":20,"data":[],"forceFit":false,"loadBeforeSend":null,"pager":"","hiddengrid":false,"cellsubmit":"clientArray","ondblClickRow":null,"scrollOffset":18,"cmTemplate":{},"treeGrid":false,"useProp":true,"groupingView":{"summary":[],"groupOrder":[],"plusicon":"ui-icon-circlesmall-plus","showSummaryOnHide":false,"summaryval":[],"groupField":[],"minusicon":"ui-icon-circlesmall-minus","sortitems":[],"groupSummary":[],"groupText":[],"displayField":[],"groupColumnShow":[],"sortnames":[]},"pgtext":"Page {0} of {1}","loadError":null,"headertitles":false,"jsonReader":{"repeatitems":true,"userdata":"userdata","total":"total","records":"records","root":"rows","page":"page","id":"id","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","cell":"cell"}},"savedRow":[],"shrinkToFit":false,"totaltime":1,"remapColumns":[],"page":1,"viewsortcols":[false,"vertical",true],"selrow":null,"multiselectWidth":20,"userDataOnFooter":false,"hidegrid":false,"_index":{},"records":0,"nv":0,"ExpandColumn":null,"idPrefix":"","beforeSelectRow":null,"cellEdit":true,"reccount":0,"onRightClickRow":null,"rownumWidth":25,"scrollTimeout":40,"onPaging":null,"gridComplete":null,"afterInsertRow":null,"emptyrecords":"No records to view","onSortCol":null,"toppager":false,"prmNames":{"subgridid":"id","sort":"sidx","rows":"rows","editoper":"edit","search":"_search","nd":"nd","deloper":"del","totalrows":"totalrows","addoper":"add","oper":"oper","page":"page","id":"id","order":"sord","npage":null},"direction":"ltr","resizeclass":"","keyName":false,"localReader":{"repeatitems":false,"userdata":"userdata","total":"total","records":"records","root":"rows","page":"page","id":"id","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","cell":"cell"}},"cellLayout":5,"gridview":false,"ajaxGridOptions":{},"loadComplete":null,"treeGridModel":"nested","pagerpos":"center","tblwidth":272,"onSelectRow":null});
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
      "tableId" : "WBS_FUNCTION",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : "PROJECTID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONGROUPID",
        "POSITION" : "2",
        "DESCRIPTION" : "FUNCTIONGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONSUBGROUPID",
        "POSITION" : "3",
        "DESCRIPTION" : "FUNCTIONSUBGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONID",
        "POSITION" : "4",
        "DESCRIPTION" : "FUNCTIONID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONNAME",
        "POSITION" : "5",
        "DESCRIPTION" : "FUNCTIONNAME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONDISCRIPTION",
        "POSITION" : "6",
        "DESCRIPTION" : "FUNCTIONDISCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMTYPE",
        "POSITION" : "7",
        "DESCRIPTION" : "PROGRAMTYPE",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMID",
        "POSITION" : "8",
        "DESCRIPTION" : "PROGRAMID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "POSITION",
        "POSITION" : "9",
        "DESCRIPTION" : "POSITION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "NUMBER",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATETIME",
        "POSITION" : "10",
        "DESCRIPTION" : "CREATETIME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "DATE",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATEUSERID",
        "POSITION" : "11",
        "DESCRIPTION" : "CREATEUSERID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "DESCRIPTION",
        "POSITION" : "12",
        "DESCRIPTION" : "DESCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "INPUTEXPRESSION" : "SELECT PROJECTID FROM KHPI_PROJECT WHERE PROJECTID=@PROJECTID",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "FUNCTIONGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONSUBGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONID",
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
        "CLASSATTRIBUTE" : "FUNCTIONNAME",
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
        "CLASSATTRIBUTE" : "FUNCTIONDISCRIPTION",
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
        "CLASSATTRIBUTE" : "PROGRAMTYPE",
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
        "CLASSATTRIBUTE" : "PROGRAMID",
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
        "CLASSATTRIBUTE" : "POSITION",
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
        "CLASSATTRIBUTE" : "CREATETIME",
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
        "CLASSATTRIBUTE" : "CREATEUSERID",
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
      "queryRuleId" : "WBS_FUNCTION_6hius",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "WBS_FUNCTION_PROJECTCODE_GRMP6",
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
      "tableId" : "WBS_FUNCTION",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : "PROJECTID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONGROUPID",
        "POSITION" : "2",
        "DESCRIPTION" : "FUNCTIONGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONSUBGROUPID",
        "POSITION" : "3",
        "DESCRIPTION" : "FUNCTIONSUBGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONID",
        "POSITION" : "4",
        "DESCRIPTION" : "FUNCTIONID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONNAME",
        "POSITION" : "5",
        "DESCRIPTION" : "FUNCTIONNAME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONDISCRIPTION",
        "POSITION" : "6",
        "DESCRIPTION" : "FUNCTIONDISCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMTYPE",
        "POSITION" : "7",
        "DESCRIPTION" : "PROGRAMTYPE",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMID",
        "POSITION" : "8",
        "DESCRIPTION" : "PROGRAMID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "POSITION",
        "POSITION" : "9",
        "DESCRIPTION" : "POSITION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "NUMBER",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATETIME",
        "POSITION" : "10",
        "DESCRIPTION" : "CREATETIME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "DATE",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATEUSERID",
        "POSITION" : "11",
        "DESCRIPTION" : "CREATEUSERID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "DESCRIPTION",
        "POSITION" : "12",
        "DESCRIPTION" : "DESCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "INPUTEXPRESSION" : "SELECT PROJECTID FROM KHPI_PROJECT WHERE PROJECTID=@PROJECTID",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "FUNCTIONGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONSUBGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONID",
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
        "CLASSATTRIBUTE" : "FUNCTIONNAME",
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
        "CLASSATTRIBUTE" : "FUNCTIONDISCRIPTION",
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
        "CLASSATTRIBUTE" : "PROGRAMTYPE",
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
        "CLASSATTRIBUTE" : "PROGRAMID",
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
        "CLASSATTRIBUTE" : "POSITION",
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
        "CLASSATTRIBUTE" : "CREATETIME",
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
        "CLASSATTRIBUTE" : "CREATEUSERID",
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
      "queryRuleId" : "WBS_FUNCTION_6hius",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "WBS_FUNCTION_PROJECTCODE_GRMP6",
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
    "selectedMSGParameterGrid" :  [ {
      "Parameter" : "PROJECTID",
      "Mandatory" : "Y",
      InputType: "Text",
      Value: sessionStorage.getItem("projectId"),
      "Column" : "PROJECTID"
    }],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "WBS_FUNCTION_6hius",
    "selectedExpressionID" : "uploadAppendMenu0_SendMessage_32",
    "MSGGridInstance" : {
      "_setdata" : null
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
      "ParameterID" : "FUNCTIONGROUPID",
      "ColumnID" : "FUNCTIONGROUPID"
    }, {
      "ParameterID" : "FUNCTIONSUBGROUPID",
      "ColumnID" : "FUNCTIONSUBGROUPID"
    }, {
      "ParameterID" : "FUNCTIONID",
      "ColumnID" : "FUNCTIONID"
    }, {
      "ParameterID" : "FUNCTIONNAME",
      "ColumnID" : "FUNCTIONNAME"
    }, {
      "ParameterID" : "FUNCTIONDISCRIPTION",
      "ColumnID" : "FUNCTIONDISCRIPTION"
    }, {
      "ParameterID" : "PROGRAMTYPE",
      "ColumnID" : "PROGRAMTYPE"
    }, {
      "ParameterID" : "PROGRAMID",
      "ColumnID" : "PROGRAMID"
    }, {
      "ParameterID" : "POSITION",
      "ColumnID" : "POSITION"
    }, {
      "ParameterID" : "CREATETIME",
      "ColumnID" : "CREATETIME"
    }, {
      "ParameterID" : "CREATEUSERID",
      "ColumnID" : "CREATEUSERID"
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
        "ParameterID" : "FUNCTIONGROUPID",
        "ColumnID" : "FUNCTIONGROUPID"
      }, {
        "ParameterID" : "FUNCTIONSUBGROUPID",
        "ColumnID" : "FUNCTIONSUBGROUPID"
      }, {
        "ParameterID" : "FUNCTIONID",
        "ColumnID" : "FUNCTIONID"
      }, {
        "ParameterID" : "FUNCTIONNAME",
        "ColumnID" : "FUNCTIONNAME"
      }, {
        "ParameterID" : "FUNCTIONDISCRIPTION",
        "ColumnID" : "FUNCTIONDISCRIPTION"
      }, {
        "ParameterID" : "PROGRAMTYPE",
        "ColumnID" : "PROGRAMTYPE"
      }, {
        "ParameterID" : "PROGRAMID",
        "ColumnID" : "PROGRAMID"
      }, {
        "ParameterID" : "POSITION",
        "ColumnID" : "POSITION"
      }, {
        "ParameterID" : "CREATETIME",
        "ColumnID" : "CREATETIME"
      }, {
        "ParameterID" : "CREATEUSERID",
        "ColumnID" : "CREATEUSERID"
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
      "tableId" : "WBS_FUNCTION",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : "PROJECTID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONGROUPID",
        "POSITION" : "2",
        "DESCRIPTION" : "FUNCTIONGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONSUBGROUPID",
        "POSITION" : "3",
        "DESCRIPTION" : "FUNCTIONSUBGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONID",
        "POSITION" : "4",
        "DESCRIPTION" : "FUNCTIONID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONNAME",
        "POSITION" : "5",
        "DESCRIPTION" : "FUNCTIONNAME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONDISCRIPTION",
        "POSITION" : "6",
        "DESCRIPTION" : "FUNCTIONDISCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMTYPE",
        "POSITION" : "7",
        "DESCRIPTION" : "PROGRAMTYPE",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMID",
        "POSITION" : "8",
        "DESCRIPTION" : "PROGRAMID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "POSITION",
        "POSITION" : "9",
        "DESCRIPTION" : "POSITION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "NUMBER",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATETIME",
        "POSITION" : "10",
        "DESCRIPTION" : "CREATETIME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "DATE",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATEUSERID",
        "POSITION" : "11",
        "DESCRIPTION" : "CREATEUSERID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "DESCRIPTION",
        "POSITION" : "12",
        "DESCRIPTION" : "DESCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "INPUTEXPRESSION" : "SELECT PROJECTID FROM KHPI_PROJECT WHERE PROJECTID=@PROJECTID",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "FUNCTIONGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONSUBGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONID",
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
        "CLASSATTRIBUTE" : "FUNCTIONNAME",
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
        "CLASSATTRIBUTE" : "FUNCTIONDISCRIPTION",
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
        "CLASSATTRIBUTE" : "PROGRAMTYPE",
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
        "CLASSATTRIBUTE" : "PROGRAMID",
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
        "CLASSATTRIBUTE" : "POSITION",
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
        "CLASSATTRIBUTE" : "CREATETIME",
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
        "CLASSATTRIBUTE" : "CREATEUSERID",
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
      "queryRuleId" : "WBS_FUNCTION_6hius",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "WBS_FUNCTION_PROJECTCODE_GRMP6",
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
    "selectedExpressionID" : "btnUpdate_Confirm_88"
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
    "selectedMSGParameterGrid" :  [ {
      "Parameter" : "PROJECTID",
      "Mandatory" : "Y",
      InputType: "Text",
      Value: sessionStorage.getItem("projectId"),
      "Column" : "PROJECTID"
    }],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "WBS_FUNCTION_6hius",
    "selectedExpressionID" : "btnUpdate_SendMessage_13",
    "MSGGridInstance" : {
      "_setdata" : null
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
      "ParameterID" : "FUNCTIONGROUPID",
      "ColumnID" : "FUNCTIONGROUPID"
    }, {
      "ParameterID" : "FUNCTIONSUBGROUPID",
      "ColumnID" : "FUNCTIONSUBGROUPID"
    }, {
      "ParameterID" : "FUNCTIONID",
      "ColumnID" : "FUNCTIONID"
    }, {
      "ParameterID" : "FUNCTIONNAME",
      "ColumnID" : "FUNCTIONNAME"
    }, {
      "ParameterID" : "FUNCTIONDISCRIPTION",
      "ColumnID" : "FUNCTIONDISCRIPTION"
    }, {
      "ParameterID" : "PROGRAMTYPE",
      "ColumnID" : "PROGRAMTYPE"
    }, {
      "ParameterID" : "PROGRAMID",
      "ColumnID" : "PROGRAMID"
    }, {
      "ParameterID" : "POSITION",
      "ColumnID" : "POSITION"
    }, {
      "ParameterID" : "CREATETIME",
      "ColumnID" : "CREATETIME"
    }, {
      "ParameterID" : "CREATEUSERID",
      "ColumnID" : "CREATEUSERID"
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
        "ParameterID" : "FUNCTIONGROUPID",
        "ColumnID" : "FUNCTIONGROUPID"
      }, {
        "ParameterID" : "FUNCTIONSUBGROUPID",
        "ColumnID" : "FUNCTIONSUBGROUPID"
      }, {
        "ParameterID" : "FUNCTIONID",
        "ColumnID" : "FUNCTIONID"
      }, {
        "ParameterID" : "FUNCTIONNAME",
        "ColumnID" : "FUNCTIONNAME"
      }, {
        "ParameterID" : "FUNCTIONDISCRIPTION",
        "ColumnID" : "FUNCTIONDISCRIPTION"
      }, {
        "ParameterID" : "PROGRAMTYPE",
        "ColumnID" : "PROGRAMTYPE"
      }, {
        "ParameterID" : "PROGRAMID",
        "ColumnID" : "PROGRAMID"
      }, {
        "ParameterID" : "POSITION",
        "ColumnID" : "POSITION"
      }, {
        "ParameterID" : "CREATETIME",
        "ColumnID" : "CREATETIME"
      }, {
        "ParameterID" : "CREATEUSERID",
        "ColumnID" : "CREATEUSERID"
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
      "tableId" : "WBS_FUNCTION",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : "PROJECTID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONGROUPID",
        "POSITION" : "2",
        "DESCRIPTION" : "FUNCTIONGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONSUBGROUPID",
        "POSITION" : "3",
        "DESCRIPTION" : "FUNCTIONSUBGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONID",
        "POSITION" : "4",
        "DESCRIPTION" : "FUNCTIONID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONNAME",
        "POSITION" : "5",
        "DESCRIPTION" : "FUNCTIONNAME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONDISCRIPTION",
        "POSITION" : "6",
        "DESCRIPTION" : "FUNCTIONDISCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMTYPE",
        "POSITION" : "7",
        "DESCRIPTION" : "PROGRAMTYPE",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMID",
        "POSITION" : "8",
        "DESCRIPTION" : "PROGRAMID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "POSITION",
        "POSITION" : "9",
        "DESCRIPTION" : "POSITION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "NUMBER",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATETIME",
        "POSITION" : "10",
        "DESCRIPTION" : "CREATETIME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "DATE",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATEUSERID",
        "POSITION" : "11",
        "DESCRIPTION" : "CREATEUSERID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "DESCRIPTION",
        "POSITION" : "12",
        "DESCRIPTION" : "DESCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "INPUTEXPRESSION" : "SELECT PROJECTID FROM KHPI_PROJECT WHERE PROJECTID=@PROJECTID",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "FUNCTIONGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONSUBGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONID",
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
        "CLASSATTRIBUTE" : "FUNCTIONNAME",
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
        "CLASSATTRIBUTE" : "FUNCTIONDISCRIPTION",
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
        "CLASSATTRIBUTE" : "PROGRAMTYPE",
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
        "CLASSATTRIBUTE" : "PROGRAMID",
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
        "CLASSATTRIBUTE" : "POSITION",
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
        "CLASSATTRIBUTE" : "CREATETIME",
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
        "CLASSATTRIBUTE" : "CREATEUSERID",
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
      "queryRuleId" : "WBS_FUNCTION_6hius",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "WBS_FUNCTION_PROJECTCODE_GRMP6",
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
    "selectedExpressionID" : "btnCreate_Confirm_87"
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
    "selectedMSGParameterGrid" :  [ {
      "Parameter" : "PROJECTID",
      "Mandatory" : "Y",
      InputType: "Text",
      Value: sessionStorage.getItem("projectId"),
      "Column" : "PROJECTID"
    }],
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "WBS_FUNCTION_6hius",
    "selectedExpressionID" : "btnCreate_SendMessage_9",
    "MSGGridInstance" : {
      "_setdata" : null
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
      "ParameterID" : "FUNCTIONGROUPID",
      "ColumnID" : "FUNCTIONGROUPID"
    }, {
      "ParameterID" : "FUNCTIONSUBGROUPID",
      "ColumnID" : "FUNCTIONSUBGROUPID"
    }, {
      "ParameterID" : "FUNCTIONID",
      "ColumnID" : "FUNCTIONID"
    }, {
      "ParameterID" : "FUNCTIONNAME",
      "ColumnID" : "FUNCTIONNAME"
    }, {
      "ParameterID" : "FUNCTIONDISCRIPTION",
      "ColumnID" : "FUNCTIONDISCRIPTION"
    }, {
      "ParameterID" : "PROGRAMTYPE",
      "ColumnID" : "PROGRAMTYPE"
    }, {
      "ParameterID" : "PROGRAMID",
      "ColumnID" : "PROGRAMID"
    }, {
      "ParameterID" : "POSITION",
      "ColumnID" : "POSITION"
    }, {
      "ParameterID" : "CREATETIME",
      "ColumnID" : "CREATETIME"
    }, {
      "ParameterID" : "CREATEUSERID",
      "ColumnID" : "CREATEUSERID"
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
        "ParameterID" : "FUNCTIONGROUPID",
        "ColumnID" : "FUNCTIONGROUPID"
      }, {
        "ParameterID" : "FUNCTIONSUBGROUPID",
        "ColumnID" : "FUNCTIONSUBGROUPID"
      }, {
        "ParameterID" : "FUNCTIONID",
        "ColumnID" : "FUNCTIONID"
      }, {
        "ParameterID" : "FUNCTIONNAME",
        "ColumnID" : "FUNCTIONNAME"
      }, {
        "ParameterID" : "FUNCTIONDISCRIPTION",
        "ColumnID" : "FUNCTIONDISCRIPTION"
      }, {
        "ParameterID" : "PROGRAMTYPE",
        "ColumnID" : "PROGRAMTYPE"
      }, {
        "ParameterID" : "PROGRAMID",
        "ColumnID" : "PROGRAMID"
      }, {
        "ParameterID" : "POSITION",
        "ColumnID" : "POSITION"
      }, {
        "ParameterID" : "CREATETIME",
        "ColumnID" : "CREATETIME"
      }, {
        "ParameterID" : "CREATEUSERID",
        "ColumnID" : "CREATEUSERID"
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
      "tableId" : "WBS_FUNCTION",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : "PROJECTID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONGROUPID",
        "POSITION" : "2",
        "DESCRIPTION" : "FUNCTIONGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONSUBGROUPID",
        "POSITION" : "3",
        "DESCRIPTION" : "FUNCTIONSUBGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONID",
        "POSITION" : "4",
        "DESCRIPTION" : "FUNCTIONID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONNAME",
        "POSITION" : "5",
        "DESCRIPTION" : "FUNCTIONNAME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONDISCRIPTION",
        "POSITION" : "6",
        "DESCRIPTION" : "FUNCTIONDISCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMTYPE",
        "POSITION" : "7",
        "DESCRIPTION" : "PROGRAMTYPE",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMID",
        "POSITION" : "8",
        "DESCRIPTION" : "PROGRAMID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "POSITION",
        "POSITION" : "9",
        "DESCRIPTION" : "POSITION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "NUMBER",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATETIME",
        "POSITION" : "10",
        "DESCRIPTION" : "CREATETIME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "DATE",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATEUSERID",
        "POSITION" : "11",
        "DESCRIPTION" : "CREATEUSERID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "DESCRIPTION",
        "POSITION" : "12",
        "DESCRIPTION" : "DESCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "INPUTEXPRESSION" : "SELECT PROJECTID FROM KHPI_PROJECT WHERE PROJECTID=@PROJECTID",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "FUNCTIONGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONSUBGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONID",
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
        "CLASSATTRIBUTE" : "FUNCTIONNAME",
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
        "CLASSATTRIBUTE" : "FUNCTIONDISCRIPTION",
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
        "CLASSATTRIBUTE" : "PROGRAMTYPE",
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
        "CLASSATTRIBUTE" : "PROGRAMID",
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
        "CLASSATTRIBUTE" : "POSITION",
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
        "CLASSATTRIBUTE" : "CREATETIME",
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
        "CLASSATTRIBUTE" : "CREATEUSERID",
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
      "queryRuleId" : "WBS_FUNCTION_6hius",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "WBS_FUNCTION_PROJECTCODE_GRMP6",
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
    let officeWBS = "WBS";
    window.parent.document.querySelector('#itemNav').innerHTML = "> "+officeWBS;
    
    var returnVal; 
      returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" :  [ {
      "Parameter" : "PROJECTID",
      "Mandatory" : "Y",
      InputType: "Text",
      Value: sessionStorage.getItem("projectId"),
      "Column" : "PROJECTID"
    }],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "WBS_FUNCTION_6hius",
    "selectedExpressionID" : "Initialize_SendMessage_0",
    "MSGGridInstance" : {
      "_setdata" : null
    }
  }
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
    "listExpressionID" : "Initialize_SendMessage_0",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "FUNCTIONGROUPID",
      "ColumnID" : "FUNCTIONGROUPID"
    }, {
      "ParameterID" : "FUNCTIONSUBGROUPID",
      "ColumnID" : "FUNCTIONSUBGROUPID"
    }, {
      "ParameterID" : "FUNCTIONID",
      "ColumnID" : "FUNCTIONID"
    }, {
      "ParameterID" : "FUNCTIONNAME",
      "ColumnID" : "FUNCTIONNAME"
    }, {
      "ParameterID" : "FUNCTIONDISCRIPTION",
      "ColumnID" : "FUNCTIONDISCRIPTION"
    }, {
      "ParameterID" : "PROGRAMTYPE",
      "ColumnID" : "PROGRAMTYPE"
    }, {
      "ParameterID" : "PROGRAMID",
      "ColumnID" : "PROGRAMID"
    }, {
      "ParameterID" : "POSITION",
      "ColumnID" : "POSITION"
    }, {
      "ParameterID" : "CREATETIME",
      "ColumnID" : "CREATETIME"
    }, {
      "ParameterID" : "CREATEUSERID",
      "ColumnID" : "CREATEUSERID"
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
        "ParameterID" : "FUNCTIONGROUPID",
        "ColumnID" : "FUNCTIONGROUPID"
      }, {
        "ParameterID" : "FUNCTIONSUBGROUPID",
        "ColumnID" : "FUNCTIONSUBGROUPID"
      }, {
        "ParameterID" : "FUNCTIONID",
        "ColumnID" : "FUNCTIONID"
      }, {
        "ParameterID" : "FUNCTIONNAME",
        "ColumnID" : "FUNCTIONNAME"
      }, {
        "ParameterID" : "FUNCTIONDISCRIPTION",
        "ColumnID" : "FUNCTIONDISCRIPTION"
      }, {
        "ParameterID" : "PROGRAMTYPE",
        "ColumnID" : "PROGRAMTYPE"
      }, {
        "ParameterID" : "PROGRAMID",
        "ColumnID" : "PROGRAMID"
      }, {
        "ParameterID" : "POSITION",
        "ColumnID" : "POSITION"
      }, {
        "ParameterID" : "CREATETIME",
        "ColumnID" : "CREATETIME"
      }, {
        "ParameterID" : "CREATEUSERID",
        "ColumnID" : "CREATEUSERID"
      }, {
        "ParameterID" : "DESCRIPTION",
        "ColumnID" : "DESCRIPTION"
      } ]
    }
  }
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
      "tableId" : "WBS_FUNCTION",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : "PROJECTID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONGROUPID",
        "POSITION" : "2",
        "DESCRIPTION" : "FUNCTIONGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONSUBGROUPID",
        "POSITION" : "3",
        "DESCRIPTION" : "FUNCTIONSUBGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONID",
        "POSITION" : "4",
        "DESCRIPTION" : "FUNCTIONID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONNAME",
        "POSITION" : "5",
        "DESCRIPTION" : "FUNCTIONNAME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONDISCRIPTION",
        "POSITION" : "6",
        "DESCRIPTION" : "FUNCTIONDISCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMTYPE",
        "POSITION" : "7",
        "DESCRIPTION" : "PROGRAMTYPE",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMID",
        "POSITION" : "8",
        "DESCRIPTION" : "PROGRAMID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "POSITION",
        "POSITION" : "9",
        "DESCRIPTION" : "POSITION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "NUMBER",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATETIME",
        "POSITION" : "10",
        "DESCRIPTION" : "CREATETIME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "DATE",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATEUSERID",
        "POSITION" : "11",
        "DESCRIPTION" : "CREATEUSERID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "DESCRIPTION",
        "POSITION" : "12",
        "DESCRIPTION" : "DESCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "INPUTEXPRESSION" : "SELECT PROJECTID FROM KHPI_PROJECT WHERE PROJECTID=@PROJECTID",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "FUNCTIONGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONSUBGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONID",
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
        "CLASSATTRIBUTE" : "FUNCTIONNAME",
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
        "CLASSATTRIBUTE" : "FUNCTIONDISCRIPTION",
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
        "CLASSATTRIBUTE" : "PROGRAMTYPE",
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
        "CLASSATTRIBUTE" : "PROGRAMID",
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
        "CLASSATTRIBUTE" : "POSITION",
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
        "CLASSATTRIBUTE" : "CREATETIME",
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
        "CLASSATTRIBUTE" : "CREATEUSERID",
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
      "queryRuleId" : "WBS_FUNCTION_6hius",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "WBS_FUNCTION_PROJECTCODE_GRMP6",
        "sessionFlag": "Y",
        "parameterId":"projectId"
      } ],
      "hasSort" : true
    }
  }
},ruleFunction24);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
									 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
											 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
									 } else { 
											 ruleFunction24();
									 } 
						 } else { 
								 ruleFunction24();
						 } 
				 }else {
						 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
						 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
				 } 
		};
		function ruleFunction24(){ 
			 returnVal =  customRules.bindtreenodes({
  "data" : {
    "checkComponent" : "",
    "checkComponentHeaderName" : "",
    "checkComponentHeaderNameDisable" : false,
    "selectedParameterGrid" : [ ],
    "treeID" : "tre0",
    "depthQuery" : [ {
      "sql" : "SELECT FUNCTIONGROUPID FROM WBS_FUNCTION WHERE PROJECTID=@PROJECTID ORDER BY FUNCTIONGROUPID",
      "queryRuleId" : "Depth1_WBS_FUNCTION_zzjMT",
      "selectedMSGParameterGrid" : [ {
        "Parameter" : "PROJECTID",
        "Mandatory" : "Y",
        "InputType" : "Text",
        "Value" : sessionStorage.getItem("projectId"),
        "Column" : "PROJECTID"
        }]
    }, {
      "sql" : "SELECT FUNCTIONSUBGROUPID FROM WBS_FUNCTION WHERE PROJECTID=@PROJECTID AND FUNCTIONGROUPID=@FUNCTIONGROUPID ORDER BY FUNCTIONSUBGROUPID",
      "queryRuleId" : "Depth2_WBS_FUNCTION_2V5bO",
      "selectedMSGParameterGrid" : [ {
        "Parameter" : "PROJECTID",
        "Mandatory" : "Y",
        "InputType" : "Text",
        "Value" : sessionStorage.getItem("projectId"),
        "Column" : "PROJECTID"
        }]
    } ],
    "selectedSQLExpression" : "",
    "selectedDefineString" : "",
    "selectedGetValueColumn" : "",
    "selectedExpressionID" : "Initialize_BindTreeNodes_19"
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
    "selectedMSGParameterGrid" :  [ {
      "Parameter" : "PROJECTID",
      "Mandatory" : "Y",
      InputType: "Text",
      Value: sessionStorage.getItem("projectId"),
      "Column" : "PROJECTID"
    }],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "WBS_FUNCTION_6hius",
    "selectedExpressionID" : "downloadAllDataMenu0_SendMessage_28",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "Parameter" : "PROJECTID",
        "Mandatory" : "Y",
        InputType: "Text",
        Value: sessionStorage.getItem("projectId"),
        "Column" : "PROJECTID"
      }]
    }
  },
  "id" : "downloadAllDataMenu0"
},ruleFunction26,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction26();
						 } 
				 } else { 
						 ruleFunction26();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		function ruleFunction26(){ 
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
    "mode" : "Delete Insert"
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
		function ruleFunction28(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [ {
      "Parameter" : "PROJECTID",
      "Mandatory" : "Y",
      InputType: "Text",
      Value: sessionStorage.getItem("projectId"),
      "Column" : "PROJECTID"
    }],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "WBS_FUNCTION_6hius",
    "selectedExpressionID" : "uploadDeleteInsertMenu0_SendMessage_40",
    "MSGGridInstance" : {
      "_setdata" : null
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
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "uploadDeleteInsertMenu0_BindGridData_41",
    "listExpressionID" : "uploadDeleteInsertMenu0_SendMessage_40",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "FUNCTIONGROUPID",
      "ColumnID" : "FUNCTIONGROUPID"
    }, {
      "ParameterID" : "FUNCTIONSUBGROUPID",
      "ColumnID" : "FUNCTIONSUBGROUPID"
    }, {
      "ParameterID" : "FUNCTIONID",
      "ColumnID" : "FUNCTIONID"
    }, {
      "ParameterID" : "FUNCTIONNAME",
      "ColumnID" : "FUNCTIONNAME"
    }, {
      "ParameterID" : "FUNCTIONDISCRIPTION",
      "ColumnID" : "FUNCTIONDISCRIPTION"
    }, {
      "ParameterID" : "PROGRAMTYPE",
      "ColumnID" : "PROGRAMTYPE"
    }, {
      "ParameterID" : "PROGRAMID",
      "ColumnID" : "PROGRAMID"
    }, {
      "ParameterID" : "POSITION",
      "ColumnID" : "POSITION"
    }, {
      "ParameterID" : "CREATETIME",
      "ColumnID" : "CREATETIME"
    }, {
      "ParameterID" : "CREATEUSERID",
      "ColumnID" : "CREATEUSERID"
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
        "ParameterID" : "FUNCTIONGROUPID",
        "ColumnID" : "FUNCTIONGROUPID"
      }, {
        "ParameterID" : "FUNCTIONSUBGROUPID",
        "ColumnID" : "FUNCTIONSUBGROUPID"
      }, {
        "ParameterID" : "FUNCTIONID",
        "ColumnID" : "FUNCTIONID"
      }, {
        "ParameterID" : "FUNCTIONNAME",
        "ColumnID" : "FUNCTIONNAME"
      }, {
        "ParameterID" : "FUNCTIONDISCRIPTION",
        "ColumnID" : "FUNCTIONDISCRIPTION"
      }, {
        "ParameterID" : "PROGRAMTYPE",
        "ColumnID" : "PROGRAMTYPE"
      }, {
        "ParameterID" : "PROGRAMID",
        "ColumnID" : "PROGRAMID"
      }, {
        "ParameterID" : "POSITION",
        "ColumnID" : "POSITION"
      }, {
        "ParameterID" : "CREATETIME",
        "ColumnID" : "CREATETIME"
      }, {
        "ParameterID" : "CREATEUSERID",
        "ColumnID" : "CREATEUSERID"
      }, {
        "ParameterID" : "DESCRIPTION",
        "ColumnID" : "DESCRIPTION"
      } ]
    }
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
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "uploadDeleteInsertMenu0_ClearGridData_71",
    "gridID" : "grdEditor"
  },
  "id" : "uploadDeleteInsertMenu0"
},ruleFunction31,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction31();
						 } 
				 } else { 
						 ruleFunction31();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction31(){ 
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "uploadDeleteInsertMenu0_BindPropertyData3_86",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "WBS_FUNCTION",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : "PROJECTID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONGROUPID",
        "POSITION" : "2",
        "DESCRIPTION" : "FUNCTIONGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONSUBGROUPID",
        "POSITION" : "3",
        "DESCRIPTION" : "FUNCTIONSUBGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONID",
        "POSITION" : "4",
        "DESCRIPTION" : "FUNCTIONID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONNAME",
        "POSITION" : "5",
        "DESCRIPTION" : "FUNCTIONNAME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONDISCRIPTION",
        "POSITION" : "6",
        "DESCRIPTION" : "FUNCTIONDISCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMTYPE",
        "POSITION" : "7",
        "DESCRIPTION" : "PROGRAMTYPE",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMID",
        "POSITION" : "8",
        "DESCRIPTION" : "PROGRAMID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "POSITION",
        "POSITION" : "9",
        "DESCRIPTION" : "POSITION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "NUMBER",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATETIME",
        "POSITION" : "10",
        "DESCRIPTION" : "CREATETIME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "DATE",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATEUSERID",
        "POSITION" : "11",
        "DESCRIPTION" : "CREATEUSERID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "DESCRIPTION",
        "POSITION" : "12",
        "DESCRIPTION" : "DESCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "INPUTEXPRESSION" : "SELECT PROJECTID FROM KHPI_PROJECT WHERE PROJECTID=@PROJECTID",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "FUNCTIONGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONSUBGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONID",
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
        "CLASSATTRIBUTE" : "FUNCTIONNAME",
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
        "CLASSATTRIBUTE" : "FUNCTIONDISCRIPTION",
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
        "CLASSATTRIBUTE" : "PROGRAMTYPE",
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
        "CLASSATTRIBUTE" : "PROGRAMID",
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
        "CLASSATTRIBUTE" : "POSITION",
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
        "CLASSATTRIBUTE" : "CREATETIME",
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
        "CLASSATTRIBUTE" : "CREATEUSERID",
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
      "queryRuleId" : "WBS_FUNCTION_6hius",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "WBS_FUNCTION_PROJECTCODE_GRMP6",
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
    "selectedExpressionID" : "btnDelete_Confirm_89"
  },
  "actionName" : "Confirm",
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
		function ruleFunction33(){ 
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
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" :  [ {
      "Parameter" : "PROJECTID",
      "Mandatory" : "Y",
      InputType: "Text",
      Value: sessionStorage.getItem("projectId"),
      "Column" : "PROJECTID"
    }],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "WBS_FUNCTION_6hius",
    "selectedExpressionID" : "btnDelete_SendMessage_17",
    "MSGGridInstance" : {
      "_setdata" : null
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
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "btnDelete_BindGridData_18",
    "listExpressionID" : "btnDelete_SendMessage_17",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "FUNCTIONGROUPID",
      "ColumnID" : "FUNCTIONGROUPID"
    }, {
      "ParameterID" : "FUNCTIONSUBGROUPID",
      "ColumnID" : "FUNCTIONSUBGROUPID"
    }, {
      "ParameterID" : "FUNCTIONID",
      "ColumnID" : "FUNCTIONID"
    }, {
      "ParameterID" : "FUNCTIONNAME",
      "ColumnID" : "FUNCTIONNAME"
    }, {
      "ParameterID" : "FUNCTIONDISCRIPTION",
      "ColumnID" : "FUNCTIONDISCRIPTION"
    }, {
      "ParameterID" : "PROGRAMTYPE",
      "ColumnID" : "PROGRAMTYPE"
    }, {
      "ParameterID" : "PROGRAMID",
      "ColumnID" : "PROGRAMID"
    }, {
      "ParameterID" : "POSITION",
      "ColumnID" : "POSITION"
    }, {
      "ParameterID" : "CREATETIME",
      "ColumnID" : "CREATETIME"
    }, {
      "ParameterID" : "CREATEUSERID",
      "ColumnID" : "CREATEUSERID"
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
        "ParameterID" : "FUNCTIONGROUPID",
        "ColumnID" : "FUNCTIONGROUPID"
      }, {
        "ParameterID" : "FUNCTIONSUBGROUPID",
        "ColumnID" : "FUNCTIONSUBGROUPID"
      }, {
        "ParameterID" : "FUNCTIONID",
        "ColumnID" : "FUNCTIONID"
      }, {
        "ParameterID" : "FUNCTIONNAME",
        "ColumnID" : "FUNCTIONNAME"
      }, {
        "ParameterID" : "FUNCTIONDISCRIPTION",
        "ColumnID" : "FUNCTIONDISCRIPTION"
      }, {
        "ParameterID" : "PROGRAMTYPE",
        "ColumnID" : "PROGRAMTYPE"
      }, {
        "ParameterID" : "PROGRAMID",
        "ColumnID" : "PROGRAMID"
      }, {
        "ParameterID" : "POSITION",
        "ColumnID" : "POSITION"
      }, {
        "ParameterID" : "CREATETIME",
        "ColumnID" : "CREATETIME"
      }, {
        "ParameterID" : "CREATEUSERID",
        "ColumnID" : "CREATEUSERID"
      }, {
        "ParameterID" : "DESCRIPTION",
        "ColumnID" : "DESCRIPTION"
      } ]
    }
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
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "btnDelete_ClearGridData_66",
    "gridID" : "grdEditor"
  },
  "id" : "btnDelete"
},ruleFunction37,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction37();
						 } 
				 } else { 
						 ruleFunction37();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction37(){ 
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "btnDelete_BindPropertyData3_82",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "WBS_FUNCTION",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : "PROJECTID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONGROUPID",
        "POSITION" : "2",
        "DESCRIPTION" : "FUNCTIONGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONSUBGROUPID",
        "POSITION" : "3",
        "DESCRIPTION" : "FUNCTIONSUBGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONID",
        "POSITION" : "4",
        "DESCRIPTION" : "FUNCTIONID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONNAME",
        "POSITION" : "5",
        "DESCRIPTION" : "FUNCTIONNAME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONDISCRIPTION",
        "POSITION" : "6",
        "DESCRIPTION" : "FUNCTIONDISCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMTYPE",
        "POSITION" : "7",
        "DESCRIPTION" : "PROGRAMTYPE",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMID",
        "POSITION" : "8",
        "DESCRIPTION" : "PROGRAMID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "POSITION",
        "POSITION" : "9",
        "DESCRIPTION" : "POSITION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "NUMBER",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATETIME",
        "POSITION" : "10",
        "DESCRIPTION" : "CREATETIME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "DATE",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATEUSERID",
        "POSITION" : "11",
        "DESCRIPTION" : "CREATEUSERID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "DESCRIPTION",
        "POSITION" : "12",
        "DESCRIPTION" : "DESCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "INPUTEXPRESSION" : "SELECT PROJECTID FROM KHPI_PROJECT WHERE PROJECTID=@PROJECTID",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "FUNCTIONGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONSUBGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONID",
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
        "CLASSATTRIBUTE" : "FUNCTIONNAME",
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
        "CLASSATTRIBUTE" : "FUNCTIONDISCRIPTION",
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
        "CLASSATTRIBUTE" : "PROGRAMTYPE",
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
        "CLASSATTRIBUTE" : "PROGRAMID",
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
        "CLASSATTRIBUTE" : "POSITION",
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
        "CLASSATTRIBUTE" : "CREATETIME",
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
        "CLASSATTRIBUTE" : "CREATEUSERID",
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
      "queryRuleId" : "WBS_FUNCTION_6hius",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "WBS_FUNCTION_PROJECTCODE_GRMP6",
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
		function ruleFunction39(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" :  [ {
      "Parameter" : "PROJECTID",
      "Mandatory" : "Y",
      InputType: "Text",
      Value: sessionStorage.getItem("projectId"),
      "Column" : "PROJECTID"
    }],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "WBS_FUNCTION_6hius",
    "selectedExpressionID" : "uploadUpdateInsertMenu0_SendMessage_36",
    "MSGGridInstance" : {
      "_setdata" : null
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
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "uploadUpdateInsertMenu0_BindGridData_37",
    "listExpressionID" : "uploadUpdateInsertMenu0_SendMessage_36",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "FUNCTIONGROUPID",
      "ColumnID" : "FUNCTIONGROUPID"
    }, {
      "ParameterID" : "FUNCTIONSUBGROUPID",
      "ColumnID" : "FUNCTIONSUBGROUPID"
    }, {
      "ParameterID" : "FUNCTIONID",
      "ColumnID" : "FUNCTIONID"
    }, {
      "ParameterID" : "FUNCTIONNAME",
      "ColumnID" : "FUNCTIONNAME"
    }, {
      "ParameterID" : "FUNCTIONDISCRIPTION",
      "ColumnID" : "FUNCTIONDISCRIPTION"
    }, {
      "ParameterID" : "PROGRAMTYPE",
      "ColumnID" : "PROGRAMTYPE"
    }, {
      "ParameterID" : "PROGRAMID",
      "ColumnID" : "PROGRAMID"
    }, {
      "ParameterID" : "POSITION",
      "ColumnID" : "POSITION"
    }, {
      "ParameterID" : "CREATETIME",
      "ColumnID" : "CREATETIME"
    }, {
      "ParameterID" : "CREATEUSERID",
      "ColumnID" : "CREATEUSERID"
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
        "ParameterID" : "FUNCTIONGROUPID",
        "ColumnID" : "FUNCTIONGROUPID"
      }, {
        "ParameterID" : "FUNCTIONSUBGROUPID",
        "ColumnID" : "FUNCTIONSUBGROUPID"
      }, {
        "ParameterID" : "FUNCTIONID",
        "ColumnID" : "FUNCTIONID"
      }, {
        "ParameterID" : "FUNCTIONNAME",
        "ColumnID" : "FUNCTIONNAME"
      }, {
        "ParameterID" : "FUNCTIONDISCRIPTION",
        "ColumnID" : "FUNCTIONDISCRIPTION"
      }, {
        "ParameterID" : "PROGRAMTYPE",
        "ColumnID" : "PROGRAMTYPE"
      }, {
        "ParameterID" : "PROGRAMID",
        "ColumnID" : "PROGRAMID"
      }, {
        "ParameterID" : "POSITION",
        "ColumnID" : "POSITION"
      }, {
        "ParameterID" : "CREATETIME",
        "ColumnID" : "CREATETIME"
      }, {
        "ParameterID" : "CREATEUSERID",
        "ColumnID" : "CREATEUSERID"
      }, {
        "ParameterID" : "DESCRIPTION",
        "ColumnID" : "DESCRIPTION"
      } ]
    }
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
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "uploadUpdateInsertMenu0_ClearGridData_70",
    "gridID" : "grdEditor"
  },
  "id" : "uploadUpdateInsertMenu0"
},ruleFunction42,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction42();
						 } 
				 } else { 
						 ruleFunction42();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction42(){ 
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "uploadUpdateInsertMenu0_BindPropertyData3_85",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "WBS_FUNCTION",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : "PROJECTID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONGROUPID",
        "POSITION" : "2",
        "DESCRIPTION" : "FUNCTIONGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONSUBGROUPID",
        "POSITION" : "3",
        "DESCRIPTION" : "FUNCTIONSUBGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONID",
        "POSITION" : "4",
        "DESCRIPTION" : "FUNCTIONID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONNAME",
        "POSITION" : "5",
        "DESCRIPTION" : "FUNCTIONNAME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONDISCRIPTION",
        "POSITION" : "6",
        "DESCRIPTION" : "FUNCTIONDISCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMTYPE",
        "POSITION" : "7",
        "DESCRIPTION" : "PROGRAMTYPE",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMID",
        "POSITION" : "8",
        "DESCRIPTION" : "PROGRAMID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "POSITION",
        "POSITION" : "9",
        "DESCRIPTION" : "POSITION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "NUMBER",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATETIME",
        "POSITION" : "10",
        "DESCRIPTION" : "CREATETIME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "DATE",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATEUSERID",
        "POSITION" : "11",
        "DESCRIPTION" : "CREATEUSERID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "DESCRIPTION",
        "POSITION" : "12",
        "DESCRIPTION" : "DESCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "INPUTEXPRESSION" : "SELECT PROJECTID FROM KHPI_PROJECT WHERE PROJECTID=@PROJECTID",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "FUNCTIONGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONSUBGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONID",
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
        "CLASSATTRIBUTE" : "FUNCTIONNAME",
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
        "CLASSATTRIBUTE" : "FUNCTIONDISCRIPTION",
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
        "CLASSATTRIBUTE" : "PROGRAMTYPE",
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
        "CLASSATTRIBUTE" : "PROGRAMID",
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
        "CLASSATTRIBUTE" : "POSITION",
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
        "CLASSATTRIBUTE" : "CREATETIME",
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
        "CLASSATTRIBUTE" : "CREATEUSERID",
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
      "queryRuleId" : "WBS_FUNCTION_6hius",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "WBS_FUNCTION_PROJECTCODE_GRMP6",
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
		function ruleFunction44(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" :  [ {
      "Parameter" : "PROJECTID",
      "Mandatory" : "Y",
      InputType: "Text",
      Value: sessionStorage.getItem("projectId"),
      "Column" : "PROJECTID"
    }],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "WBS_FUNCTION_6hius",
    "selectedExpressionID" : "deleteMenu0_SendMessage_25",
    "MSGGridInstance" : {
      "_setdata" : null
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
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "deleteMenu0_BindGridData_26",
    "listExpressionID" : "deleteMenu0_SendMessage_25",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "FUNCTIONGROUPID",
      "ColumnID" : "FUNCTIONGROUPID"
    }, {
      "ParameterID" : "FUNCTIONSUBGROUPID",
      "ColumnID" : "FUNCTIONSUBGROUPID"
    }, {
      "ParameterID" : "FUNCTIONID",
      "ColumnID" : "FUNCTIONID"
    }, {
      "ParameterID" : "FUNCTIONNAME",
      "ColumnID" : "FUNCTIONNAME"
    }, {
      "ParameterID" : "FUNCTIONDISCRIPTION",
      "ColumnID" : "FUNCTIONDISCRIPTION"
    }, {
      "ParameterID" : "PROGRAMTYPE",
      "ColumnID" : "PROGRAMTYPE"
    }, {
      "ParameterID" : "PROGRAMID",
      "ColumnID" : "PROGRAMID"
    }, {
      "ParameterID" : "POSITION",
      "ColumnID" : "POSITION"
    }, {
      "ParameterID" : "CREATETIME",
      "ColumnID" : "CREATETIME"
    }, {
      "ParameterID" : "CREATEUSERID",
      "ColumnID" : "CREATEUSERID"
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
        "ParameterID" : "FUNCTIONGROUPID",
        "ColumnID" : "FUNCTIONGROUPID"
      }, {
        "ParameterID" : "FUNCTIONSUBGROUPID",
        "ColumnID" : "FUNCTIONSUBGROUPID"
      }, {
        "ParameterID" : "FUNCTIONID",
        "ColumnID" : "FUNCTIONID"
      }, {
        "ParameterID" : "FUNCTIONNAME",
        "ColumnID" : "FUNCTIONNAME"
      }, {
        "ParameterID" : "FUNCTIONDISCRIPTION",
        "ColumnID" : "FUNCTIONDISCRIPTION"
      }, {
        "ParameterID" : "PROGRAMTYPE",
        "ColumnID" : "PROGRAMTYPE"
      }, {
        "ParameterID" : "PROGRAMID",
        "ColumnID" : "PROGRAMID"
      }, {
        "ParameterID" : "POSITION",
        "ColumnID" : "POSITION"
      }, {
        "ParameterID" : "CREATETIME",
        "ColumnID" : "CREATETIME"
      }, {
        "ParameterID" : "CREATEUSERID",
        "ColumnID" : "CREATEUSERID"
      }, {
        "ParameterID" : "DESCRIPTION",
        "ColumnID" : "DESCRIPTION"
      } ]
    }
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
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "deleteMenu0_ClearGridData_68",
    "gridID" : "grdEditor"
  },
  "id" : "deleteMenu0"
},ruleFunction47,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction47();
						 } 
				 } else { 
						 ruleFunction47();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction47(){ 
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "deleteMenu0_BindPropertyData3_83",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "WBS_FUNCTION",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : "PROJECTID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONGROUPID",
        "POSITION" : "2",
        "DESCRIPTION" : "FUNCTIONGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONSUBGROUPID",
        "POSITION" : "3",
        "DESCRIPTION" : "FUNCTIONSUBGROUPID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONID",
        "POSITION" : "4",
        "DESCRIPTION" : "FUNCTIONID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
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
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONNAME",
        "POSITION" : "5",
        "DESCRIPTION" : "FUNCTIONNAME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "FUNCTIONDISCRIPTION",
        "POSITION" : "6",
        "DESCRIPTION" : "FUNCTIONDISCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMTYPE",
        "POSITION" : "7",
        "DESCRIPTION" : "PROGRAMTYPE",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "PROGRAMID",
        "POSITION" : "8",
        "DESCRIPTION" : "PROGRAMID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "POSITION",
        "POSITION" : "9",
        "DESCRIPTION" : "POSITION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "NUMBER",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATETIME",
        "POSITION" : "10",
        "DESCRIPTION" : "CREATETIME",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "DATE",
        "DATASIZE" : null,
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "CREATEUSERID",
        "POSITION" : "11",
        "DESCRIPTION" : "CREATEUSERID",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "WBS_FUNCTION",
        "COLUMNID" : "DESCRIPTION",
        "POSITION" : "12",
        "DESCRIPTION" : "DESCRIPTION",
        "AVAILABILITY" : "Available",
        "CLASSATTRIBUTETYPE" : "STND",
        "DATATYPE" : "VARCHAR2",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : "Current",
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : null,
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : null,
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "CLASSTYPE" : null,
        "CLASSKIND" : null,
        "CLASSGROUP" : null,
        "RELEVANTTABLEID" : null,
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
        "INPUTEXPRESSION" : "SELECT PROJECTID FROM KHPI_PROJECT WHERE PROJECTID=@PROJECTID",
        "CHARACTERCASING" : "N",
        "TRIMFLAG" : "N",
        "ISNOTNULL" : "",
        "ISPRIMARY" : "Y",
        "PARAMETERID" : ""
      }, {
        "CLASSATTRIBUTE" : "FUNCTIONGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONSUBGROUPID",
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
        "CLASSATTRIBUTE" : "FUNCTIONID",
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
        "CLASSATTRIBUTE" : "FUNCTIONNAME",
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
        "CLASSATTRIBUTE" : "FUNCTIONDISCRIPTION",
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
        "CLASSATTRIBUTE" : "PROGRAMTYPE",
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
        "CLASSATTRIBUTE" : "PROGRAMID",
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
        "CLASSATTRIBUTE" : "POSITION",
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
        "CLASSATTRIBUTE" : "CREATETIME",
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
        "CLASSATTRIBUTE" : "CREATEUSERID",
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
      "queryRuleId" : "WBS_FUNCTION_6hius",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "WBS_FUNCTION_PROJECTCODE_GRMP6",
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


	 //******************************
	 //* tre0 Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#tre0").on("click",function(e) {  
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
    "selectedMSGParameterGrid" :  [ {
      "Parameter" : "PROJECTID",
      "Mandatory" : "Y",
      InputType: "Text",
      Value: sessionStorage.getItem("projectId"),
      "Column" : "PROJECTID"
    }],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "WBS_FUNCTION_6hius",
    "selectedExpressionID" : "tre0_SendMessage_62",
    "MSGGridInstance" : {
      "_setdata" : null
    }
  },
  "id" : "tre0"
},ruleFunction49,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction49();
						 } 
				 } else { 
						 ruleFunction49();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		function ruleFunction49(){ 
			 returnVal =  rules.filtergriddata({
  "data" : {
    "checkComponent" : "",
    "checkComponentHeaderName" : "",
    "checkComponentHeaderNameDisable" : false,
    "selectedParameterGrid" : [ ],
    "treeID" : "tre0",
    "selectedSQLExpression" : "",
    "selectedDefineString" : "",
    "selectedGetValueColumn" : "",
    "selectedExpressionID" : "tre0_FilterGridData_20",
    "treeData" : [ {
      "Class" : "WBS_FUNCTION",
      "Level No" : "0",
      "Expression" : "SELECT * FROM WBS_FUNCTION WHERE PROJECTID=@PROJECTID ORDER BY FUNCTIONGROUPID, FUNCTIONSUBGROUPID",
      "Parameter ID" : "PROJECTID",
      "queryRuleId" : "WBSFUNCTION_TreeData_WBS_FUNCTION_0_vniw0",
      "inputParams" : [ {
        Parameter: "PROJECTID",
        Mandatory: "Y",
        InputType: "Text",
        Value: sessionStorage.getItem("projectId"),
        Column: "PROJECTID",
      } ],
      "outputParams" : [ "PROJECTID", "FUNCTIONGROUPID", "FUNCTIONSUBGROUPID", "FUNCTIONID", "FUNCTIONNAME", "FUNCTIONDISCRIPTION", "PROGRAMTYPE", "PROGRAMID", "POSITION", "CREATETIME", "CREATEUSERID", "DESCRIPTION" ],
      "gridId" : "grd0"
    }, {
      "Class" : "WBS_FUNCTION",
      "Level No" : "1",
      "Expression" : "SELECT * FROM WBS_FUNCTION WHERE PROJECTID=@PROJECTID AND FUNCTIONGROUPID=@FUNCTIONGROUPID ORDER BY FUNCTIONSUBGROUPID",
      "Parameter ID" : "FUNCTIONGROUPID",
      "queryRuleId" : "WBSFUNCTION_TreeData_WBS_FUNCTION_1_adack",
      "inputParams" : [ "PROJECTID", "FUNCTIONGROUPID" ],
      "outputParams" : [ "PROJECTID", "FUNCTIONGROUPID", "FUNCTIONSUBGROUPID", "FUNCTIONID", "FUNCTIONNAME", "FUNCTIONDISCRIPTION", "PROGRAMTYPE", "PROGRAMID", "POSITION", "CREATETIME", "CREATEUSERID", "DESCRIPTION" ],
      "gridId" : "grd0"
    }, {
      "Class" : "WBS_FUNCTION",
      "Level No" : "2",
      "Expression" : "SELECT * FROM WBS_FUNCTION WHERE PROJECTID=@PROJECTID AND FUNCTIONGROUPID=@FUNCTIONGROUPID AND FUNCTIONSUBGROUPID=@FUNCTIONSUBGROUPID ORDER BY FUNCTIONSUBGROUPID",
      "Parameter ID" : "FUNCTIONSUBGROUPID",
      "queryRuleId" : "WBSFUNCTION_TreeData_WBS_FUNCTION_2_zrok3",
      "inputParams" : [ "PROJECTID", "FUNCTIONGROUPID", "FUNCTIONSUBGROUPID" ],
      "outputParams" : [ "PROJECTID", "FUNCTIONGROUPID", "FUNCTIONSUBGROUPID", "FUNCTIONID", "FUNCTIONNAME", "FUNCTIONDISCRIPTION", "PROGRAMTYPE", "PROGRAMID", "POSITION", "CREATETIME", "CREATEUSERID", "DESCRIPTION" ],
      "gridId" : "grd0"
    } ]
  },
  "id" : "tre0"
},ruleFunction50,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction50();
						 } 
				 } else { 
						 ruleFunction50();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction50(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "tre0_ClearGridData_67",
    "gridID" : "grdEditor"
  },
  "id" : "tre0"
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
  function custom_img_F(cellvalue, options, rowObject) {
    if (cellvalue.length > 0) {
      var html = "<img class='cell-image' src='../resources/css/theme/normal/images/" + cellvalue + ".png' width='40' height='40'/>";
      return html;
    } else {
      return "";
    }
  }

  function custom_date_F(cellval, opts) {
    var date = new Date(cellval);
    opts = $.extend({}, $.jgrid.formatter.date, opts);
    return $.fmatter2.util.DateFormat("", date, "Y-m-d", opts);
  }

  function custom_file_F(cellvalue, options, rowObject) {
    var str = "";
    if (rowObject.AttachID != "" && rowObject.AttachID != undefined) {
      str = "<span onclick='downloadZip(\"" + rowObject.AttachID + "\")' style='text-decoration: underline;' >FILE DOWNLOAD</span>";
    }
    return str;
  }
});
