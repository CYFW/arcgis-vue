// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/base/DocumentType","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-class dojo/has ../../../../../kernel ../../../base/DocumentType ./Root ./PortalItemTransformer ./arcgisStyles ./itemDescription ./optionsFilterer ./Codelists ./conditionals/Conditionals dojo/i18n!../../../nls/i18nArcGIS".split(" "),function(e,g,v,w,h,k,l,m,n,p,q,r,t,u,f){e=e(l,{caption:f.documentTypes.arcgis.caption,codelists:null,conditionals:null,description:f.documentTypes.arcgis.description,
key:"arcgis",postCreate:function(){this.codelists=new t;this.conditionals=new u;this.inherited(arguments)},beforeInitializeAttribute:function(a,c){var b=c.gxePath;if("/metadata/mdLang/languageCode/@value"===b)c.minOccurs=0;else if("/metadata/dataIdInfo/dataLang/languageCode/@value"===b)c.minOccurs=1;else if("/metadata/mdHrLv/ScopeCd/@value"===b)c.minOccurs=0;else if("/metadata/refSysInfo/RefSystem/@dimension"===b)c.minOccurs=1;else if("/metadata/mdContact/role/RoleCd/@value"===b||"/metadata/dataIdInfo/idPoC/role/RoleCd/@value"===
b)c.value="007";this._checkFGDC(b,c,null,a);this._checkINSPIRE(b,c,null,a);this._checkNAP(b,c,null,a);this.conditionals.connectXNode(a,c)},beforeInitializeElement:function(a,c){var b=c.gxePath;"/metadata/dataIdInfo/idCitation/resTitle"===b?c.isDocumentTitle=!0:"/metadata/Esri/ArcGISstyle"===b?c.value=a.ArcGISStyle:"/metadata/Esri/ArcGISProfile"===b?c.value=a.ArcGISProfile:"/metadata/Esri/ArcGISFormat"===b?c.value=a.ArcGISFormat:"/metadata/mdLang"===b?c.minOccurs=0:"/metadata/dataIdInfo/dataLang"===
b?c.minOccurs=1:"/metadata/mdHrLv"===b||"/metadata/mdHrLv/ScopeCd"===b?c.minOccurs=0:"/metadata/dqInfo/report/measResult/QuanResult/quanValUnit/UOM/unitSymbol"===b?c.minOccurs=1:"/metadata/contInfo/FetCatDesc/catLang/CharSetCd"===b&&(c.showHeader=!0);this._checkFGDC(b,null,c,a);this._checkINSPIRE(b,null,c,a);this._checkNAP(b,null,c,a);a.isAgsItemDescription&&q.beforeInitializeElement(a,c);this.conditionals.connectXNode(a,c)},_checkFGDC:function(a,c,b,d){d.isAgsFGDC||null===c||("/metadata/Esri/DataProperties/itemProps/imsContentType/@export"===
a?this._ignore(c):null!==a&&0<a.indexOf("/voiceNum/@tddtty")&&!d.isAgsNAP&&(c.serialize=!1,this._ignore(c)));d.isAgsFGDC&&null!==b&&("/metadata/Esri/locales"===a?this._ignore(b):"/metadata/refSysInfo"===a?(this._ignore(b),this._ignoreTab(b)):"/metadata/dataIdInfo/dsFormat"===a?(this._ignore(b),this._ignoreTab(b)):"/metadata/dataIdInfo/idSpecUse"===a&&(this._ignore(b),this._ignoreTab(b)));d.isAgsFGDC&&null!==c&&("/metadata/mdLang/languageCode/@value"===a?c.minOccurs=0:"/metadata/dataIdInfo/dataLang/languageCode/@value"===
a?c.minOccurs=0:"/metadata/dataIdInfo/idCitation/citRespParty/role/RoleCd/@value"===a?c.optionsFilter="006":"/metadata/dataIdInfo/idStatus/ProgCd/@value"===a?c.minOccurs=1:"/metadata/dqInfo/dqScope/scpLvl/ScopeCd/@value"===a?c.minOccurs=0:null!==a&&0<a.indexOf("/cntAddress/@addressType")&&0!==a.indexOf("/metadata/dataIdInfo/idCitation/citRespParty")&&(c.minOccurs=1));d.isAgsFGDC&&null!==b&&("/metadata/mdLang"===a?b.minOccurs=0:"/metadata/dataIdInfo/dataLang"===a?b.minOccurs=0:"/metadata/dataIdInfo/idCitation/citRespParty"===
a?b.minOccurs=1:"/metadata/dataIdInfo/idCitation/date/pubDate"===a?b.minOccurs=1:"/metadata/dataIdInfo/idPurp"===a?b.minOccurs=1:"/metadata/dataIdInfo/tpCat"===a?b.minOccurs=0:"/metadata/dataIdInfo/dataExt"===a?b.minOccurs=1:"/metadata/dataIdInfo/idStatus"===a||"/metadata/dataIdInfo/idStatus/ProgCd"===a?b.minOccurs=1:"/metadata/dataIdInfo/graphOver/bgFileDesc"===a||"/metadata/dataIdInfo/graphOver/bgFileType"===a?b.minOccurs=1:"/metadata/dataIdInfo/resMaint"===a?b.minOccurs=1:"/metadata/dqInfo/dqScope/scpLvl"===
a||"/metadata/dqInfo/dqScope/scpLvl/ScopeCd"===a?b.minOccurs=0:"/metadata/dqInfo/report"===a?b.minOccurs=1:"/metadata/dqInfo/dataLineage/prcStep"===a?b.minOccurs=1:"/metadata/dqInfo/report/measDesc"===a?b.minOccurs=1:"/metadata/dqInfo/dataLineage/prcStep/stepDateTm"===a?b.minOccurs=1:"/metadata/mdConst/SecConsts/classSys"===a||"/metadata/mdConst/SecConsts/handDesc"===a?b.minOccurs=1:"/metadata/dataIdInfo/resConst/SecConsts/classSys"===a||"/metadata/dataIdInfo/resConst/SecConsts/handDesc"===a?b.minOccurs=
1:"/metadata/distInfo/distFormat/formatName"===a||"/metadata/distInfo/distFormat/formatVer"===a||"/metadata/distInfo/distributor/distorFormat/formatVer"===a?b.minOccurs=0:null!==a&&null!==b&&-1!==a.indexOf("/rpCntInfo")&&(this._endsWith(a,"/rpCntInfo")||this._endsWith(a,"/cntAddress")||this._endsWith(a,"/city")||this._endsWith(a,"/adminArea")||this._endsWith(a,"/postCode")||this._endsWith(a,"/cntPhone")||this._endsWith(a,"/voiceNum"))&&0!==a.indexOf("/metadata/dataIdInfo/idCitation/citRespParty")&&
(b.minOccurs=1))},_checkINSPIRE:function(a,c,b,d){d.isAgsINSPIRE&&null!==c&&("/metadata/mdLang/languageCode/@value"===a?c.minOccurs=1:"/metadata/dataIdInfo/dataLang/languageCode/@value"===a?c.minOccurs=1:"/metadata/mdHrLv/ScopeCd/@value"===a?(c.minOccurs=1,c.optionsFilter=",,005,006,014"):"/metadata/dqInfo/dqScope/scpLvl/ScopeCd/@value"===a?(c.minOccurs=1,c.optionsFilter=",,005,006,014"):"/metadata/mdContact/role/RoleCd/@value"===a?(c.value="007",c.optionsFilter="007"):"/metadata/dataIdInfo/idPoC/role/RoleCd/@value"===
a&&(c.value="007"));if(d.isAgsINSPIRE&&null!==b)if("/metadata/mdLang"===a)b.minOccurs=1;else if("/metadata/dataIdInfo/dataLang"===a)b.minOccurs=1;else if("/metadata/mdHrLv"===a)b.minOccurs=1;else if("/metadata/mdHrLv/ScopeCd"===a)b.minOccurs=1;else if("/metadata/dataIdInfo/idCitation/citId"===a)b.minOccurs=1;else if("/metadata/dataIdInfo/dataExt"===a)b.minOccurs=1;else if("/metadata/dataIdInfo/resConst"===a)b.minOccurs=1;else if("/metadata/dqInfo"===a)b.minOccurs=1;else if("/metadata/dqInfo/report"===
a)b.minOccurs=1;else if("/metadata/distInfo"===a||"/metadata/distInfo/distTranOps"===a||"/metadata/distInfo/distTranOps/onLineSrc"===a)b.minOccurs=1;else if("/metadata/mdContact/rpOrgName"===a||"/metadata/mdContact/rpCntInfo/cntAddress/eMailAdd"===a||"/metadata/mdContact/rpCntInfo"===a||"/metadata/mdContact/rpCntInfo/cntAddress"===a||"/metadata/dataIdInfo/idPoC/rpCntInfo"===a||"/metadata/dataIdInfo/idPoC/rpCntInfo/cntAddress"===a||"/metadata/dataIdInfo/idPoC/rpOrgName"===a||"/metadata/dataIdInfo/idPoC/rpCntInfo/cntAddress/eMailAdd"===
a)b.minOccurs=1},_checkNAP:function(a,c,b,d){d.isAgsNAP||null===c||("/metadata/refSysInfo/RefSystem/@dimension"===a?(c.serialize=!1,this._ignore(c)):null!==a&&0<a.indexOf("/voiceNum/@tddtty")&&!d.isAgsFGDC&&(c.serialize=!1,this._ignore(c)));d.isAgsNAP||null===b?(d.isAgsNAP&&null!==b&&("/metadata/mdHrLvName"===a?this._ignore(b):"/metadata/dataIdInfo/dsFormat"===a?(this._ignore(b),this._ignoreTab(b)):"/metadata/dataIdInfo/idSpecUse"===a&&(this._ignore(b),this._ignoreTab(b))),d.isAgsNAP&&null!==b&&"/metadata/mdFileID"===
a&&(b.minOccurs=1)):"/metadata/dataSetFn"===a?this._ignore(b):"/metadata/mdLang/countryCode"===a?(b.serialize=!1,this._ignore(b)):"/metadata/dataIdInfo/dataLang/countryCode"===a?(b.serialize=!1,this._ignore(b)):"/metadata/contInfo/FetCatDesc/catLang/countryCode"===a?(b.serialize=!1,this._ignore(b)):"/metadata/contInfo/FetCatDesc/catLang/CharSetCd"===a?(b.serialize=!1,this._ignore(b)):"/metadata/dataIdInfo/productKeys"===a?(this._ignore(b),this._ignoreTab(b)):"/metadata/dataIdInfo/subTopicCatKeys"===
a?(this._ignore(b),this._ignoreTab(b)):0<a.indexOf("/thesaLang")?this._ignore(b):0<a.indexOf("/date/")&&(0<a.indexOf("/date/notavailDate")||0<a.indexOf("/date/inforceDate")||0<a.indexOf("/date/adoptDate")||0<a.indexOf("/date/deprecDate")||0<a.indexOf("/date/supersDate"))&&this._ignore(b)},_endsWith:function(a,c){return null===a?!1:-1!==a.indexOf(c,a.length-c.length)},filterOptions:function(a,c,b){return r.filter(a,c,b)},_ignore:function(a){a.hide=!0;a.notApplicable=!0;a.preferOpen=!0;a.domNode.style.display=
"none"},_ignoreTab:function(a){(a=a.getParent())&&(a._isGxeDescriptor||a.initializeSection)&&(a.notApplicable=!0)},newPortalItemTransformer:function(a){return new n},newRootDescriptor:function(a,c){a&&p.setArcGISProfile(a,c);return new m}});h("extend-esri")&&g.setObject("dijit.metadata.types.arcgis.base.DocumentType",e,k);return e});