import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";

export function station_demand_plot(network_data, station_data, {width} = {}) {
    // if needed, variables can be created here

    return Plot.plot({
        title: "Station Demand in the Pogoh Bike-Sharing Network",// CHALLENGE 6.1 - Your code here
        width,
        marks: [
            // CHALLENGE 6.2
            Plot.barY(station_data, {
                x: "name",
                y: "empty_slots",
                sort: {x: "y"},
                tip: true
            })
        ],
        x: {
            // CHALLENGE 6.3
            tickRotate: -60,
            label: "Station Name"
        },
        y: {
            // CHALLENGE 6.4
            label: "Demand (by Empty Slots Available)",
            labelAnchor: "center"
        },
        // CHALLENGE 6.5
        marginLeft: 80,// value,
        width: 1000,//value,
        height: 700,//value,
        marginBottom: 200//value
    });
}