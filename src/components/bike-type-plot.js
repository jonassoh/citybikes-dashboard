import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";

export function bike_type_plot(data, {width} = {}) {
    // if needed, variables can be created here
    const categories = [
        {type: "Normal bikes", "count": data.normal_bikes},
        {type: "E-bikes", "count": data.ebikes}
    ];

    return Plot.plot({
        title: `Bike Type Availability at ${data.name}`,// CHALLENGE 7.1 - Your code here ,
        marks: [
            // CHALLENGE 7.2
            Plot.barY(categories, {
                x: "type",
                y: "count",
                fill: "type",
                tip: true
            })
        ],
        x: {
            // CHALLENGE 7.3
            label: "Bike Type"
        },
        y:{
            // CHALLENGE 7.4
            label: "Number of Bikes",
            labelAnchor: "center",
            grid: true,
            interval: 1,
            tickFormat: ".0f"
        },
        color: {
            // CHALLENGE 7.5
            scheme: "category10",
            legend: true
        },
        marginLeft: 40,// value,
        width: width ?? 1000,//value,
        height: 700,//value,
        marginBottom: 40//value
    })
}
