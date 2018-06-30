// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/resource/templates/AggregateInfo.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3c!-- Aggregate Information --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'aggrInfo\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.aggrInfo.caption}\'"\x3e\r\n    \r\n    \x3cdiv class\x3d"gxeEditOnly gxeIndent gxePrompt"\x3e${i18nArcGIS.aggrInfo.datasetHint}\x3c/div\x3e\r\n    \r\n    \x3c!-- dataset identifier --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'aggrDSIdent\',minOccurs:0,label:\'${i18nArcGIS.aggrInfo.aggrDSIdent}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'identCode\',minOccurs:1,label:\'${i18nArcGIS.codeRef.identCode}\'"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'identAuth\',minOccurs:0,label:\'${i18nArcGIS.codeRef.identAuth}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/citation/CitationElements"\x3e\x3c/div\x3e    \r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- dataset name - citation --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'aggrDSName\',minOccurs:0,label:\'${i18nArcGIS.aggrInfo.aggrDSName}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/citation/CitationElements"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Association Type --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'assocType\',minOccurs:1,label:\'${i18nArcGIS.codelist.DS_AssociationTypeCode}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'AscTypeCd\',minOccurs:1,showHeader:false"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n          data-dojo-props\x3d"target:\'value\',minOccurs:1,showHeader:false"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\r\n            data-dojo-props\x3d"codelistType:\'DS_AssociationTypeCode\'"\x3e\r\n          \x3c/div\x3e  \r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Initiative Type --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n      data-dojo-props\x3d"target:\'initType\',minOccurs:0,label:\'${i18nArcGIS.codelist.DS_InitiativeTypeCode}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'InitTypCd\',minOccurs:0,showHeader:false"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n          data-dojo-props\x3d"target:\'value\',minOccurs:0,showHeader:false"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\r\n            data-dojo-props\x3d"codelistType:\'DS_InitiativeTypeCode\'"\x3e\r\n          \x3c/div\x3e          \r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/resource/AggregateInfo","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/AggregateInfo.html ../citation/CitationElements".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.resource.AggregateInfo",a,d);return a});