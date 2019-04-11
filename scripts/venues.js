// VENUES PROPERTIES

var venuesProperties = [{
  value: "status",
  label: "Status",
  hyperlink: false,
  table: {
    visible: true
  },
  filter: {
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["equal"],
    values: []
  }
},
{
  value: "venue",
  label: "Venue",
  hyperlink: false,
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal", "contains"],
    values: []
  }
},
{
  value: "location",
  label: "Location",
  hyperlink: false,
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal", "contains"],
    values: []
  }
},
{
  value: "date",
  label: "Date",
  hyperlink: false,
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    value: "date",
    type: "date",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal", "contains"],
    values: []
  }
},
{
  value: "venue_website",
  label: "Website",
  hyperlink: true,
  table: {
    visible: false,
    sortable: true
  },
  filter: {
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal", "contains"],
    values: []
  }
},
{
  value: "venue_facebook",
  label: "Facebook",
  hyperlink: true,
  table: {
    visible: false,
    sortable: true
  },
  filter: {
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal", "contains"],
    values: []
  }
}];


// VENUES REST URL

var venuesConfig = {
  json: "venues.json",
  layerName: "Venues",
  hoverProperty: "Venue"
};


// VENUES BUILD CONFIG


function venuesBuildConfig() {
  venuesTable = [];
  $.each(venuesProperties, function(index, value) {
    if (value.table.visible !== false) {
      venuesTable.push({
        data: "properties." + value.value,
        title: value.label
      });
      $.each(value.table, function(key, val) {
        if (venuesTable[index+1]) {
          venuesTable[index+1][key] = val;
        }
      });
    }
  });

  venuesBuildTable()
  map.flyToBounds(venuesLayer.getBounds());
}




// VENUES LAYER

var venuesLayer = L.geoJson(null, {
  onEachFeature: function (feature, layer) {
    layer.bindTooltip(feature.properties.venue + " -- " + feature.properties.date, {sticky: 'true', direction: 'top'});

    if (feature.properties) {
      var title = feature.properties.venue;
      var content = "<table class='table table-striped table-bordered table-condensed'>";
      content += "<table>";
      layer.on({
        click: function (e) {
          $("#venuesInfo_Title").html(feature.properties.venue);
          venuesInfo(L.stamp(layer));
          highlightLayer.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {
            stroke: false,
            fillColor: "#00d0ff",
            fillOpacity: 1,
            radius: 5
          }));
        }
      });
      $("#venues_feature-list tbody").append('<tr onclick= "venuesSearchClick(' + L.stamp(layer) + ')"><td class="venues_feature-name">' + layer.feature.properties.venue + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
    }
    if (feature.properties.status = "Playing") {
      layer.setIcon(
        L.icon({
          iconUrl: "pictures/music_marker.png",
          iconSize: [50, 50],
          iconAnchor: [15, 40]
        })
      );
    } else {
      layer.setIcon(
        L.icon({
          iconUrl: "pictures/music_marker.png",
          iconSize: [50, 50],
          iconAnchor: [15, 40]
        })
      );
    }
  }
});


function venuesSearchClick(id) {
  var layer = venuesLayer.getLayer(id);
  map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 16);
  layer.fire("click");
  /* Hide sidebar and go to the map on small screens */
  if (document.body.clientWidth <= 767) {
    venuesSidebar.hide();
    map.invalidateSize();
  }
}


//VENUES DATA

$.getJSON(venuesConfig.json, function (data) {
  venuesData = data;
  venuesFeatures = $.map(venuesData.features, function(feature) {
    return feature.properties;
  });
  venuesLayer.addData(data);
  venuesList = new List("venues_features", {valueNames: ["venues_feature-name"]});
  venuesList.sort("venues_feature-name", {order:"asc"});
  venuesBuildConfig()
}).error(function(jqXHR, textStatus, errorThrown) {
    console.log("error " + textStatus);
    console.log("incoming Text " + jqXHR.responseText);
    alert("error " + textStatus);
});



// VENUES INFO

function venuesInfo(id) {
  
  var featureProperties = venuesLayer.getLayer(id).feature.properties;

  var content = "<table class='table table-striped table-bordered table-condensed'>";

  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (key == "venue_website") {
      sessionStorage.setItem("venue_website", value);
    }
    if (key == "venue_facebook") {
      sessionStorage.setItem("venue_facebook", value);
    }
    $.each(venuesProperties, function(index, property) {
      if (key == property.value) {
        if (property.table.visible !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#venues-Info_DATA").html(content);
  venuesSidebar.show();
};



// VENUES TABLE

function venuesBuildTable() {

    venuesDataTable = $('#venuesTable').DataTable({ // Change table element ID here
    dom: 'Bfrtip', // Add this to enable export buttons
    buttons: [ // Add this to choose which buttons to display
        'copy', 'csv', 'excel', 'pdf', 'print'
    ],
    colReorder: true,
    data: venuesData.features,
    "autoWidth": true, // Feature control DataTables' smart column width handling
    "deferRender": true, // Feature control deferred rendering for additional speed of initialisation.
    "info": true, // Display info about table including filtering
    "lengthChange": false, // If pagination is enabled, allow the page length to be changed by user
    "ordering": true, // Toggle user ordering of table columns
    "paging": false, // Toggle table paging
    "processing": true, // Toggle "processing" indicator useful when loading large table/filter
    "scrollX": true, // Left/right scrolling option, in pixels or false to disable
    "scrollY": "500px", // Table height in pixels before up/down scrolling, or false to disable scrolling
    "searching": true, // Toggle search all columns field
    "stateSave": true, // If true, table will restore to user filtered state when page is reopened     
    "scrollCollapse": true, // If true, the table will be collapsed if the height of the records is < the scrollY option; prevents footer from floating
    "columns": venuesTable,
    "language": {
      "emptyTable": "Loading..."
    }
  });
}