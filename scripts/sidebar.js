// GIS SITES INFO SIDEBAR

$("#gisSitesClose-sidebarBTN").click(function(){
  gisSitesSidebar.hide();
});


var gisSitesSidebar = L.control.sidebar("gisSitesSidebar", {
    closeButton: false,
    position: "right",
    autoPan: false
}).addTo(map);


$("#gisSitesTable-btn").click(function(){
  $("#map-container").hide();
  $("#gisSitesTable-container").show();
  $("#gisSegmentsTable-container").hide();
  $("#gisRoutesTable-container").hide();
  $("#gisStructuresTable-container").hide();
  $("#gisSplicesTable-container").hide();
  $("#gisWorkOrdersTable-container").hide();
  $("#fulcrumRoutesTable-container").hide();
  gisSitesDataTable.search(sessionStorage.getItem("site_name")).draw();
  $(window).resize();
});


// GIS SITES SEARCH SIDEBAR

$("#gisSites_list-btn").click(function(){
  gisSitesSearch.show();
  gisSegmentsSearch.hide();
  gisRoutesSearch.hide();
  gisStructuresSearch.hide();
  gisSplicesSearch.hide();
  gisWorkOrdersSearch.hide();
  fulcrumRoutesSearch.hide();
  map.invalidateSize();
});


$("#gisSites_sidebar-hide-btn").click(function() {
  gisSitesSearch.hide();
  map.invalidateSize();
});


var gisSitesSearch = L.control.sidebar("gisSitesSearch", {
    closeButton: false,
    position: "left",
    autoPan: false
}).addTo(map);



// GIS SEGMENTS INFO SIDEBAR

$("#gisSegmentsClose-sidebarBTN").click(function(){
  gisSegmentsSidebar.hide();
});


var gisSegmentsSidebar = L.control.sidebar("gisSegmentsSidebar", {
    closeButton: false,
    position: "right",
    autoPan: false
}).addTo(map);


$("#gisSegmentsTable-btn").click(function(){
  $("#map-container").hide();
  $("#gisSitesTable-container").hide();
  $("#gisSegmentsTable-container").show();
  $("#gisRoutesTable-container").hide();
  $("#gisStructuresTable-container").hide();
  $("#gisSplicesTable-container").hide();
  $("#gisWorkOrdersTable-container").hide();
  $("#fulcrumRoutesTable-container").hide();
  gisSegmentsDataTable.search(sessionStorage.getItem("fqn_id")).draw();
  $(window).resize();
});



// GIS SEGMENTS SEARCH SIDEBAR

$("#gisSegments_list-btn").click(function(){
  gisSitesSearch.hide();
  gisSegmentsSearch.show();
  gisRoutesSearch.hide();
  gisStructuresSearch.hide();
  gisSplicesSearch.hide();
  gisWorkOrdersSearch.hide();
  fulcrumRoutesSearch.hide();
  map.invalidateSize();
});


$("#gisSegments_sidebar-hide-btn").click(function() {
  gisSegmentsSearch.hide();
  map.invalidateSize();
});


var gisSegmentsSearch = L.control.sidebar("gisSegmentsSearch", {
    closeButton: false,
    position: "left",
    autoPan: false
}).addTo(map);



// GIS ROUTES INFO SIDEBAR

$("#gisRoutesClose-sidebarBTN").click(function(){
  gisRoutesSidebar.hide();
});


var gisRoutesSidebar = L.control.sidebar("gisRoutesSidebar", {
    closeButton: false,
    position: "right",
    autoPan: false
}).addTo(map);


$("#gisRoutesTable-btn").click(function(){
  $("#map-container").hide();
  $("#gisSitesTable-container").hide();
  $("#gisSegmentsTable-container").hide();
  $("#gisRoutesTable-container").show();
  $("#gisStructuresTable-container").hide();
  $("#gisSplicesTable-container").hide();
  $("#gisWorkOrdersTable-container").hide();
  $("#fulcrumRoutesTable-container").hide();
  gisRoutesDataTable.search(sessionStorage.getItem("fqn_id")).draw();
  $(window).resize();
});


// GIS ROUTES SEARCH SIDEBAR

$("#gisRoutes_list-btn").click(function(){
  gisSitesSearch.hide();
  gisSegmentsSearch.hide();
  gisRoutesSearch.show();
  gisStructuresSearch.hide();
  gisSplicesSearch.hide();
  gisWorkOrdersSearch.hide();
  fulcrumRoutesSearch.hide();
  map.invalidateSize();
});


$("#gisRoutes_sidebar-hide-btn").click(function() {
  gisRoutesSearch.hide();
  map.invalidateSize();
});


var gisRoutesSearch = L.control.sidebar("gisRoutesSearch", {
    closeButton: false,
    position: "left",
    autoPan: false
}).addTo(map);



// GIS STRUCTURES INFO SIDEBAR

$("#gisStructuresClose-sidebarBTN").click(function(){
  gisStructuresSidebar.hide();
});


var gisStructuresSidebar = L.control.sidebar("gisStructuresSidebar", {
    closeButton: false,
    position: "right",
    autoPan: false
}).addTo(map);


$("#gisStructuresTable-btn").click(function(){
  $("#map-container").hide();
  $("#gisSitesTable-container").hide();
  $("#gisSegmentsTable-container").hide();
  $("#gisRoutesTable-container").hide();
  $("#gisStructuresTable-container").show();
  $("#gisSplicesTable-container").hide();
  $("#gisWorkOrdersTable-container").hide();
  $("#fulcrumRoutesTable-container").hide();
  gisStructuresDataTable.search(sessionStorage.getItem("fqn_id")).draw();
  $(window).resize();
});


// GIS STRUCTURES SEARCH SIDEBAR

$("#gisStructures_list-btn").click(function(){
  gisSitesSearch.hide();
  gisSegmentsSearch.hide();
  gisRoutesSearch.hide();
  gisStructuresSearch.show();
  gisSplicesSearch.hide();
  gisWorkOrdersSearch.hide();
  fulcrumRoutesSearch.hide();
  map.invalidateSize();
});


$("#gisStructures_sidebar-hide-btn").click(function() {
  gisStructuresSearch.hide();
  map.invalidateSize();
});


var gisStructuresSearch = L.control.sidebar("gisStructuresSearch", {
    closeButton: false,
    position: "left",
    autoPan: false
}).addTo(map);



// GIS SPLICES INFO SIDEBAR

$("#gisSplicesClose-sidebarBTN").click(function(){
  gisSplicesSidebar.hide();
});


var gisSplicesSidebar = L.control.sidebar("gisSplicesSidebar", {
    closeButton: false,
    position: "right",
    autoPan: false
}).addTo(map);


$("#gisSplicesTable-btn").click(function(){
  $("#map-container").hide();
  $("#gisSitesTable-container").hide();
  $("#gisSegmentsTable-container").hide();
  $("#gisRoutesTable-container").hide();
  $("#gisStructuresTable-container").hide();
  $("#gisSplicesTable-container").show();
  $("#gisWorkOrdersTable-container").hide();
  $("#fulcrumRoutesTable-container").hide();
  gisSplicesDataTable.search(sessionStorage.getItem("fqn_id")).draw();
  $(window).resize();
});


// GIS SPLICES SEARCH SIDEBAR

$("#gisSplices_list-btn").click(function(){
  gisSitesSearch.hide();
  gisSegmentsSearch.hide();
  gisRoutesSearch.hide();
  gisStructuresSearch.hide();
  gisSplicesSearch.show();
  gisWorkOrdersSearch.hide();
  fulcrumRoutesSearch.hide();
  map.invalidateSize();
});


$("#gisSplices_sidebar-hide-btn").click(function() {
  gisSplicesSearch.hide();
  map.invalidateSize();
});


var gisSplicesSearch = L.control.sidebar("gisSplicesSearch", {
    closeButton: false,
    position: "left",
    autoPan: false
}).addTo(map);


// GIS WorkOrders INFO SIDEBAR

$("#gisWorkOrdersClose-sidebarBTN").click(function(){
  gisWorkOrdersSidebar.hide();
});


var gisWorkOrdersSidebar = L.control.sidebar("gisWorkOrdersSidebar", {
    closeButton: false,
    position: "right",
    autoPan: false
}).addTo(map);


$("#gisWorkOrdersTable-btn").click(function(){
  $("#map-container").hide();
  $("#gisSitesTable-container").hide();
  $("#gisSegmentsTable-container").hide();
  $("#gisRoutesTable-container").hide();
  $("#gisStructuresTable-container").hide();
  $("#gisSplicesTable-container").hide();
  $("#gisWorkOrdersTable-container").show();
  $("#fulcrumRoutesTable-container").hide();
  gisWorkOrdersDataTable.search(sessionStorage.getItem("WO_ID")).draw();
  $(window).resize();
});


// GIS WorkOrders SEARCH SIDEBAR

$("#gisWorkOrders_list-btn").click(function(){
  gisSitesSearch.hide();
  gisSegmentsSearch.hide();
  gisRoutesSearch.hide();
  gisStructuresSearch.hide();
  gisSplicesSearch.hide();
  gisWorkOrdersSearch.show();
  fulcrumRoutesSearch.hide();
  map.invalidateSize();
});


$("#gisWorkOrders_sidebar-hide-btn").click(function() {
  gisWorkOrdersSearch.hide();
  map.invalidateSize();
});


var gisWorkOrdersSearch = L.control.sidebar("gisWorkOrdersSearch", {
    closeButton: false,
    position: "left",
    autoPan: false
}).addTo(map);


// FULCRUM ROUTES INFO SIDEBAR

$("#fulcrumRoutesClose-sidebarBTN").click(function(){
  fulcrumRoutesSidebar.hide();
});


var fulcrumRoutesSidebar = L.control.sidebar("fulcrumRoutesSidebar", {
    closeButton: false,
    position: "right",
    autoPan: false
}).addTo(map);


$("#fulcrumRoutesTable-btn").click(function(){
  $("#map-container").hide();
  $("#gisSitesTable-container").hide();
  $("#gisSegmentsTable-container").hide();
  $("#gisRoutesTable-container").hide();
  $("#gisStructuresTable-container").hide();
  $("#gisSplicesTable-container").hide();
  $("#gisWorkOrdersTable-container").hide();
  $("#fulcrumRoutesTable-container").show();
  fulcrumRoutesDataTable.search(sessionStorage.getItem("fqnid")).draw();
  $(window).resize();
});


// FULCRUM ROUTES SEARCH SIDEBAR

$("#fulcrumRoutes_list-btn").click(function(){
  gisSitesSearch.hide();
  gisSegmentsSearch.hide();
  gisRoutesSearch.hide();
  gisStructuresSearch.hide();
  gisSplicesSearch.hide();
  gisWorkOrdersSearch.hide();
  fulcrumRoutesSearch.show();
  map.invalidateSize();
});


$("#fulcrumRoutes_sidebar-hide-btn").click(function() {
  fulcrumRoutesSearch.hide();
  map.invalidateSize();
});


var fulcrumRoutesSearch = L.control.sidebar("fulcrumRoutesSearch", {
    closeButton: false,
    position: "left",
    autoPan: false
}).addTo(map);