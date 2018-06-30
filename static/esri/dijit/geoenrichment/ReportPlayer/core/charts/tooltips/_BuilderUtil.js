// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/tooltips/_BuilderUtil",["dojo/string","dojo/dom-construct","dojo/dom-style","dojo/i18n!../../../../../../nls/jsapi"],function(h,f,e,c){c=c.geoenrichment.dijit.ReportPlayer.ChartTooltip;return{addTitle:function(a,b,d){a=f.create("div",{"class":"chartTooltip_title esriGERowHigh"},a,"first");d&&this.addColor(d,a);this.addLabel(b,a)},addColor:function(a,b){var d=f.create("div",{"class":"chartTooltip_color dijitInline esriGESpaceAfterBig"},b);e.set(d,
"backgroundColor",a||"transparent")},addRowOffset:function(a){this.addColor(null,a)},addLabel:function(a,b){return f.create("div",{"class":"chartTooltip_label dijitInline esriGESpaceAfterBig",innerHTML:a},b)},addValue:function(a,b){return f.create("div",{"class":"chartTooltip_value dijitInline esriGESpaceAfterBig",innerHTML:a},b)},buildStatLabels:function(a,b,d,e,c,h){function g(d,e){if(a[d]){var c=f.create("div",{"class":"chartTooltip_row esriGERowHigh"},b);k.addColor(null,c);l.push(k.addLabel(e,
c));k.addValue(a[d],c)}}var k=this,l=[];g("weightValueLabel",d);g("minValueLabel",e);g("maxValueLabel",c);g("avgValueLabel",h);return l},formatTable:function(a){var b=0;a.forEach(function(a){b=Math.max(b,e.get(a,"width"))});a.forEach(function(a){e.set(a,"width",b+"px")})},buildSeriesLabel:function(a){return!0===a.isPrimarySeries?h.substitute(c.thisAreaSeries,{seriesName:a.seriesLabel}):a.seriesLabel}}});