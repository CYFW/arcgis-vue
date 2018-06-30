// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldLibrary",["dojo/_base/lang","dojo/i18n!../../../../../../../nls/jsapi"],function(c,a){a=c.mixin({},a.geoenrichment.dijit.ReportPlayer.FieldInfoDescriptions,a.geoenrichment.dijit.ReportPlayer.FieldInfoPreview);var b={SPECIAL_HEADER_FIELDS_NAME_MAP:{SITE_NAME:"SiteName",STORE_ADDR:"SiteAddr",AREA_DESC2:"SiteDesc",STORE_LAT:"Latitude",STORE_LONG:"Longitude",AREA_ID:"AreaID",AREA_DESC:"AreaDesc",STORE_ID:"StoreID",
RING:"Ring",STORE_NAME:"StoreName",SITENOTE:"SiteNote",SITENOTES:"SiteNotes"},REPORT_VAR_FIELDS_MAP:{REPORTNAME:"Title",REPORTTITLE2:"Subtitle",CURRPAGE:"Page",COPYRIGHT:"Copyright",TRIALURLTEXT:"TrialUrlText",PHONENUMBER:"PhoneNumber",PRODUCTURL:"ProductUrl",PRODUCTLABEL:"ProductLabel",SOURCE:"Source",CENSUSYEAR:"CensusYear",CURRENTYEAR:"CurrentYear",FUTUREYEAR:"FutureYear",LATITUDELABEL:"LatitudeLabel",LONGITUDELABEL:"LongitudeLabel",PAGEFORMAT:"PageFormat",BANDFROM0TO1UNIT2:"BandFrom0To1Unit2",
RADIUS0UNIT1:"Radius0Unit1",AREADELIMITER:"AreaDelimiter",BANDREGIONFROM0TO1:"BandRegionFrom0To1",ET_AL:"ET_AL",LINEBUFFERSEGMENTFROM0TO1UNIT2RADIUS:"LineBufferSegmentFrom0To1Unit2Radius",LINEBUFFERRADIUS0UNIT1RADIUS:"LineBufferRadius0Unit1Radius",RINGVALUE0UNIT1RADIUS:"RingValue0Unit1Radius",RINGSVALUES0UNIT1RADII:"RingsValues0Unit1Radii",RINGBUFFERBANDFROM0TO1UNIT2RADIUS:"RingBufferBandFrom0To1Unit2Radius",DRIVETIMEBANDFROM0TO1UNIT2RADIUS:"DriveTimeBandFrom0To1Unit2Radius",RINGBUFFERBANDSBANDS0UNIT1RADII:"RingBufferBandsBands0Unit1Radii",
RINGBUFFERBANDRING0UNIT1RADIUS:"RingBufferBandRing0Unit1Radius",DRIVETIMEBANDBAND0UNIT1RADIUS:"DriveTimeBandBand0Unit1Radius",DRIVETIMESRINGS0UNIT1RADII:"DriveTimesRings0Unit1Radii",DRIVETIMERING0UNIT1RADIUS:"DriveTimeRing0Unit1Radius",DRIVEDISTANCEVALUE0UNIT1RADIUS:"DriveDistanceValue0Unit1Radius",DRIVEDISTANCESRINGS0UNIT1RADII:"DriveDistancesRings0Unit1Radii",DRIVEDISTANCERING0UNIT1RADIUS:"DriveDistanceRing0Unit1Radius"},SPECIAL_HEADER_FIELDS_NAME_MAP_BACK:{},REPORT_VAR_FIELDS_MAP_BACK:{},TOOLTIPS:{Title:a.fieldDescriptionTitle,
Subtitle:a.fieldDescriptionSubtitle,Date:a.fieldDescriptionDate,Page:a.fieldDescriptionPage,Copyright:a.fieldDescriptionCopyright,TrialUrlText:a.fieldDescriptionTrialUrlText,PhoneNumber:a.fieldDescriptionPhoneNumber,ProductUrl:a.fieldDescriptionProductUrl,ProductLabel:a.fieldDescriptionProductLabel,Source:a.fieldDescriptionSource,"headers.SITE_NAME":a.fieldDescriptionSiteName,"headers.STORE_LAT":a.fieldDescriptionLat,"headers.STORE_LONG":a.fieldDescriptionLong,"headers.AREA_DESC2":a.fieldDescriptionAreaDesc2,
"headers.STORE_ADDR":a.fieldDescriptionStoreAddr,"headers.AREA_DESC":a.fieldDescriptionAreaDesc},PREVIEW:{Title:a.fieldPreviewTitle,Title_graphic:a.fieldPreviewTitleGraphic,Subtitle:a.fieldPreviewSubtitle,Date:a.fieldPreviewDate,Page:a.fieldPreviewPage,Copyright:a.fieldPreviewCopyright,TrialUrlText:a.fieldPreviewTrialUrlText,PhoneNumber:a.fieldPreviewPhoneNumber,ProductUrl:a.fieldPreviewProductUrl,ProductLabel:a.fieldPreviewProductLabel,Source:a.fieldPreviewSource,"headers.SITE_NAME":a.fieldPreviewSiteName,
"headers.STORE_LAT":a.fieldPreviewLat,"headers.STORE_LONG":a.fieldPreviewLong,"headers.AREA_DESC2":a.fieldPreviewAreaDesc2,"headers.STORE_ADDR":a.fieldPreviewStoreAddr,"headers.AREA_DESC":a.fieldPreviewAreaDesc,SiteNote:a.fieldPreviewSiteNote,SiteNotes:a.fieldPreviewSiteNotes},DATE_FIELD_NAME:"Date",DATE_FIELD_ALIAS:"Date",DATE_FIELD_DEFAULT_FORMAT:"d-MMMM dd, yyyy",SITENOTE_FIELD_NAME:"SiteNote",SITENOTE_FIELD_ALIAS:"SiteNote",SITENOTES_FIELD_NAME:"SiteNotes",SITENOTES_FIELD_ALIAS:"SiteNotes",init:function(){for(var a in this.SPECIAL_HEADER_FIELDS_NAME_MAP)this.SPECIAL_HEADER_FIELDS_NAME_MAP_BACK[this.SPECIAL_HEADER_FIELDS_NAME_MAP[a].toUpperCase()]=
a;for(a in this.REPORT_VAR_FIELDS_MAP)this.REPORT_VAR_FIELDS_MAP_BACK[this.REPORT_VAR_FIELDS_MAP[a].toUpperCase()]=a},templateToUIHeader:function(a){if(!a)return null;0===a.indexOf("headers.")&&(a=a.substr(a.indexOf(".")+1));return this.SPECIAL_HEADER_FIELDS_NAME_MAP[a]},qualifyTemplateHeaderName:function(a){return a&&0!==a.indexOf("headers.")?"headers."+a.toUpperCase():a},templateToUIReportVar:function(a){return this.REPORT_VAR_FIELDS_MAP[a]},uiToTemplate:function(a){return this.SPECIAL_HEADER_FIELDS_NAME_MAP_BACK[a]||
this.REPORT_VAR_FIELDS_MAP_BACK[a]},getTooltip:function(a){return this.TOOLTIPS[a]},getPreview:function(a,b){"Title"===a&&b&&(a+="_graphic");return this.PREVIEW[a]}};b.init();return b});