<template>
    <div class="main">
        <div ref="top">
            <van-nav-bar @click-left="point.showMap=false" 
            title="地址选择" 
            left-arrow border fixed placeholder/>
            
        </div>
        <div ref="main" class="mbox">
            <div ref="search" class="search">
                <van-cell-group>
                    <van-field v-model="point.address" @input="inp" placeholder="请输入地址" />
                </van-cell-group>
            </div>
            <baidu-map  class="map" 
            @ready="mapReady" 
            :center="center" 
            :zoom="15"
            @click="clickEvent"
            :style="{height:mapHeight}">
                <bm-marker :position="{lng: this.point.lng, lat: this.point.lat}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" />
                <bm-local-search  :location="'东营市'" :keyword="key" 
                    :auto-viewport="true"
                    :panel="false" :forceLocal="true" />
            </baidu-map>
            <van-icon class="getpoint" name="map-marked" size="25" @click="getPoint"/>
            <div class="tools" ref="tools">
                <div style="width:90%;margin-left:5%">
                    <van-button  round block type="info"  native-type="submit" @click="point.showMap=false">确定</van-button>
                </div>
            </div>
          
        </div>
    </div>
  
</template>

<script>
export default {
    name:"map",
    model:{
        prop:'point',
        event: 'ok'
    },
    props:{
        center:{
            type:String,
            default:"东营市"
        },
        show:false,
        point:{
            lng:{
            type:String,
            default:-1
            },
            lat:{
                type:String,
                default:-1
            },
            address:{
                type:String,
                default:''
            },
            showMap:{
                type:Boolean,
                default:false
            }
        }
    },
    data() {
        return {
           key:'',
           inp_time:0,
           mapHeight:0
        };
    },
    created() {
        this.$nextTick(()=>{
            this.onsize();
            window.onresize=this.onsize;
        })
        
    },
    methods: {
        getPoint(){
            var map=window.map;
            var BMap=window.BMap;
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition((r) => {
                if (r.point) {
                    var point = new BMap.Point( r.longitude, r.latitude);//用当前定位的经纬度查找省市区街道等信息
                    var gc = new BMap.Geocoder();
                    gc.getLocation(point, (rs)=>{
                        this.point.address=rs.address;
                        console.log(rs.address);//弹出当前所在地址
                    });
                    this.point.lng=point.lng;
                    this.point.lat=point.lat;
                    //map.panTo(r.point);
                    map.centerAndZoom(point, 16);
                }
            })
        },
        mapReady({ map, BMap }) {
            //将操作类存入window对象，方便调用
            window.map = map;
            window.BMao = BMap;
         //   map.enableScrollWheelZoom();
        }, //自适应地图高度
        onsize(){
            if(!!!this.$refs.top)return;
            let topHeight = this.$refs.top.offsetHeight;
            let searchHeight = this.$refs.search.offsetHeight;
            let toolsHeight = this.$refs.tools.offsetHeight;
            let maxHeight = window.document.body.offsetHeight;
            console.log(topHeight,searchHeight,toolsHeight);
            this.mapHeight = maxHeight-toolsHeight-searchHeight-topHeight+'px';
        },
        clickEvent(e) {
            console.log(e);
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
            gc.getLocation(point, (rs)=> {
                this.point.address = rs.address;
            });
            this.point.lng = e.point.lng;
            this.point.lat = e.point.lat;
        }, ok () {
            this.$emit('ok', this.point)
        },
        //定位成功回调
        getLoctionSuccess(point, AddressComponent, marker){
            var map=window.map;
            var BMap=window.BMap;
            map.clearOverlays();
            let Icon_0 = new BMap.Icon("http://api0.map.bdimg.com/images/marker_red_sprite.png", new BMap.Size(64, 64), {anchor: new BMap.Size(18, 32),imageSize: new BMap.Size(36, 36)});
            let myMarker = new BMap.Marker(new BMap.Point(point.point.lng, point.point.lat),{icon: Icon_0});
            map.addOverlay(myMarker);
            this.point.lng = e.point.lng;
            this.point.lat = e.point.lat;
        },
        //返回选中点的位置
        findlocation(){
            var map=window.map;
            var BMap=window.BMap;
            this.$emit("findlocdata",this.locData)
            this.point.address=this.keyword;
            this.point.lng = e.point.lng;
            this.point.lat = e.point.lat;
        },
        inp(){
          
            clearTimeout(this.inp_time);
            this.inp_time=setTimeout(()=>{
                this.key=this.point.address;
            },100)
        }
    },
};
</script>
<style scoped>
.map{
    height: 78vh;
    width: 100vh;
}
.main{
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 1;
    background: #fff;
}
.search{
    position: relative;
}
.tools{
    position: fixed;
    width: 100%;
    background: #fff;
    padding: 0.5vh;
}
.info{
    color: #464242;
    margin-top:1vh;
    height: 4vh;
    text-align: center;
}
.mbox{
    background: #fff;
}
.getpoint{
    width: 10vw;
    height: 10vw;
    position: fixed;
    bottom: 18.53333vw;
    right: 3.46667vw;
    color: #1989fa;
    background: #fbfbfb;
    border-radius: 6.66667vw;
    text-align: center;
    line-height: 9vw;
    border: 1px solid #48a0f9;
    cursor: pointer;
}
</style>