// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/workers/WorkerFallback",["require","exports","dojo/has","../global","./utils"],function(k,p,m,c,f){var n=function(){return function(){var b=this,a=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(function(d){b[d]=function(){for(var e=[],b=0;b<arguments.length;b++)e[b]=arguments[b];return a[d].apply(a,e)}})}}(),l=c.MutationObserver||c.WebKitMutationObserver,h=function(){var b;if(c.process&&c.process.nextTick)b=
function(a){c.process.nextTick(a)};else if(c.Promise)b=function(a){c.Promise.resolve().then(a)};else if(l){var a=[],d=document.createElement("div");(new l(function(){for(;0<a.length;)a.shift()()})).observe(d,{attributes:!0});b=function(b){a.push(b);d.setAttribute("queueStatus","1")}}return b}();return function(){function b(){this._dispatcher=new n;this._isInitialized=!1;this._workerPostMessage({type:f.MessageType.HANDSHAKE})}b.prototype.terminate=function(){};Object.defineProperty(b.prototype,"onmessage",
{get:function(){return this._onmessageHandler},set:function(a){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler);(this._onmessageHandler=a)&&this.addEventListener("message",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"onerror",{get:function(){return this._onerrorHandler},set:function(a){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler);(this._onerrorHandler=a)&&this.addEventListener("error",a)},enumerable:!0,configurable:!0});
b.prototype.postMessage=function(a,b){var d=this;h(function(){d._workerMessageHandler(new MessageEvent("message",{data:a}))})};b.prototype.dispatchEvent=function(a){return this._dispatcher.dispatchEvent(a)};b.prototype.addEventListener=function(a,b,e){this._dispatcher.addEventListener(a,b,e)};b.prototype.removeEventListener=function(a,b,e){this._dispatcher.removeEventListener(a,b,e)};b.prototype._workerPostMessage=function(a,b){var e=this;h(function(){e.dispatchEvent(new MessageEvent("message",{data:a}))})};
b.prototype._workerMessageHandler=function(a){var b=this;if(a=f.receiveMessage(a)){var e=a.jobId;switch(a.type){case f.MessageType.CONFIGURE:this._isInitialized||this._workerPostMessage({type:f.MessageType.CONFIGURED});break;case f.MessageType.OPEN:a=a.modulePath,m("esri-webpack")?k(["esri/core/workers/RemoteClient","esri/views/vectorTiles/WorkerTileHandler","esri/views/2d/layers/features/Pipeline","esri/views/3d/layers/PointCloudWorker","esri/views/3d/layers/SceneLayerWorker","esri/layers/graphics/sources/support/CSVSourceWorker",
a],function(a,g,c,d,k,l,h){switch(h){case "esri/views/vectorTiles/WorkerTileHandler":break;case "esri/views/2d/layers/features/Pipeline":g=c;break;case "esri/views/3d/layers/PointCloudWorker":g=d;break;case "esri/views/3d/layers/SceneLayerWorker":g=k;break;case "esri/layers/graphics/sources/support/CSVSourceWorker":g=l;break;default:g=h}a=a.connect(g);b._workerPostMessage({type:f.MessageType.OPENED,jobId:e,data:a})}):k(["esri/core/workers/RemoteClient",a],function(a,c){var d=a.connect(c);b._workerPostMessage({type:f.MessageType.OPENED,
jobId:e,data:d})})}}};return b}()});