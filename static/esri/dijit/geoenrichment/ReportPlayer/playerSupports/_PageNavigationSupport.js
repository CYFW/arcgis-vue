// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/playerSupports/_PageNavigationSupport","dojo/_base/declare dojo/on dojo/keys dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/string ../PlayerSelect esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/MouseUtil esri/dijit/geoenrichment/utils/TooltipUtil dojo/i18n!../../../../nls/jsapi".split(" "),function(l,f,q,g,m,h,n,p,e,r,k,c){c=c.geoenrichment.dijit.ReportPlayer.ReportPlayer;return l(null,{pageSelect:null,_currentPageIndex:null,
postCreate:function(){this.inherited(arguments);this._initPageNavigationControls()},_initPageNavigationControls:function(){var a=this;f(this.prevPageButton,"click",function(){a._showPrevPage()});f(this.nextPageButton,"click",function(){a._showNextPage()});e.hide([this.headerPageNavigator,this.pageSelectDiv]);this.pageSelect=(new this._getPageSelectClass)({onChange:function(b){a.showPageAt(a.pageSelect.get("value"))}}).placeAt(this.pageSelectDiv);this.own(this.pageSelect);k.setTooltipToNode(this.prevPageButton,
c.previousPage);k.setTooltipToNode(this.nextPageButton,c.nextPage)},_getPageSelectClass:function(){return p},showPageAt:function(a){this.isSlidesView||(a=Math.max(0,a),this._currentPageIndex=a=Math.min(this.getCurrentReportContainer().getNumberOfPages()-1,a),this.getCurrentReportContainer().showPageAt(a),this._updatePageNavigator())},_updatePageNavigator:function(){if(this.getCurrentReportContainer()&&this.getCurrentReportContainer().getNumberOfPages)if(this.isSlidesView)e.hide([this.headerPageNavigator,
this.pageSelectDiv]);else{var a=this.getCurrentReportContainer().getNumberOfPages();e[1===a?"hide":"show"]([this.headerPageNavigator,this.pageSelectDiv]);g[0===this._currentPageIndex?"add":"remove"](this.prevPageButton,"disabled");g[this._currentPageIndex===a-1?"add":"remove"](this.nextPageButton,"disabled");var b=m.position(this.getCurrentReportContainer().stackContainer);h.set(this.headerPageNavigator,"left",Math.min(b.x+b.w+20,document.body.clientWidth-50)+"px");h.set(this.headerPageNavigator,
"top",Math.max(60,b.y+10)+"px");for(var b=[],d=0;d<a;d++)b.push({label:n.substitute(c.pageIndex,{index:d+1}),value:d});this.pageSelect.set("options",b);this.pageSelect.set("value",this._currentPageIndex)}},_showPrevPage:function(){0!==this._currentPageIndex&&(this._currentPageIndex--,this.showPageAt(this._currentPageIndex))},_showNextPage:function(){this._currentPageIndex!==this.getCurrentReportContainer().getNumberOfPages()-1&&(this._currentPageIndex++,this.showPageAt(this._currentPageIndex))},resize:function(){this._updatePageNavigator();
return this.inherited(arguments)},_onZoomChanged:function(){this.inherited(arguments);this._updatePageNavigator()}})});