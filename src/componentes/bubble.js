import Plot from "react-plotly.js";
import React from "react";


const Bubble = () => {
  return (
    <>
      <Plot
        data={[
          {
            x: [1, 2, 3, 4],

            y: [10, 11, 12, 13],

            mode: "markers",

            marker: {
              color: [
                "hsl(0,100,40)",
                "hsl(33,100,40)",
                "hsl(66,100,40)",
                "hsl(99,100,40)",
              ],

              size: [12, 22, 32, 42],

              opacity: [0.6, 0.7, 0.8, 0.9],
            },

            type: "scatter",
          },
          {
            x: [1, 2, 3, 4],

            y: [11, 12, 13, 14],

            mode: "markers",

            marker: {
              color: "rgb(31, 119, 180)",

              size: 18,

              symbol: ["circle", "square", "diamond", "cross"],
            },

            type: "scatter",
          },
          {
            x: [1, 2, 3, 4],

            y: [12, 13, 14, 15],

            mode: "markers",

            marker: {
              size: 18,

              line: {
                color: [
                  "rgb(120,120,120)",
                  "rgb(120,120,120)",
                  "red",
                  "rgb(120,120,120)",
                ],

                width: [2, 2, 6, 2],
              },
            },

            type: "scatter",
          },
        ]}
        layout={{ showlegend: false }}
      />
    </>
  );
};

export default Bubble;
