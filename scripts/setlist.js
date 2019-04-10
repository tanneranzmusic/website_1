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


// SETLIST CSV TO JSON

setlist = $.ajax({
  type: "GET",
  url: "setlist.csv",
  dataType: "text/csv"
});

setlistCSV = setlist.responseText


function CSVToArray( strData, strDelimiter ){
    // Check to see if the delimiter is defined. If not,
    // then default to comma.
    strDelimiter = (strDelimiter || ",");

    // Create a regular expression to parse the CSV values.
    var objPattern = new RegExp(
        (
            // Delimiters.
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

            // Quoted fields.
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

            // Standard fields.
            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
        );


    // Create an array to hold our data. Give the array
    // a default empty first row.
    var arrData = [[]];

    // Create an array to hold our individual pattern
    // matching groups.
    var arrMatches = null;


    // Keep looping over the regular expression matches
    // until we can no longer find a match.
    while (arrMatches = objPattern.exec( strData )){

        // Get the delimiter that was found.
        var strMatchedDelimiter = arrMatches[ 1 ];

        // Check to see if the given delimiter has a length
        // (is not the start of string) and if it matches
        // field delimiter. If id does not, then we know
        // that this delimiter is a row delimiter.
        if (
            strMatchedDelimiter.length &&
            strMatchedDelimiter !== strDelimiter
            ){

            // Since we have reached a new row of data,
            // add an empty row to our data array.
            arrData.push( [] );

        }

        var strMatchedValue;

        // Now that we have our delimiter out of the way,
        // let's check to see which kind of value we
        // captured (quoted or unquoted).
        if (arrMatches[ 2 ]){

            // We found a quoted value. When we capture
            // this value, unescape any double quotes.
            strMatchedValue = arrMatches[ 2 ].replace(
                new RegExp( "\"\"", "g" ),
                "\""
                );

        } else {

            // We found a non-quoted value.
            strMatchedValue = arrMatches[ 3 ];

        }


        // Now that we have our value string, let's add
        // it to the data array.
        arrData[ arrData.length - 1 ].push( strMatchedValue );
    }

    // Return the parsed data.
    return( arrData );
}


function CSV2JSON(csv) {
    var array = CSVToArray(csv);
    var objArray = [];
    for (var i = 1; i < array.length; i++) {
        objArray[i - 1] = {};
        for (var k = 0; k < array[0].length && k < array[i].length; k++) {
            var key = array[0][k];
            objArray[i - 1][key] = array[i][k]
        }
    }

    var json = JSON.stringify(objArray);
    var str = json.replace(/},/g, "},\r\n");

    return str;
}


CSV2JSON(setlistCSV);



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
    data: setlistCSV,
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