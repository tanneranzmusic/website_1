// VENUES PROPERTIES

var venuesProperties = [{
  value: "status",
  label: "Status",
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
  value: "city",
  label: "City",
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
  value: "state",
  label: "State",
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
  value: "venue",
  label: "Venue",
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
}];


// VENUES REST URL

var venuesConfig = {
  geojson: "http://cors.io/spreadsheets.google.com/feeds/list/2PACX-1vTI5xv510oROAeh8c5rzN6LjxdOOaUBl2uX5Wrx7KpKj3UNAonqeQcB1TLt4DnwReNoxt0Y-0bBJ8By/od6/public/values?alt=json",
  layerName: "Venues",
  hoverProperty: "Venue"
};


// VENUES BUILD CONFIG


function venuesBuildConfig() {
  venuesTable = [];

  $.each(venuesProperties, function(index, value) {
    if (value.table) {
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
          gisSegmentsSidebar.hide();
          gisRoutesSidebar.hide();
          gisStructuresSidebar.hide();
          gisSplicesSidebar.hide();
          gisWorkOrdersSidebar.hide();
          fulcrumRoutesSidebar.hide();
          $("#venuesInfo_Title").html(feature.properties.nfid);
          venuesInfo(L.stamp(layer));
          activeRecord = feature.properties.site_name;
          highlightLayer.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {
            stroke: false,
            fillColor: "#00d0ff",
            fillOpacity: 1,
            radius: 5
          }));
        }
      });
      $("#venues_feature-list tbody").append('<tr onclick= "venuesSearchClick(' + L.stamp(layer) + ')"><td class="venues_feature-name">' + layer.feature.properties.site_name + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
    }
    if (feature.properties.removesite === "Yes" || feature.properties.removesite === "Y" || feature.properties.clustername === "REMOVE") {
      layer.setIcon(
        L.icon({
          iconUrl: "pictures/markers/cb0d0c.png",
          iconSize: [30, 40],
          iconAnchor: [15, 32]
        })
      );
    } else if (feature.properties.splicingtestingcompleteactual > 0) {
      layer.setIcon(
        L.icon({
          iconUrl: "pictures/markers/ffffff.png",
          iconSize: [30, 40],
          iconAnchor: [15, 32]
        })
      );
    } else if (feature.properties.cable_placed_actual > 0) {
      layer.setIcon(
        L.icon({
          iconUrl: "pictures/markers/87d30f.png",
          iconSize: [30, 40],
          iconAnchor: [15, 32]
        })
      );
    } else if (feature.properties.construction_start_actual > 0) {
      layer.setIcon(
        L.icon({
          iconUrl: "pictures/markers/da0796.png",
          iconSize: [30, 40],
          iconAnchor: [15, 32]
        })
      );
    } else if (feature.properties.permit_received_actual > 0) {
      layer.setIcon(
        L.icon({
          iconUrl: "pictures/markers/1891c9.png",
          iconSize: [30, 40],
          iconAnchor: [15, 32]
        })
      );
    } else if (feature.properties.permit_submitted_actual > 0) {
      layer.setIcon(
        L.icon({
          iconUrl: "pictures/markers/ff8819.png",
          iconSize: [30, 40],
          iconAnchor: [15, 32]
        })
      );
    } else if (feature.properties.site_survey_actual > 0) {
      layer.setIcon(
        L.icon({
          iconUrl: "pictures/markers/242424.png",
          iconSize: [30, 40],
          iconAnchor: [15, 32]
        })
      );
    } else {
      layer.setIcon(
        L.icon({
          iconUrl: "pictures/markers/704b10.png",
          iconSize: [30, 40],
          iconAnchor: [15, 32]
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

$.getJSON(venuesConfig.geojson, function (data) {
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
    if (key == "sitetracker_id") {
      sessionStorage.setItem("siteSiteTrackerID", value);
    }
    if (key == "site_name") {
      sessionStorage.setItem("site_name", value);
    }

    $.each(venuesProperties, function(index, property) {
      if (key == property.value) {
        if (value && property.filter.value == "date") {
          date = new Date(value);
          value = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
        }
        if (property.info !== false) {
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
    columnDefs: [{
      targets: [8,9,10,11,12,13,14,15,16,17,18,19],
      render: $.fn.dataTable.render.moment('x', 'MM/DD/YYYY')
    }],
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

// VENUES OPEN TABLE

$("#venues_table-btn").click(function(){
  $("#map-container").hide();
  $("#venuesTable-container").show();
  $(window).resize();
});