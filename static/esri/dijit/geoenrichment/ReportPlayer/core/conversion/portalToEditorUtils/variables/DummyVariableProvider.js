// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/variables/DummyVariableProvider",["dojo/_base/declare"],function(b){var c=b(null,{variable:null,constructor:function(a){this.variable=a},calculate:function(a){return 0},getCalcType:function(){return"n/"},getAliasWithType:function(){return this.variable.alias},getDescriptionWithType:function(){return this.variable.alias},getDecimals:function(){return this.variable.precision||0}});return b(null,{isDummy:!0,_fieldNameToVariableCache:null,
_templateNameToVariableCache:null,constructor:function(){this._fieldNameToVariableCache={};this._templateNameToVariableCache={}},getVariables:function(){var a=[],b;for(b in this._fieldNameToVariableCache)a.push(this._fieldNameToVariableCache[b]);return a},toCalculator:function(a){return(a=this._templateNameToVariableCache[a]||this._fieldNameToVariableCache[a])&&new c(a)},addVariable:function(a){this._fieldNameToVariableCache[a.fieldName]=a;this._templateNameToVariableCache[a.templateName]=a},addScriptVariable:function(a){this._fieldNameToVariableCache[a.fieldName]=
a;this._templateNameToVariableCache[a.templateName]=a}})});