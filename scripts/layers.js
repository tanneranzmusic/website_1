// STREET MAP LAYER

var mapboxOSM = L.tileLayer('http://{s}.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWNvdHJ1c3QiLCJhIjoibGo4TG5nOCJ9.QJnT2dgjL4_4EA7WlK8Zkw', {
    maxZoom: 22,
    opacity: 0.7
});


// SATELLITE MAP LAYER

var mapboxSat = L.tileLayer('https://api.mapbox.com/v4/cfritz1387.573ca1ee/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY2ZyaXR6MTM4NyIsImEiOiJjaWphZTZ0eHkwMDVwdWlseGx5aWhhbXlwIn0._lgb3vbGMSx1-jdZCufdgg', {
    maxZoom: 22,
    opacity: 0.7
});


// HIGHLIGHT LAYERS

var highlightLayer = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#00d0ff",
      weight: 6,
      opacity: 1,
      fillColor: "#00d0ff",
      fillOpacity: 1,
      clickable: false
    };
  },
  onEachFeature: function (feature, layer) {

    layer.bindTooltip(feature.properties.venue + " -- " + feature.properties.date, {sticky: 'true', direction: 'top'});

    layer.on({
      click: function (e) {
        if (feature.properties.venue) {
          $("#venuesInfo_Title").html(feature.properties.venue);
          venuesSidebar.show();
        }
      }
    });
  }
});



// BASE LAYERS

var baseLayers = {
  "Street Map": mapboxOSM,
  "Satellite Map": mapboxSat
};


// OVERLAY LAYERS

var overlayLayers = {
  "<span id='layer-name'>Sites</span>": venuesLayer
};


// ADD LAYERS TO MAP

var map = L.map("map", {
  layers: [mapboxOSM, venuesLayer, highlightLayer],
  minZoom: 5,
  zoomControl: false
});

// SET VIEW TO GULF SHORES, AL

map.setView([30.2480188, -87.689155], 5)


// MAP CLICKING

map.clicked = 0;

map.on('click', function(event){
    map.clicked = map.clicked + 1;
    setTimeout(function(){
        if(map.clicked == 1){             
            map.clicked = 0;
        }
     }, 300);
});
map.on('dblclick', function(event){
    map.clicked = 0;
    highlightLayer.clearLayers();
    venuesSidebar.hide();
    venuesSearch.hide();
});


map.doubleClickZoom.disable();


// LARGER SCREENS

if (document.body.clientWidth <= 767) {
  isCollapsed = true;
} else {
  isCollapsed = false;
}


// CREATED BY

L.control.attribution({
  prefix: "Created By: Tanner Anz",
  position: "bottomright"
}).addTo(map);


// EXPAND LAYERS

if (L.Browser.mobile) {
  isCollapsed = true;
} else {
  isCollapsed = false;
}


// LAYERS

var layerControl = L.control.layers(baseLayers, overlayLayers, {
  collapsed: isCollapsed
}).addTo(map);


// MAP SCALE

L.control.scale().addTo(map);


// MAP VIEW

$("#map-only").click(function(){
  $("#map-container").show();
  $(window).resize();
});