# vue-arcgis

> vue-arcgis

## Build Setup

详情请看代码;每行都有注释;对 arcgis 稍微有点了解就能看懂.
至于后续更深入的开发,请参考arcgis API.

总体思路就是 : 先加载 modules,然后 new 出 modules 的实例,配置相关参数即可.

代码中加载模块的来源是  `'http://jsapi.thinkgis.cn/`;国内访问 arcgis 官网快很多.API 地址是[这个](http://jshelp.thinkgis.cn/);目前的版本貌似是 3.12;
如果是使用高版本的请绕道.
