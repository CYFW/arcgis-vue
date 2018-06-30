// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/renderers/BlendRenderer","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/has ../kernel ../Color ./Renderer".split(" "),function(d,g,h,m,n,p,l,q){d=d(q,{declaredClass:"esri.renderer.BlendRenderer",constructor:function(a){g.mixin(this,a);this.blendMode=this.blendMode||"source-over";(this._supportsCanvas=window.CanvasRenderingContext2D?!0:!1)||console.log("BlendRenderer requires a Canvas enabled Browser. Internet Explorer versions 8 and earlier do not support Canvas.");
this._updateCache()},setFields:function(a){this.fields=a;this._updateCache()},setSymbol:function(a){this.symbol=a},setBlendMode:function(a){this.blendMode=a},setOpacityStops:function(a){this.opacityStops=a;this._updateCache()},setNormalizationField:function(a){this.normalizationField=a;this._updateCache()},toJson:function(){},getSymbol:function(a){var b=this._dataCache,c=this._opacityInfos;if(this._supportsCanvas&&b&&c){var f,e,k=[],d={};h.forEach(this.fields,function(h,g){this._getColorComponent(a,
c[g],b[g],!0,d);e=h.color.toRgba();e[3]=d.value||0;f=new l(e);f._data=d.data;k.push(f)},this);k.sort(this._colorSorter);this.symbol.setColor(this._getBlendedColor(k));return this.symbol}},_colorSorter:function(a,b){var c=null!=a._data,f=null!=b._data;return c&&f?a._data-b._data:c?1:f?-1:0},_getBlendedColor:function(a){var b,c=this._canvas;c||(c=this._canvas=this._createCanvas(1,1));b=c.getContext("2d");b.globalCompositeOperation=this.blendMode;h.forEach(a,function(a){b.fillStyle=a.toCss(!0);b.fillRect(0,
0,1,1)});a=b.getImageData(0,0,1,1).data;b.clearRect(0,0,c.width,c.height);return new l([a[0],a[1],a[2],a[3]/255])},_createCanvas:function(a,b){return m.create("canvas",{width:a+"px",height:b+"px",style:"position: absolute; left: -10000px; top: 0px;"},document.body)},_updateCache:function(){var a=this.fields,b=this.opacityStops;this._dataCache=this._opacityInfos=null;if(a&&b){var c=this._dataCache=[],d=this._opacityInfos=[],e;h.forEach(a,function(a){e={field:a.field,normalizationField:this.normalizationField,
stops:b};d.push(e);c.push(this._processOpacityInfo(e))},this)}}});n("extend-esri")&&g.setObject("renderer.BlendRenderer",d,p);return d});