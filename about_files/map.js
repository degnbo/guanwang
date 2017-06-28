!function() {
    var infoWindow, map, level = 16,
        center = {lng: 116.451284, lat: 39.962518},
        features = [{
            type: 'Marker',
            name: '',
            desc: '',
            color: 'red',
            icon: 'cir',
            offset: {
                x: -9,
                y: -31
              },
            lnglat: {lng: 116.451284, lat: 39.962518},
          }];

    function loadFeatures() {
      var imgurl = '/static/homepage/assets/map-mark.png';
      var content = '<img draggable="false" class="csssprite map-mark" dn="2"  src="' + imgurl + '">';
      for (var feature, data, i = 0, len = features.length, j, jl, path; i < len; i++) {
        data = features[i];
        switch (data.type) {
        case 'Marker':
          feature = new AMap.Marker({
              map: map,
              position: new AMap.LngLat(data.lnglat.lng, data.lnglat.lat),
              zIndex: 3,
              extData: data,
              offset: new AMap.Pixel(data.offset.x, data.offset.y),
              title: data.name,
              content: content,
              clickable: false
            });
        break;
        case 'Polyline':
          for (j = 0, jl = data.lnglat.length, path = []; j < jl; j++) {
            path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat));
          }
          feature = new AMap.Polyline({
              map: map,
              path: path,
              extData: data,
              zIndex: 2,
              strokeWeight: data.strokeWeight,
              strokeColor: data.strokeColor,
              strokeOpacity: data.strokeOpacity
            });
        break;
        case 'Polygon':
          for (j = 0, jl = data.lnglat.length, path = []; j < jl; j++) {
            path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat));
          }
          feature = new AMap.Polygon({
              map: map,
              path: path,
              extData: data,
              zIndex: 1,
              strokeWeight: data.strokeWeight,
              strokeColor: data.strokeColor,
              strokeOpacity: data.strokeOpacity,
              fillColor: data.fillColor,
              fillOpacity: data.fillOpacity
            });
        break;
        default:
          feature = null;
      }
        if (feature) {
          AMap.event.addListener(feature, 'click', mapFeatureClick);
        }
      }
    }

    function mapFeatureClick(e) {
      if (!infoWindow) {
        infoWindow = new AMap.InfoWindow({
            autoMove: true
          });
      }
      var extData = e.target.getExtData();
      infoWindow.setContent('<h5>' + extData.name + '</h5><div>' + extData.desc + '</div>');
      infoWindow.open(map, e.lnglat);
    }
    map = new AMap.Map('mapContainer', {
        center: new AMap.LngLat(center.lng, center.lat),
        level: level,
        keyboardEnable: false,
        dragEnable: true,
        scrollWheel: false
      });
    loadFeatures();
    map.on('complete', function() {
        map.plugin(['AMap.ToolBar', 'AMap.Scale'], function() {});
      });
  }();
