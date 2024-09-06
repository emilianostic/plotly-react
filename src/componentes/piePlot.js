import Plot from "react-plotly.js";
import React from "react";

const PiePlot = () => {
  return (
    <>
  
      <Plot
        data={[
          {
            values: [19, 26, 55],

            labels: ["Residential", "Non-Residential", "Utility"],

            type: "pie",
          },
        ]}
        layout={{ height: 400, width: 500, title: "Pie Chart" }}
      />
    </>
  );
};

export default PiePlot;
