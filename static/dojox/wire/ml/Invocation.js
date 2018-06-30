//>>built
define("dojox/wire/ml/Invocation",["dojo","dijit","dojox","dojo/require!dojox/wire/ml/Action"],function(c,n,e){c.provide("dojox.wire.ml.Invocation");c.require("dojox.wire.ml.Action");c.declare("dojox.wire.ml.Invocation",e.wire.ml.Action,{object:"",method:"",topic:"",parameters:"",result:"",error:"",_run:function(){if(this.topic){var a=this._getParameters(arguments);try{c.publish(this.topic,a),this.onComplete()}catch(k){this.onError(k)}}else if(this.method){var b=this.object?e.wire.ml._getValue(this.object):
c.global;if(b){var a=this._getParameters(arguments),d=b[this.method];if(!d){d=b.callMethod;if(!d)return;a=[this.method,a]}try{var g=!1;if(b.getFeatures){var l=b.getFeatures();if("fetch"==this.method&&l["dojo.data.api.Read"]||"save"==this.method&&l["dojo.data.api.Write"]){var f=a[0];f.onComplete||(f.onComplete=function(){});this.connect(f,"onComplete","onComplete");f.onError||(f.onError=function(){});this.connect(f,"onError","onError");g=!0}}var h=d.apply(b,a);if(!g)if(h&&h instanceof c.Deferred){var m=
this;h.addCallbacks(function(a){m.onComplete(a)},function(a){m.onError(a)})}else this.onComplete(h)}catch(k){this.onError(k)}}}},onComplete:function(a){this.result&&e.wire.ml._setValue(this.result,a);this.error&&e.wire.ml._setValue(this.error,"")},onError:function(a){this.error&&(a&&a.message&&(a=a.message),e.wire.ml._setValue(this.error,a))},_getParameters:function(a){if(!this.parameters)return a;var b=[],d=this.parameters.split(",");if(1==d.length)a=e.wire.ml._getValue(c.trim(d[0]),a),c.isArray(a)?
b=a:b.push(a);else for(var g in d)b.push(e.wire.ml._getValue(c.trim(d[g]),a));return b}})});