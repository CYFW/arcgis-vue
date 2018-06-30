// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/tasks/datareviewer/BatchValidationJob","dojo/_base/declare ./BatchValidationParameters ./BatchValidationJobInfo dojo/has dojo/_base/lang ../../kernel".split(" "),function(b,c,d,e,f,g){b=b(null,{declaredClass:"esri.tasks.datareviewer.BatchValidationJob",creationDate:void 0,jobId:null,status:null,type:null,parameters:null,jobInfo:null,batchRunIds:[],constructor:function(a){void 0!==a&&!0!==a.hasOwnProperty("error")&&null!==a&&(void 0!==a.creationDate&&null!==a.creationDate&&(this.creationDate=
new Date(a.creationDate)),this.jobId=a.jobId,this.status=a.status,this.parameters=new c,void 0!==a.schedule&&null!==a.schedule&&(this.parameters.cronExpression=a.schedule.cronExpression,void 0!==a.schedule.endDate&&null!==a.schedule.endDate&&(this.parameters.executionEndDate=new Date(a.schedule.endDate)),this.parameters.maxNumberOfExecutions=a.schedule.maxNumberOfExecutions),void 0!==a.settings&&null!==a.settings&&(this.parameters.analysisArea=a.settings.analysisArea,this.parameters.fileName=a.settings.batchJobFileName,
this.parameters.productionWorkspace=a.settings.productionWorkspace,this.parameters.sessionString=a.settings.sessionId,this.parameters.changedFeaturesOnly=a.settings.changedFeaturesOnly,this.parameters.batchJobFileName=a.settings.batchJobFileName),this.parameters.createdBy=a.createdBy,this.parameters.title=a.title,this.type=this.parameters.cronExpression&&0<this.parameters.cronExpression.length?"scheduled":"adhoc",void 0!==a.executionDetails&&null!==a.executionDetails&&(this.jobInfo=new d(a.executionDetails)),
a.batchRunIds&&(this.batchRunIds=a.batchRunIds))}});e("extend-esri")&&f.setObject("tasks.datareviewer.BatchValidationJob",b,g);return b});