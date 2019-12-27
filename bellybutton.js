var url = "http://0.0.0.0:8000/samples.json"

function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}


d3.json(url).then(function(data){ 
  var name = data.dataset.names
  var id = unpack(data.dataset.metadata, 0)
  var eth = unpack(data.dataset.metadata, 1)
  var gender = unpack(data.dataset.metadata, 2)
  var age = unpack(data.dataset.metadata, 3)
  var location = unpack(data.dataset.metadata, 4)
  var bbtype = unpack(data.dataset.metadata, 5)
  var wfreq = unpack(data.dataset.metadata, 6)
  var otu_ids = unpack(data.dataset.samples, 1)
  var values = unpack(data.dataset.samples, 2)
  var labels = unpack(data.dataset.samples, 3)
  var sortedOtu = var sorted = values.sort(function sortFunction(a, b) {
    return b - a;
  });
  var otuSliced = sortedOtu.slice(0, 9);

  var trace1 = {
    x: otuSliced,
    y: otu_ids,
    type: "bar"
    orientation: 'h'

  };

  var trace2 = {
    {
      x: otu_ids,
      y: values,
      mode: 'markers',
      marker: {
        size: values,
        color: otu_ids,
      }
    };
  }
  
  
  
  
  

});


function buildTable(id, eth, gender, age, location, bbtype, wfreq) {
  var table = d3.select("#summary-table");
  var tbody = table.select("tbody");
  var trow;
  for (var i = 0; i < 1; i++) {
    trow = tbody.append("tr");
    trow.append("td").text(id[i]);
    trow.append("td").text(eth[i]);
    trow.append("td").text(gender[i]);
    trow.append("td").text(age[i]);
    trow.append("td").text(location[i]);
    trow.append("td").text(bbtype[i]);
    trow.append("td").text(wfreq[i]);
  }
}

d3.select


d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  // Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();
