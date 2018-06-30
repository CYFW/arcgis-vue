// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/components/ToggleIconButtons","../../../kernel ../../../lang dijit/_WidgetBase dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dom-attr dojo/dom-class dojo/dom-style dojo/dom-construct dojo/has dojo/on dojo/Evented".split(" "),function(l,c,m,f,n,h,t,g,u,k,p,q,r){c=n([m,r],{declaredClass:"esri.dijit.analysis.components.ToggleIconButtons",buttons:[],isHorizontal:!0,selectedButton:"",postMixInProperties:function(){this.inherited(arguments)},buildRendering:function(){this.createElements()},
postCreate:function(){this.inherited(arguments)},createElements:function(){this.domNode=k.create("div",{"class":"class"});this.elements=[];f.forEach(this.buttons,h.hitch(this,function(a,b){var d=this.createElement(a,b);this.elements.push(d);this.domNode.appendChild(d)}))},createElement:function(a,b){var d=a.title||a.label,e=a.value||a.label,c=a.label,f=this.isHorizontal&&"left",g=k.create("div",{id:c+b,"class":"bufferIcon "+a.icon,title:d}),d=k.create("label",{id:c+b,"class":"esriSelectLabel",title:d,
innerHTML:c}),e=k.create("div",{id:"toggleButton"+b,value:e,"class":"bufferSelector esriLeadingMargin2 "+f});q(e,"click",h.hitch(this,this.onElementClick));e.appendChild(g);e.appendChild(d);return e},reset:function(){f.forEach(this.elements,function(a){g.remove(a,"selected")})},setSpecificButton:function(a){this.reset();f.forEach(this.elements,h.hitch(this,function(b){b.value===a&&(g.add(b,"selected"),this.emitChange(a))}))},onElementClick:function(a){this.reset();g.add(a.target.parentElement,"selected");
this.emitChange(a.target.parentElement.value)},emitChange:function(a){this.emit("change",{value:a})},_setIsHorizontalAttr:function(a){this.isHorizontal=a},_getIsHorizontalAttr:function(a){return this.isHorizontal},_setButtonsAttr:function(a){this.buttons=a},_getButtonsAttr:function(a){return this.buttons},_setSelectedButtonAttr:function(a){this.setSpecificButton(a)},_getSelectedButtonAttr:function(){return this.selectedButton}});p("extend-esri")&&h.setObject("dijit.analysis.components.AnalysisToggleButton",
c,l);return c});