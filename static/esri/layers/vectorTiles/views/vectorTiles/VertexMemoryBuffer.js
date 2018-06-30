// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/VertexMemoryBuffer","require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper ./GeometryUtils ./MemoryBuffer".split(" "),function(h,m,n,w,v,b){Object.defineProperty(m,"__esModule",{value:!0});var t=new Float32Array(1),u=new Uint32Array(t.buffer);h=function(f){function c(a){var b=f.call(this,a?20:12)||this;b._isDataDriven=a;return b}n(c,f);c.prototype.isDataDriven=function(){return this._isDataDriven};c.prototype.add=function(a,
c,d,e,f,l,g,r){var k=this.array;a=b.i1616to32(a,c);k.push(a);a=b.i8888to32(Math.round(31*d),Math.round(31*e),Math.round(31*f),Math.round(31*l));k.push(a);a=b.i1616to32(g,0);k.push(a);if(this._isDataDriven){if(!r)throw Error("Expecting data driven values.");d=r.color;e=d[3]*r.opacity*255;k.push(b.i8888to32(d[0]*e,d[1]*e,d[2]*e,e));t[0]=r.size;k.push(u[0])}};return c}(b);m.LineVertexBuffer=h;h=function(f){function c(a){var b=f.call(this,a?8:4)||this;b._isDataDriven=a;return b}n(c,f);c.prototype.isDataDriven=
function(){return this._isDataDriven};c.prototype.add=function(a,c,d){var e=this.array;e.push(b.i1616to32(a,c));if(this._isDataDriven){if(!d)throw Error("Expecting data driven values.");a=d.color;d=a[3]*d.opacity*255;e.push(b.i8888to32(a[0]*d,a[1]*d,a[2]*d,d))}};return c}(b);m.FillVertexBuffer=h;h=function(f){function c(a){var b=f.call(this,a?12:8)||this;b._isDataDriven=a;return b}n(c,f);c.prototype.isDataDriven=function(){return this._isDataDriven};c.prototype.add=function(a,c,d,e,f,l,g){var k=this.array,
h=this.index;a=b.i1616to32(a,c);k.push(a);a=b.i8888to32(Math.round(15*d),Math.round(15*e),f,l);k.push(a);if(this._isDataDriven){if(!g)throw Error("Expecting data driven values.");d=g.color;g=d[3]*g.opacity*255;k.push(b.i8888to32(d[0]*g,d[1]*g,d[2]*g,g))}return h};return c}(b);m.OutlineVertexBuffer=h;h=function(f){function c(a){var b=f.call(this,a?24:16)||this;b._isDataDriven=a;return b}n(c,f);c.prototype.isDataDriven=function(){return this._isDataDriven};c.prototype.add=function(a,c,d,e,f,l,g,h,m,
p,q){var k=this.array;a=b.i1616to32(a,c);k.push(a);a=b.i1616to32(Math.round(32*d),Math.round(32*e));k.push(a);a=b.i8888to32(f/4,l/4,0,0);k.push(a);a=b.i8888to32(Math.ceil(10*p),v.radToByte(g),10*h,Math.min(10*m,255));k.push(a);if(this._isDataDriven){if(!q)throw Error("Expecting data driven values.");d=q.color;e=d[3]*q.opacity*255;k.push(b.i8888to32(d[0]*e,d[1]*e,d[2]*e,e));t[0]=q.size;k.push(u[0])}};return c}(b);m.SymbolVertexBuffer=h;h=function(f){function c(){return f.call(this,16)||this}n(c,f);
c.prototype.add=function(a,c,d,f,h,l,g,m,n,p,q){var e=this.array;a=b.i1616to32(2*a+d,2*c+f);e.push(a);g=l[3]*g*255;a=b.i8888to32(l[0]*g,l[1]*g,l[2]*g,g);e.push(a);l=p[3]*q*255;a=b.i8888to32(p[0]*l,p[1]*l,p[2]*l,l);e.push(a);a=b.i8888to32(Math.min(32*m,255),Math.min(4*n,255),Math.min(h,255),0);e.push(a)};return c}(b);m.CircleVertexBuffer=h});