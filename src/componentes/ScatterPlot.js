import Plot from "react-plotly.js";
import React from "react";

const ScatterPlot = () => {
  return (
    <>
  

      <Plot
        data={
          ({
            y: [
              5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
              5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],

            mode: "markers",

            marker: {
              size: 400,

              color: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
                34, 35, 36, 37, 38, 39,
              ],
            },
          })
        }
        layout={{ title: "Scatter Plot with a Color Dimension" }}
      />
    </>
  );
};

export default ScatterPlot;

