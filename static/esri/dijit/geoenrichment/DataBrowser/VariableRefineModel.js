// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/DataBrowser/VariableRefineModel",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","./KeywordFilter","./TagFilter"],function(k,n,c,l,m){return k(null,{variables:null,keywordFilter:null,filters:null,idProperty:"fullName",_filterHash:null,initialize:function(a,b){this.variables=a;var e=this.variables.length,f=0;this.keywordFilter=new l;this.keywordFilter.totalCount=e;this.keywordFilter.bitIndex=f++;var d=[],h;for(h in b){var g=new m(b[h]);g.totalCount=e;g.bitIndex=
f++;d.push(g)}this._filterHash={};c.forEach(a,function(a){this._filterHash[a[this.idProperty]]=0;c.forEach(d,function(b){b.match(a)},this)},this);this.applyFilter(this.keywordFilter);this.filters=[];c.forEach(d,function(a){a.activate()&&(this.filters.push(a),this.applyFilter(a))},this);return f},applyFilter:function(a){var b=1<<a.bitIndex,e=0,f=!a.isActive();c.forEach(this.variables,function(d){var c=a.match(d,!0);!0===c&&e++;this._filterHash[d[this.idProperty]]=f||c?this._filterHash[d[this.idProperty]]&
~b:this._filterHash[d[this.idProperty]]|b},this);a.matchCount=e},match:function(a){return!this._filterHash[a[this.idProperty]]},getMatchingVariables:function(){var a=[];c.forEach(this.variables,function(b){this.match(b)&&a.push(b)},this);return a}})});