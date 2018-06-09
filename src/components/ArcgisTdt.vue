<template>
    <div id="map" class="map"></div>
</template>

<script>
import esriLoader from 'esri-loader';

export default {
    name: 'ArcgisTdt',
    data () {
        return {
            maoObj:{}
        }
    },
    mounted () {
        this.loadArcgis ()
    },
    methods: {
        loadArcgis () {
            esriLoader.loadScript ({ // 加载js
                url: 'http://jsapi.thinkgis.cn/dojo/dojo.js'
            });
            // 加载css
            esriLoader.loadCss ('http://jsapi.thinkgis.cn/esri/css/esri.css');
            // 加载模块
            esriLoader.loadModules ([
                'esri/map',
                'esri/layers/TiledMapServiceLayer',
                'esri/SpatialReference',
                'esri/geometry/Extent',
                'esri/layers/TileInfo',
                'esri/geometry/Point',
            ])
                .then (this.loading)
                .then (obj => {
                    this.initMap (obj);
                })
                .catch ((err) => {
                    console.trace (err.message);
                });
        },
        loading ([// 注意 这里的参数是数组
            Map,
            TiledMapServiceLayer,
            SpatialReference,
            Extent,
            TileInfo,
            Point,
        ]) {
            dojo.declare ('TDT', TiledMapServiceLayer, {

                constructor (maptype) {
                    this._maptype = maptype;
                    this.spatialReference = new SpatialReference ({ wkid: 4326 });
                    this.initialExtent = (this.fullExtent = new Extent (-180, -90, 180, 90,
                        this.spatialReference));

                    this.tileInfo = new TileInfo ({
                        'rows': 256,
                        'cols': 256,
                        'dpi': 300,
                        'format': 'PNG32',
                        'compressionQuality': 0,
                        'origin': {
                            'x': -180,
                            'y': 90
                        },
                        'spatialReference': {
                            'wkid': 4326
                        },
                        'lods': [ {
                            'level': 2,
                            'resolution': 0.3515625,
                            'scale': 147748796.52937502
                        }, {
                            'level': 3,
                            'resolution': 0.17578125,
                            'scale': 73874398.264687508
                        }, {
                            'level': 4,
                            'resolution': 0.087890625,
                            'scale': 36937199.132343754
                        }, {
                            'level': 5,
                            'resolution': 0.0439453125,
                            'scale': 18468599.566171877
                        }, {
                            'level': 6,
                            'resolution': 0.02197265625,
                            'scale': 9234299.7830859385
                        }, {
                            'level': 7,
                            'resolution': 0.010986328125,
                            'scale': 4617149.8915429693
                        }, {
                            'level': 8,
                            'resolution': 0.0054931640625,
                            'scale': 2308574.9457714846
                        }, {
                            'level': 9,
                            'resolution': 0.00274658203125,
                            'scale': 1154287.4728857423
                        }, {
                            'level': 10,
                            'resolution': 0.001373291015625,
                            'scale': 577143.73644287116
                        }, {
                            'level': 11,
                            'resolution': 0.0006866455078125,
                            'scale': 288571.86822143558
                        }, {
                            'level': 12,
                            'resolution': 0.00034332275390625,
                            'scale': 144285.93411071779
                        }, {
                            'level': 13,
                            'resolution': 0.000171661376953125,
                            'scale': 72142.967055358895
                        }, {
                            'level': 14,
                            'resolution': 8.58306884765625e-005,
                            'scale': 36071.483527679447
                        }, {
                            'level': 15,
                            'resolution': 4.291534423828125e-005,
                            'scale': 18035.741763839724
                        }, {
                            'level': 16,
                            'resolution': 2.1457672119140625e-005,
                            'scale': 9017.8708819198619
                        }, {
                            'level': 17,
                            'resolution': 1.0728836059570313e-005,
                            'scale': 4508.9354409599309
                        }, {
                            'level': 18,
                            'resolution': 5.3644180297851563e-006,
                            'scale': 2254.4677204799655
                        } ]
                    });
                    this.loaded = true;
                    this.onLoad (this);
                },

                getTileUrl (level, row, col) {
                    return 'http://t' + col % 8 + '.tianditu.cn/' + this._maptype + '_c/wmts?' +
                            'SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=' + this._maptype +
                            '&STYLE=default&TILEMATRIXSET=c&TILEMATRIX=' +
                            level + '&TILEROW=' + row + '&TILECOL=' + col + '&FORMAT=tiles';
                }
            });
            return { // return 之后才能使用链式调用
                Map,
                TiledMapServiceLayer,
                SpatialReference,
                Extent,
                TileInfo,
                Point,
                TDT,
            };
        },
        initMap(obj){
            this.mapObj = obj;// 将对象保存到vue data 的 maoObj中,方便调用;
            let map = new this.mapObj.Map ('map', { logo: false });// 创建地图实例
            var pt = new this.mapObj.Point (105, 29); // 设置中心点
            map.centerAndZoom (pt, 4); // 设置中心点和缩放级别;
            let img = new TDT('img') // 影像
            let cia = new TDT ('cia');//路网
            map.addLayer(img) // 将图层添加到map对象
            map.addLayer(cia)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #map{
        width: 100vw;
        height: 100vh;
    }
</style>
