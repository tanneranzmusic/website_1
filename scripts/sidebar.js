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

$("#venuesWebsite-btn").click(function(){
  window.open(sessionStorage.getItem("venue_website"))
});

$("#venuesFacebook-btn").click(function(){
  window.open(sessionStorage.getItem("venue_facebook"))
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