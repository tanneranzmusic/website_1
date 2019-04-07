// VENUES INFO SIDEBAR

$("#venuesClose-sidebarBTN").click(function(){
  venuesSidebar.hide();
});


var venuesSidebar = L.control.sidebar("venuesSidebar", {
    closeButton: false,
    position: "right",
    autoPan: false
}).addTo(map);


$("#venuesTable-btn").click(function(){
  $("#map-container").hide();
  $("#venuesTable-container").show();
  $(window).resize();
});


// VENUES SEARCH SIDEBAR

$("#venues_list-btn").click(function(){
  venuesSearch.show();
  map.invalidateSize();
});


$("#venues_sidebar-hide-btn").click(function() {
  venuesSearch.hide();
  map.invalidateSize();
});


var venuesSearch = L.control.sidebar("venuesSearch", {
    closeButton: false,
    position: "left",
    autoPan: false
}).addTo(map);