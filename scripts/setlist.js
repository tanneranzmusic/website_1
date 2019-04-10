// SETLIST PROPERTIES

var setlistProperties = [{
  value: "artist",
  label: "Artist",
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
  value: "song",
  label: "Song",
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
}];


// CSV to JSON

var setlistCSV = fs.readFileSync(path.join(__dirname, 'setlist.csv'), { encoding : 'utf8'});

var setlistJSON = csvjson.toObject(setlistCSV);


// SETLIST BUILD CONFIG

setlistBuildConfig();

function setlistBuildConfig() {
  setlistTable = [];
  $.each(setlistProperties, function(index, value) {
    if (value.table.visible !== false) {
      setlistTable.push({
        data: value.value,
        title: value.label
      });
      $.each(value.table, function(key, val) {
        if (setlistTable[index+1]) {
          setlistTable[index+1][key] = val;
        }
      });
    }
  });

  setlistBuildTable()
}


// SETLIST TABLE

function setlistBuildTable() {

    setlistDataTable = $('#setlistTable').DataTable({ // Change table element ID here
    dom: 'Bfrtip', // Add this to enable export buttons
    buttons: [ // Add this to choose which buttons to display
        'copy', 'csv', 'excel', 'pdf', 'print'
    ],
    colReorder: true,
    data: setlistJSON,
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
    "columns": setlistTable,
    "language": {
      "emptyTable": "Loading..."
    }
  });
}


// SETLIST OPEN TABLE

$("#setlist_table-btn").click(function(){
  $("#map-container").hide();
  $("#setlistTable-container").show();
  $(window).resize();
});