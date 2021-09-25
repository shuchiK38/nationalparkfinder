
d3.json(location.origin + "/api/v1/visits").then((data) => {

   data = data.sort(function(a, b){return b.y2020 - a.y2020}).slice(0,20) 

  // Trace for parks visits
  let trace1 = {
    x: data.map(row => row.park),
    y: data.map(row => row.y2020),
    type: "bar",
    name: 2020
  };

  let trace2 = {
    x: data.map(row => row.park),
    y: data.map(row => row.y2019),
    type: "bar",
    name: 2019
  };

  let trace3 = {
    x: data.map(row => row.park),
    y: data.map(row => row.y2018),
    type: "bar",
    name: 2018
  };
  
  
  let trace4 = {
    x: data.map(row => row.park),
    y: data.map(row => row.y2017),
    type: "bar",
    name: 2017
    };

  // Data trace array
  let traceData = [trace1, trace2, trace3, trace4];

  // Apply the group barmode to the layout
  let layout = {
    title: {
      text: "",
      font: {
        color: '#f0f0f0',
      }
    },
    paper_bgcolor: '#232e35',
    plot_bgcolor: '#232e35',
    
    xaxis: {
      color: '#f0f0f0'
    },
    yaxis: {
      color: '#f0f0f0'
    },
    legend: {
      x: 1.0,
      y: 1.0,
      font: {
        color: '#f0f0f0',
        size : 12
      }   

    },
    barmode: 'group'
  };


  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", traceData, layout);
});

d3.json(location.origin + "/api/v1/activities").then((data) => {
  data = data.sort(function(a, b){return b.count - a.count}) 
  // sorted in descending order, first 20  
  var data1 = data.slice(0,20)
  let pieData = [
    {
        values: data1.map(row=>row.count),
        labels: data1.map(row=>row.type),
        hoverinfo: "hovertext",
        type: "pie"
    }
  ];

let pieLayout = {
    margin: { t: 0, l: 0 },
    paper_bgcolor: '#232e35',
    plot_bgcolor: '#232e35',
    legend: {
      traceorder: 'normal',
      font: {
        size: 12,
        color: '#f0f0f0',
      },
      bgcolor: '#232e35',
      bordercolor: '#232e35',
      borderwidth: 2
    }
};

Plotly.plot("pie", pieData, pieLayout);

  data = data.sort(function(a, b){return a.count - b.count}).slice(0,20) 
  // sorted in ascending order, first 20  

  let pieData1 = [
    {
        values: data.map(row=>row.count),
        labels: data.map(row=>row.type),
        hoverinfo: "hovertext",
        type: "pie"
    }
];

let pieLayout1 = {
    margin: { t: 0, l: 0 },
    paper_bgcolor: '#232e35',
    plot_bgcolor: '#232e35',
    legend: {
      traceorder: 'normal',
      font: {
        size: 12,
        color: '#f0f0f0',
      },
      bgcolor: '#232e35',
      bordercolor: '#232e35',
      borderwidth: 2
    }
};

Plotly.plot("pie1", pieData1, pieLayout1);
});