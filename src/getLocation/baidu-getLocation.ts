export function getLocation(){
    
    let map = new BMapGL.Map("baidu-container");
    // let map = new BMap.Map('container')
    let point = new BMapGL.Point(116.331398,39.897445)
    //定位
    let geolocation = new BMapGL.Geolocation()
    geolocation.getCurrentPosition(function (r) {
        if(geolocation.getStatus() === BMAP_STATUS_SUCCESS){
            let mk = new BMapGL.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
        }
        else {
            alert('failed' + geolocation.getStatus());
        }
    })
    map.centerAndZoom(point, 15)
    map.enableScrollWheelZoom(true)
}
