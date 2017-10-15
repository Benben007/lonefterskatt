// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart', 'table']});


// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawTable);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
//var parse=JSON.parse(abracadabra);

function drawChart() {

// Create the data table.
var table = new google.visualization.DataTable();
table.addColumn('string', 'Namn');
table.addColumn('number', 'Kostnad');
table.addRows(data2);

// Set chart options
var options = {'title':'Dashboard',
               'width': 600,
               'height':600,
           };

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.PieChart(document.getElementById('chartv'));
chart.draw(table, options);
}

function drawTable() {
       
       var dat = new google.visualization.DataTable();
       dat.addColumn('string', 'Date');
       dat.addColumn('number', 'Info');
       dat.addRows(data1);

var table = new google.visualization.Table(document.getElementById('table_div'));
table.draw(dat, {showRowNumber: true, width: '100%', height: '100%'});

}








