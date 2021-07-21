export function initMap() {
    //定义地图中心点坐标
    var center = new TMap.LatLng(39.984120, 116.307484)
    //定义map变量，调用 TMap.Map() 构造函数创建地图
    var map = new TMap.Map(document.getElementById('container'), {
        center: center,//设置地图中心点坐标
        zoom: 17.2,   //设置地图缩放级别
        pitch: 43.5,  //设置俯仰角
        rotation: 45    //设置地图旋转角度
    });
    // return map
}
export function getLocation(){
    var geolocation = new qq.maps.Geolocation();
    geolocation.getLocation(setPosition, showErr, options);
}
function setPosition(position) {
    map.setCenter(new TMap.LatLng(position.lat,position.lng));//坐标为天安门
    // centerInfo.innerHTML = "当前地图中心为: 39.908802,116.397502";
}
@ts-ignore
@ts-ignore