// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/screenUtils",["require","exports"],function(f,a){function d(b){return b?72*b/a.DPI:0}Object.defineProperty(a,"__esModule",{value:!0});var e=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i;a.DPI=96;a.pt2px=function(b){return b?b/72*a.DPI:0};a.px2pt=d;a.toPt=function(b){if("string"===typeof b){if(e.test(b)){var a=b.match(e),c=Number(a[1]),a=a[3]&&a[3].toLowerCase();b="-"===b.charAt(0);c="px"===a?d(c):c;return b?-c:c}console.warn("screenUtils.toPt: input not recognized!");return null}return b}});