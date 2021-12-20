<template>
    <baidu-map @ready="mapReady" :center="'东营市'" @click=""> </baidu-map>
</template>

<script>
export default {
    data() {
        return {
            point:{
                lng:-1,
                lat:-1
            }
        };
    },
    mounted() {},
    methods: {
        mapReady({ map, BMap }) {
            //将操作类存入window对象，方便调用
            window.map = map;
            window.BMao = BMap;
            map.enableScrollWheelZoom();
        }, //点击地图监听
        clickEvent(e) {
            var map = window.map;
            var BMap = window.BMao;
            map.clearOverlays();
            let Icon_0 = new BMap.Icon(
                "http://api0.map.bdimg.com/images/marker_red_sprite.png",
                new BMap.Size(64, 64),
                {
                    anchor: new BMap.Size(18, 32),
                    imageSize: new BMap.Size(36, 25),
                }
            );
            let myMarker = new BMap.Marker(
                new BMap.Point(e.point.lng, e.point.lat),
                { icon: Icon_0 }
            );
            map.addOverlay(myMarker);
            //用所定位的经纬度查找所在地省市街道等信息
            let point = new BMap.Point(e.point.lng, e.point.lat);
            let gc = new BMap.Geocoder();
            let _this = this;
            gc.getLocation(point, function (rs) {
                let addComp = rs.addressComponents;
                _this.point.address = _this.locData.address;
            });
            this.point.lng = e.point.lng;
            this.point.lat = e.point.lat;
        },
    },
};
</script>

<style>
</style>