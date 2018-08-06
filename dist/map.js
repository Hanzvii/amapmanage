let Map = {
  map: null,
  markers: {},
  polygons: {},
  polylines: {},
  markerImg: null,
  initMap(obj){
    let Layer = new AMap.TileLayer()
    if(obj.layer == 'google'){
      Layer = new AMap.TileLayer({
        tileUrl: 'http://mt{1,2,3,0}.google.cn/vt/lyrs=m@142&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galil',
        zIndex: 100
      })
    }
    if(obj.layer == 'googleState'){
      Layer = new AMap.TileLayer({
        getTileUrl: 'http://mt{1,2,3,0}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galile'
      })
    }
    this.markerImg = obj.markerImg;
    this.map = new AMap.Map(obj.id,{
      resizeEnable: true,
      layers: [
        Layer
      ]
    });
    return this.map;
  },
  addMarker(id,arrP,angle=0){
    let _this = this;
    this.markers[id] = new AMap.Marker({
      map: _this.map,
      position: arrP,
      icon: new AMap.Icon({
        size: new AMap.Size(168, 168), //图标大小
        image: _this.markerImg,
        imageSize: new AMap.Size(44, 44)
      }),
      angle: angle,
      offset: new AMap.Pixel(-22, -22)
    });
  },
  setMarkerPosition(id,position){
    this.markers[id].setPosition(position)
  },
  setMarkerAngle(id,angle){
    this.markers[id].setAngle(angle)
  },
  addPolygon(id,arrP){
    let _this = this;
    this.polygons[id] = new AMap.Polygon({
      map: _this.map,
      path: arrP, //设置多边形边界路径
      strokeColor: "#ff0009", //线颜色
      strokeOpacity: 0.2, //线透明度
      strokeWeight: 3, //线宽
      fillColor: "#ff0009", //填充色
      fillOpacity: 0.35 //填充透明度
    });
  },
  setPolygonPath(id,path){
    this.polygons[id].setPath(path)
  },
  addPolyline(id,path){
    let _this = this;
    this.polylines[id] = new AMap.Polyline({
      map: _this.map,
      path: path, //设置线覆盖物路径
      strokeColor: "#ff0009", //线颜色
      strokeOpacity: 1, //线透明度
      strokeWeight: 2, //线宽
      strokeStyle: "solid", //线样式
      strokeDasharray: [10, 5] //补充线样式
    });
  },
  setPolylinePath(id,path){
    this.polylines[id].setPath(path);
  }
}
export default Map;