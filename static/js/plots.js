d3.json( location.origin + "/api/v1/visits").then((data) => {


// Trace for parks visits
let trace1 = {
    x: data.filter(row=>row.year==2018).map(row => row.park),
    y: data.filter(row=>row.year==2018).map(row => row.visits),
    type: "bar",
    
  };
let trace2 = {
    x: data.filter(row=>row.year==2019).map(row => row.park),
    y: data.filter(row=>row.year==2019).map(row => row.visits),
    type: "bar",
    
  };

 
// Data trace array
let traceData = [trace1, trace2];

// Apply the group barmode to the layout
let layout = {
  title: {
    text: "Most Visited Parks 2020 (in millions of visits)",
    font: {
      color:'#f0f0f0',
   }
  },
  paper_bgcolor: '#232e35',
  plot_bgcolor: '#232e35',
  xaxis:{
  color: '#f0f0f0'
  },
  yaxis:{
    color: '#f0f0f0'
  },
  barmode: 'group'
};


// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);
});
