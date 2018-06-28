<template>
    <div id="map" class="map"></div>
</template>

<script>
import manager from './js/methods_manager'
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
        loadArcgis:manager.loadArcgis,
        loading:manager.loading,
        initMap:manager.initMap
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
