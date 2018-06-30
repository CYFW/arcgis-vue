// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/iso/base/PortalItemTransformer","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../../../base/etc/docUtil ../../../arcgis/portal/PortalItemTransformer ../../../../../kernel".split(" "),function(e,k,l,m,n,p,q){e=e([p],{postCreate:function(){this.inherited(arguments)},checkVisibility:function(f,d){this.inherited(arguments);var b;if(-1!==d.indexOf("/gmd:resourceConstraints/gmd:MD_Constraints/gmd:useLimitation/gco:CharacterString"))n.findElementChoice(f,
!0);else if(-1!==d.indexOf("/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword"))try{b=f.parentXNode.parentElement.parentElement,b.toggleContent&&b.toggleContent(!0)}catch(a){console.error(a)}else if(-1!==d.indexOf("/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox"))try{b=f.parentXNode.parentElement.parentElement.parentElement,b.toggleContent&&b.toggleContent(!0)}catch(a){console.error(a)}else if(-1!=d.indexOf("/gmd:distributionInfo/gmd:MD_Distribution/gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:linkage/gmd:URL"))try{b=
f.parentXNode.parentElement.parentElement.parentElement,b.toggleContent&&b.toggleContent(!0),b=b.parentElement.parentElement.parentElement.parentElement,b.toggleContent&&b.toggleContent(!0)}catch(a){console.error(a)}},populateTransformationInfo:function(f,d,b){this.inherited(arguments);var a=b,e=f.documentType.isService,h=f.rootElement.gxePath,c=h+"/gmd:identificationInfo/gmd:MD_DataIdentification",g=c+"/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox";e&&(c=h+"/gmd:identificationInfo/srv:SV_ServiceIdentification",
g=c+"/srv:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox");a.id.path=h+"/gmd:fileIdentifier/gco:CharacterString";a.title.path=c+"/gmd:citation/gmd:CI_Citation/gmd:title/gco:CharacterString";a.snippet.path=c+"/gmd:purpose/gco:CharacterString";a.description.path=c+"/gmd:abstract/gco:CharacterString";a.accessInformation.path=c+"/gmd:credit/gco:CharacterString";a.licenseInfo.path=c+"/gmd:resourceConstraints/gmd:MD_Constraints/gmd:useLimitation/gco:CharacterString";a.tags.path=
c+"/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword";a.extent.xmin.path=g+"/gmd:westBoundLongitude/gco:Decimal";a.extent.ymin.path=g+"/gmd:southBoundLatitude/gco:Decimal";a.extent.xmax.path=g+"/gmd:eastBoundLongitude/gco:Decimal";a.extent.ymax.path=g+"/gmd:northBoundLatitude/gco:Decimal";e?(a.url.path=c+"/srv:containsOperations/srv:SV_OperationMetadata/srv:connectPoint/gmd:CI_OnlineResource/gmd:linkage/gmd:URL",d&&d.url&&(e=this.findInputWidget(null,c+"/srv:containsOperations/srv:SV_OperationMetadata/srv:operationName/gco:CharacterString",
!0))&&e.setInputValue("na"),d&&d.typeKeywords&&l.some(d.typeKeywords,function(b){if("Service"===b)return a.type.path=c+"/srv:serviceType/gco:LocalName",!0})):a.url.path=h+"/gmd:distributionInfo/gmd:MD_Distribution/gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:linkage/gmd:URL"}});m("extend-esri")&&k.setObject("dijit.metadata.types.iso.base.PortalItemTransformer",e,q);return e});