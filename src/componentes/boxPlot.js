import Plot from "react-plotly.js";
import React from "react";

const BoxPlot = () => {
  return (
    <>
      <Plot
        data={[
          {
            x: [
              "day 1",
              "day 1",
              "day 1",
              "day 1",
              "day 1",
              "day 1",
              "day 2",
              "day 2",
              "day 2",
              "day 2",
              "day 2",
              "day 2",
            ],
            y: [0.2, 0.2, 0.6, 1.0, 0.5, 0.4, 0.2, 0.7, 0.9, 0.1, 0.5, 0.3],
            name: "kale",
            marker: { color: "#3D9970" },
            type: "box",
          },
          {
            y: [0.6, 0.7, 0.3, 0.6, 0.0, 0.5, 0.7, 0.9, 0.5, 0.8, 0.7, 0.2],

            name: "radishes",

            marker: { color: "#FF4136" },

            type: "box",
          },
          {
            y: [0.1, 0.3, 0.1, 0.9, 0.6, 0.6, 0.9, 1.0, 0.3, 0.6, 0.8, 0.5],

            name: "carrots",

            marker: { color: "#FF851B" },

            type: "box",
          },
        ]}
        layout={{
          yaxis: {
            title: "normalized moisture",

            zeroline: false,
          },

          boxmode: "group",
        }}
      />
    </>
  );
};

export default BoxPlot;
