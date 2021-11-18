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
  commonUtil.loadCssConfig(
    '../../../resources/css/theme/' + globalDef.getInstance().theme + "/",
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
jqueryObj=$('#child-grd0').jqGrid({"userData":{},"loadtext":"Loading...","selarrrow":[],"onSelectAll":null,"xmlReader":{"repeatitems":true,"userdata":"userdata","total":"rows>total","records":"rows>records","root":"rows","row":"row","page":"rows>page","id":"[id]","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","row":"row","cell":"cell"}},"onHeaderClick":null,"caption":"RULE_UDFBIZITEMTEMPLATE","autoencode":false,"mtype":"GET","subGridModel":[],"treeReader":{},"keyIndex":false,"beforeProcessing":null,"id":"child-grd0","beforeRequest":null,"deselectAfterSort":true,"height":193,"recordtext":"{0} - {1} of {2}","lastsort":0,"autowidth":false,"scrollrows":false,"scroll":false,"lastpage":0,"colModel":[
  {"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"SEQNUM","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":60,"formatter":"","formatoptions":"","name":"SEQNUM","width":60,"editoptions":""}
  ,{"hidden":true,"resizable":true,"editable":false,"cellattr":"","index":"PROJECTID","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":147,"formatter":"","formatoptions":"","name":"PROJECTID","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"BLOCKID","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":147,"formatter":"","formatoptions":"","name":"BLOCKID","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"ITEMNAME","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":147,"formatter":"","formatoptions":"","name":"ITEMNAME","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"ITEMTYPE","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":147,"formatter":"","formatoptions":"","name":"ITEMTYPE","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"CATEGORY","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":147,"formatter":"","formatoptions":"","name":"CATEGORY","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"ISMODIFIABLE","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":147,"formatter":"","formatoptions":"","name":"ISMODIFIABLE","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"LEVEL","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":147,"formatter":"","formatoptions":"","name":"LEVEL","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"SUPERITEMID","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":147,"formatter":"","formatoptions":"","name":"SUPERITEMID","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"ICONNAME","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":147,"formatter":"","formatoptions":"","name":"ICONNAME","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"ICONIMAGE","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":147,"formatter":"","formatoptions":"","name":"ICONIMAGE","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"PSEUDOCODE1","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":147,"formatter":"","formatoptions":"","name":"PSEUDOCODE1","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"PSEUDOCODE2","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":147,"formatter":"","formatoptions":"","name":"PSEUDOCODE2","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"PSEUDOCODE3","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":147,"formatter":"","formatoptions":"","name":"PSEUDOCODE3","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"ICONTEXT1","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":147,"formatter":"","formatoptions":"","name":"ICONTEXT1","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"ICONTEXT2","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":147,"formatter":"","formatoptions":"","name":"ICONTEXT2","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"ICONTEXT3","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":147,"formatter":"","formatoptions":"","name":"ICONTEXT3","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"DESCRIPTION1","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":147,"formatter":"","formatoptions":"","name":"DESCRIPTION1","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"DESCRIPTION2","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":147,"formatter":"","formatoptions":"","name":"DESCRIPTION2","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"DESCRIPTION3","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":153,"formatter":"","formatoptions":"","name":"DESCRIPTION3","width":150,"editoptions":""}
],"grouping":false,"footerrow":false,"disableClick":false,"sortname":"","multiselect":false,"altRows":false,"treeANode":-1,"rowList":[],"subGrid":false,"multiboxonly":false,"viewrecords":true,"tree_root_level":0,"pgbuttons":true,"pginput":true,"search":false,"datatype":"local","ignoreCase":false,"sortorder":"asc","recordpos":"right","editurl":null,"onInitGrid":null,"altclass":"ui-priority-secondary","gridstate":"visible","loadonce":false,"url":"","loadui":"enable","toolbar":[false,""],"hoverrows":true,"rowTotal":null,"width":700,"multiSort":false,"postData":{"nd":1629794591947,"page":1,"sord":"asc","rows":20,"_search":false,"sidx":""},"multikey":false,"subGridWidth":20,"data":[],"forceFit":false,"loadBeforeSend":null,"pager":"","hiddengrid":false,"rowNum":"","cellsubmit":"clientArray","ondblClickRow":null,"scrollOffset":18,"cmTemplate":{},"treeGrid":false,"useProp":true,"groupingView":{"summary":[],"groupOrder":[],"plusicon":"ui-icon-circlesmall-plus","showSummaryOnHide":false,"summaryval":[],"groupField":[],"minusicon":"ui-icon-circlesmall-minus","sortitems":[],"groupSummary":[],"groupText":[],"displayField":[],"groupColumnShow":[],"sortnames":[]},"pgtext":"Page {0} of {1}","loadError":null,"headertitles":false,"jsonReader":{"repeatitems":true,"userdata":"userdata","total":"total","records":"records","root":"rows","page":"page","id":"id","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","cell":"cell"}},"savedRow":[],"shrinkToFit":false,"totaltime":0,"remapColumns":[],"page":1,"viewsortcols":[false,"vertical",true],"selrow":null,"multiselectWidth":20,"userDataOnFooter":false,"hidegrid":false,"_index":{},"records":0,"nv":0,"ExpandColumn":null,"idPrefix":"","beforeSelectRow":null,"cellEdit":true,"reccount":0,"onRightClickRow":null,"rownumWidth":25,"scrollTimeout":40,"onPaging":null,"gridComplete":null,"afterInsertRow":null,"emptyrecords":"No records to view","onSortCol":null,"toppager":false,"prmNames":{"subgridid":"id","sort":"sidx","rows":"rows","editoper":"edit","search":"_search","nd":"nd","deloper":"del","totalrows":"totalrows","addoper":"add","oper":"oper","page":"page","id":"id","order":"sord","npage":null},"direction":"ltr","resizeclass":"","keyName":false,"localReader":{"repeatitems":false,"userdata":"userdata","total":"total","records":"records","root":"rows","page":"page","id":"id","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","cell":"cell"}},"cellLayout":5,"gridview":false,"gridMultiLang":false,"ajaxGridOptions":{},"loadComplete":null,"treeGridModel":"nested","pagerpos":"center","tblwidth":682,"onSelectRow":null,"rownumbers":false});
componentUtil.getInstance().setObject("grd0",jqueryObj);

multilanguage.executeMultiLanguageJqgrid(jqueryObj);

jqueryObj=$('#child-grd1').jqGrid({"userData":{},"loadtext":"Loading...","selarrrow":[],"onSelectAll":null,"xmlReader":{"repeatitems":true,"userdata":"userdata","total":"rows>total","records":"rows>records","root":"rows","row":"row","page":"rows>page","id":"[id]","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","row":"row","cell":"cell"}},"onHeaderClick":null,"caption":"RULE_UDFBIZLINETEMPLATE","autoencode":false,"mtype":"GET","subGridModel":[],"treeReader":{},"keyIndex":false,"beforeProcessing":null,"id":"child-grd1","beforeRequest":null,"deselectAfterSort":true,"height":229,"recordtext":"{0} - {1} of {2}","lastsort":0,"autowidth":false,"scrollrows":false,"scroll":false,"lastpage":0,"colModel":[
  {"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"SEQNUM","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":60,"formatter":"","formatoptions":"","name":"SEQNUM","width":60,"editoptions":""}
  ,{"hidden":true,"resizable":true,"editable":false,"cellattr":"","index":"PROJECTID","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":148,"formatter":"","formatoptions":"","name":"PROJECTID","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"BLOCKID","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":148,"formatter":"","formatoptions":"","name":"BLOCKID","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"ITEMNAME","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":148,"formatter":"","formatoptions":"","name":"ITEMNAME","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"LINEAKEYID","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":148,"formatter":"","formatoptions":"","name":"LINEAKEYID","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"ISMODIFIABLE","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":148,"formatter":"","formatoptions":"","name":"ISMODIFIABLE","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"CATEGORY","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":148,"formatter":"","formatoptions":"","name":"CATEGORY","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"SOURCECODE","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":208,"formatter":"","formatoptions":"","name":"SOURCECODE","width":200,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"VARIABLENUMBER","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":148,"formatter":"","formatoptions":"","name":"VARIABLENUMBER","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"VARIABLES","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":148,"formatter":"","formatoptions":"","name":"VARIABLES","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"REPLACEMENTVALUES","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":148,"formatter":"","formatoptions":"","name":"REPLACEMENTVALUES","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"ERRORCODE","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":148,"formatter":"","formatoptions":"","name":"ERRORCODE","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"ERRORMESSAGEID","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":148,"formatter":"","formatoptions":"","name":"ERRORMESSAGEID","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"PSEUDOCODE1","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":148,"formatter":"","formatoptions":"","name":"PSEUDOCODE1","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"PSEUDOCODE2","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":148,"formatter":"","formatoptions":"","name":"PSEUDOCODE2","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"PSEUDOCODE3","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":148,"formatter":"","formatoptions":"","name":"PSEUDOCODE3","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"DESCRIPTION1","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":148,"formatter":"","formatoptions":"","name":"DESCRIPTION1","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"DESCRIPTION2","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":148,"formatter":"","formatoptions":"","name":"DESCRIPTION2","width":150,"editoptions":""}
  ,{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"DESCRIPTION3","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":151,"formatter":"","formatoptions":"","name":"DESCRIPTION3","width":150,"editoptions":""}
],"grouping":false,"footerrow":false,"disableClick":false,"sortname":"","multiselect":false,"altRows":false,"treeANode":-1,"rowList":[],"subGrid":false,"multiboxonly":false,"viewrecords":true,"tree_root_level":0,"pgbuttons":true,"pginput":true,"search":false,"datatype":"local","ignoreCase":false,"sortorder":"asc","recordpos":"right","editurl":null,"onInitGrid":null,"altclass":"ui-priority-secondary","gridstate":"visible","loadonce":false,"url":"","loadui":"enable","toolbar":[false,""],"hoverrows":true,"rowTotal":null,"width":700,"multiSort":false,"postData":{"nd":1629794592031,"page":1,"sord":"asc","rows":20,"_search":false,"sidx":""},"multikey":false,"subGridWidth":20,"data":[],"forceFit":false,"loadBeforeSend":null,"pager":"","hiddengrid":false,"rowNum":"","cellsubmit":"clientArray","ondblClickRow":null,"scrollOffset":18,"cmTemplate":{},"treeGrid":false,"useProp":true,"groupingView":{"summary":[],"groupOrder":[],"plusicon":"ui-icon-circlesmall-plus","showSummaryOnHide":false,"summaryval":[],"groupField":[],"minusicon":"ui-icon-circlesmall-minus","sortitems":[],"groupSummary":[],"groupText":[],"displayField":[],"groupColumnShow":[],"sortnames":[]},"pgtext":"Page {0} of {1}","loadError":null,"headertitles":false,"jsonReader":{"repeatitems":true,"userdata":"userdata","total":"total","records":"records","root":"rows","page":"page","id":"id","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","cell":"cell"}},"savedRow":[],"shrinkToFit":false,"totaltime":0,"remapColumns":[],"page":1,"viewsortcols":[false,"vertical",true],"selrow":null,"multiselectWidth":20,"userDataOnFooter":false,"hidegrid":false,"_index":{},"records":0,"nv":0,"ExpandColumn":null,"idPrefix":"","beforeSelectRow":null,"cellEdit":true,"reccount":0,"onRightClickRow":null,"rownumWidth":25,"scrollTimeout":40,"onPaging":null,"gridComplete":null,"afterInsertRow":null,"emptyrecords":"No records to view","onSortCol":null,"toppager":false,"prmNames":{"subgridid":"id","sort":"sidx","rows":"rows","editoper":"edit","search":"_search","nd":"nd","deloper":"del","totalrows":"totalrows","addoper":"add","oper":"oper","page":"page","id":"id","order":"sord","npage":null},"direction":"ltr","resizeclass":"","keyName":false,"localReader":{"repeatitems":false,"userdata":"userdata","total":"total","records":"records","root":"rows","page":"page","id":"id","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","cell":"cell"}},"cellLayout":5,"gridview":false,"gridMultiLang":false,"ajaxGridOptions":{},"loadComplete":null,"treeGridModel":"nested","pagerpos":"center","tblwidth":682,"onSelectRow":null,"rownumbers":false});
componentUtil.getInstance().setObject("grd1",jqueryObj);

multilanguage.executeMultiLanguageJqgrid(jqueryObj);

jqueryObj=$('#child-tre0').dynatree({"children":{"isFolder":true,"children":[{"title":"Sub-item 1.1"},{"title":"Sub-item 1.2"}],"title":"Folder 1","key":"folder1"}});
componentUtil.getInstance().setObject("tre0",jqueryObj);

multilanguage.executeMultiLanguageJqgrid(jqueryObj);

jqueryObj=$('#child-grdEditor').jqGrid({"userData":{},"loadtext":"Loading...","selarrrow":[],"onSelectAll":null,"xmlReader":{"repeatitems":true,"userdata":"userdata","total":"rows>total","records":"rows>records","root":"rows","row":"row","page":"rows>page","id":"[id]","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","row":"row","cell":"cell"}},"onHeaderClick":null,"caption":"Editor","autoencode":false,"mtype":"GET","subGridModel":[],"treeReader":{},"keyIndex":false,"beforeProcessing":null,"id":"child-grdEditor","beforeRequest":null,"deselectAfterSort":true,"height":653,"recordtext":"{0} - {1} of {2}","lastsort":0,"autowidth":false,"scrollrows":false,"scroll":false,"lastpage":0,"colModel":[{"hidden":false,"resizable":true,"editable":false,"cellattr":"","index":"Name","lso":"","sortable":true,"align":"left","title":true,"widthOrg":100,"edittype":"","formatter":"","formatoptions":"","name":"Name","width":145,"editoptions":""},{"hidden":false,"resizable":true,"editable":true,"cellattr":"","index":"Value","lso":"","sortable":true,"title":true,"align":"left","edittype":"","widthOrg":200,"formatter":"","formatoptions":"","name":"Value","width":245,"editoptions":""}],"grouping":false,"footerrow":false,"disableClick":false,"sortname":"","multiselect":false,"altRows":false,"treeANode":-1,"subGrid":false,"multiboxonly":false,"viewrecords":true,"tree_root_level":0,"pgbuttons":true,"pginput":true,"search":false,"datatype":"local","ignoreCase":false,"sortorder":"asc","recordpos":"right","editurl":null,"onInitGrid":null,"altclass":"ui-priority-secondary","gridstate":"visible","loadonce":false,"url":"","loadui":"enable","toolbar":[false,""],"hoverrows":true,"rowTotal":null,"width":290,"multiSort":false,"postData":{"nd":1629794592103,"page":1,"sord":"asc","rows":20,"_search":false,"sidx":""},"multikey":false,"subGridWidth":20,"data":[],"forceFit":false,"loadBeforeSend":null,"pager":"","hiddengrid":false,"cellsubmit":"clientArray","ondblClickRow":null,"scrollOffset":18,"cmTemplate":{},"treeGrid":false,"useProp":true,"groupingView":{"summary":[],"groupOrder":[],"plusicon":"ui-icon-circlesmall-plus","showSummaryOnHide":false,"summaryval":[],"groupField":[],"minusicon":"ui-icon-circlesmall-minus","sortitems":[],"groupSummary":[],"groupText":[],"displayField":[],"groupColumnShow":[],"sortnames":[]},"pgtext":"Page {0} of {1}","loadError":null,"headertitles":false,"jsonReader":{"repeatitems":true,"userdata":"userdata","total":"total","records":"records","root":"rows","page":"page","id":"id","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","cell":"cell"}},"savedRow":[],"shrinkToFit":false,"totaltime":1,"remapColumns":[],"page":1,"viewsortcols":[false,"vertical",true],"selrow":null,"multiselectWidth":20,"userDataOnFooter":false,"hidegrid":false,"_index":{},"records":0,"nv":0,"ExpandColumn":null,"idPrefix":"","beforeSelectRow":null,"cellEdit":true,"reccount":0,"onRightClickRow":null,"rownumWidth":25,"scrollTimeout":40,"onPaging":null,"gridComplete":null,"afterInsertRow":null,"emptyrecords":"No records to view","onSortCol":null,"toppager":false,"prmNames":{"subgridid":"id","sort":"sidx","rows":"rows","editoper":"edit","search":"_search","nd":"nd","deloper":"del","totalrows":"totalrows","addoper":"add","oper":"oper","page":"page","id":"id","order":"sord","npage":null},"direction":"ltr","resizeclass":"","keyName":false,"localReader":{"repeatitems":false,"userdata":"userdata","total":"total","records":"records","root":"rows","page":"page","id":"id","cell":"cell","subgrid":{"repeatitems":true,"root":"rows","cell":"cell"}},"cellLayout":5,"gridview":false,"ajaxGridOptions":{},"loadComplete":null,"treeGridModel":"nested","pagerpos":"center","tblwidth":272,"onSelectRow":null});
componentUtil.getInstance().setObject("grdEditor",jqueryObj);

multilanguage.executeMultiLanguageJqgrid(jqueryObj);

jQuery("#child-grd0").jqGrid("filterToolbar", {
  stringResult: true,
  searchOnEnter: false,
  defaultSearch: "cn",
});
jQuery("#child-grd1").jqGrid("filterToolbar", {
  stringResult: true,
  searchOnEnter: false,
  defaultSearch: "cn",
});

setTimeout(function () { $('#container').css('visibility','visible'); },10);

initializeLoad()


	 //******************************
	 //* uploadAppendMenu1 Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#uploadAppendMenu1").on("click",function(e) {  
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
    "selectedExpressionID" : "uploadAppendMenu1_DownloadExcelFile_50",
    "gridID" : "grd1",
    "mode" : "Append"
  },
  "id" : "uploadAppendMenu1"
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
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [ {
      "Parameter" : "PROJECTID",
      "Mandatory" : "Y",
      InputType: "Text",
      Value: sessionStorage.getItem("projectId"),
      "Column" : "PROJECTID"
    }, {
      "Parameter" : "ITEMNAME",
      "Mandatory" : "N",
      "InputType" : "Component",
      "Value" : "grd0",
      "Column" : "ITEMNAME"
    } ],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "ITEMNAME_RULE_UDFBIZITEMTEMPLATE_ITEMNAME_RULE_UDFBIZLINETEMPLATE_I3haW",
    "selectedExpressionID" : "uploadAppendMenu1_SendMessage_51",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "Parameter" : "PROJECTID",
        "Mandatory" : "Y",
        InputType: "Text",
        Value: sessionStorage.getItem("projectId"),
        "Column" : "PROJECTID"
      }, {
        "Parameter" : "ITEMNAME",
        "Mandatory" : "N",
        "InputType" : "Component",
        "Value" : "grd0",
        "Column" : "ITEMNAME"
      } ]
    }
  },
  "id" : "uploadAppendMenu1"
},ruleFunction2,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction2();
						 } 
				 } else { 
						 ruleFunction2();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction2(){ 
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "uploadAppendMenu1_BindGridData_52",
    "listExpressionID" : "uploadAppendMenu1_SendMessage_51",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "BLOCKID",
      "ColumnID" : "BLOCKID"
    }, {
      "ParameterID" : "ITEMNAME",
      "ColumnID" : "ITEMNAME"
    }, {
      "ParameterID" : "LINEAKEYID",
      "ColumnID" : "LINEAKEYID"
    }, {
      "ParameterID" : "SEQNUM",
      "ColumnID" : "SEQNUM"
    }, {
      "ParameterID" : "ISMODIFIABLE",
      "ColumnID" : "ISMODIFIABLE"
    }, {
      "ParameterID" : "CATEGORY",
      "ColumnID" : "CATEGORY"
    }, {
      "ParameterID" : "SOURCECODE",
      "ColumnID" : "SOURCECODE"
    }, {
      "ParameterID" : "VARIABLENUMBER",
      "ColumnID" : "VARIABLENUMBER"
    }, {
      "ParameterID" : "VARIABLES",
      "ColumnID" : "VARIABLES"
    }, {
      "ParameterID" : "REPLACEMENTVALUES",
      "ColumnID" : "REPLACEMENTVALUES"
    }, {
      "ParameterID" : "ERRORCODE",
      "ColumnID" : "ERRORCODE"
    }, {
      "ParameterID" : "ERRORMESSAGEID",
      "ColumnID" : "ERRORMESSAGEID"
    }, {
      "ParameterID" : "PSEUDOCODE1",
      "ColumnID" : "PSEUDOCODE1"
    }, {
      "ParameterID" : "PSEUDOCODE2",
      "ColumnID" : "PSEUDOCODE2"
    }, {
      "ParameterID" : "PSEUDOCODE3",
      "ColumnID" : "PSEUDOCODE3"
    }, {
      "ParameterID" : "DESCRIPTION1",
      "ColumnID" : "DESCRIPTION1"
    }, {
      "ParameterID" : "DESCRIPTION2",
      "ColumnID" : "DESCRIPTION2"
    }, {
      "ParameterID" : "DESCRIPTION3",
      "ColumnID" : "DESCRIPTION3"
    } ],
    "gridID" : "grd1",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID"
      }, {
        "ParameterID" : "BLOCKID",
        "ColumnID" : "BLOCKID"
      }, {
        "ParameterID" : "ITEMNAME",
        "ColumnID" : "ITEMNAME"
      }, {
        "ParameterID" : "LINEAKEYID",
        "ColumnID" : "LINEAKEYID"
      }, {
        "ParameterID" : "SEQNUM",
        "ColumnID" : "SEQNUM"
      }, {
        "ParameterID" : "ISMODIFIABLE",
        "ColumnID" : "ISMODIFIABLE"
      }, {
        "ParameterID" : "CATEGORY",
        "ColumnID" : "CATEGORY"
      }, {
        "ParameterID" : "SOURCECODE",
        "ColumnID" : "SOURCECODE"
      }, {
        "ParameterID" : "VARIABLENUMBER",
        "ColumnID" : "VARIABLENUMBER"
      }, {
        "ParameterID" : "VARIABLES",
        "ColumnID" : "VARIABLES"
      }, {
        "ParameterID" : "REPLACEMENTVALUES",
        "ColumnID" : "REPLACEMENTVALUES"
      }, {
        "ParameterID" : "ERRORCODE",
        "ColumnID" : "ERRORCODE"
      }, {
        "ParameterID" : "ERRORMESSAGEID",
        "ColumnID" : "ERRORMESSAGEID"
      }, {
        "ParameterID" : "PSEUDOCODE1",
        "ColumnID" : "PSEUDOCODE1"
      }, {
        "ParameterID" : "PSEUDOCODE2",
        "ColumnID" : "PSEUDOCODE2"
      }, {
        "ParameterID" : "PSEUDOCODE3",
        "ColumnID" : "PSEUDOCODE3"
      }, {
        "ParameterID" : "DESCRIPTION1",
        "ColumnID" : "DESCRIPTION1"
      }, {
        "ParameterID" : "DESCRIPTION2",
        "ColumnID" : "DESCRIPTION2"
      }, {
        "ParameterID" : "DESCRIPTION3",
        "ColumnID" : "DESCRIPTION3"
      } ]
    }
  },
  "id" : "uploadAppendMenu1"
},ruleFunction3,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction3();
						 } 
				 } else { 
						 ruleFunction3();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction3(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "uploadAppendMenu1_ClearGridData_53",
    "gridID" : "grd1"
  },
  "id" : "uploadAppendMenu1"
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
		}; 
		function ruleFunction4(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "uploadAppendMenu1_ClearGridData_73",
    "gridID" : "grdEditor"
  },
  "id" : "uploadAppendMenu1"
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
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "uploadAppendMenu1_BindPropertyData3_88",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "RULE_UDFBIZLINETEMPLATE",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SEQNUM",
        "POSITION" : "1",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "2",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "BLOCKID",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ITEMNAME",
        "POSITION" : "4",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "80",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "LINEAKEYID",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ISMODIFIABLE",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "CATEGORY",
        "POSITION" : "7",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SOURCECODE",
        "POSITION" : "8",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLENUMBER",
        "POSITION" : "9",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLES",
        "POSITION" : "10",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "REPLACEMENTVALUES",
        "POSITION" : "11",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORCODE",
        "POSITION" : "12",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORMESSAGEID",
        "POSITION" : "13",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE1",
        "POSITION" : "14",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE2",
        "POSITION" : "15",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE3",
        "POSITION" : "16",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION1",
        "POSITION" : "17",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION2",
        "POSITION" : "18",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION3",
        "POSITION" : "19",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "CLASSATTRIBUTE" : "BLOCKID",
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
        "CLASSATTRIBUTE" : "ITEMNAME",
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
        "CLASSATTRIBUTE" : "LINEAKEYID",
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
        "CLASSATTRIBUTE" : "SEQNUM",
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
        "CLASSATTRIBUTE" : "ISMODIFIABLE",
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
        "CLASSATTRIBUTE" : "CATEGORY",
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
        "CLASSATTRIBUTE" : "SOURCECODE",
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
        "CLASSATTRIBUTE" : "VARIABLENUMBER",
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
        "CLASSATTRIBUTE" : "VARIABLES",
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
        "CLASSATTRIBUTE" : "REPLACEMENTVALUES",
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
        "CLASSATTRIBUTE" : "ERRORCODE",
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
        "CLASSATTRIBUTE" : "ERRORMESSAGEID",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE1",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE2",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE3",
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
        "CLASSATTRIBUTE" : "DESCRIPTION1",
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
        "CLASSATTRIBUTE" : "DESCRIPTION2",
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
        "CLASSATTRIBUTE" : "DESCRIPTION3",
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
      "queryRuleId" : "RULE_UDFBIZLINETEMPLATE_T1F9P",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "RULE_BIZITEMTEMPLATE_PROJECTID_tbHYo",
        "sessionFlag": "Y",
        "parameterId":"projectId"
      } ],
      "hasSort" : true
    }
  },
  "id" : "uploadAppendMenu1"
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
	 //* grd0 Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#grd0").on("click",function(e) {  
			 window.onerror = function(msg, url, line, col, error) { 
					 console.log('Error: ' + msg + ' Script: ' + url + ' Line: ' + line + ' StackTrace: '+error);
			 };  
       var gridID = "grd0";
        var rowData = $("#child-" + gridID).jqGrid("getRowData", $("#child-" + gridID).jqGrid("getGridParam", "selrow"));
        var clickItemName = rowData["ITEMNAME"];
        var clickBlockId = rowData["BLOCKID"];
        $("#txtItemName").val(clickItemName);
        $("#txtClickBlockId").val(clickBlockId);
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
      "tableId" : "RULE_UDFBIZITEMTEMPLATE",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "SEQNUM",
        "POSITION" : "1",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "2",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "20",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "BLOCKID",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "ITEMNAME",
        "POSITION" : "4",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "80",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "ITEMTYPE",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "80",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "CATEGORY",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "ISMODIFIABLE",
        "POSITION" : "7",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "LEVEL",
        "POSITION" : "8",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "SUPERITEMID",
        "POSITION" : "9",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "80",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "ICONNAME",
        "POSITION" : "10",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "ICONIMAGE",
        "POSITION" : "11",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "100",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "PSEUDOCODE1",
        "POSITION" : "12",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "PSEUDOCODE2",
        "POSITION" : "13",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "PSEUDOCODE3",
        "POSITION" : "14",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "ICONTEXT1",
        "POSITION" : "15",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "ICONTEXT2",
        "POSITION" : "16",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "ICONTEXT3",
        "POSITION" : "17",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "DESCRIPTION1",
        "POSITION" : "18",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "DESCRIPTION2",
        "POSITION" : "19",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "DESCRIPTION3",
        "POSITION" : "20",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "CLASSATTRIBUTE" : "BLOCKID",
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
        "CLASSATTRIBUTE" : "ITEMNAME",
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
        "CLASSATTRIBUTE" : "ITEMTYPE",
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
        "CLASSATTRIBUTE" : "CATEGORY",
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
        "CLASSATTRIBUTE" : "ISMODIFIABLE",
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
        "CLASSATTRIBUTE" : "LEVEL",
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
        "CLASSATTRIBUTE" : "SUPERITEMID",
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
        "CLASSATTRIBUTE" : "SEQNUM",
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
        "CLASSATTRIBUTE" : "ICONNAME",
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
        "CLASSATTRIBUTE" : "ICONIMAGE",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE1",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE2",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE3",
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
        "CLASSATTRIBUTE" : "ICONTEXT1",
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
        "CLASSATTRIBUTE" : "ICONTEXT2",
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
        "CLASSATTRIBUTE" : "ICONTEXT3",
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
        "CLASSATTRIBUTE" : "DESCRIPTION1",
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
        "CLASSATTRIBUTE" : "DESCRIPTION2",
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
        "CLASSATTRIBUTE" : "DESCRIPTION3",
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
      "queryRuleId" : "RULE_UDFBIZITEMTEMPLATE_xpkJe",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "RULE_BIZITEMTEMPLATE_PROJECTID_tbHYo",
        "sessionFlag": "Y",
        "parameterId":"projectId"
      } ],
      "hasSort" : true
    }
  },
  "id" : "grd0"
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
		function ruleFunction7(){ 
			 returnVal =  rules.bindpropertydata({
  "data" : {
    "listExpressionID" : "grd0_getgridrowdata_2",
    "selectedExpressionID" : "grd0_bindpropertydata_3",
    "gridID" : "grdEditor"
  },
  "id" : "grd0"
},ruleFunction8,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction8();
						 } 
				 } else { 
						 ruleFunction8();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction8(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [ {
      Parameter: "PROJECTID",
      Mandatory: "Y",
      InputType: "Text",
      Value: sessionStorage.getItem("projectId"),
      Column: "PROJECTID",
    }, {
      "Parameter" : "ITEMNAME",
      "Mandatory" : "N",
      "InputType" : "Component",
      "Value" : "grd0",
      "Column" : "ITEMNAME"
    } ],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "ITEMNAME_RULE_UDFBIZITEMTEMPLATE_ITEMNAME_RULE_UDFBIZLINETEMPLATE_I3haW",
    "selectedExpressionID" : "grd0_SendMessage_6",
    "MSGGridInstance" : {
      "_setdata" : [ {
        Parameter: "PROJECTID",
        Mandatory: "Y",
        InputType: "Text",
        Value: sessionStorage.getItem("projectId"),
        Column: "PROJECTID",
      }, {
        "Parameter" : "ITEMNAME",
        "Mandatory" : "N",
        "InputType" : "Component",
        "Value" : "grd0",
        "Column" : "ITEMNAME"
      } ]
    }
  },
  "id" : "grd0"
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
		}; 
		function ruleFunction9(){ 
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "grd0_BindGridData_7",
    "listExpressionID" : "grd0_SendMessage_6",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "BLOCKID",
      "ColumnID" : "BLOCKID"
    }, {
      "ParameterID" : "ITEMNAME",
      "ColumnID" : "ITEMNAME"
    }, {
      "ParameterID" : "LINEAKEYID",
      "ColumnID" : "LINEAKEYID"
    }, {
      "ParameterID" : "SEQNUM",
      "ColumnID" : "SEQNUM"
    }, {
      "ParameterID" : "ISMODIFIABLE",
      "ColumnID" : "ISMODIFIABLE"
    }, {
      "ParameterID" : "CATEGORY",
      "ColumnID" : "CATEGORY"
    }, {
      "ParameterID" : "SOURCECODE",
      "ColumnID" : "SOURCECODE"
    }, {
      "ParameterID" : "VARIABLENUMBER",
      "ColumnID" : "VARIABLENUMBER"
    }, {
      "ParameterID" : "VARIABLES",
      "ColumnID" : "VARIABLES"
    }, {
      "ParameterID" : "REPLACEMENTVALUES",
      "ColumnID" : "REPLACEMENTVALUES"
    }, {
      "ParameterID" : "ERRORCODE",
      "ColumnID" : "ERRORCODE"
    }, {
      "ParameterID" : "ERRORMESSAGEID",
      "ColumnID" : "ERRORMESSAGEID"
    }, {
      "ParameterID" : "PSEUDOCODE1",
      "ColumnID" : "PSEUDOCODE1"
    }, {
      "ParameterID" : "PSEUDOCODE2",
      "ColumnID" : "PSEUDOCODE2"
    }, {
      "ParameterID" : "PSEUDOCODE3",
      "ColumnID" : "PSEUDOCODE3"
    }, {
      "ParameterID" : "DESCRIPTION1",
      "ColumnID" : "DESCRIPTION1"
    }, {
      "ParameterID" : "DESCRIPTION2",
      "ColumnID" : "DESCRIPTION2"
    }, {
      "ParameterID" : "DESCRIPTION3",
      "ColumnID" : "DESCRIPTION3"
    } ],
    "gridID" : "grd1",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID"
      }, {
        "ParameterID" : "BLOCKID",
        "ColumnID" : "BLOCKID"
      }, {
        "ParameterID" : "ITEMNAME",
        "ColumnID" : "ITEMNAME"
      }, {
        "ParameterID" : "LINEAKEYID",
        "ColumnID" : "LINEAKEYID"
      }, {
        "ParameterID" : "SEQNUM",
        "ColumnID" : "SEQNUM"
      }, {
        "ParameterID" : "ISMODIFIABLE",
        "ColumnID" : "ISMODIFIABLE"
      }, {
        "ParameterID" : "CATEGORY",
        "ColumnID" : "CATEGORY"
      }, {
        "ParameterID" : "SOURCECODE",
        "ColumnID" : "SOURCECODE"
      }, {
        "ParameterID" : "VARIABLENUMBER",
        "ColumnID" : "VARIABLENUMBER"
      }, {
        "ParameterID" : "VARIABLES",
        "ColumnID" : "VARIABLES"
      }, {
        "ParameterID" : "REPLACEMENTVALUES",
        "ColumnID" : "REPLACEMENTVALUES"
      }, {
        "ParameterID" : "ERRORCODE",
        "ColumnID" : "ERRORCODE"
      }, {
        "ParameterID" : "ERRORMESSAGEID",
        "ColumnID" : "ERRORMESSAGEID"
      }, {
        "ParameterID" : "PSEUDOCODE1",
        "ColumnID" : "PSEUDOCODE1"
      }, {
        "ParameterID" : "PSEUDOCODE2",
        "ColumnID" : "PSEUDOCODE2"
      }, {
        "ParameterID" : "PSEUDOCODE3",
        "ColumnID" : "PSEUDOCODE3"
      }, {
        "ParameterID" : "DESCRIPTION1",
        "ColumnID" : "DESCRIPTION1"
      }, {
        "ParameterID" : "DESCRIPTION2",
        "ColumnID" : "DESCRIPTION2"
      }, {
        "ParameterID" : "DESCRIPTION3",
        "ColumnID" : "DESCRIPTION3"
      } ]
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
		}; 
		 } catch(err) {
				 console.error('Function exception: '+err);//예외처리 메세지
				 console.trace();//호출 스택을 출력
				 $(e.target).removeAttr('disabled');
		 } finally {
				 //TREE 선택 하지 않고 Grid 선택 했을 시 Reorder Data 값 넘기기 위해 사용
         var id = $("#child-grd0").jqGrid("getGridParam","selrow");
         var data = $("#child-grd0").jqGrid("getRowData",id);
         $("#txtBlockId").val(data.BLOCKID);
         //  $("#txtCategory").val(data.CATEGORY);
         //  $("#txtItemType").val(data.ITEMTYPE);
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
      "tableId" : "RULE_UDFBIZITEMTEMPLATE",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "20",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "BLOCKID",
        "POSITION" : "2",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "ITEMNAME",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "80",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "ITEMTYPE",
        "POSITION" : "4",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "80",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "CATEGORY",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "ISMODIFIABLE",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "LEVEL",
        "POSITION" : "7",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "SUPERITEMID",
        "POSITION" : "8",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "80",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "SEQNUM",
        "POSITION" : "9",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "ICONNAME",
        "POSITION" : "10",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "ICONIMAGE",
        "POSITION" : "11",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "100",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "PSEUDOCODE1",
        "POSITION" : "12",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "PSEUDOCODE2",
        "POSITION" : "13",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "PSEUDOCODE3",
        "POSITION" : "14",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "ICONTEXT1",
        "POSITION" : "15",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "ICONTEXT2",
        "POSITION" : "16",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "ICONTEXT3",
        "POSITION" : "17",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "DESCRIPTION1",
        "POSITION" : "18",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "DESCRIPTION2",
        "POSITION" : "19",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
        "COLUMNID" : "DESCRIPTION3",
        "POSITION" : "20",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "CLASSATTRIBUTE" : "BLOCKID",
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
        "CLASSATTRIBUTE" : "ITEMNAME",
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
        "CLASSATTRIBUTE" : "ITEMTYPE",
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
        "CLASSATTRIBUTE" : "CATEGORY",
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
        "CLASSATTRIBUTE" : "ISMODIFIABLE",
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
        "CLASSATTRIBUTE" : "LEVEL",
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
        "CLASSATTRIBUTE" : "SUPERITEMID",
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
        "CLASSATTRIBUTE" : "SEQNUM",
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
        "CLASSATTRIBUTE" : "ICONNAME",
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
        "CLASSATTRIBUTE" : "ICONIMAGE",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE1",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE2",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE3",
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
        "CLASSATTRIBUTE" : "ICONTEXT1",
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
        "CLASSATTRIBUTE" : "ICONTEXT2",
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
        "CLASSATTRIBUTE" : "ICONTEXT3",
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
        "CLASSATTRIBUTE" : "DESCRIPTION1",
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
        "CLASSATTRIBUTE" : "DESCRIPTION2",
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
        "CLASSATTRIBUTE" : "DESCRIPTION3",
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
      "queryRuleId" : "RULE_UDFBIZITEMTEMPLATE_xpkJe",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "RULE_BIZITEMTEMPLATE_PROJECTID_tbHYo",
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
		function ruleFunction12(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [ {
      "Parameter" : "PROJECTID",
      "Mandatory" : "Y",
      "InputType" : "Text",
      "Value" : sessionStorage.getItem("projectId"),
      "Column" : "PROJECTID"
    }],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "RULE_UDFBIZITEMTEMPLATE_xpkJe",
    "selectedExpressionID" : "uploadAppendMenu0_SendMessage_32",
    "MSGGridInstance" : {
      "_setdata" : null
    }
  },
  "id" : "uploadAppendMenu0"
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
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "uploadAppendMenu0_BindGridData_33",
    "listExpressionID" : "uploadAppendMenu0_SendMessage_32",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "BLOCKID",
      "ColumnID" : "BLOCKID"
    }, {
      "ParameterID" : "ITEMNAME",
      "ColumnID" : "ITEMNAME"
    }, {
      "ParameterID" : "ITEMTYPE",
      "ColumnID" : "ITEMTYPE"
    }, {
      "ParameterID" : "CATEGORY",
      "ColumnID" : "CATEGORY"
    }, {
      "ParameterID" : "ISMODIFIABLE",
      "ColumnID" : "ISMODIFIABLE"
    }, {
      "ParameterID" : "LEVEL",
      "ColumnID" : "LEVEL"
    }, {
      "ParameterID" : "SUPERITEMID",
      "ColumnID" : "SUPERITEMID"
    }, {
      "ParameterID" : "SEQNUM",
      "ColumnID" : "SEQNUM"
    }, {
      "ParameterID" : "ICONNAME",
      "ColumnID" : "ICONNAME"
    }, {
      "ParameterID" : "ICONIMAGE",
      "ColumnID" : "ICONIMAGE"
    }, {
      "ParameterID" : "PSEUDOCODE1",
      "ColumnID" : "PSEUDOCODE1"
    }, {
      "ParameterID" : "PSEUDOCODE2",
      "ColumnID" : "PSEUDOCODE2"
    }, {
      "ParameterID" : "PSEUDOCODE3",
      "ColumnID" : "PSEUDOCODE3"
    }, {
      "ParameterID" : "ICONTEXT1",
      "ColumnID" : "ICONTEXT1"
    }, {
      "ParameterID" : "ICONTEXT2",
      "ColumnID" : "ICONTEXT2"
    }, {
      "ParameterID" : "ICONTEXT3",
      "ColumnID" : "ICONTEXT3"
    }, {
      "ParameterID" : "DESCRIPTION1",
      "ColumnID" : "DESCRIPTION1"
    }, {
      "ParameterID" : "DESCRIPTION2",
      "ColumnID" : "DESCRIPTION2"
    }, {
      "ParameterID" : "DESCRIPTION3",
      "ColumnID" : "DESCRIPTION3"
    } ],
    "gridID" : "grd0",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID"
      }, {
        "ParameterID" : "BLOCKID",
        "ColumnID" : "BLOCKID"
      }, {
        "ParameterID" : "ITEMNAME",
        "ColumnID" : "ITEMNAME"
      }, {
        "ParameterID" : "ITEMTYPE",
        "ColumnID" : "ITEMTYPE"
      }, {
        "ParameterID" : "CATEGORY",
        "ColumnID" : "CATEGORY"
      }, {
        "ParameterID" : "ISMODIFIABLE",
        "ColumnID" : "ISMODIFIABLE"
      }, {
        "ParameterID" : "LEVEL",
        "ColumnID" : "LEVEL"
      }, {
        "ParameterID" : "SUPERITEMID",
        "ColumnID" : "SUPERITEMID"
      }, {
        "ParameterID" : "SEQNUM",
        "ColumnID" : "SEQNUM"
      }, {
        "ParameterID" : "ICONNAME",
        "ColumnID" : "ICONNAME"
      }, {
        "ParameterID" : "ICONIMAGE",
        "ColumnID" : "ICONIMAGE"
      }, {
        "ParameterID" : "PSEUDOCODE1",
        "ColumnID" : "PSEUDOCODE1"
      }, {
        "ParameterID" : "PSEUDOCODE2",
        "ColumnID" : "PSEUDOCODE2"
      }, {
        "ParameterID" : "PSEUDOCODE3",
        "ColumnID" : "PSEUDOCODE3"
      }, {
        "ParameterID" : "ICONTEXT1",
        "ColumnID" : "ICONTEXT1"
      }, {
        "ParameterID" : "ICONTEXT2",
        "ColumnID" : "ICONTEXT2"
      }, {
        "ParameterID" : "ICONTEXT3",
        "ColumnID" : "ICONTEXT3"
      }, {
        "ParameterID" : "DESCRIPTION1",
        "ColumnID" : "DESCRIPTION1"
      }, {
        "ParameterID" : "DESCRIPTION2",
        "ColumnID" : "DESCRIPTION2"
      }, {
        "ParameterID" : "DESCRIPTION3",
        "ColumnID" : "DESCRIPTION3"
      } ]
    }
  },
  "id" : "uploadAppendMenu0"
},ruleFunction14,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction14();
						 } 
				 } else { 
						 ruleFunction14();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction14(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "uploadAppendMenu0_ClearGridData_69",
    "gridID" : "grdEditor"
  },
  "id" : "uploadAppendMenu0"
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
		}; 
		function ruleFunction15(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "uploadAppendMenu0_ClearGridData_34",
    "gridID" : "grd1"
  },
  "id" : "uploadAppendMenu0"
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
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "uploadAppendMenu0_BindPropertyData3_84",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "RULE_UDFBIZLINETEMPLATE",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SEQNUM",
        "POSITION" : "1",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "2",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "BLOCKID",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ITEMNAME",
        "POSITION" : "4",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "80",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "LINEAKEYID",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ISMODIFIABLE",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "CATEGORY",
        "POSITION" : "7",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SOURCECODE",
        "POSITION" : "8",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLENUMBER",
        "POSITION" : "9",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLES",
        "POSITION" : "10",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "REPLACEMENTVALUES",
        "POSITION" : "11",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORCODE",
        "POSITION" : "12",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORMESSAGEID",
        "POSITION" : "13",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE1",
        "POSITION" : "14",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE2",
        "POSITION" : "15",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE3",
        "POSITION" : "16",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION1",
        "POSITION" : "17",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION2",
        "POSITION" : "18",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION3",
        "POSITION" : "19",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "CLASSATTRIBUTE" : "BLOCKID",
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
        "CLASSATTRIBUTE" : "ITEMNAME",
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
        "CLASSATTRIBUTE" : "LINEAKEYID",
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
        "CLASSATTRIBUTE" : "SEQNUM",
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
        "CLASSATTRIBUTE" : "ISMODIFIABLE",
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
        "CLASSATTRIBUTE" : "CATEGORY",
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
        "CLASSATTRIBUTE" : "SOURCECODE",
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
        "CLASSATTRIBUTE" : "VARIABLENUMBER",
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
        "CLASSATTRIBUTE" : "VARIABLES",
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
        "CLASSATTRIBUTE" : "REPLACEMENTVALUES",
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
        "CLASSATTRIBUTE" : "ERRORCODE",
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
        "CLASSATTRIBUTE" : "ERRORMESSAGEID",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE1",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE2",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE3",
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
        "CLASSATTRIBUTE" : "DESCRIPTION1",
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
        "CLASSATTRIBUTE" : "DESCRIPTION2",
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
        "CLASSATTRIBUTE" : "DESCRIPTION3",
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
      "queryRuleId" : "RULE_UDFBIZLINETEMPLATE_T1F9P",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "RULE_BIZITEMTEMPLATE_PROJECTID_tbHYo",
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
	 //* grd1 Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#grd1").on("click",function(e) {  
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
    "gridID" : "grd1",
    "selectedExpressionID" : "grd1_getgridrowdata_4",
    "dataSource" : {
      "tableId" : "RULE_UDFBIZLINETEMPLATE",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SEQNUM",
        "POSITION" : "1",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "2",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "BLOCKID",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ITEMNAME",
        "POSITION" : "4",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "80",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "LINEAKEYID",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ISMODIFIABLE",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "CATEGORY",
        "POSITION" : "7",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SOURCECODE",
        "POSITION" : "8",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLENUMBER",
        "POSITION" : "9",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLES",
        "POSITION" : "10",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "REPLACEMENTVALUES",
        "POSITION" : "11",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORCODE",
        "POSITION" : "12",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORMESSAGEID",
        "POSITION" : "13",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE1",
        "POSITION" : "14",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE2",
        "POSITION" : "15",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE3",
        "POSITION" : "16",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION1",
        "POSITION" : "17",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION2",
        "POSITION" : "18",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION3",
        "POSITION" : "19",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "CLASSATTRIBUTE" : "BLOCKID",
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
        "CLASSATTRIBUTE" : "ITEMNAME",
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
        "CLASSATTRIBUTE" : "LINEAKEYID",
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
        "CLASSATTRIBUTE" : "SEQNUM",
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
        "CLASSATTRIBUTE" : "ISMODIFIABLE",
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
        "CLASSATTRIBUTE" : "CATEGORY",
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
        "CLASSATTRIBUTE" : "SOURCECODE",
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
        "CLASSATTRIBUTE" : "VARIABLENUMBER",
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
        "CLASSATTRIBUTE" : "VARIABLES",
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
        "CLASSATTRIBUTE" : "REPLACEMENTVALUES",
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
        "CLASSATTRIBUTE" : "ERRORCODE",
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
        "CLASSATTRIBUTE" : "ERRORMESSAGEID",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE1",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE2",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE3",
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
        "CLASSATTRIBUTE" : "DESCRIPTION1",
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
        "CLASSATTRIBUTE" : "DESCRIPTION2",
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
        "CLASSATTRIBUTE" : "DESCRIPTION3",
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
      "queryRuleId" : "RULE_UDFBIZLINETEMPLATE_T1F9P",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "RULE_BIZITEMTEMPLATE_PROJECTID_tbHYo",
        "sessionFlag": "Y",
        "parameterId":"projectId"
      } ],
      "hasSort" : true
    }
  },
  "id" : "grd1"
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
		function ruleFunction18(){ 
			 returnVal =  rules.bindpropertydata({
  "data" : {
    "listExpressionID" : "grd1_getgridrowdata_4",
    "selectedExpressionID" : "grd1_bindpropertydata_5",
    "gridID" : "grdEditor"
  },
  "id" : "grd1"
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
		 $("#grd1").on("contextmenu",function(e) {  
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
    "selectedExpressionID" : "grd1_ShowContextMenu_23",
    "gridID" : "grd1",
    "contextMenuID" : "gridContextMenu1",
    "dataSource" : {
      "tableId" : "RULE_UDFBIZLINETEMPLATE",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "1",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "BLOCKID",
        "POSITION" : "2",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ITEMNAME",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "80",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "LINEAKEYID",
        "POSITION" : "4",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SEQNUM",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ISMODIFIABLE",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "CATEGORY",
        "POSITION" : "7",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SOURCECODE",
        "POSITION" : "8",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLENUMBER",
        "POSITION" : "9",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLES",
        "POSITION" : "10",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "REPLACEMENTVALUES",
        "POSITION" : "11",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORCODE",
        "POSITION" : "12",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORMESSAGEID",
        "POSITION" : "13",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE1",
        "POSITION" : "14",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE2",
        "POSITION" : "15",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE3",
        "POSITION" : "16",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION1",
        "POSITION" : "17",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION2",
        "POSITION" : "18",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION3",
        "POSITION" : "19",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "CLASSATTRIBUTE" : "BLOCKID",
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
        "CLASSATTRIBUTE" : "ITEMNAME",
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
        "CLASSATTRIBUTE" : "LINEAKEYID",
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
        "CLASSATTRIBUTE" : "SEQNUM",
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
        "CLASSATTRIBUTE" : "ISMODIFIABLE",
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
        "CLASSATTRIBUTE" : "CATEGORY",
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
        "CLASSATTRIBUTE" : "SOURCECODE",
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
        "CLASSATTRIBUTE" : "VARIABLENUMBER",
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
        "CLASSATTRIBUTE" : "VARIABLES",
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
        "CLASSATTRIBUTE" : "REPLACEMENTVALUES",
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
        "CLASSATTRIBUTE" : "ERRORCODE",
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
        "CLASSATTRIBUTE" : "ERRORMESSAGEID",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE1",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE2",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE3",
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
        "CLASSATTRIBUTE" : "DESCRIPTION1",
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
        "CLASSATTRIBUTE" : "DESCRIPTION2",
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
        "CLASSATTRIBUTE" : "DESCRIPTION3",
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
      "queryRuleId" : "RULE_UDFBIZLINETEMPLATE_T1F9P",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "RULE_BIZITEMTEMPLATE_PROJECTID_tbHYo",
        "sessionFlag": "Y",
        "parameterId":"projectId"
      } ],
      "hasSort" : true
    }
  },
  "id" : "grd1"
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
    "selectedExpressionID" : "btnUpdate_Confirm_93"
  },
  "actionName" : "Confirm",
  "id" : "btnUpdate"
},ruleFunction21,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction21();
						 } 
				 } else { 
						 ruleFunction21();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		function ruleFunction21(){ 
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
},ruleFunction22,e);
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
		}; 
		function ruleFunction22(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [ {
      "Parameter" : "PROJECTID",
      "Mandatory" : "Y",
      "InputType" : "Text",
      "Value" : sessionStorage.getItem("projectId"),
      "Column" : "PROJECTID"
    }],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "RULE_UDFBIZITEMTEMPLATE_xpkJe",
    "selectedExpressionID" : "btnUpdate_SendMessage_13",
    "MSGGridInstance" : {
      "_setdata" : null
    }
  },
  "id" : "btnUpdate"
},ruleFunction23,e);
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
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "btnUpdate_BindGridData_14",
    "listExpressionID" : "btnUpdate_SendMessage_13",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "BLOCKID",
      "ColumnID" : "BLOCKID"
    }, {
      "ParameterID" : "ITEMNAME",
      "ColumnID" : "ITEMNAME"
    }, {
      "ParameterID" : "ITEMTYPE",
      "ColumnID" : "ITEMTYPE"
    }, {
      "ParameterID" : "CATEGORY",
      "ColumnID" : "CATEGORY"
    }, {
      "ParameterID" : "ISMODIFIABLE",
      "ColumnID" : "ISMODIFIABLE"
    }, {
      "ParameterID" : "LEVEL",
      "ColumnID" : "LEVEL"
    }, {
      "ParameterID" : "SUPERITEMID",
      "ColumnID" : "SUPERITEMID"
    }, {
      "ParameterID" : "SEQNUM",
      "ColumnID" : "SEQNUM"
    }, {
      "ParameterID" : "ICONNAME",
      "ColumnID" : "ICONNAME"
    }, {
      "ParameterID" : "ICONIMAGE",
      "ColumnID" : "ICONIMAGE"
    }, {
      "ParameterID" : "PSEUDOCODE1",
      "ColumnID" : "PSEUDOCODE1"
    }, {
      "ParameterID" : "PSEUDOCODE2",
      "ColumnID" : "PSEUDOCODE2"
    }, {
      "ParameterID" : "PSEUDOCODE3",
      "ColumnID" : "PSEUDOCODE3"
    }, {
      "ParameterID" : "ICONTEXT1",
      "ColumnID" : "ICONTEXT1"
    }, {
      "ParameterID" : "ICONTEXT2",
      "ColumnID" : "ICONTEXT2"
    }, {
      "ParameterID" : "ICONTEXT3",
      "ColumnID" : "ICONTEXT3"
    }, {
      "ParameterID" : "DESCRIPTION1",
      "ColumnID" : "DESCRIPTION1"
    }, {
      "ParameterID" : "DESCRIPTION2",
      "ColumnID" : "DESCRIPTION2"
    }, {
      "ParameterID" : "DESCRIPTION3",
      "ColumnID" : "DESCRIPTION3"
    } ],
    "gridID" : "grd0",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID"
      }, {
        "ParameterID" : "BLOCKID",
        "ColumnID" : "BLOCKID"
      }, {
        "ParameterID" : "ITEMNAME",
        "ColumnID" : "ITEMNAME"
      }, {
        "ParameterID" : "ITEMTYPE",
        "ColumnID" : "ITEMTYPE"
      }, {
        "ParameterID" : "CATEGORY",
        "ColumnID" : "CATEGORY"
      }, {
        "ParameterID" : "ISMODIFIABLE",
        "ColumnID" : "ISMODIFIABLE"
      }, {
        "ParameterID" : "LEVEL",
        "ColumnID" : "LEVEL"
      }, {
        "ParameterID" : "SUPERITEMID",
        "ColumnID" : "SUPERITEMID"
      }, {
        "ParameterID" : "SEQNUM",
        "ColumnID" : "SEQNUM"
      }, {
        "ParameterID" : "ICONNAME",
        "ColumnID" : "ICONNAME"
      }, {
        "ParameterID" : "ICONIMAGE",
        "ColumnID" : "ICONIMAGE"
      }, {
        "ParameterID" : "PSEUDOCODE1",
        "ColumnID" : "PSEUDOCODE1"
      }, {
        "ParameterID" : "PSEUDOCODE2",
        "ColumnID" : "PSEUDOCODE2"
      }, {
        "ParameterID" : "PSEUDOCODE3",
        "ColumnID" : "PSEUDOCODE3"
      }, {
        "ParameterID" : "ICONTEXT1",
        "ColumnID" : "ICONTEXT1"
      }, {
        "ParameterID" : "ICONTEXT2",
        "ColumnID" : "ICONTEXT2"
      }, {
        "ParameterID" : "ICONTEXT3",
        "ColumnID" : "ICONTEXT3"
      }, {
        "ParameterID" : "DESCRIPTION1",
        "ColumnID" : "DESCRIPTION1"
      }, {
        "ParameterID" : "DESCRIPTION2",
        "ColumnID" : "DESCRIPTION2"
      }, {
        "ParameterID" : "DESCRIPTION3",
        "ColumnID" : "DESCRIPTION3"
      } ]
    }
  },
  "id" : "btnUpdate"
},ruleFunction24,e);
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
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "btnUpdate_ClearGridData_65",
    "gridID" : "grdEditor"
  },
  "id" : "btnUpdate"
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
		}; 
		function ruleFunction25(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "btnUpdate_ClearGridData_15",
    "gridID" : "grd1"
  },
  "id" : "btnUpdate"
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
		}; 
		function ruleFunction26(){ 
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "btnUpdate_BindPropertyData3_81",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "RULE_UDFBIZLINETEMPLATE",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SEQNUM",
        "POSITION" : "1",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "2",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "BLOCKID",
        "POSITION" : "1",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ITEMNAME",
        "POSITION" : "2",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "80",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "LINEAKEYID",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ISMODIFIABLE",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "CATEGORY",
        "POSITION" : "7",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SOURCECODE",
        "POSITION" : "8",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLENUMBER",
        "POSITION" : "9",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLES",
        "POSITION" : "10",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "REPLACEMENTVALUES",
        "POSITION" : "11",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORCODE",
        "POSITION" : "12",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORMESSAGEID",
        "POSITION" : "13",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE1",
        "POSITION" : "14",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE2",
        "POSITION" : "15",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE3",
        "POSITION" : "16",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION1",
        "POSITION" : "17",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION2",
        "POSITION" : "18",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION3",
        "POSITION" : "19",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "CLASSATTRIBUTE" : "BLOCKID",
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
        "CLASSATTRIBUTE" : "ITEMNAME",
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
        "CLASSATTRIBUTE" : "LINEAKEYID",
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
        "CLASSATTRIBUTE" : "SEQNUM",
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
        "CLASSATTRIBUTE" : "ISMODIFIABLE",
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
        "CLASSATTRIBUTE" : "CATEGORY",
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
        "CLASSATTRIBUTE" : "SOURCECODE",
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
        "CLASSATTRIBUTE" : "VARIABLENUMBER",
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
        "CLASSATTRIBUTE" : "VARIABLES",
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
        "CLASSATTRIBUTE" : "REPLACEMENTVALUES",
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
        "CLASSATTRIBUTE" : "ERRORCODE",
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
        "CLASSATTRIBUTE" : "ERRORMESSAGEID",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE1",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE2",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE3",
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
        "CLASSATTRIBUTE" : "DESCRIPTION1",
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
        "CLASSATTRIBUTE" : "DESCRIPTION2",
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
        "CLASSATTRIBUTE" : "DESCRIPTION3",
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
      "queryRuleId" : "RULE_UDFBIZLINETEMPLATE_T1F9P",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "RULE_BIZITEMTEMPLATE_PROJECTID_tbHYo",
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
    "selectedExpressionID" : "btnCreate_Confirm_92"
  },
  "actionName" : "Confirm",
  "id" : "btnCreate"
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
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [ {
      "Parameter" : "PROJECTID",
      "Mandatory" : "Y",
      "InputType" : "Text",
      "Value" : sessionStorage.getItem("projectId"),
      "Column" : "PROJECTID"
    }],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "RULE_UDFBIZITEMTEMPLATE_xpkJe",
    "selectedExpressionID" : "btnCreate_SendMessage_9",
    "MSGGridInstance" : {
      "_setdata" : null
    }
  },
  "id" : "btnCreate"
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
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "btnCreate_BindGridData_10",
    "listExpressionID" : "btnCreate_SendMessage_9",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "BLOCKID",
      "ColumnID" : "BLOCKID"
    }, {
      "ParameterID" : "ITEMNAME",
      "ColumnID" : "ITEMNAME"
    }, {
      "ParameterID" : "ITEMTYPE",
      "ColumnID" : "ITEMTYPE"
    }, {
      "ParameterID" : "CATEGORY",
      "ColumnID" : "CATEGORY"
    }, {
      "ParameterID" : "ISMODIFIABLE",
      "ColumnID" : "ISMODIFIABLE"
    }, {
      "ParameterID" : "LEVEL",
      "ColumnID" : "LEVEL"
    }, {
      "ParameterID" : "SUPERITEMID",
      "ColumnID" : "SUPERITEMID"
    }, {
      "ParameterID" : "SEQNUM",
      "ColumnID" : "SEQNUM"
    }, {
      "ParameterID" : "ICONNAME",
      "ColumnID" : "ICONNAME"
    }, {
      "ParameterID" : "ICONIMAGE",
      "ColumnID" : "ICONIMAGE"
    }, {
      "ParameterID" : "PSEUDOCODE1",
      "ColumnID" : "PSEUDOCODE1"
    }, {
      "ParameterID" : "PSEUDOCODE2",
      "ColumnID" : "PSEUDOCODE2"
    }, {
      "ParameterID" : "PSEUDOCODE3",
      "ColumnID" : "PSEUDOCODE3"
    }, {
      "ParameterID" : "ICONTEXT1",
      "ColumnID" : "ICONTEXT1"
    }, {
      "ParameterID" : "ICONTEXT2",
      "ColumnID" : "ICONTEXT2"
    }, {
      "ParameterID" : "ICONTEXT3",
      "ColumnID" : "ICONTEXT3"
    }, {
      "ParameterID" : "DESCRIPTION1",
      "ColumnID" : "DESCRIPTION1"
    }, {
      "ParameterID" : "DESCRIPTION2",
      "ColumnID" : "DESCRIPTION2"
    }, {
      "ParameterID" : "DESCRIPTION3",
      "ColumnID" : "DESCRIPTION3"
    } ],
    "gridID" : "grd0",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID"
      }, {
        "ParameterID" : "BLOCKID",
        "ColumnID" : "BLOCKID"
      }, {
        "ParameterID" : "ITEMNAME",
        "ColumnID" : "ITEMNAME"
      }, {
        "ParameterID" : "ITEMTYPE",
        "ColumnID" : "ITEMTYPE"
      }, {
        "ParameterID" : "CATEGORY",
        "ColumnID" : "CATEGORY"
      }, {
        "ParameterID" : "ISMODIFIABLE",
        "ColumnID" : "ISMODIFIABLE"
      }, {
        "ParameterID" : "LEVEL",
        "ColumnID" : "LEVEL"
      }, {
        "ParameterID" : "SUPERITEMID",
        "ColumnID" : "SUPERITEMID"
      }, {
        "ParameterID" : "SEQNUM",
        "ColumnID" : "SEQNUM"
      }, {
        "ParameterID" : "ICONNAME",
        "ColumnID" : "ICONNAME"
      }, {
        "ParameterID" : "ICONIMAGE",
        "ColumnID" : "ICONIMAGE"
      }, {
        "ParameterID" : "PSEUDOCODE1",
        "ColumnID" : "PSEUDOCODE1"
      }, {
        "ParameterID" : "PSEUDOCODE2",
        "ColumnID" : "PSEUDOCODE2"
      }, {
        "ParameterID" : "PSEUDOCODE3",
        "ColumnID" : "PSEUDOCODE3"
      }, {
        "ParameterID" : "ICONTEXT1",
        "ColumnID" : "ICONTEXT1"
      }, {
        "ParameterID" : "ICONTEXT2",
        "ColumnID" : "ICONTEXT2"
      }, {
        "ParameterID" : "ICONTEXT3",
        "ColumnID" : "ICONTEXT3"
      }, {
        "ParameterID" : "DESCRIPTION1",
        "ColumnID" : "DESCRIPTION1"
      }, {
        "ParameterID" : "DESCRIPTION2",
        "ColumnID" : "DESCRIPTION2"
      }, {
        "ParameterID" : "DESCRIPTION3",
        "ColumnID" : "DESCRIPTION3"
      } ]
    }
  },
  "id" : "btnCreate"
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
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "btnCreate_ClearGridData_64",
    "gridID" : "grdEditor"
  },
  "id" : "btnCreate"
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
		}; 
		function ruleFunction32(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "btnCreate_ClearGridData_11",
    "gridID" : "grd1"
  },
  "id" : "btnCreate"
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
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "btnCreate_BindPropertyData3_80",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "RULE_UDFBIZLINETEMPLATE",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SEQNUM",
        "POSITION" : "1",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "2",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "BLOCKID",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ITEMNAME",
        "POSITION" : "4",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "80",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "LINEAKEYID",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ISMODIFIABLE",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "CATEGORY",
        "POSITION" : "7",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SOURCECODE",
        "POSITION" : "8",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLENUMBER",
        "POSITION" : "9",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLES",
        "POSITION" : "10",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "REPLACEMENTVALUES",
        "POSITION" : "11",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORCODE",
        "POSITION" : "12",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORMESSAGEID",
        "POSITION" : "13",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE1",
        "POSITION" : "14",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE2",
        "POSITION" : "15",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE3",
        "POSITION" : "16",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION1",
        "POSITION" : "17",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION2",
        "POSITION" : "18",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION3",
        "POSITION" : "19",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "CLASSATTRIBUTE" : "BLOCKID",
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
        "CLASSATTRIBUTE" : "ITEMNAME",
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
        "CLASSATTRIBUTE" : "LINEAKEYID",
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
        "CLASSATTRIBUTE" : "SEQNUM",
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
        "CLASSATTRIBUTE" : "ISMODIFIABLE",
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
        "CLASSATTRIBUTE" : "CATEGORY",
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
        "CLASSATTRIBUTE" : "SOURCECODE",
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
        "CLASSATTRIBUTE" : "VARIABLENUMBER",
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
        "CLASSATTRIBUTE" : "VARIABLES",
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
        "CLASSATTRIBUTE" : "REPLACEMENTVALUES",
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
        "CLASSATTRIBUTE" : "ERRORCODE",
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
        "CLASSATTRIBUTE" : "ERRORMESSAGEID",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE1",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE2",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE3",
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
        "CLASSATTRIBUTE" : "DESCRIPTION1",
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
        "CLASSATTRIBUTE" : "DESCRIPTION2",
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
        "CLASSATTRIBUTE" : "DESCRIPTION3",
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
      "queryRuleId" : "RULE_UDFBIZLINETEMPLATE_T1F9P",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "RULE_BIZITEMTEMPLATE_PROJECTID_tbHYo",
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
	 //* downloadAllDataMenu1 Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#downloadAllDataMenu1").on("click",function(e) {  
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
      "Parameter": "PROJECTID",
      Mandatory: "Y",
      InputType: "Text",
      Value: sessionStorage.getItem("projectId"),
      Column: "PROJECTID",
    }],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "RULE_UDFBIZLINETEMPLATE_T1F9P",
    "selectedExpressionID" : "downloadAllDataMenu1_SendMessage_47",
    "MSGGridInstance" : {
      "_setdata" : null
    }
  },
  "id" : "downloadAllDataMenu1"
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
			 returnVal =  rules.downloadalldata({
  "data" : {
    "selectedExpressionID" : "downloadAllDataMenu1_DownloadExcelFile_48",
    "listExpressionID" : "downloadAllDataMenu1_SendMessage_47",
    "gridID" : "grd1"
  },
  "id" : "downloadAllDataMenu1"
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
    "selectedMSGParameterGrid" : [ {
      "Parameter": "PROJECTID",
      Mandatory: "Y",
      InputType: "Text",
      Value: sessionStorage.getItem("projectId"),
      Column: "PROJECTID",
    }],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "RULE_UDFBIZITEMTEMPLATE_xpkJe",
    "selectedExpressionID" : "downloadAllDataMenu0_SendMessage_28",
    "MSGGridInstance" : {
      "_setdata" : null
    }
  },
  "id" : "downloadAllDataMenu0"
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
		function ruleFunction41(){ 
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
	 //* btnItemReorder Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#btnItemReorder").on("click",function(e) {  
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
			 returnVal =  rules.showpopup({
  "data" : {
    "sendContinue" : true,
    "checkComponent" : "",
    "checkComponentHeaderName" : "",
    "checkComponentHeaderNameDisable" : true,
    "subFormName" : "UDFItemReorderPopup",
    "selectedParameterGrid" : [ {
      "Component" : "btnCreate",
      "Boolean" : ""
    }, {
      "Component" : "btnDelete",
      "Boolean" : ""
    }, {
      "Component" : "btnItemReorder",
      "Boolean" : ""
    }, {
      "Component" : "btnLineReorder",
      "Boolean" : ""
    }, {
      "Component" : "btnUpdate",
      "Boolean" : ""
    }, {
      "Component" : "deleteMenu0",
      "Boolean" : ""
    }, {
      "Component" : "deleteMenu1",
      "Boolean" : ""
    }, {
      "Component" : "downloadAllDataMenu0",
      "Boolean" : ""
    }, {
      "Component" : "downloadAllDataMenu1",
      "Boolean" : ""
    }, {
      "Component" : "downloadGridDataMenu0",
      "Boolean" : ""
    }, {
      "Component" : "downloadGridDataMenu1",
      "Boolean" : ""
    }, {
      "Component" : "grd0",
      "Boolean" : "true"
    }, {
      "Component" : "grd1",
      "Boolean" : ""
    }, {
      "Component" : "grdEditor",
      "Boolean" : ""
    }, {
      "Component" : "gridContextMenu0",
      "Boolean" : ""
    }, {
      "Component" : "gridContextMenu1",
      "Boolean" : ""
    }, {
      "Component" : "tre0",
      "Boolean" : ""
    }, {
      "Component" : "txtBlockId",
      "Boolean" : "true"
    }, {
      "Component" : "txtClickBlockId",
      "Boolean" : "true"
    }, {
      "Component" : "txtItemName",
      "Boolean" : "true"
    }, {
      "Component" : "txtItemType",
      "Boolean" : "true"
    }, {
      "Component" : "txtProjectId",
      "Boolean" : "true"
    }, {
      "Component" : "uploadAppendMenu0",
      "Boolean" : ""
    }, {
      "Component" : "uploadAppendMenu1",
      "Boolean" : ""
    }, {
      "Component" : "uploadDeleteInsertMenu0",
      "Boolean" : ""
    }, {
      "Component" : "uploadDeleteInsertMenu1",
      "Boolean" : ""
    }, {
      "Component" : "uploadUpdateInsertMenu0",
      "Boolean" : ""
    }, {
      "Component" : "uploadUpdateInsertMenu1",
      "Boolean" : ""
    } ],
    "selectedExpressionID" : "btnItemReorder_ShowPopup_95",
    "heightSize" : 480,
    "widthSize" : 400,
    "popupName" : "Item Reorder",
    "gridInstance" : {
      "_setdata" : [ {
        "Component" : "btnCreate",
        "Boolean" : ""
      }, {
        "Component" : "btnDelete",
        "Boolean" : ""
      }, {
        "Component" : "btnItemReorder",
        "Boolean" : ""
      }, {
        "Component" : "btnLineReorder",
        "Boolean" : ""
      }, {
        "Component" : "btnUpdate",
        "Boolean" : ""
      }, {
        "Component" : "deleteMenu0",
        "Boolean" : ""
      }, {
        "Component" : "deleteMenu1",
        "Boolean" : ""
      }, {
        "Component" : "downloadAllDataMenu0",
        "Boolean" : ""
      }, {
        "Component" : "downloadAllDataMenu1",
        "Boolean" : ""
      }, {
        "Component" : "downloadGridDataMenu0",
        "Boolean" : ""
      }, {
        "Component" : "downloadGridDataMenu1",
        "Boolean" : ""
      }, {
        "Component" : "grd0",
        "Boolean" : "true"
      }, {
        "Component" : "grd1",
        "Boolean" : ""
      }, {
        "Component" : "grdEditor",
        "Boolean" : ""
      }, {
        "Component" : "gridContextMenu0",
        "Boolean" : ""
      }, {
        "Component" : "gridContextMenu1",
        "Boolean" : ""
      }, {
        "Component" : "tre0",
        "Boolean" : ""
      }, {
        "Component" : "txtBlockId",
        "Boolean" : "true"
      }, {
        "Component" : "txtClickBlockId",
        "Boolean" : "true"
      }, {
        "Component" : "txtItemName",
        "Boolean" : "true"
      }, {
        "Component" : "txtItemType",
        "Boolean" : "true"
      }, {
        "Component" : "txtProjectId",
        "Boolean" : "true"
      }, {
        "Component" : "uploadAppendMenu0",
        "Boolean" : ""
      }, {
        "Component" : "uploadAppendMenu1",
        "Boolean" : ""
      }, {
        "Component" : "uploadDeleteInsertMenu0",
        "Boolean" : ""
      }, {
        "Component" : "uploadDeleteInsertMenu1",
        "Boolean" : ""
      }, {
        "Component" : "uploadUpdateInsertMenu0",
        "Boolean" : ""
      }, {
        "Component" : "uploadUpdateInsertMenu1",
        "Boolean" : ""
      } ]
    }
  },
  "actionName" : "ShowPopup",
  "id" : "btnItemReorder"
},initializeLoad,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
              initializeLoad();
          } 
        } else { 
            initializeLoad();
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
    mode: "delete insert5",
    projectId: sessionStorage.getItem("projectId")
  },
  "id" : "uploadDeleteInsertMenu0"
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
    "selectedMSGParameterGrid" : [ {
      "Parameter": "PROJECTID",
      Mandatory: "Y",
      InputType: "Text",
      Value: sessionStorage.getItem("projectId"),
      Column: "PROJECTID",
    }],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "RULE_UDFBIZITEMTEMPLATE_xpkJe",
    "selectedExpressionID" : "uploadDeleteInsertMenu0_SendMessage_40",
    "MSGGridInstance" : {
      "_setdata" : null
    }
  },
  "id" : "uploadDeleteInsertMenu0"
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
    "selectedExpressionID" : "uploadDeleteInsertMenu0_BindGridData_41",
    "listExpressionID" : "uploadDeleteInsertMenu0_SendMessage_40",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "BLOCKID",
      "ColumnID" : "BLOCKID"
    }, {
      "ParameterID" : "ITEMNAME",
      "ColumnID" : "ITEMNAME"
    }, {
      "ParameterID" : "ITEMTYPE",
      "ColumnID" : "ITEMTYPE"
    }, {
      "ParameterID" : "CATEGORY",
      "ColumnID" : "CATEGORY"
    }, {
      "ParameterID" : "ISMODIFIABLE",
      "ColumnID" : "ISMODIFIABLE"
    }, {
      "ParameterID" : "LEVEL",
      "ColumnID" : "LEVEL"
    }, {
      "ParameterID" : "SUPERITEMID",
      "ColumnID" : "SUPERITEMID"
    }, {
      "ParameterID" : "SEQNUM",
      "ColumnID" : "SEQNUM"
    }, {
      "ParameterID" : "ICONNAME",
      "ColumnID" : "ICONNAME"
    }, {
      "ParameterID" : "ICONIMAGE",
      "ColumnID" : "ICONIMAGE"
    }, {
      "ParameterID" : "PSEUDOCODE1",
      "ColumnID" : "PSEUDOCODE1"
    }, {
      "ParameterID" : "PSEUDOCODE2",
      "ColumnID" : "PSEUDOCODE2"
    }, {
      "ParameterID" : "PSEUDOCODE3",
      "ColumnID" : "PSEUDOCODE3"
    }, {
      "ParameterID" : "ICONTEXT1",
      "ColumnID" : "ICONTEXT1"
    }, {
      "ParameterID" : "ICONTEXT2",
      "ColumnID" : "ICONTEXT2"
    }, {
      "ParameterID" : "ICONTEXT3",
      "ColumnID" : "ICONTEXT3"
    }, {
      "ParameterID" : "DESCRIPTION1",
      "ColumnID" : "DESCRIPTION1"
    }, {
      "ParameterID" : "DESCRIPTION2",
      "ColumnID" : "DESCRIPTION2"
    }, {
      "ParameterID" : "DESCRIPTION3",
      "ColumnID" : "DESCRIPTION3"
    } ],
    "gridID" : "grd0",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID"
      }, {
        "ParameterID" : "BLOCKID",
        "ColumnID" : "BLOCKID"
      }, {
        "ParameterID" : "ITEMNAME",
        "ColumnID" : "ITEMNAME"
      }, {
        "ParameterID" : "ITEMTYPE",
        "ColumnID" : "ITEMTYPE"
      }, {
        "ParameterID" : "CATEGORY",
        "ColumnID" : "CATEGORY"
      }, {
        "ParameterID" : "ISMODIFIABLE",
        "ColumnID" : "ISMODIFIABLE"
      }, {
        "ParameterID" : "LEVEL",
        "ColumnID" : "LEVEL"
      }, {
        "ParameterID" : "SUPERITEMID",
        "ColumnID" : "SUPERITEMID"
      }, {
        "ParameterID" : "SEQNUM",
        "ColumnID" : "SEQNUM"
      }, {
        "ParameterID" : "ICONNAME",
        "ColumnID" : "ICONNAME"
      }, {
        "ParameterID" : "ICONIMAGE",
        "ColumnID" : "ICONIMAGE"
      }, {
        "ParameterID" : "PSEUDOCODE1",
        "ColumnID" : "PSEUDOCODE1"
      }, {
        "ParameterID" : "PSEUDOCODE2",
        "ColumnID" : "PSEUDOCODE2"
      }, {
        "ParameterID" : "PSEUDOCODE3",
        "ColumnID" : "PSEUDOCODE3"
      }, {
        "ParameterID" : "ICONTEXT1",
        "ColumnID" : "ICONTEXT1"
      }, {
        "ParameterID" : "ICONTEXT2",
        "ColumnID" : "ICONTEXT2"
      }, {
        "ParameterID" : "ICONTEXT3",
        "ColumnID" : "ICONTEXT3"
      }, {
        "ParameterID" : "DESCRIPTION1",
        "ColumnID" : "DESCRIPTION1"
      }, {
        "ParameterID" : "DESCRIPTION2",
        "ColumnID" : "DESCRIPTION2"
      }, {
        "ParameterID" : "DESCRIPTION3",
        "ColumnID" : "DESCRIPTION3"
      } ]
    }
  },
  "id" : "uploadDeleteInsertMenu0"
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
    "selectedExpressionID" : "uploadDeleteInsertMenu0_ClearGridData_71",
    "gridID" : "grdEditor"
  },
  "id" : "uploadDeleteInsertMenu0"
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
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "uploadDeleteInsertMenu0_ClearGridData_42",
    "gridID" : "grd1"
  },
  "id" : "uploadDeleteInsertMenu0"
},ruleFunction48,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction48();
						 } 
				 } else { 
						 ruleFunction48();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction48(){ 
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "uploadDeleteInsertMenu0_BindPropertyData3_86",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "RULE_UDFBIZLINETEMPLATE",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SEQNUM",
        "POSITION" : "1",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "2",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "BLOCKID",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ITEMNAME",
        "POSITION" : "4",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "80",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "LINEAKEYID",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ISMODIFIABLE",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "CATEGORY",
        "POSITION" : "7",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SOURCECODE",
        "POSITION" : "8",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLENUMBER",
        "POSITION" : "9",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLES",
        "POSITION" : "10",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "REPLACEMENTVALUES",
        "POSITION" : "11",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORCODE",
        "POSITION" : "12",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORMESSAGEID",
        "POSITION" : "13",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE1",
        "POSITION" : "14",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE2",
        "POSITION" : "15",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE3",
        "POSITION" : "16",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION1",
        "POSITION" : "17",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION2",
        "POSITION" : "18",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION3",
        "POSITION" : "19",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "CLASSATTRIBUTE" : "BLOCKID",
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
        "CLASSATTRIBUTE" : "ITEMNAME",
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
        "CLASSATTRIBUTE" : "LINEAKEYID",
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
        "CLASSATTRIBUTE" : "SEQNUM",
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
        "CLASSATTRIBUTE" : "ISMODIFIABLE",
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
        "CLASSATTRIBUTE" : "CATEGORY",
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
        "CLASSATTRIBUTE" : "SOURCECODE",
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
        "CLASSATTRIBUTE" : "VARIABLENUMBER",
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
        "CLASSATTRIBUTE" : "VARIABLES",
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
        "CLASSATTRIBUTE" : "REPLACEMENTVALUES",
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
        "CLASSATTRIBUTE" : "ERRORCODE",
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
        "CLASSATTRIBUTE" : "ERRORMESSAGEID",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE1",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE2",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE3",
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
        "CLASSATTRIBUTE" : "DESCRIPTION1",
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
        "CLASSATTRIBUTE" : "DESCRIPTION2",
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
        "CLASSATTRIBUTE" : "DESCRIPTION3",
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
      "queryRuleId" : "RULE_UDFBIZLINETEMPLATE_T1F9P",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "RULE_BIZITEMTEMPLATE_PROJECTID_tbHYo",
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
	 //* uploadDeleteInsertMenu1 Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#uploadDeleteInsertMenu1").on("click",function(e) {  
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
    "selectedExpressionID" : "uploadDeleteInsertMenu1_DownloadExcelFile_58",
    "gridID" : "grd1",
    mode: "delete insert5",
    projectId: sessionStorage.getItem("projectId")
  },
  "id" : "uploadDeleteInsertMenu1"
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
		function ruleFunction50(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [ {
  Parameter: "PROJECTID",
                    Mandatory: "Y",
                    InputType: "Text",
                    Value: sessionStorage.getItem("projectId"),
                    Column: "PROJECTID",
    },{
      "Parameter" : "ITEMNAME",
      "Mandatory" : "N",
      "InputType" : "Component",
      "Value" : "grd0",
      "Column" : "ITEMNAME"
    } ],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "ITEMNAME_RULE_UDFBIZITEMTEMPLATE_ITEMNAME_RULE_UDFBIZLINETEMPLATE_I3haW",
    "selectedExpressionID" : "uploadDeleteInsertMenu1_SendMessage_59",
    "MSGGridInstance" : {
      "_setdata" : [ {
           Parameter: "PROJECTID",
            Mandatory: "Y",
            InputType: "Text",
            Value: sessionStorage.getItem("projectId"),
            Column: "PROJECTID",
      }, {
        "Parameter" : "ITEMNAME",
        "Mandatory" : "N",
        "InputType" : "Component",
        "Value" : "grd0",
        "Column" : "ITEMNAME"
      } ]
    }
  },
  "id" : "uploadDeleteInsertMenu1"
},ruleFunction51,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction51();
						 } 
				 } else { 
						 ruleFunction51();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction51(){ 
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "uploadDeleteInsertMenu1_BindGridData_60",
    "listExpressionID" : "uploadDeleteInsertMenu1_SendMessage_59",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "BLOCKID",
      "ColumnID" : "BLOCKID"
    }, {
      "ParameterID" : "ITEMNAME",
      "ColumnID" : "ITEMNAME"
    }, {
      "ParameterID" : "LINEAKEYID",
      "ColumnID" : "LINEAKEYID"
    }, {
      "ParameterID" : "SEQNUM",
      "ColumnID" : "SEQNUM"
    }, {
      "ParameterID" : "ISMODIFIABLE",
      "ColumnID" : "ISMODIFIABLE"
    }, {
      "ParameterID" : "CATEGORY",
      "ColumnID" : "CATEGORY"
    }, {
      "ParameterID" : "SOURCECODE",
      "ColumnID" : "SOURCECODE"
    }, {
      "ParameterID" : "VARIABLENUMBER",
      "ColumnID" : "VARIABLENUMBER"
    }, {
      "ParameterID" : "VARIABLES",
      "ColumnID" : "VARIABLES"
    }, {
      "ParameterID" : "REPLACEMENTVALUES",
      "ColumnID" : "REPLACEMENTVALUES"
    }, {
      "ParameterID" : "ERRORCODE",
      "ColumnID" : "ERRORCODE"
    }, {
      "ParameterID" : "ERRORMESSAGEID",
      "ColumnID" : "ERRORMESSAGEID"
    }, {
      "ParameterID" : "PSEUDOCODE1",
      "ColumnID" : "PSEUDOCODE1"
    }, {
      "ParameterID" : "PSEUDOCODE2",
      "ColumnID" : "PSEUDOCODE2"
    }, {
      "ParameterID" : "PSEUDOCODE3",
      "ColumnID" : "PSEUDOCODE3"
    }, {
      "ParameterID" : "DESCRIPTION1",
      "ColumnID" : "DESCRIPTION1"
    }, {
      "ParameterID" : "DESCRIPTION2",
      "ColumnID" : "DESCRIPTION2"
    }, {
      "ParameterID" : "DESCRIPTION3",
      "ColumnID" : "DESCRIPTION3"
    } ],
    "gridID" : "grd1",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID"
      }, {
        "ParameterID" : "BLOCKID",
        "ColumnID" : "BLOCKID"
      }, {
        "ParameterID" : "ITEMNAME",
        "ColumnID" : "ITEMNAME"
      }, {
        "ParameterID" : "LINEAKEYID",
        "ColumnID" : "LINEAKEYID"
      }, {
        "ParameterID" : "SEQNUM",
        "ColumnID" : "SEQNUM"
      }, {
        "ParameterID" : "ISMODIFIABLE",
        "ColumnID" : "ISMODIFIABLE"
      }, {
        "ParameterID" : "CATEGORY",
        "ColumnID" : "CATEGORY"
      }, {
        "ParameterID" : "SOURCECODE",
        "ColumnID" : "SOURCECODE"
      }, {
        "ParameterID" : "VARIABLENUMBER",
        "ColumnID" : "VARIABLENUMBER"
      }, {
        "ParameterID" : "VARIABLES",
        "ColumnID" : "VARIABLES"
      }, {
        "ParameterID" : "REPLACEMENTVALUES",
        "ColumnID" : "REPLACEMENTVALUES"
      }, {
        "ParameterID" : "ERRORCODE",
        "ColumnID" : "ERRORCODE"
      }, {
        "ParameterID" : "ERRORMESSAGEID",
        "ColumnID" : "ERRORMESSAGEID"
      }, {
        "ParameterID" : "PSEUDOCODE1",
        "ColumnID" : "PSEUDOCODE1"
      }, {
        "ParameterID" : "PSEUDOCODE2",
        "ColumnID" : "PSEUDOCODE2"
      }, {
        "ParameterID" : "PSEUDOCODE3",
        "ColumnID" : "PSEUDOCODE3"
      }, {
        "ParameterID" : "DESCRIPTION1",
        "ColumnID" : "DESCRIPTION1"
      }, {
        "ParameterID" : "DESCRIPTION2",
        "ColumnID" : "DESCRIPTION2"
      }, {
        "ParameterID" : "DESCRIPTION3",
        "ColumnID" : "DESCRIPTION3"
      } ]
    }
  },
  "id" : "uploadDeleteInsertMenu1"
},ruleFunction52,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction52();
						 } 
				 } else { 
						 ruleFunction52();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction52(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "uploadDeleteInsertMenu1_ClearGridData_61",
    "gridID" : "grd1"
  },
  "id" : "uploadDeleteInsertMenu1"
},ruleFunction53,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction53();
						 } 
				 } else { 
						 ruleFunction53();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction53(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "uploadDeleteInsertMenu1_ClearGridData_76",
    "gridID" : "grdEditor"
  },
  "id" : "uploadDeleteInsertMenu1"
},ruleFunction54,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction54();
						 } 
				 } else { 
						 ruleFunction54();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction54(){ 
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "uploadDeleteInsertMenu1_BindPropertyData3_91",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "RULE_UDFBIZLINETEMPLATE",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SEQNUM",
        "POSITION" : "1",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "2",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "BLOCKID",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ITEMNAME",
        "POSITION" : "4",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "80",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "LINEAKEYID",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ISMODIFIABLE",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "CATEGORY",
        "POSITION" : "7",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SOURCECODE",
        "POSITION" : "8",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLENUMBER",
        "POSITION" : "9",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLES",
        "POSITION" : "10",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "REPLACEMENTVALUES",
        "POSITION" : "11",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORCODE",
        "POSITION" : "12",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORMESSAGEID",
        "POSITION" : "13",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE1",
        "POSITION" : "14",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE2",
        "POSITION" : "15",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE3",
        "POSITION" : "16",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION1",
        "POSITION" : "17",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION2",
        "POSITION" : "18",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION3",
        "POSITION" : "19",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "CLASSATTRIBUTE" : "BLOCKID",
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
        "CLASSATTRIBUTE" : "ITEMNAME",
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
        "CLASSATTRIBUTE" : "LINEAKEYID",
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
        "CLASSATTRIBUTE" : "SEQNUM",
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
        "CLASSATTRIBUTE" : "ISMODIFIABLE",
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
        "CLASSATTRIBUTE" : "CATEGORY",
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
        "CLASSATTRIBUTE" : "SOURCECODE",
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
        "CLASSATTRIBUTE" : "VARIABLENUMBER",
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
        "CLASSATTRIBUTE" : "VARIABLES",
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
        "CLASSATTRIBUTE" : "REPLACEMENTVALUES",
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
        "CLASSATTRIBUTE" : "ERRORCODE",
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
        "CLASSATTRIBUTE" : "ERRORMESSAGEID",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE1",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE2",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE3",
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
        "CLASSATTRIBUTE" : "DESCRIPTION1",
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
        "CLASSATTRIBUTE" : "DESCRIPTION2",
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
        "CLASSATTRIBUTE" : "DESCRIPTION3",
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
      "queryRuleId" : "RULE_UDFBIZLINETEMPLATE_T1F9P",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "RULE_BIZITEMTEMPLATE_PROJECTID_tbHYo",
        "sessionFlag": "Y",
        "parameterId":"projectId"

      } ],
      "hasSort" : true
    }
  },
  "id" : "uploadDeleteInsertMenu1"
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
    "confirmMessage" : "DeleteDoubleGridData",
    "selectedExpressionID" : "btnDelete_Confirm_94"
  },
  "actionName" : "Confirm",
  "id" : "btnDelete"
},ruleFunction56,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction56();
						 } 
				 } else { 
						 ruleFunction56();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		function ruleFunction56(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [ {
      "Parameter" : "settingData",
      "Mandatory" : "N",
      "InputType" : "Component",
      "Value" : "grdEditor",
      "Column" : "",
      "AttrTable" : "RULE_UDFBIZLINETEMPLATE"
    }, {
      "Parameter" : "DMLType",
      "Mandatory" : "Y",
      "InputType" : "Direct",
      "Value" : "delete_double",
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
        "Value" : "delete_double",
        "Column" : ""
      } ]
    },
    "GetGridRowDataType" : "3"
  },
  "id" : "btnDelete"
},ruleFunction57,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction57();
						 } 
				 } else { 
						 ruleFunction57();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction57(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [ {
      "Parameter": "PROJECTID",
      Mandatory: "Y",
      InputType: "Text",
      Value: sessionStorage.getItem("projectId"),
      Column: "PROJECTID",
    }],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "RULE_UDFBIZITEMTEMPLATE_xpkJe",
    "selectedExpressionID" : "btnDelete_SendMessage_17",
    "MSGGridInstance" : {
      "_setdata" : null
    }
  },
  "id" : "btnDelete"
},ruleFunction58,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction58();
						 } 
				 } else { 
						 ruleFunction58();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction58(){ 
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "btnDelete_BindGridData_18",
    "listExpressionID" : "btnDelete_SendMessage_17",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "BLOCKID",
      "ColumnID" : "BLOCKID"
    }, {
      "ParameterID" : "ITEMNAME",
      "ColumnID" : "ITEMNAME"
    }, {
      "ParameterID" : "ITEMTYPE",
      "ColumnID" : "ITEMTYPE"
    }, {
      "ParameterID" : "CATEGORY",
      "ColumnID" : "CATEGORY"
    }, {
      "ParameterID" : "ISMODIFIABLE",
      "ColumnID" : "ISMODIFIABLE"
    }, {
      "ParameterID" : "LEVEL",
      "ColumnID" : "LEVEL"
    }, {
      "ParameterID" : "SUPERITEMID",
      "ColumnID" : "SUPERITEMID"
    }, {
      "ParameterID" : "SEQNUM",
      "ColumnID" : "SEQNUM"
    }, {
      "ParameterID" : "ICONNAME",
      "ColumnID" : "ICONNAME"
    }, {
      "ParameterID" : "ICONIMAGE",
      "ColumnID" : "ICONIMAGE"
    }, {
      "ParameterID" : "PSEUDOCODE1",
      "ColumnID" : "PSEUDOCODE1"
    }, {
      "ParameterID" : "PSEUDOCODE2",
      "ColumnID" : "PSEUDOCODE2"
    }, {
      "ParameterID" : "PSEUDOCODE3",
      "ColumnID" : "PSEUDOCODE3"
    }, {
      "ParameterID" : "ICONTEXT1",
      "ColumnID" : "ICONTEXT1"
    }, {
      "ParameterID" : "ICONTEXT2",
      "ColumnID" : "ICONTEXT2"
    }, {
      "ParameterID" : "ICONTEXT3",
      "ColumnID" : "ICONTEXT3"
    }, {
      "ParameterID" : "DESCRIPTION1",
      "ColumnID" : "DESCRIPTION1"
    }, {
      "ParameterID" : "DESCRIPTION2",
      "ColumnID" : "DESCRIPTION2"
    }, {
      "ParameterID" : "DESCRIPTION3",
      "ColumnID" : "DESCRIPTION3"
    } ],
    "gridID" : "grd0",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID"
      }, {
        "ParameterID" : "BLOCKID",
        "ColumnID" : "BLOCKID"
      }, {
        "ParameterID" : "ITEMNAME",
        "ColumnID" : "ITEMNAME"
      }, {
        "ParameterID" : "ITEMTYPE",
        "ColumnID" : "ITEMTYPE"
      }, {
        "ParameterID" : "CATEGORY",
        "ColumnID" : "CATEGORY"
      }, {
        "ParameterID" : "ISMODIFIABLE",
        "ColumnID" : "ISMODIFIABLE"
      }, {
        "ParameterID" : "LEVEL",
        "ColumnID" : "LEVEL"
      }, {
        "ParameterID" : "SUPERITEMID",
        "ColumnID" : "SUPERITEMID"
      }, {
        "ParameterID" : "SEQNUM",
        "ColumnID" : "SEQNUM"
      }, {
        "ParameterID" : "ICONNAME",
        "ColumnID" : "ICONNAME"
      }, {
        "ParameterID" : "ICONIMAGE",
        "ColumnID" : "ICONIMAGE"
      }, {
        "ParameterID" : "PSEUDOCODE1",
        "ColumnID" : "PSEUDOCODE1"
      }, {
        "ParameterID" : "PSEUDOCODE2",
        "ColumnID" : "PSEUDOCODE2"
      }, {
        "ParameterID" : "PSEUDOCODE3",
        "ColumnID" : "PSEUDOCODE3"
      }, {
        "ParameterID" : "ICONTEXT1",
        "ColumnID" : "ICONTEXT1"
      }, {
        "ParameterID" : "ICONTEXT2",
        "ColumnID" : "ICONTEXT2"
      }, {
        "ParameterID" : "ICONTEXT3",
        "ColumnID" : "ICONTEXT3"
      }, {
        "ParameterID" : "DESCRIPTION1",
        "ColumnID" : "DESCRIPTION1"
      }, {
        "ParameterID" : "DESCRIPTION2",
        "ColumnID" : "DESCRIPTION2"
      }, {
        "ParameterID" : "DESCRIPTION3",
        "ColumnID" : "DESCRIPTION3"
      } ]
    }
  },
  "id" : "btnDelete"
},ruleFunction59,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction59();
						 } 
				 } else { 
						 ruleFunction59();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction59(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "btnDelete_ClearGridData_66",
    "gridID" : "grdEditor"
  },
  "id" : "btnDelete"
},ruleFunction60,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction60();
						 } 
				 } else { 
						 ruleFunction60();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction60(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "btnDelete_ClearGridData_19",
    "gridID" : "grd1"
  },
  "id" : "btnDelete"
},ruleFunction61,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction61();
						 } 
				 } else { 
						 ruleFunction61();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction61(){ 
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "btnDelete_BindPropertyData3_82",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "RULE_UDFBIZLINETEMPLATE",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SEQNUM",
        "POSITION" : "1",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "2",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "BLOCKID",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ITEMNAME",
        "POSITION" : "4",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "80",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "LINEAKEYID",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ISMODIFIABLE",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "CATEGORY",
        "POSITION" : "7",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SOURCECODE",
        "POSITION" : "8",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLENUMBER",
        "POSITION" : "9",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLES",
        "POSITION" : "10",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "REPLACEMENTVALUES",
        "POSITION" : "11",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORCODE",
        "POSITION" : "12",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORMESSAGEID",
        "POSITION" : "13",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE1",
        "POSITION" : "14",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE2",
        "POSITION" : "15",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE3",
        "POSITION" : "16",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION1",
        "POSITION" : "17",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION2",
        "POSITION" : "18",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION3",
        "POSITION" : "19",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "CLASSATTRIBUTE" : "BLOCKID",
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
        "CLASSATTRIBUTE" : "ITEMNAME",
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
        "CLASSATTRIBUTE" : "LINEAKEYID",
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
        "CLASSATTRIBUTE" : "SEQNUM",
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
        "CLASSATTRIBUTE" : "ISMODIFIABLE",
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
        "CLASSATTRIBUTE" : "CATEGORY",
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
        "CLASSATTRIBUTE" : "SOURCECODE",
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
        "CLASSATTRIBUTE" : "VARIABLENUMBER",
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
        "CLASSATTRIBUTE" : "VARIABLES",
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
        "CLASSATTRIBUTE" : "REPLACEMENTVALUES",
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
        "CLASSATTRIBUTE" : "ERRORCODE",
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
        "CLASSATTRIBUTE" : "ERRORMESSAGEID",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE1",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE2",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE3",
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
        "CLASSATTRIBUTE" : "DESCRIPTION1",
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
        "CLASSATTRIBUTE" : "DESCRIPTION2",
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
        "CLASSATTRIBUTE" : "DESCRIPTION3",
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
      "queryRuleId" : "RULE_UDFBIZLINETEMPLATE_T1F9P",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "RULE_BIZITEMTEMPLATE_PROJECTID_tbHYo",
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
	 //* deleteMenu1 Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#deleteMenu1").on("click",function(e) {  
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
      "Value" : "grd1",
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
    "selectedExpressionID" : "deleteMenu1_SendMessage_43",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "Parameter" : "settingData",
        "Mandatory" : "N",
        "InputType" : "Component",
        "Value" : "grd1",
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
  "id" : "deleteMenu1"
},ruleFunction63,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction63();
						 } 
				 } else { 
						 ruleFunction63();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		function ruleFunction63(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [ {
  Parameter: "PROJECTID",
                    Mandatory: "Y",
                    InputType: "Text",
                    Value: sessionStorage.getItem("projectId"),
                    Column: "PROJECTID",
    }, {
      "Parameter" : "ITEMNAME",
      "Mandatory" : "N",
      "InputType" : "Component",
      "Value" : "grd0",
      "Column" : "ITEMNAME"
    } ],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "ITEMNAME_RULE_UDFBIZITEMTEMPLATE_ITEMNAME_RULE_UDFBIZLINETEMPLATE_I3haW",
    "selectedExpressionID" : "deleteMenu1_SendMessage_44",
    "MSGGridInstance" : {
      "_setdata" : [ {
        Parameter: "PROJECTID",
        Mandatory: "Y",
        InputType: "Text",
        Value: sessionStorage.getItem("projectId"),
        Column: "PROJECTID",
      }, {
        "Parameter" : "ITEMNAME",
        "Mandatory" : "N",
        "InputType" : "Component",
        "Value" : "grd0",
        "Column" : "ITEMNAME"
      } ]
    }
  },
  "id" : "deleteMenu1"
},ruleFunction64,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction64();
						 } 
				 } else { 
						 ruleFunction64();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction64(){ 
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "deleteMenu1_BindGridData_45",
    "listExpressionID" : "deleteMenu1_SendMessage_44",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "BLOCKID",
      "ColumnID" : "BLOCKID"
    }, {
      "ParameterID" : "ITEMNAME",
      "ColumnID" : "ITEMNAME"
    }, {
      "ParameterID" : "LINEAKEYID",
      "ColumnID" : "LINEAKEYID"
    }, {
      "ParameterID" : "SEQNUM",
      "ColumnID" : "SEQNUM"
    }, {
      "ParameterID" : "ISMODIFIABLE",
      "ColumnID" : "ISMODIFIABLE"
    }, {
      "ParameterID" : "CATEGORY",
      "ColumnID" : "CATEGORY"
    }, {
      "ParameterID" : "SOURCECODE",
      "ColumnID" : "SOURCECODE"
    }, {
      "ParameterID" : "VARIABLENUMBER",
      "ColumnID" : "VARIABLENUMBER"
    }, {
      "ParameterID" : "VARIABLES",
      "ColumnID" : "VARIABLES"
    }, {
      "ParameterID" : "REPLACEMENTVALUES",
      "ColumnID" : "REPLACEMENTVALUES"
    }, {
      "ParameterID" : "ERRORCODE",
      "ColumnID" : "ERRORCODE"
    }, {
      "ParameterID" : "ERRORMESSAGEID",
      "ColumnID" : "ERRORMESSAGEID"
    }, {
      "ParameterID" : "PSEUDOCODE1",
      "ColumnID" : "PSEUDOCODE1"
    }, {
      "ParameterID" : "PSEUDOCODE2",
      "ColumnID" : "PSEUDOCODE2"
    }, {
      "ParameterID" : "PSEUDOCODE3",
      "ColumnID" : "PSEUDOCODE3"
    }, {
      "ParameterID" : "DESCRIPTION1",
      "ColumnID" : "DESCRIPTION1"
    }, {
      "ParameterID" : "DESCRIPTION2",
      "ColumnID" : "DESCRIPTION2"
    }, {
      "ParameterID" : "DESCRIPTION3",
      "ColumnID" : "DESCRIPTION3"
    } ],
    "gridID" : "grd1",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID"
      }, {
        "ParameterID" : "BLOCKID",
        "ColumnID" : "BLOCKID"
      }, {
        "ParameterID" : "ITEMNAME",
        "ColumnID" : "ITEMNAME"
      }, {
        "ParameterID" : "LINEAKEYID",
        "ColumnID" : "LINEAKEYID"
      }, {
        "ParameterID" : "SEQNUM",
        "ColumnID" : "SEQNUM"
      }, {
        "ParameterID" : "ISMODIFIABLE",
        "ColumnID" : "ISMODIFIABLE"
      }, {
        "ParameterID" : "CATEGORY",
        "ColumnID" : "CATEGORY"
      }, {
        "ParameterID" : "SOURCECODE",
        "ColumnID" : "SOURCECODE"
      }, {
        "ParameterID" : "VARIABLENUMBER",
        "ColumnID" : "VARIABLENUMBER"
      }, {
        "ParameterID" : "VARIABLES",
        "ColumnID" : "VARIABLES"
      }, {
        "ParameterID" : "REPLACEMENTVALUES",
        "ColumnID" : "REPLACEMENTVALUES"
      }, {
        "ParameterID" : "ERRORCODE",
        "ColumnID" : "ERRORCODE"
      }, {
        "ParameterID" : "ERRORMESSAGEID",
        "ColumnID" : "ERRORMESSAGEID"
      }, {
        "ParameterID" : "PSEUDOCODE1",
        "ColumnID" : "PSEUDOCODE1"
      }, {
        "ParameterID" : "PSEUDOCODE2",
        "ColumnID" : "PSEUDOCODE2"
      }, {
        "ParameterID" : "PSEUDOCODE3",
        "ColumnID" : "PSEUDOCODE3"
      }, {
        "ParameterID" : "DESCRIPTION1",
        "ColumnID" : "DESCRIPTION1"
      }, {
        "ParameterID" : "DESCRIPTION2",
        "ColumnID" : "DESCRIPTION2"
      }, {
        "ParameterID" : "DESCRIPTION3",
        "ColumnID" : "DESCRIPTION3"
      } ]
    }
  },
  "id" : "deleteMenu1"
},ruleFunction65,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction65();
						 } 
				 } else { 
						 ruleFunction65();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction65(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "deleteMenu1_ClearGridData_46",
    "gridID" : "grd1"
  },
  "id" : "deleteMenu1"
},ruleFunction66,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction66();
						 } 
				 } else { 
						 ruleFunction66();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction66(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "deleteMenu1_ClearGridData_72",
    "gridID" : "grdEditor"
  },
  "id" : "deleteMenu1"
},ruleFunction67,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction67();
						 } 
				 } else { 
						 ruleFunction67();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction67(){ 
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "deleteMenu1_BindPropertyData3_87",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "RULE_UDFBIZLINETEMPLATE",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SEQNUM",
        "POSITION" : "1",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "2",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "BLOCKID",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ITEMNAME",
        "POSITION" : "4",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "80",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "LINEAKEYID",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ISMODIFIABLE",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "CATEGORY",
        "POSITION" : "7",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SOURCECODE",
        "POSITION" : "8",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLENUMBER",
        "POSITION" : "9",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLES",
        "POSITION" : "10",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "REPLACEMENTVALUES",
        "POSITION" : "11",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORCODE",
        "POSITION" : "12",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORMESSAGEID",
        "POSITION" : "13",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE1",
        "POSITION" : "14",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE2",
        "POSITION" : "15",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE3",
        "POSITION" : "16",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION1",
        "POSITION" : "17",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION2",
        "POSITION" : "18",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION3",
        "POSITION" : "19",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "CLASSATTRIBUTE" : "BLOCKID",
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
        "CLASSATTRIBUTE" : "ITEMNAME",
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
        "CLASSATTRIBUTE" : "LINEAKEYID",
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
        "CLASSATTRIBUTE" : "SEQNUM",
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
        "CLASSATTRIBUTE" : "ISMODIFIABLE",
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
        "CLASSATTRIBUTE" : "CATEGORY",
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
        "CLASSATTRIBUTE" : "SOURCECODE",
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
        "CLASSATTRIBUTE" : "VARIABLENUMBER",
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
        "CLASSATTRIBUTE" : "VARIABLES",
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
        "CLASSATTRIBUTE" : "REPLACEMENTVALUES",
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
        "CLASSATTRIBUTE" : "ERRORCODE",
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
        "CLASSATTRIBUTE" : "ERRORMESSAGEID",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE1",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE2",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE3",
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
        "CLASSATTRIBUTE" : "DESCRIPTION1",
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
        "CLASSATTRIBUTE" : "DESCRIPTION2",
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
        "CLASSATTRIBUTE" : "DESCRIPTION3",
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
      "queryRuleId" : "RULE_UDFBIZLINETEMPLATE_T1F9P",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "RULE_BIZITEMTEMPLATE_PROJECTID_tbHYo",
        "sessionFlag": "Y",
        "parameterId":"projectId"
      } ],
      "hasSort" : true
    }
  },
  "id" : "deleteMenu1"
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
},ruleFunction69,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction69();
						 } 
				 } else { 
						 ruleFunction69();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		function ruleFunction69(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [ {
      "Parameter" : "PROJECTID",
      "Mandatory" : "Y",
      "InputType" : "Text",
      "Value" : sessionStorage.getItem("projectId"),
      "Column" : "PROJECTID"
    }],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "RULE_UDFBIZITEMTEMPLATE_xpkJe",
    "selectedExpressionID" : "deleteMenu0_SendMessage_25",
    "MSGGridInstance" : {
      "_setdata" : null
    }
  },
  "id" : "deleteMenu0"
},ruleFunction70,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction70();
						 } 
				 } else { 
						 ruleFunction70();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction70(){ 
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "deleteMenu0_BindGridData_26",
    "listExpressionID" : "deleteMenu0_SendMessage_25",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "BLOCKID",
      "ColumnID" : "BLOCKID"
    }, {
      "ParameterID" : "ITEMNAME",
      "ColumnID" : "ITEMNAME"
    }, {
      "ParameterID" : "ITEMTYPE",
      "ColumnID" : "ITEMTYPE"
    }, {
      "ParameterID" : "CATEGORY",
      "ColumnID" : "CATEGORY"
    }, {
      "ParameterID" : "ISMODIFIABLE",
      "ColumnID" : "ISMODIFIABLE"
    }, {
      "ParameterID" : "LEVEL",
      "ColumnID" : "LEVEL"
    }, {
      "ParameterID" : "SUPERITEMID",
      "ColumnID" : "SUPERITEMID"
    }, {
      "ParameterID" : "SEQNUM",
      "ColumnID" : "SEQNUM"
    }, {
      "ParameterID" : "ICONNAME",
      "ColumnID" : "ICONNAME"
    }, {
      "ParameterID" : "ICONIMAGE",
      "ColumnID" : "ICONIMAGE"
    }, {
      "ParameterID" : "PSEUDOCODE1",
      "ColumnID" : "PSEUDOCODE1"
    }, {
      "ParameterID" : "PSEUDOCODE2",
      "ColumnID" : "PSEUDOCODE2"
    }, {
      "ParameterID" : "PSEUDOCODE3",
      "ColumnID" : "PSEUDOCODE3"
    }, {
      "ParameterID" : "ICONTEXT1",
      "ColumnID" : "ICONTEXT1"
    }, {
      "ParameterID" : "ICONTEXT2",
      "ColumnID" : "ICONTEXT2"
    }, {
      "ParameterID" : "ICONTEXT3",
      "ColumnID" : "ICONTEXT3"
    }, {
      "ParameterID" : "DESCRIPTION1",
      "ColumnID" : "DESCRIPTION1"
    }, {
      "ParameterID" : "DESCRIPTION2",
      "ColumnID" : "DESCRIPTION2"
    }, {
      "ParameterID" : "DESCRIPTION3",
      "ColumnID" : "DESCRIPTION3"
    } ],
    "gridID" : "grd0",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID"
      }, {
        "ParameterID" : "BLOCKID",
        "ColumnID" : "BLOCKID"
      }, {
        "ParameterID" : "ITEMNAME",
        "ColumnID" : "ITEMNAME"
      }, {
        "ParameterID" : "ITEMTYPE",
        "ColumnID" : "ITEMTYPE"
      }, {
        "ParameterID" : "CATEGORY",
        "ColumnID" : "CATEGORY"
      }, {
        "ParameterID" : "ISMODIFIABLE",
        "ColumnID" : "ISMODIFIABLE"
      }, {
        "ParameterID" : "LEVEL",
        "ColumnID" : "LEVEL"
      }, {
        "ParameterID" : "SUPERITEMID",
        "ColumnID" : "SUPERITEMID"
      }, {
        "ParameterID" : "SEQNUM",
        "ColumnID" : "SEQNUM"
      }, {
        "ParameterID" : "ICONNAME",
        "ColumnID" : "ICONNAME"
      }, {
        "ParameterID" : "ICONIMAGE",
        "ColumnID" : "ICONIMAGE"
      }, {
        "ParameterID" : "PSEUDOCODE1",
        "ColumnID" : "PSEUDOCODE1"
      }, {
        "ParameterID" : "PSEUDOCODE2",
        "ColumnID" : "PSEUDOCODE2"
      }, {
        "ParameterID" : "PSEUDOCODE3",
        "ColumnID" : "PSEUDOCODE3"
      }, {
        "ParameterID" : "ICONTEXT1",
        "ColumnID" : "ICONTEXT1"
      }, {
        "ParameterID" : "ICONTEXT2",
        "ColumnID" : "ICONTEXT2"
      }, {
        "ParameterID" : "ICONTEXT3",
        "ColumnID" : "ICONTEXT3"
      }, {
        "ParameterID" : "DESCRIPTION1",
        "ColumnID" : "DESCRIPTION1"
      }, {
        "ParameterID" : "DESCRIPTION2",
        "ColumnID" : "DESCRIPTION2"
      }, {
        "ParameterID" : "DESCRIPTION3",
        "ColumnID" : "DESCRIPTION3"
      } ]
    }
  },
  "id" : "deleteMenu0"
},ruleFunction71,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction71();
						 } 
				 } else { 
						 ruleFunction71();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction71(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "deleteMenu0_ClearGridData_68",
    "gridID" : "grdEditor"
  },
  "id" : "deleteMenu0"
},ruleFunction72,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction72();
						 } 
				 } else { 
						 ruleFunction72();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction72(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "deleteMenu0_ClearGridData_27",
    "gridID" : "grd1"
  },
  "id" : "deleteMenu0"
},ruleFunction73,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction73();
						 } 
				 } else { 
						 ruleFunction73();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction73(){ 
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "deleteMenu0_BindPropertyData3_83",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "RULE_UDFBIZLINETEMPLATE",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SEQNUM",
        "POSITION" : "1",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "2",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "BLOCKID",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ITEMNAME",
        "POSITION" : "4",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "80",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "LINEAKEYID",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ISMODIFIABLE",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "CATEGORY",
        "POSITION" : "7",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SOURCECODE",
        "POSITION" : "8",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLENUMBER",
        "POSITION" : "9",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLES",
        "POSITION" : "10",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "REPLACEMENTVALUES",
        "POSITION" : "11",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORCODE",
        "POSITION" : "12",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORMESSAGEID",
        "POSITION" : "13",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE1",
        "POSITION" : "14",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE2",
        "POSITION" : "15",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE3",
        "POSITION" : "16",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION1",
        "POSITION" : "17",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION2",
        "POSITION" : "18",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION3",
        "POSITION" : "19",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "CLASSATTRIBUTE" : "BLOCKID",
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
        "CLASSATTRIBUTE" : "ITEMNAME",
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
        "CLASSATTRIBUTE" : "LINEAKEYID",
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
        "CLASSATTRIBUTE" : "SEQNUM",
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
        "CLASSATTRIBUTE" : "ISMODIFIABLE",
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
        "CLASSATTRIBUTE" : "CATEGORY",
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
        "CLASSATTRIBUTE" : "SOURCECODE",
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
        "CLASSATTRIBUTE" : "VARIABLENUMBER",
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
        "CLASSATTRIBUTE" : "VARIABLES",
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
        "CLASSATTRIBUTE" : "REPLACEMENTVALUES",
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
        "CLASSATTRIBUTE" : "ERRORCODE",
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
        "CLASSATTRIBUTE" : "ERRORMESSAGEID",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE1",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE2",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE3",
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
        "CLASSATTRIBUTE" : "DESCRIPTION1",
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
        "CLASSATTRIBUTE" : "DESCRIPTION2",
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
        "CLASSATTRIBUTE" : "DESCRIPTION3",
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
      "queryRuleId" : "RULE_UDFBIZLINETEMPLATE_T1F9P",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "RULE_BIZITEMTEMPLATE_PROJECTID_tbHYo",
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
    "selectedMSGParameterGrid" : [ {
      "Parameter" : "PROJECTID",
      "Mandatory" : "N",
      "InputType" : "Text",
      "Value" : sessionStorage.getItem("projectId"),
      "Column" : "PROJECTID"
    }],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "RULE_UDFBIZITEMTEMPLATE_xpkJe",
    "selectedExpressionID" : "tre0_SendMessage_62",
    "MSGGridInstance" : {
      "_setdata" : null
    }
  },
  "id" : "tre0"
},ruleFunction75,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction75();
						 } 
				 } else { 
						 ruleFunction75();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		function ruleFunction75(){ 
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
      "Class" : "RULE_UDFBIZITEMTEMPLATE",
      "Level No" : "0",
      "Expression" : "SELECT * FROM RULE_UDFBIZITEMTEMPLATE WHERE PROJECTID=@PROJECTID ORDER BY BLOCKID",
      "Parameter ID" : "PROJECTID",
      "queryRuleId" : "RULE_UDFBIZITEMTEMPLATE_xpkJe",
      "inputParams" : [ {
        Parameter: "PROJECTID",
        Mandatory: "Y",
        InputType: "Text",
        Value: sessionStorage.getItem("projectId"),
        Column: "PROJECTID",
      } ],
      "outputParams" : [ "PROJECTID", "BLOCKID", "ITEMNAME", "ITEMTYPE", "CATEGORY", "ISMODIFIABLE", "LEVEL", "SUPERITEMID", "SEQNUM", "ICONNAME", "ICONIMAGE", "PSEUDOCODE1", "PSEUDOCODE2", "PSEUDOCODE3", "ICONTEXT1", "ICONTEXT2", "ICONTEXT3", "DESCRIPTION1", "DESCRIPTION2", "DESCRIPTION3" ],
      "gridId" : "grd0"
    }, {
      "Class" : "RULE_UDFBIZITEMTEMPLATE",
      "Level No" : "1",
      "Expression" : "SELECT * FROM RULE_UDFBIZITEMTEMPLATE WHERE PROJECTID=@PROJECTID AND BLOCKID=@BLOCKID",
      "Parameter ID" : "BLOCKID",
      "queryRuleId" : "UDFBIZTEMPLATE_TreeData_RULE_UDFBIZITEMTEMPLATE_1_k1p5q",
      "inputParams" : [ "PROJECTID", "BLOCKID" ],
      "outputParams" : [ "PROJECTID", "BLOCKID", "ITEMNAME", "ITEMTYPE", "CATEGORY", "ISMODIFIABLE", "LEVEL", "SUPERITEMID", "SEQNUM", "ICONNAME", "ICONIMAGE", "PSEUDOCODE1", "PSEUDOCODE2", "PSEUDOCODE3", "ICONTEXT1", "ICONTEXT2", "ICONTEXT3", "DESCRIPTION1", "DESCRIPTION2", "DESCRIPTION3" ],
      "gridId" : "grd0"
    }, {
      "Class" : "RULE_UDFBIZITEMTEMPLATE",
      "Level No" : "2",
      "Expression" : "SELECT * FROM RULE_UDFBIZITEMTEMPLATE WHERE PROJECTID=@PROJECTID AND BLOCKID=@BLOCKID AND ITEMTYPE=@ITEMTYPE",
      "Parameter ID" : "ITEMTYPE",
      "queryRuleId" : "UDFBIZTEMPLATE_TreeData_RULE_UDFBIZITEMTEMPLATE_2_bb6cv",
      "inputParams" : [ "PROJECTID", "BLOCKID", "ITEMTYPE" ],
      "outputParams" : [ "PROJECTID", "BLOCKID", "ITEMNAME", "ITEMTYPE", "CATEGORY", "ISMODIFIABLE", "LEVEL", "SUPERITEMID", "SEQNUM", "ICONNAME", "ICONIMAGE", "PSEUDOCODE1", "PSEUDOCODE2", "PSEUDOCODE3", "ICONTEXT1", "ICONTEXT2", "ICONTEXT3", "DESCRIPTION1", "DESCRIPTION2", "DESCRIPTION3" ],
      "gridId" : "grd0"
    }, {
      "Class" : "RULE_UDFBIZITEMTEMPLATE",
      "Level No" : "3",
      "Expression" : "SELECT * FROM RULE_UDFBIZITEMTEMPLATE WHERE PROJECTID=@PROJECTID AND BLOCKID=@BLOCKID AND ITEMTYPE=@ITEMTYPE AND ITEMNAME LIKE '@ITEMNAME%'",
      "Parameter ID" : "ITEMNAME",
      "queryRuleId" : "UDFBIZTEMPLATE_TreeData_RULE_UDFBIZITEMTEMPLATE_3_2sme1",
      "inputParams" : [ "PROJECTID", "BLOCKID", "ITEMTYPE", "ITEMNAME" ],
      "outputParams" : [ "PROJECTID", "BLOCKID", "ITEMNAME", "ITEMTYPE", "CATEGORY", "ISMODIFIABLE", "LEVEL", "SUPERITEMID", "SEQNUM", "ICONNAME", "ICONIMAGE", "PSEUDOCODE1", "PSEUDOCODE2", "PSEUDOCODE3", "ICONTEXT1", "ICONTEXT2", "ICONTEXT3", "DESCRIPTION1", "DESCRIPTION2", "DESCRIPTION3" ],
      "gridId" : "grd0"
    }, {
      "Class" : "RULE_UDFBIZLINETEMPLATE",
      "Level No" : "0",
      "Expression" : "SELECT * FROM RULE_UDFBIZLINETEMPLATE WHERE PROJECTID=@PROJECTID ORDER BY BLOCKID",
      "Parameter ID" : "PROJECTID",
      "queryRuleId" : "RULE_UDFBIZLINETEMPLATE_T1F9P",
      "inputParams" : [ "PROJECTID" ],
      "outputParams" : [ "PROJECTID", "BLOCKID", "ITEMNAME", "LINEAKEYID", "SEQNUM", "ISMODIFIABLE", "CATEGORY", "SOURCECODE", "VARIABLENUMBER", "VARIABLES", "REPLACEMENTVALUES", "ERRORCODE", "ERRORMESSAGEID", "PSEUDOCODE1", "PSEUDOCODE2", "PSEUDOCODE3", "DESCRIPTION1", "DESCRIPTION2", "DESCRIPTION3" ],
      "gridId" : "grd1"
    }, {
      "Class" : "RULE_UDFBIZLINETEMPLATE",
      "Level No" : "1",
      "Expression" : "SELECT * FROM RULE_UDFBIZLINETEMPLATE WHERE PROJECTID=@PROJECTID AND BLOCKID=@BLOCKID",
      "Parameter ID" : "BLOCKID",
      "queryRuleId" : "UDFBIZTEMPLATE_TreeData_RULE_UDFBIZLINETEMPLATE_1_rdm0s",
      "inputParams" : [ "PROJECTID", "BLOCKID" ],
      "outputParams" : [ "PROJECTID", "BLOCKID", "ITEMNAME", "LINEAKEYID", "SEQNUM", "ISMODIFIABLE", "CATEGORY", "SOURCECODE", "VARIABLENUMBER", "VARIABLES", "REPLACEMENTVALUES", "ERRORCODE", "ERRORMESSAGEID", "PSEUDOCODE1", "PSEUDOCODE2", "PSEUDOCODE3", "DESCRIPTION1", "DESCRIPTION2", "DESCRIPTION3" ],
      "gridId" : "grd1"
    }, {
      "Class" : "RULE_UDFBIZLINETEMPLATE",
      "Level No" : "2",
      "Expression" : "SELECT * FROM RULE_UDFBIZLINETEMPLATE WHERE PROJECTID=@PROJECTID AND BLOCKID=@BLOCKID AND ITEMNAME IN ( SELECT ITEMNAME FROM RULE_UDFBIZITEMTEMPLATE WHERE PROJECTID=@PROJECTID AND BLOCKID=@BLOCKID AND ITEMTYPE=@ITEMTYPE ) ORDER BY ITEMNAME,SEQNUM",
      "Parameter ID" : "ITEMTYPE",
      "queryRuleId" : "UDFBIZTEMPLATE_TreeData_RULE_UDFBIZLINETEMPLATE_2_bkuza",
      "inputParams" : [ "PROJECTID", "BLOCKID", "ITEMTYPE" ],
      "outputParams" : [ "PROJECTID", "BLOCKID", "ITEMNAME", "LINEAKEYID", "SEQNUM", "ISMODIFIABLE", "CATEGORY", "SOURCECODE", "VARIABLENUMBER", "VARIABLES", "REPLACEMENTVALUES", "ERRORCODE", "ERRORMESSAGEID", "PSEUDOCODE1", "PSEUDOCODE2", "PSEUDOCODE3", "DESCRIPTION1", "DESCRIPTION2", "DESCRIPTION3" ],
      "gridId" : "grd1"
    }, {
      "Class" : "RULE_UDFBIZLINETEMPLATE",
      "Level No" : "3",
      "Expression" : "SELECT * FROM RULE_UDFBIZLINETEMPLATE WHERE PROJECTID=@PROJECTID AND BLOCKID=@BLOCKID AND ITEMNAME IN ( SELECT ITEMNAME FROM RULE_UDFBIZITEMTEMPLATE WHERE PROJECTID=@PROJECTID AND BLOCKID=@BLOCKID AND ITEMTYPE=@ITEMTYPE AND ITEMNAME LIKE '@ITEMNAME%' ) ORDER BY ITEMNAME, SEQNUM",
      "Parameter ID" : "ITEMNAME",
      "queryRuleId" : "UDFBIZTEMPLATE_TreeData_RULE_UDFBIZLINETEMPLATE_3_2eedz",
      "inputParams" : [ "PROJECTID", "BLOCKID", "ITEMTYPE", "ITEMNAME%'" ],
      "outputParams" : [ "PROJECTID", "BLOCKID", "ITEMNAME", "LINEAKEYID", "SEQNUM", "ISMODIFIABLE", "CATEGORY", "SOURCECODE", "VARIABLENUMBER", "VARIABLES", "REPLACEMENTVALUES", "ERRORCODE", "ERRORMESSAGEID", "PSEUDOCODE1", "PSEUDOCODE2", "PSEUDOCODE3", "DESCRIPTION1", "DESCRIPTION2", "DESCRIPTION3" ],
      "gridId" : "grd1"
    } ]
  },
  "id" : "tre0"
},ruleFunction76,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction76();
						 } 
				 } else { 
						 ruleFunction76();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction76(){ 
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


	 //******************************
	 //* btnLineReorder Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#btnLineReorder").on("click",function(e) {  
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
			 returnVal =  rules.checknull({
  "data" : {
    "usedErrorFlag" : true,
    "errorCodePkId" : "",
    "errorLevelMsg" : "Warning",
    "errorMsgTxt" : {
      "id" : "ND_P_Select",
      "name" : "Please select a/an(the) {0}"
    },
    "errorMsgId" : "ND_P_Select",
    "inputText" : "",
    "errorMsgArray" : "Please select a/an(the) ItemName|ItemName 선택하세요.|",
    "errorMsgArrayTemp" : "Please select a/an(the) {0}|{0} 선택하세요.|",
    "errorMsgParamerter" : "ItemName|",
    "messageContinue" : false,
    "checkComponent" : "grd0",
    "checkComponentHeaderName" : "ITEMNAME",
    "checkComponentHeaderNameDisable" : false,
    "selectedExpressionID" : "btnLineReorder_CheckNull_97"
  },
  "actionName" : "CheckNull",
  "id" : "btnLineReorder"
},ruleFunction78,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction78();
						 } 
				 } else { 
						 ruleFunction78();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		function ruleFunction78(){ 
			 returnVal =  rules.showpopup({
  "data" : {
    "sendContinue" : true,
    "checkComponent" : "",
    "checkComponentHeaderName" : "",
    "checkComponentHeaderNameDisable" : true,
    "subFormName" : "UDFLineReorderPopup",
    "selectedParameterGrid" : [ {
      "Component" : "btnCreate",
      "Boolean" : ""
    }, {
      "Component" : "btnDelete",
      "Boolean" : ""
    }, {
      "Component" : "btnItemReorder",
      "Boolean" : ""
    }, {
      "Component" : "btnLineReorder",
      "Boolean" : ""
    }, {
      "Component" : "btnUpdate",
      "Boolean" : ""
    }, {
      "Component" : "deleteMenu0",
      "Boolean" : ""
    }, {
      "Component" : "deleteMenu1",
      "Boolean" : ""
    }, {
      "Component" : "downloadAllDataMenu0",
      "Boolean" : ""
    }, {
      "Component" : "downloadAllDataMenu1",
      "Boolean" : ""
    }, {
      "Component" : "downloadGridDataMenu0",
      "Boolean" : ""
    }, {
      "Component" : "downloadGridDataMenu1",
      "Boolean" : ""
    }, {
      "Component" : "grd0",
      "Boolean" : "true"
    }, {
      "Component" : "grd1",
      "Boolean" : ""
    }, {
      "Component" : "grdEditor",
      "Boolean" : ""
    }, {
      "Component" : "gridContextMenu0",
      "Boolean" : ""
    }, {
      "Component" : "gridContextMenu1",
      "Boolean" : ""
    }, {
      "Component" : "tre0",
      "Boolean" : ""
    }, {
      "Component" : "txtBlockId",
      "Boolean" : "true"
    }, {
      "Component" : "txtClickBlockId",
      "Boolean" : "true"
    }, {
      "Component" : "txtItemName",
      "Boolean" : "true"
    }, {
      "Component" : "txtItemType",
      "Boolean" : "true"
    }, {
      "Component" : "txtProjectId",
      "Boolean" : "true"
    }, {
      "Component" : "uploadAppendMenu0",
      "Boolean" : ""
    }, {
      "Component" : "uploadAppendMenu1",
      "Boolean" : ""
    }, {
      "Component" : "uploadDeleteInsertMenu0",
      "Boolean" : ""
    }, {
      "Component" : "uploadDeleteInsertMenu1",
      "Boolean" : ""
    }, {
      "Component" : "uploadUpdateInsertMenu0",
      "Boolean" : ""
    }, {
      "Component" : "uploadUpdateInsertMenu1",
      "Boolean" : ""
    } ],
    "selectedExpressionID" : "btnLineReorder_ShowPopup_96",
    "heightSize" : 480,
    "widthSize" : 400,
    "popupName" : "Line Reorder",
    "gridInstance" : {
      "_setdata" : [ {
        "Component" : "btnCreate",
        "Boolean" : ""
      }, {
        "Component" : "btnDelete",
        "Boolean" : ""
      }, {
        "Component" : "btnItemReorder",
        "Boolean" : ""
      }, {
        "Component" : "btnLineReorder",
        "Boolean" : ""
      }, {
        "Component" : "btnUpdate",
        "Boolean" : ""
      }, {
        "Component" : "deleteMenu0",
        "Boolean" : ""
      }, {
        "Component" : "deleteMenu1",
        "Boolean" : ""
      }, {
        "Component" : "downloadAllDataMenu0",
        "Boolean" : ""
      }, {
        "Component" : "downloadAllDataMenu1",
        "Boolean" : ""
      }, {
        "Component" : "downloadGridDataMenu0",
        "Boolean" : ""
      }, {
        "Component" : "downloadGridDataMenu1",
        "Boolean" : ""
      }, {
        "Component" : "grd0",
        "Boolean" : "true"
      }, {
        "Component" : "grd1",
        "Boolean" : ""
      }, {
        "Component" : "grdEditor",
        "Boolean" : ""
      }, {
        "Component" : "gridContextMenu0",
        "Boolean" : ""
      }, {
        "Component" : "gridContextMenu1",
        "Boolean" : ""
      }, {
        "Component" : "tre0",
        "Boolean" : ""
      }, {
        "Component" : "txtBlockId",
        "Boolean" : "true"
      }, {
        "Component" : "txtClickBlockId",
        "Boolean" : "true"
      }, {
        "Component" : "txtItemName",
        "Boolean" : "true"
      }, {
        "Component" : "txtItemType",
        "Boolean" : "true"
      }, {
        "Component" : "txtProjectId",
        "Boolean" : "true"
      }, {
        "Component" : "uploadAppendMenu0",
        "Boolean" : ""
      }, {
        "Component" : "uploadAppendMenu1",
        "Boolean" : ""
      }, {
        "Component" : "uploadDeleteInsertMenu0",
        "Boolean" : ""
      }, {
        "Component" : "uploadDeleteInsertMenu1",
        "Boolean" : ""
      }, {
        "Component" : "uploadUpdateInsertMenu0",
        "Boolean" : ""
      }, {
        "Component" : "uploadUpdateInsertMenu1",
        "Boolean" : ""
      } ]
    }
  },
  "actionName" : "ShowPopup",
  "id" : "btnLineReorder"
},ruleFunction79,e);
// },function(){$(e.target).removeAttr('disabled');},e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else {
              ruleFunction79();
             }
			 }  else {
        ruleFunction79();
       }
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
    function ruleFunction79() {
      returnVal =  rules.querylst({
      "data" : {
        "selectedExpressionID" : "btnLine_QueryLst_99",
        "componentURL" : "",
        "message" : {
          "name" : "QueryList",
          "url" : "querylst.html"
        },
        "MSGGridInstance" : {
          "_setdata" : [ {
            "Parameter" : "PROJECTID",
            "Mandatory" : "Y",
            InputType: "Text",	 
            "Value" : sessionStorage.getItem("projectId"),
            "Column" : "PROJECTID",
            "MultiKey" : "",
            "Required" : "Y"
          }, {
            "Parameter" : "BLOCKID",
            "Mandatory" : "N",
            "InputType" : "Component",
            "Value" : "txtClickBlockId",
            "Column" : "",
            "MultiKey" : "",
            "Required" : "N"
          }, {
            "Parameter" : "ITEMNAME",
            "Mandatory" : "N",
            "InputType" : "Component",
            "Value" : "txtItemName",
            "Column" : "",
            "MultiKey" : "",
            "Required" : "N"
          } ]
        },
        "currentQueryRuleID" : "UDFBIZLINETEMPLATE",
        "MessageID" : "QueryRule",
        "ServiceName" : "Lst",
        "DetailMessageID" : "LstQuery",
        "QueryRuleID" : "UDFBIZLINETEMPLATE",
        "ruleId" : "BR_STDQuery",
        "simulationOutputText" : "PROJECTID, BLOCKID, ITEMNAME, LINEAKEYID, SEQNUM, ISMODIFIABLE, CATEGORY, SOURCECODE, VARIABLENUMBER, VARIABLES, REPLACEMENTVALUES, ERRORCODE, ERRORMESSAGEID, PSEUDOCODE1, PSEUDOCODE2, PSEUDOCODE3, DESCRIPTION1, DESCRIPTION2, DESCRIPTION3",
        "simulationOutputCnt" : 19,
        "selectedMSGParameterGrid" : [ {
          "Parameter" : "PROJECTID",
          "Mandatory" : "Y",
          InputType: "Text",	 
          "Value" : sessionStorage.getItem("projectId"),
          "Column" : "PROJECTID",
          "MultiKey" : "",
          "Required" : "Y"
        }, {
          "Parameter" : "BLOCKID",
          "Mandatory" : "N",
          "InputType" : "Component",
          "Value" : "txtClickBlockId",
          "Column" : "",
          "MultiKey" : "",
          "Required" : "N"
        }, {
          "Parameter" : "ITEMNAME",
          "Mandatory" : "N",
          "InputType" : "Component",
          "Value" : "txtItemName",
          "Column" : "",
          "MultiKey" : "",
          "Required" : "N"
        } ]
      },
      "actionName" : "QueryLst",
      "id" : "btnLineReorder"
      },ruleFunction80,e);
        if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
              if(returnVal.result==false){  
                  if(returnVal.ignoreValidation==false){ 
                      if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
                      commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
                  } else { 
                      ruleFunction80();
                  } 
              } else { 
                ruleFunction80();
            }  
        }else {
              if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
              commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
        }  
    };
    function ruleFunction80(){ 
      returnVal =  rules.bindgriddata({
  "data" : {
    "checkComponent" : "",
    "checkComponentHeaderName" : "",
    "checkComponentHeaderNameDisable" : false,
    "selectedParameterGrid" : [ ],
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID",
      "MultiKey" : ""
    }, {
      "ParameterID" : "BLOCKID",
      "ColumnID" : "BLOCKID",
      "MultiKey" : ""
    }, {
      "ParameterID" : "ITEMNAME",
      "ColumnID" : "ITEMNAME",
      "MultiKey" : ""
    }, {
      "ParameterID" : "LINEAKEYID",
      "ColumnID" : "LINEAKEYID",
      "MultiKey" : ""
    }, {
      "ParameterID" : "SEQNUM",
      "ColumnID" : "SEQNUM",
      "MultiKey" : ""
    }, {
      "ParameterID" : "ISMODIFIABLE",
      "ColumnID" : "ISMODIFIABLE",
      "MultiKey" : ""
    }, {
      "ParameterID" : "PSEUDOCODE3",
      "ColumnID" : "PSEUDOCODE3",
      "MultiKey" : ""
    }, {
      "ParameterID" : "CATEGORY",
      "ColumnID" : "CATEGORY",
      "MultiKey" : "Category"
    }, {
      "ParameterID" : "SOURCECODE",
      "ColumnID" : "SOURCECODE",
      "MultiKey" : ""
    }, {
      "ParameterID" : "VARIABLENUMBER",
      "ColumnID" : "VARIABLENUMBER",
      "MultiKey" : ""
    }, {
      "ParameterID" : "VARIABLES",
      "ColumnID" : "VARIABLES",
      "MultiKey" : ""
    }, {
      "ParameterID" : "REPLACEMENTVALUES",
      "ColumnID" : "REPLACEMENTVALUES",
      "MultiKey" : ""
    }, {
      "ParameterID" : "ERRORCODE",
      "ColumnID" : "ERRORCODE",
      "MultiKey" : ""
    }, {
      "ParameterID" : "ERRORMESSAGEID",
      "ColumnID" : "ERRORMESSAGEID",
      "MultiKey" : ""
    }, {
      "ParameterID" : "DESCRIPTION3",
      "ColumnID" : "DESCRIPTION3",
      "MultiKey" : "Description"
    }, {
      "ParameterID" : "PSEUDOCODE1",
      "ColumnID" : "PSEUDOCODE1",
      "MultiKey" : ""
    }, {
      "ParameterID" : "PSEUDOCODE2",
      "ColumnID" : "PSEUDOCODE2",
      "MultiKey" : ""
    }, {
      "ParameterID" : "DESCRIPTION1",
      "ColumnID" : "DESCRIPTION1",
      "MultiKey" : ""
    }, {
      "ParameterID" : "DESCRIPTION2",
      "ColumnID" : "DESCRIPTION2",
      "MultiKey" : ""
    } ],
    "gridID" : "grd1",
    "multiTargetComponent" : "",
    "multiSumComponent" : "",
    "sumYnID" : false,
    "listExpressionID" : "btnLine_QueryLst_99",
    "selectedSQLExpression" : "",
    "selectedDefineString" : "",
    "selectedGetValueColumn" : "",
    "selectedExpressionID" : "btnLine_BindGridData_100",
    "gridAddFlag" : "",
    "orderDesc" : "",
    "MSGGridInstance" : {
      "gridObj" : "#GridInfo",
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID",
        "MultiKey" : ""
      }, {
        "ParameterID" : "BLOCKID",
        "ColumnID" : "BLOCKID",
        "MultiKey" : ""
      }, {
        "ParameterID" : "ITEMNAME",
        "ColumnID" : "ITEMNAME",
        "MultiKey" : ""
      }, {
        "ParameterID" : "LINEAKEYID",
        "ColumnID" : "LINEAKEYID",
        "MultiKey" : ""
      }, {
        "ParameterID" : "SEQNUM",
        "ColumnID" : "SEQNUM",
        "MultiKey" : ""
      }, {
        "ParameterID" : "ISMODIFIABLE",
        "ColumnID" : "ISMODIFIABLE",
        "MultiKey" : ""
      }, {
        "ParameterID" : "PSEUDOCODE3",
        "ColumnID" : "PSEUDOCODE3",
        "MultiKey" : ""
      }, {
        "ParameterID" : "CATEGORY",
        "ColumnID" : "CATEGORY",
        "MultiKey" : "Category"
      }, {
        "ParameterID" : "SOURCECODE",
        "ColumnID" : "SOURCECODE",
        "MultiKey" : ""
      }, {
        "ParameterID" : "VARIABLENUMBER",
        "ColumnID" : "VARIABLENUMBER",
        "MultiKey" : ""
      }, {
        "ParameterID" : "VARIABLES",
        "ColumnID" : "VARIABLES",
        "MultiKey" : ""
      }, {
        "ParameterID" : "REPLACEMENTVALUES",
        "ColumnID" : "REPLACEMENTVALUES",
        "MultiKey" : ""
      }, {
        "ParameterID" : "ERRORCODE",
        "ColumnID" : "ERRORCODE",
        "MultiKey" : ""
      }, {
        "ParameterID" : "ERRORMESSAGEID",
        "ColumnID" : "ERRORMESSAGEID",
        "MultiKey" : ""
      }, {
        "ParameterID" : "DESCRIPTION3",
        "ColumnID" : "DESCRIPTION3",
        "MultiKey" : "Description"
      }, {
        "ParameterID" : "PSEUDOCODE1",
        "ColumnID" : "PSEUDOCODE1",
        "MultiKey" : ""
      }, {
        "ParameterID" : "PSEUDOCODE2",
        "ColumnID" : "PSEUDOCODE2",
        "MultiKey" : ""
      }, {
        "ParameterID" : "DESCRIPTION1",
        "ColumnID" : "DESCRIPTION1",
        "MultiKey" : ""
      }, {
        "ParameterID" : "DESCRIPTION2",
        "ColumnID" : "DESCRIPTION2",
        "MultiKey" : ""
      } ]
    },
    "bindComponentID" : "grd1"
  },
  "actionName" : "BindGridData",
  "bindComponentID" : "grd1",
  "id" : "btnLineReorder"
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
	 //* downloadGridDataMenu1 Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#downloadGridDataMenu1").on("click",function(e) {  
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
    "selectedExpressionID" : "downloadGridDataMenu1_DownloadExcelFile_49",
    "gridID" : "grd1"
  },
  "id" : "downloadGridDataMenu1"
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
},ruleFunction82,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction82();
						 } 
				 } else { 
						 ruleFunction82();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		function ruleFunction82(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [ {
      Parameter: "PROJECTID",
      Mandatory: "Y",
      InputType: "Text",
      Value: sessionStorage.getItem("projectId"),
      Column: "PROJECTID",
    }],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "RULE_UDFBIZITEMTEMPLATE_xpkJe",
    "selectedExpressionID" : "uploadUpdateInsertMenu0_SendMessage_36",
    "MSGGridInstance" : {
      "_setdata" : null
    }
  },
  "id" : "uploadUpdateInsertMenu0"
},ruleFunction83,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction83();
						 } 
				 } else { 
						 ruleFunction83();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction83(){ 
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "uploadUpdateInsertMenu0_BindGridData_37",
    "listExpressionID" : "uploadUpdateInsertMenu0_SendMessage_36",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "BLOCKID",
      "ColumnID" : "BLOCKID"
    }, {
      "ParameterID" : "ITEMNAME",
      "ColumnID" : "ITEMNAME"
    }, {
      "ParameterID" : "ITEMTYPE",
      "ColumnID" : "ITEMTYPE"
    }, {
      "ParameterID" : "CATEGORY",
      "ColumnID" : "CATEGORY"
    }, {
      "ParameterID" : "ISMODIFIABLE",
      "ColumnID" : "ISMODIFIABLE"
    }, {
      "ParameterID" : "LEVEL",
      "ColumnID" : "LEVEL"
    }, {
      "ParameterID" : "SUPERITEMID",
      "ColumnID" : "SUPERITEMID"
    }, {
      "ParameterID" : "SEQNUM",
      "ColumnID" : "SEQNUM"
    }, {
      "ParameterID" : "ICONNAME",
      "ColumnID" : "ICONNAME"
    }, {
      "ParameterID" : "ICONIMAGE",
      "ColumnID" : "ICONIMAGE"
    }, {
      "ParameterID" : "PSEUDOCODE1",
      "ColumnID" : "PSEUDOCODE1"
    }, {
      "ParameterID" : "PSEUDOCODE2",
      "ColumnID" : "PSEUDOCODE2"
    }, {
      "ParameterID" : "PSEUDOCODE3",
      "ColumnID" : "PSEUDOCODE3"
    }, {
      "ParameterID" : "ICONTEXT1",
      "ColumnID" : "ICONTEXT1"
    }, {
      "ParameterID" : "ICONTEXT2",
      "ColumnID" : "ICONTEXT2"
    }, {
      "ParameterID" : "ICONTEXT3",
      "ColumnID" : "ICONTEXT3"
    }, {
      "ParameterID" : "DESCRIPTION1",
      "ColumnID" : "DESCRIPTION1"
    }, {
      "ParameterID" : "DESCRIPTION2",
      "ColumnID" : "DESCRIPTION2"
    }, {
      "ParameterID" : "DESCRIPTION3",
      "ColumnID" : "DESCRIPTION3"
    } ],
    "gridID" : "grd0",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID"
      }, {
        "ParameterID" : "BLOCKID",
        "ColumnID" : "BLOCKID"
      }, {
        "ParameterID" : "ITEMNAME",
        "ColumnID" : "ITEMNAME"
      }, {
        "ParameterID" : "ITEMTYPE",
        "ColumnID" : "ITEMTYPE"
      }, {
        "ParameterID" : "CATEGORY",
        "ColumnID" : "CATEGORY"
      }, {
        "ParameterID" : "ISMODIFIABLE",
        "ColumnID" : "ISMODIFIABLE"
      }, {
        "ParameterID" : "LEVEL",
        "ColumnID" : "LEVEL"
      }, {
        "ParameterID" : "SUPERITEMID",
        "ColumnID" : "SUPERITEMID"
      }, {
        "ParameterID" : "SEQNUM",
        "ColumnID" : "SEQNUM"
      }, {
        "ParameterID" : "ICONNAME",
        "ColumnID" : "ICONNAME"
      }, {
        "ParameterID" : "ICONIMAGE",
        "ColumnID" : "ICONIMAGE"
      }, {
        "ParameterID" : "PSEUDOCODE1",
        "ColumnID" : "PSEUDOCODE1"
      }, {
        "ParameterID" : "PSEUDOCODE2",
        "ColumnID" : "PSEUDOCODE2"
      }, {
        "ParameterID" : "PSEUDOCODE3",
        "ColumnID" : "PSEUDOCODE3"
      }, {
        "ParameterID" : "ICONTEXT1",
        "ColumnID" : "ICONTEXT1"
      }, {
        "ParameterID" : "ICONTEXT2",
        "ColumnID" : "ICONTEXT2"
      }, {
        "ParameterID" : "ICONTEXT3",
        "ColumnID" : "ICONTEXT3"
      }, {
        "ParameterID" : "DESCRIPTION1",
        "ColumnID" : "DESCRIPTION1"
      }, {
        "ParameterID" : "DESCRIPTION2",
        "ColumnID" : "DESCRIPTION2"
      }, {
        "ParameterID" : "DESCRIPTION3",
        "ColumnID" : "DESCRIPTION3"
      } ]
    }
  },
  "id" : "uploadUpdateInsertMenu0"
},ruleFunction84,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction84();
						 } 
				 } else { 
						 ruleFunction84();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction84(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "uploadUpdateInsertMenu0_ClearGridData_70",
    "gridID" : "grdEditor"
  },
  "id" : "uploadUpdateInsertMenu0"
},ruleFunction85,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction85();
						 } 
				 } else { 
						 ruleFunction85();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction85(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "uploadUpdateInsertMenu0_ClearGridData_38",
    "gridID" : "grd1"
  },
  "id" : "uploadUpdateInsertMenu0"
},ruleFunction86,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction86();
						 } 
				 } else { 
						 ruleFunction86();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction86(){ 
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "uploadUpdateInsertMenu0_BindPropertyData3_85",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "RULE_UDFBIZLINETEMPLATE",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SEQNUM",
        "POSITION" : "1",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "2",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "BLOCKID",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ITEMNAME",
        "POSITION" : "4",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "80",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "LINEAKEYID",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ISMODIFIABLE",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "CATEGORY",
        "POSITION" : "7",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SOURCECODE",
        "POSITION" : "8",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLENUMBER",
        "POSITION" : "9",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLES",
        "POSITION" : "10",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "REPLACEMENTVALUES",
        "POSITION" : "11",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORCODE",
        "POSITION" : "12",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORMESSAGEID",
        "POSITION" : "13",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE1",
        "POSITION" : "14",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE2",
        "POSITION" : "15",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE3",
        "POSITION" : "16",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION1",
        "POSITION" : "17",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION2",
        "POSITION" : "18",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION3",
        "POSITION" : "19",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "CLASSATTRIBUTE" : "BLOCKID",
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
        "CLASSATTRIBUTE" : "ITEMNAME",
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
        "CLASSATTRIBUTE" : "LINEAKEYID",
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
        "CLASSATTRIBUTE" : "SEQNUM",
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
        "CLASSATTRIBUTE" : "ISMODIFIABLE",
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
        "CLASSATTRIBUTE" : "CATEGORY",
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
        "CLASSATTRIBUTE" : "SOURCECODE",
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
        "CLASSATTRIBUTE" : "VARIABLENUMBER",
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
        "CLASSATTRIBUTE" : "VARIABLES",
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
        "CLASSATTRIBUTE" : "REPLACEMENTVALUES",
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
        "CLASSATTRIBUTE" : "ERRORCODE",
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
        "CLASSATTRIBUTE" : "ERRORMESSAGEID",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE1",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE2",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE3",
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
        "CLASSATTRIBUTE" : "DESCRIPTION1",
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
        "CLASSATTRIBUTE" : "DESCRIPTION2",
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
        "CLASSATTRIBUTE" : "DESCRIPTION3",
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
      "queryRuleId" : "RULE_UDFBIZLINETEMPLATE_T1F9P",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "RULE_BIZITEMTEMPLATE_PROJECTID_tbHYo",
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
	 //* uploadUpdateInsertMenu1 Object Actions
	 //******************************
		 //********************
		 //* click Event
		 //********************
		 $("#uploadUpdateInsertMenu1").on("click",function(e) {  
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
    "selectedExpressionID" : "uploadUpdateInsertMenu1_DownloadExcelFile_54",
    "gridID" : "grd1",
    "mode" : "Update Insert"
  },
  "id" : "uploadUpdateInsertMenu1"
},ruleFunction88,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction88();
						 } 
				 } else { 
						 ruleFunction88();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		function ruleFunction88(){ 
			 returnVal =  rules.sendmessage({
  "data" : {
    "selectedMSGParameterGrid" : [ {
        "Parameter": "PROJECTID",
        Mandatory: "Y",
        InputType: "Text",
        Value: sessionStorage.getItem("projectId"),
        Column: "PROJECTID",
    }, {
      "Parameter" : "ITEMNAME",
      "Mandatory" : "N",
      "InputType" : "Component",
      "Value" : "grd0",
      "Column" : "ITEMNAME"
    } ],
    "MessageID" : "QueryRule",
    "ServiceName" : "Lst",
    "DetailMessageID" : "LstQuery",
    "ruleId" : "BR_STDQuery",
    "QueryRuleID" : "ITEMNAME_RULE_UDFBIZITEMTEMPLATE_ITEMNAME_RULE_UDFBIZLINETEMPLATE_I3haW",
    "selectedExpressionID" : "uploadUpdateInsertMenu1_SendMessage_55",
    "MSGGridInstance" : {
      "_setdata" : [ {
        Parameter: "PROJECTID",
        Mandatory: "Y",
        InputType: "Text",
        Value: sessionStorage.getItem("projectId"),
        Column: "PROJECTID",
      }, {
        "Parameter" : "ITEMNAME",
        "Mandatory" : "N",
        "InputType" : "Component",
        "Value" : "grd0",
        "Column" : "ITEMNAME"
      } ]
    }
  },
  "id" : "uploadUpdateInsertMenu1"
},ruleFunction89,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction89();
						 } 
				 } else { 
						 ruleFunction89();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction89(){ 
			 returnVal =  rules.bindgriddata({
  "data" : {
    "selectedExpressionID" : "uploadUpdateInsertMenu1_BindGridData_56",
    "listExpressionID" : "uploadUpdateInsertMenu1_SendMessage_55",
    "gridInfo" : [ {
      "ParameterID" : "PROJECTID",
      "ColumnID" : "PROJECTID"
    }, {
      "ParameterID" : "BLOCKID",
      "ColumnID" : "BLOCKID"
    }, {
      "ParameterID" : "ITEMNAME",
      "ColumnID" : "ITEMNAME"
    }, {
      "ParameterID" : "LINEAKEYID",
      "ColumnID" : "LINEAKEYID"
    }, {
      "ParameterID" : "SEQNUM",
      "ColumnID" : "SEQNUM"
    }, {
      "ParameterID" : "ISMODIFIABLE",
      "ColumnID" : "ISMODIFIABLE"
    }, {
      "ParameterID" : "CATEGORY",
      "ColumnID" : "CATEGORY"
    }, {
      "ParameterID" : "SOURCECODE",
      "ColumnID" : "SOURCECODE"
    }, {
      "ParameterID" : "VARIABLENUMBER",
      "ColumnID" : "VARIABLENUMBER"
    }, {
      "ParameterID" : "VARIABLES",
      "ColumnID" : "VARIABLES"
    }, {
      "ParameterID" : "REPLACEMENTVALUES",
      "ColumnID" : "REPLACEMENTVALUES"
    }, {
      "ParameterID" : "ERRORCODE",
      "ColumnID" : "ERRORCODE"
    }, {
      "ParameterID" : "ERRORMESSAGEID",
      "ColumnID" : "ERRORMESSAGEID"
    }, {
      "ParameterID" : "PSEUDOCODE1",
      "ColumnID" : "PSEUDOCODE1"
    }, {
      "ParameterID" : "PSEUDOCODE2",
      "ColumnID" : "PSEUDOCODE2"
    }, {
      "ParameterID" : "PSEUDOCODE3",
      "ColumnID" : "PSEUDOCODE3"
    }, {
      "ParameterID" : "DESCRIPTION1",
      "ColumnID" : "DESCRIPTION1"
    }, {
      "ParameterID" : "DESCRIPTION2",
      "ColumnID" : "DESCRIPTION2"
    }, {
      "ParameterID" : "DESCRIPTION3",
      "ColumnID" : "DESCRIPTION3"
    } ],
    "gridID" : "grd1",
    "MSGGridInstance" : {
      "_setdata" : [ {
        "ParameterID" : "PROJECTID",
        "ColumnID" : "PROJECTID"
      }, {
        "ParameterID" : "BLOCKID",
        "ColumnID" : "BLOCKID"
      }, {
        "ParameterID" : "ITEMNAME",
        "ColumnID" : "ITEMNAME"
      }, {
        "ParameterID" : "LINEAKEYID",
        "ColumnID" : "LINEAKEYID"
      }, {
        "ParameterID" : "SEQNUM",
        "ColumnID" : "SEQNUM"
      }, {
        "ParameterID" : "ISMODIFIABLE",
        "ColumnID" : "ISMODIFIABLE"
      }, {
        "ParameterID" : "CATEGORY",
        "ColumnID" : "CATEGORY"
      }, {
        "ParameterID" : "SOURCECODE",
        "ColumnID" : "SOURCECODE"
      }, {
        "ParameterID" : "VARIABLENUMBER",
        "ColumnID" : "VARIABLENUMBER"
      }, {
        "ParameterID" : "VARIABLES",
        "ColumnID" : "VARIABLES"
      }, {
        "ParameterID" : "REPLACEMENTVALUES",
        "ColumnID" : "REPLACEMENTVALUES"
      }, {
        "ParameterID" : "ERRORCODE",
        "ColumnID" : "ERRORCODE"
      }, {
        "ParameterID" : "ERRORMESSAGEID",
        "ColumnID" : "ERRORMESSAGEID"
      }, {
        "ParameterID" : "PSEUDOCODE1",
        "ColumnID" : "PSEUDOCODE1"
      }, {
        "ParameterID" : "PSEUDOCODE2",
        "ColumnID" : "PSEUDOCODE2"
      }, {
        "ParameterID" : "PSEUDOCODE3",
        "ColumnID" : "PSEUDOCODE3"
      }, {
        "ParameterID" : "DESCRIPTION1",
        "ColumnID" : "DESCRIPTION1"
      }, {
        "ParameterID" : "DESCRIPTION2",
        "ColumnID" : "DESCRIPTION2"
      }, {
        "ParameterID" : "DESCRIPTION3",
        "ColumnID" : "DESCRIPTION3"
      } ]
    }
  },
  "id" : "uploadUpdateInsertMenu1"
},ruleFunction90,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction90();
						 } 
				 } else { 
						 ruleFunction90();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction90(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "uploadUpdateInsertMenu1_ClearGridData_57",
    "gridID" : "grd1"
  },
  "id" : "uploadUpdateInsertMenu1"
},ruleFunction91,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction91();
						 } 
				 } else { 
						 ruleFunction91();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction91(){ 
			 returnVal =  customRules.cleargriddata({
  "data" : {
    "selectedExpressionID" : "uploadUpdateInsertMenu1_ClearGridData_74",
    "gridID" : "grdEditor"
  },
  "id" : "uploadUpdateInsertMenu1"
},ruleFunction92,e);
		if(returnVal.stopNextFunction == undefined || returnVal.stopNextFunction == false){  
				 if(returnVal.result==false){  
						 if(returnVal.ignoreValidation==false){ 
								 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
								 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
						 } else { 
								 ruleFunction92();
						 } 
				 } else { 
						 ruleFunction92();
			 }  
		}else {
				 if(returnVal.resultErrorCode != "" && returnVal.resultErrorCode != undefined) 
				 commonWindow.ruleErrorCodeWindow(returnVal.resultErrorCode,codeLang); 
		}  
		}; 
		function ruleFunction92(){ 
			 returnVal =  rules.bindpropertydata3({
  "data" : {
    "selectedExpressionID" : "uploadUpdateInsertMenu1_BindPropertyData3_89",
    "gridID" : "grdEditor",
    "dataSource" : {
      "tableId" : "RULE_UDFBIZLINETEMPLATE",
      "columns" : [ {
        "SYSTEMID" : "Rule-Designer",
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SEQNUM",
        "POSITION" : "1",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PROJECTID",
        "POSITION" : "2",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "BLOCKID",
        "POSITION" : "3",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ITEMNAME",
        "POSITION" : "4",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "80",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "LINEAKEYID",
        "POSITION" : "5",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "Y",
        "ISNOTNULL" : "Y",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ISMODIFIABLE",
        "POSITION" : "6",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "CATEGORY",
        "POSITION" : "7",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "SOURCECODE",
        "POSITION" : "8",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLENUMBER",
        "POSITION" : "9",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "22, 0",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "VARIABLES",
        "POSITION" : "10",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "REPLACEMENTVALUES",
        "POSITION" : "11",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "255",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORCODE",
        "POSITION" : "12",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "ERRORMESSAGEID",
        "POSITION" : "13",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "40",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE1",
        "POSITION" : "14",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "DECIMAL",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE2",
        "POSITION" : "15",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "PSEUDOCODE3",
        "POSITION" : "16",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION1",
        "POSITION" : "17",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION2",
        "POSITION" : "18",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "TABLEID" : "RULE_UDFBIZLINETEMPLATE",
        "COLUMNID" : "DESCRIPTION3",
        "POSITION" : "19",
        "DESCRIPTION" : null,
        "AVAILABILITY" : "Available",
        "COLUMNTYPE" : "STND",
        "DATATYPE" : "VARCHAR",
        "DATASIZE" : "1000",
        "ISPRIMARY" : "N",
        "ISNOTNULL" : "N",
        "DEFAULTVALUE" : null,
        "CONSTRAINT" : null,
        "FOREIGNKEY" : null,
        "COMMENTS" : null,
        "EXAMPLE" : null,
        "RELEVANTTYPE" : null,
        "RELEVANTCOLUMNID" : null,
        "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
        "CHANGEUSER" : null,
        "COLUMNCHGDATE" : null,
        "COLUMNCHGUSER" : null,
        "REFERENCETABLE" : "2021-08-18 14:49:03",
        "TOCOLUMNID" : null,
        "FOREIGNKEYID" : null,
        "CONSTRAINTID" : null,
        "TABLETYPE" : null,
        "TABLEKIND" : null,
        "TABLEGROUP" : null,
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
        "CLASSATTRIBUTE" : "BLOCKID",
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
        "CLASSATTRIBUTE" : "ITEMNAME",
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
        "CLASSATTRIBUTE" : "LINEAKEYID",
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
        "CLASSATTRIBUTE" : "SEQNUM",
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
        "CLASSATTRIBUTE" : "ISMODIFIABLE",
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
        "CLASSATTRIBUTE" : "CATEGORY",
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
        "CLASSATTRIBUTE" : "SOURCECODE",
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
        "CLASSATTRIBUTE" : "VARIABLENUMBER",
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
        "CLASSATTRIBUTE" : "VARIABLES",
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
        "CLASSATTRIBUTE" : "REPLACEMENTVALUES",
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
        "CLASSATTRIBUTE" : "ERRORCODE",
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
        "CLASSATTRIBUTE" : "ERRORMESSAGEID",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE1",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE2",
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
        "CLASSATTRIBUTE" : "PSEUDOCODE3",
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
        "CLASSATTRIBUTE" : "DESCRIPTION1",
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
        "CLASSATTRIBUTE" : "DESCRIPTION2",
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
        "CLASSATTRIBUTE" : "DESCRIPTION3",
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
      "queryRuleId" : "RULE_UDFBIZLINETEMPLATE_T1F9P",
      "functionClassAttrQueryRuleId" : [ {
        "classAttribute" : "PROJECTID",
        "queryRuleId" : "RULE_BIZITEMTEMPLATE_PROJECTID_tbHYo",
        "sessionFlag": "Y",
        "parameterId":"projectId"
      } ],
      "hasSort" : true
    }
  },
  "id" : "uploadUpdateInsertMenu1"
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

  //********************
	 //* Initialize Event  
	 //********************
   function initializeLoad(){
    var returnVal; 
      returnVal =  rules.sendmessage({
 "data" : {
   "selectedMSGParameterGrid" : [ {
     "Parameter" : "PROJECTID",
     "Mandatory" : "Y",
     "InputType" : "Text",
     "Value" : sessionStorage.getItem("projectId"),
     "Column" : "PROJECTID"
   }],
   "MessageID" : "QueryRule",
   "ServiceName" : "Lst",
   "DetailMessageID" : "LstQuery",
   "ruleId" : "BR_STDQuery",
   "QueryRuleID" : "RULE_UDFBIZITEMTEMPLATE_xpkJe",
   "selectedExpressionID" : "Initialize_SendMessage_0",
   "MSGGridInstance" : {
     "_setdata" : null
   }
 }
},ruleFunction35);
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
   function ruleFunction35(){ 
      returnVal =  rules.bindgriddata({
 "data" : {
   "selectedExpressionID" : "Initialize_BindGridData_1",
   "listExpressionID" : "Initialize_SendMessage_0",
   "gridInfo" : [ {
     "ParameterID" : "PROJECTID",
     "ColumnID" : "PROJECTID"
   }, {
     "ParameterID" : "BLOCKID",
     "ColumnID" : "BLOCKID"
   }, {
     "ParameterID" : "ITEMNAME",
     "ColumnID" : "ITEMNAME"
   }, {
     "ParameterID" : "ITEMTYPE",
     "ColumnID" : "ITEMTYPE"
   }, {
     "ParameterID" : "CATEGORY",
     "ColumnID" : "CATEGORY"
   }, {
     "ParameterID" : "ISMODIFIABLE",
     "ColumnID" : "ISMODIFIABLE"
   }, {
     "ParameterID" : "LEVEL",
     "ColumnID" : "LEVEL"
   }, {
     "ParameterID" : "SUPERITEMID",
     "ColumnID" : "SUPERITEMID"
   }, {
     "ParameterID" : "SEQNUM",
     "ColumnID" : "SEQNUM"
   }, {
     "ParameterID" : "ICONNAME",
     "ColumnID" : "ICONNAME"
   }, {
     "ParameterID" : "ICONIMAGE",
     "ColumnID" : "ICONIMAGE"
   }, {
     "ParameterID" : "PSEUDOCODE1",
     "ColumnID" : "PSEUDOCODE1"
   }, {
     "ParameterID" : "PSEUDOCODE2",
     "ColumnID" : "PSEUDOCODE2"
   }, {
     "ParameterID" : "PSEUDOCODE3",
     "ColumnID" : "PSEUDOCODE3"
   }, {
     "ParameterID" : "ICONTEXT1",
     "ColumnID" : "ICONTEXT1"
   }, {
     "ParameterID" : "ICONTEXT2",
     "ColumnID" : "ICONTEXT2"
   }, {
     "ParameterID" : "ICONTEXT3",
     "ColumnID" : "ICONTEXT3"
   }, {
     "ParameterID" : "DESCRIPTION1",
     "ColumnID" : "DESCRIPTION1"
   }, {
     "ParameterID" : "DESCRIPTION2",
     "ColumnID" : "DESCRIPTION2"
   }, {
     "ParameterID" : "DESCRIPTION3",
     "ColumnID" : "DESCRIPTION3"
   } ],
   "gridID" : "grd0",
   "MSGGridInstance" : {
     "_setdata" : [ {
       "ParameterID" : "PROJECTID",
       "ColumnID" : "PROJECTID"
     }, {
       "ParameterID" : "BLOCKID",
       "ColumnID" : "BLOCKID"
     }, {
       "ParameterID" : "ITEMNAME",
       "ColumnID" : "ITEMNAME"
     }, {
       "ParameterID" : "ITEMTYPE",
       "ColumnID" : "ITEMTYPE"
     }, {
       "ParameterID" : "CATEGORY",
       "ColumnID" : "CATEGORY"
     }, {
       "ParameterID" : "ISMODIFIABLE",
       "ColumnID" : "ISMODIFIABLE"
     }, {
       "ParameterID" : "LEVEL",
       "ColumnID" : "LEVEL"
     }, {
       "ParameterID" : "SUPERITEMID",
       "ColumnID" : "SUPERITEMID"
     }, {
       "ParameterID" : "SEQNUM",
       "ColumnID" : "SEQNUM"
     }, {
       "ParameterID" : "ICONNAME",
       "ColumnID" : "ICONNAME"
     }, {
       "ParameterID" : "ICONIMAGE",
       "ColumnID" : "ICONIMAGE"
     }, {
       "ParameterID" : "PSEUDOCODE1",
       "ColumnID" : "PSEUDOCODE1"
     }, {
       "ParameterID" : "PSEUDOCODE2",
       "ColumnID" : "PSEUDOCODE2"
     }, {
       "ParameterID" : "PSEUDOCODE3",
       "ColumnID" : "PSEUDOCODE3"
     }, {
       "ParameterID" : "ICONTEXT1",
       "ColumnID" : "ICONTEXT1"
     }, {
       "ParameterID" : "ICONTEXT2",
       "ColumnID" : "ICONTEXT2"
     }, {
       "ParameterID" : "ICONTEXT3",
       "ColumnID" : "ICONTEXT3"
     }, {
       "ParameterID" : "DESCRIPTION1",
       "ColumnID" : "DESCRIPTION1"
     }, {
       "ParameterID" : "DESCRIPTION2",
       "ColumnID" : "DESCRIPTION2"
     }, {
       "ParameterID" : "DESCRIPTION3",
       "ColumnID" : "DESCRIPTION3"
     } ]
   }
 }
},ruleFunction36);
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
   "selectedExpressionID" : "Initialize_BindPropertyData3_63",
   "gridID" : "grdEditor",
   "dataSource" : {
     "tableId" : "RULE_UDFBIZITEMTEMPLATE",
     "columns" : [ {
       "SYSTEMID" : "Rule-Designer",
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "SEQNUM",
       "POSITION" : "1",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "DECIMAL",
       "DATASIZE" : "22, 0",
       "ISPRIMARY" : "N",
       "ISNOTNULL" : "Y",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "PROJECTID",
       "POSITION" : "2",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "VARCHAR",
       "DATASIZE" : "20",
       "ISPRIMARY" : "Y",
       "ISNOTNULL" : "Y",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "BLOCKID",
       "POSITION" : "3",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "VARCHAR",
       "DATASIZE" : "40",
       "ISPRIMARY" : "Y",
       "ISNOTNULL" : "Y",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "ITEMNAME",
       "POSITION" : "4",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "VARCHAR",
       "DATASIZE" : "80",
       "ISPRIMARY" : "Y",
       "ISNOTNULL" : "Y",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "ITEMTYPE",
       "POSITION" : "5",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "VARCHAR",
       "DATASIZE" : "80",
       "ISPRIMARY" : "N",
       "ISNOTNULL" : "N",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "CATEGORY",
       "POSITION" : "6",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "VARCHAR",
       "DATASIZE" : "40",
       "ISPRIMARY" : "N",
       "ISNOTNULL" : "N",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "ISMODIFIABLE",
       "POSITION" : "7",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "VARCHAR",
       "DATASIZE" : "40",
       "ISPRIMARY" : "N",
       "ISNOTNULL" : "N",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "LEVEL",
       "POSITION" : "8",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "DECIMAL",
       "DATASIZE" : "22, 0",
       "ISPRIMARY" : "N",
       "ISNOTNULL" : "N",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "SUPERITEMID",
       "POSITION" : "9",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "VARCHAR",
       "DATASIZE" : "80",
       "ISPRIMARY" : "N",
       "ISNOTNULL" : "N",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "ICONNAME",
       "POSITION" : "10",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "VARCHAR",
       "DATASIZE" : "40",
       "ISPRIMARY" : "N",
       "ISNOTNULL" : "N",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "ICONIMAGE",
       "POSITION" : "11",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "VARCHAR",
       "DATASIZE" : "100",
       "ISPRIMARY" : "N",
       "ISNOTNULL" : "N",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "PSEUDOCODE1",
       "POSITION" : "12",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "VARCHAR",
       "DATASIZE" : "1000",
       "ISPRIMARY" : "N",
       "ISNOTNULL" : "N",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "PSEUDOCODE2",
       "POSITION" : "13",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "VARCHAR",
       "DATASIZE" : "1000",
       "ISPRIMARY" : "N",
       "ISNOTNULL" : "N",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "PSEUDOCODE3",
       "POSITION" : "14",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "VARCHAR",
       "DATASIZE" : "1000",
       "ISPRIMARY" : "N",
       "ISNOTNULL" : "N",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "ICONTEXT1",
       "POSITION" : "15",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "VARCHAR",
       "DATASIZE" : "40",
       "ISPRIMARY" : "N",
       "ISNOTNULL" : "N",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "ICONTEXT2",
       "POSITION" : "16",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "VARCHAR",
       "DATASIZE" : "40",
       "ISPRIMARY" : "N",
       "ISNOTNULL" : "N",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "ICONTEXT3",
       "POSITION" : "17",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "VARCHAR",
       "DATASIZE" : "40",
       "ISPRIMARY" : "N",
       "ISNOTNULL" : "N",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "DESCRIPTION1",
       "POSITION" : "18",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "VARCHAR",
       "DATASIZE" : "1000",
       "ISPRIMARY" : "N",
       "ISNOTNULL" : "N",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "DESCRIPTION2",
       "POSITION" : "19",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "VARCHAR",
       "DATASIZE" : "1000",
       "ISPRIMARY" : "N",
       "ISNOTNULL" : "N",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "TABLEID" : "RULE_UDFBIZITEMTEMPLATE",
       "COLUMNID" : "DESCRIPTION3",
       "POSITION" : "20",
       "DESCRIPTION" : null,
       "AVAILABILITY" : "Available",
       "COLUMNTYPE" : "STND",
       "DATATYPE" : "VARCHAR",
       "DATASIZE" : "1000",
       "ISPRIMARY" : "N",
       "ISNOTNULL" : "N",
       "DEFAULTVALUE" : null,
       "CONSTRAINT" : null,
       "FOREIGNKEY" : null,
       "COMMENTS" : null,
       "EXAMPLE" : null,
       "RELEVANTTYPE" : null,
       "RELEVANTCOLUMNID" : null,
       "CHANGEDATE" : "2021-08-18T05:49:03.000+0000",
       "CHANGEUSER" : null,
       "COLUMNCHGDATE" : null,
       "COLUMNCHGUSER" : null,
       "REFERENCETABLE" : "2021-08-18 14:49:03",
       "TOCOLUMNID" : null,
       "FOREIGNKEYID" : null,
       "CONSTRAINTID" : null,
       "TABLETYPE" : null,
       "TABLEKIND" : null,
       "TABLEGROUP" : null,
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
       "CLASSATTRIBUTE" : "BLOCKID",
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
       "CLASSATTRIBUTE" : "ITEMNAME",
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
       "CLASSATTRIBUTE" : "ITEMTYPE",
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
       "CLASSATTRIBUTE" : "CATEGORY",
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
       "CLASSATTRIBUTE" : "ISMODIFIABLE",
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
       "CLASSATTRIBUTE" : "LEVEL",
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
       "CLASSATTRIBUTE" : "SUPERITEMID",
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
       "CLASSATTRIBUTE" : "SEQNUM",
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
       "CLASSATTRIBUTE" : "ICONNAME",
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
       "CLASSATTRIBUTE" : "ICONIMAGE",
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
       "CLASSATTRIBUTE" : "PSEUDOCODE1",
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
       "CLASSATTRIBUTE" : "PSEUDOCODE2",
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
       "CLASSATTRIBUTE" : "PSEUDOCODE3",
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
       "CLASSATTRIBUTE" : "ICONTEXT1",
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
       "CLASSATTRIBUTE" : "ICONTEXT2",
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
       "CLASSATTRIBUTE" : "ICONTEXT3",
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
       "CLASSATTRIBUTE" : "DESCRIPTION1",
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
       "CLASSATTRIBUTE" : "DESCRIPTION2",
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
       "CLASSATTRIBUTE" : "DESCRIPTION3",
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
     "queryRuleId" : "RULE_UDFBIZITEMTEMPLATE_xpkJe",
     "functionClassAttrQueryRuleId" : [ {
       "classAttribute" : "PROJECTID",
       "queryRuleId" : "RULE_BIZITEMTEMPLATE_PROJECTID_tbHYo",
       "sessionFlag": "Y",
       "parameterId":"projectId"
     } ],
     "hasSort" : true
   }
 }
},ruleFunction37);
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
      returnVal =  customRules.bindtreenodes({
 "data" : {
   "checkComponent" : "",
   "checkComponentHeaderName" : "",
   "checkComponentHeaderNameDisable" : false,
   "selectedParameterGrid" : [{
     Parameter: "PROJECTID",
     Mandatory: "Y",
     InputType: "Text",
     Value: sessionStorage.getItem("projectId"),                
     Column: "PROJECTID",
   } ],
   "treeID" : "tre0",
   "depthQuery" : [ {
     "sql" : "SELECT DISTINCT BLOCKID FROM RULE_UDFBIZITEMTEMPLATE WHERE PROJECTID=@PROJECTID ORDER BY BLOCKID",
     "queryRuleId" : "Depth1_RULE_UDFBIZITEMTEMPLATE_T3q2q",
     "selectedMSGParameterGrid" : [ {
       "Parameter" : "PROJECTID",
       "Mandatory" : "Y",
       "InputType" : "Text",
       "Value" : sessionStorage.getItem("projectId"),
       "Column" : "PROJECTID"
       }]
   }, {
     "sql" : "SELECT DISTINCT ITEMTYPE FROM RULE_UDFBIZITEMTEMPLATE WHERE PROJECTID=@PROJECTID AND BLOCKID=@BLOCKID",
     "queryRuleId" : "Depth2_RULE_UDFBIZITEMTEMPLATE_QlTBk",
     "selectedMSGParameterGrid" : [ {
       "Parameter" : "PROJECTID",
       "Mandatory" : "Y",
       "InputType" : "Text",
       "Value" : sessionStorage.getItem("projectId"),
       "Column" : "PROJECTID"
       }]
   }, {
     "sql" : "SELECT DISTINCT ITEMNAME FROM RULE_UDFBIZITEMTEMPLATE WHERE PROJECTID=@PROJECTID AND BLOCKID=@BLOCKID AND ITEMTYPE=@ITEMTYPE AND SUPERITEMID='Top'",
     "queryRuleId" : "Depth3_RULE_UDFBIZITEMTEMPLATE_5gwWK",
     "selectedMSGParameterGrid" : [ {
       "Parameter": "PROJECTID",
       Mandatory: "Y",
       InputType: "Text",
       Value: sessionStorage.getItem("projectId"),
       Column: "PROJECTID",
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
 }


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
