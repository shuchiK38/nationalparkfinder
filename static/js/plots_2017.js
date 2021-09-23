d3.json(location.origin + "/api/v1/visits").then((data) => {
    d3.json(location.origin + "/api/v1/visits_2017")
    d3.json(location.origin + "/api/v1/visits_2018")
    d3.json(location.origin + "/api/v1/visits_2019")
    d3.json(location.origin + "/api/v1/visits2021")

    console.log(data);


    // Trace for parks visits
    let trace1 = {
        x: data.map(row => row.park),
        y: data.map(row => row.visits),
        type: "bar"
    };

    // Data trace array
    let traceData = [trace1];

    // Apply the group barmode to the layout
    let layout = {
        title: "Visits 2020"
    };


    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot", traceData, layout);
});

//use plotly to build charts

function buildVisits(id) {
    //Complete the function that builds the Visits Data Panel
    //Use d3.json to Fetch the data for a sample

    d3.json(`/new_visits_2017/${id}`).then((data) => {
        //Use d3 to Select the Panel with id of `#Visits 2017`
        var panel = d3.select("#new_visits_2017");
        //Use `.html("") to Clear any Existing data
        Panel.html("");
        //Use 'Object.entries` to add each key & value pair to the panel
        //inside the loop, Use d3 to Append New Tags for each Key-Value in the data
        Object.entries(data).forEach(([key, value]) => {
            Panel.append("h6").text(`${key}:${value}`);
    });

    
    



function buildcharts(id) {
            //Use 'd3.json' to Fetch the id Data for the Plots
            d3.json(`/data/${id}`).then((data) => {
                //Build a Bubble Chart using the id data
                const ids = data.ids;
                const ParkNames = data.ParkNames;
                const PercentOfTotal = data.PercentOfTotal;

                //Build a Pie Chart
                let bubbleLayout = {
                    margin: { t: 0 },
                    hovermode: "closests",
                    x_axis: { title: "Park Name" }
                }

                let bubbleData = [
                    {
                        x: ids,
                        y: PercentOfTotal,
                        text: ParkNames,
                        mode: "markers",
                        marker: {
                            size: ids,
                            color: ParkNames,
                            colorscale: "Earth"
                        }
                    }
                ]

                Plotly.plot("bubble", bubbleData, bubbleLayout);

                //Use slice() to grab the Top 10 Park Names and ids
                let pieData = [
                    {
                        values: ids.slice(0, 10),
                        labels: ParkNames.slice(0, 10),
                        hoverinfo: "hovertext",
                        type: "pie"
                    }
                ];

                let pieLayout = {
                    margin: { t: 0, l: 0 }
                };

                Plotly.plot("pie", pieData, pieLayout)
            })
        }

    function init() {
            //Get a reference to the Dropdown Select Element
            var selector = d3.select("#selDataset");

            //Use the List of Park Names to Populate the Select Options
            d3.json("/names").then((ParkNames) => {
                ParkNames.forEach((id) => {
                    selector
                        .append("option")
                        .text(ParkName)
                        .property("value", ParkNames);
                });

                //Use the first id from the list to build initial plots
                const firstid = ParkNames[0];
                buildcharts(firstid);
                buildVisits(firstid);
            });
        }

    function optionChanged(newParkName) {
            //fetch new data each time a new name is selected
            buildcharts(newParkName);
            buildVisits(newParkName);
        }

    //Initialize the Dashboard
           init();