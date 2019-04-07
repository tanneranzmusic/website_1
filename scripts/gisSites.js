// GIS SITES PROPERTIES

var gisSitesProperties = [{
  value: "sitetracker_id",
  label: "STID",
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
  value: "objectid",
  label: "GISID",
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
  value: "nfid",
  label: "NFID",
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
  value: "site_name",
  label: "NAME",
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
  value: "clustername",
  label: "HUB",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "tower_type",
  label: "TYPE",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "spoke",
  label: "SPOKE",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "integer",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "city",
  label: "CITY",
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
  value: "site_survey_est",
  label: "SITE SURVEY (F)",
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
  value: "site_survey_actual",
  label: "SITE SURVEY (A)",
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
  value: "permit_submitted_estimated",
  label: "PERMIT SBMT (F)",
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
  value: "permit_submitted_actual",
  label: "PERMIT SBMT (A)",
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
  value: "permit_received_estimated",
  label: "PERMIT RCVD (F)",
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
  value: "permit_received_actual",
  label: "PERMIT RCVD (A)",
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
  value: "construction_start_estimated",
  label: "CONST START (F)",
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
  value: "construction_start_actual",
  label: "CONST START (A)",
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
  value: "cable_placed_estimated",
  label: "CABLE PLACED (F)",
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
  value: "cable_placed_actual",
  label: "CABLE PLACED (A)",
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
  value: "splicingtestingcompleteestimate",
  label: "SPLICE/TEST (F)",
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
  value: "splicingtestingcompleteactual",
  label: "SPLICE/TEST (A)",
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



// GIS SITES FIELDS

var gisSitesFields = gisSitesProperties.map(function(elem) {
  return elem.value;
}).join("%2C");


// GIS SITES REST URL

var gisSitesConfig = {
  geojson: "https://gis.tilsontech.com/arcgis/rest/services/SiteTracker/SLC_OneFiber/MapServer/2/query?where=objectid+IS+NOT+NULL&outFields=" + gisSitesFields + "&f=geojson&token=" + gis_token,
  layerName: "Sites",
  hoverProperty: "site_name"
};


// GIS SITES BUILD CONFIG


function gisSitesBuildConfig() {
  gisSitesTable = [];

  $.each(gisSitesProperties, function(index, value) {
    if (value.table) {
      gisSitesTable.push({
        data: "properties." + value.value,
        title: value.label
      });
      $.each(value.table, function(key, val) {
        if (gisSitesTable[index+1]) {
          gisSitesTable[index+1][key] = val;
        }
      });
    }
  });

  gisSitesBuildTable()
  map.flyToBounds(gisSitesLayer.getBounds());
}




// GIS SITES LAYER

var gisSitesLayer = L.geoJson(null, {
  filter: function (feature) {
    if (feature.properties.clustername.toLowerCase().indexOf("loop") === -1) {
      return true
    };
  },
  onEachFeature: function (feature, layer) {
    layer.bindTooltip(feature.properties.nfid + " -- " + feature.properties.site_name, {sticky: 'true', direction: 'top'});

    if (feature.properties) {
      var title = feature.properties.site_name;
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
          $("#gisSitesInfo_Title").html(feature.properties.nfid);
          gisSitesInfo(L.stamp(layer));
          activeRecord = feature.properties.site_name;
          highlightLayer.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {
            stroke: false,
            fillColor: "#00d0ff",
            fillOpacity: 1,
            radius: 5
          }));
        }
      });
      $("#gisSites_feature-list tbody").append('<tr onclick= "gisSitesSearchClick(' + L.stamp(layer) + ')"><td class="gisSites_feature-name">' + layer.feature.properties.site_name + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
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


function gisSitesSearchClick(id) {
  var layer = gisSitesLayer.getLayer(id);
  map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 16);
  layer.fire("click");
  /* Hide sidebar and go to the map on small screens */
  if (document.body.clientWidth <= 767) {
    gisSitesSidebar.hide();
    map.invalidateSize();
  }
}


//GIS SITES DATA

$.getJSON(gisSitesConfig.geojson, function (data) {
  gisSitesData = data;
  gisSitesFeatures = $.map(gisSitesData.features, function(feature) {
    return feature.properties;
  });
  gisSitesLayer.addData(data);
  gisSitesList = new List("gisSites_features", {valueNames: ["gisSites_feature-name"]});
  gisSitesList.sort("gisSites_feature-name", {order:"asc"});
  gisSitesBuildConfig()
}).error(function(jqXHR, textStatus, errorThrown) {
    console.log("error " + textStatus);
    console.log("incoming Text " + jqXHR.responseText);
    alert("error " + textStatus);
});



// GIS SITES INFO

function gisSitesInfo(id) {
  
  var featureProperties = gisSitesLayer.getLayer(id).feature.properties;

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

    $.each(gisSitesProperties, function(index, property) {
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
  $("#gisSites-Info_DATA").html(content);
  gisSitesSidebar.show();
};



// GIS SITES TABLE

function gisSitesBuildTable() {

    gisSitesDataTable = $('#gisSitesTable').DataTable({ // Change table element ID here
    dom: 'Bfrtip', // Add this to enable export buttons
    buttons: [ // Add this to choose which buttons to display
        'copy', 'csv', 'excel', 'pdf', 'print'
    ],
    colReorder: true,
    columnDefs: [{
      targets: [8,9,10,11,12,13,14,15,16,17,18,19],
      render: $.fn.dataTable.render.moment('x', 'MM/DD/YYYY')
    }],
    data: gisSitesData.features,
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
    "columns": gisSitesTable,
    "language": {
      "emptyTable": "Loading..."
    }
  });
}

// GIS SITES OPEN TABLE

$("#gisSites_table-btn").click(function(){
  $("#map-container").hide();
  $("#gisSitesTable-container").show();
  $("#gisSegmentsTable-container").hide();
  $("#gisRoutesTable-container").hide();
  $("#gisStructuresTable-container").hide();
  $("#gisSplicesTable-container").hide();
  $("#gisWorkOrdersTable-container").hide();
  $(window).resize();
});