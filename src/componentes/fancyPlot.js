import Plot from "react-plotly.js";
import React from "react";
import styled from "styled-components";
import { StyledBox } from "./boxPlot";

const PlotFancy = styled(StyledBox)``;

const FancyPlot = () => {
  return (
    <PlotFancy>
      <Plot
        data={[
          {
            x: [1, 2, 3],

            y: [2, 6, 3],

            type: "scatter",

            mode: "lines+markers",

            marker: { color: "red" },
          },

          { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
        ]}
        layout={{ width: 600, height: 300, title: "A Fancy Plot" }}
      />
    </PlotFancy>
  );
};

export default FancyPlot;
