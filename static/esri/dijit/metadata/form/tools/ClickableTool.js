// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/form/tools/templates/ClickableTool.html":'\x3cdiv class\x3d"gxeClickableText gxeEditOnly" tabindex\x3d"0" role\x3d"button"\r\n  data-dojo-attach-event\x3d"onclick: _onToolClick"\x3e${label}\x3c/div\x3e'}});
define("esri/dijit/metadata/form/tools/ClickableTool","dojo/_base/declare dojo/_base/lang dojo/has ../../base/Templated dojo/text!./templates/ClickableTool.html ../../../../kernel".split(" "),function(c,d,e,f,g,h){c=c([f],{_isGxeInputTool:!0,templateString:g,label:"",postCreate:function(){this.inherited(arguments);this.connectAriaClickable(this.domNode,d.hitch(this,this._onToolClick))},findInputWidget:function(b){b=null;for(var a=this.getParent();a;){if(a._isGxeInput)return a;if(a._isGxeElement){b=
a;break}if(a._isGxeAttribute){b=a;break}a=a.getParent()}return b&&b.inputWidget?b.inputWidget:null},_onToolClick:function(b){var a=this.findInputWidget(b);this.whenToolClicked(b,a)},whenToolClicked:function(b,a){}});e("extend-esri")&&d.setObject("dijit.metadata.form.tools.ClickableTool",c,h);return c});