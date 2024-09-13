import Plot from "react-plotly.js";
import React from "react";

import styled from "styled-components";
import { StyledBox } from "./boxPlot";

const StyledLineDash = styled(StyledBox)``;

const LineDash = () => {
  return (
    <StyledLineDash>
      <Plot
        data={[
          {
            x: [1, 2, 3, 4, 5],
            y: [1, 3, 2, 3, 1],
            mode: "lines",
            name: "Solid",
            line: { dash: "solid", width: 4 },
          },
          {
            x: [1, 2, 3, 4, 5],

            y: [6, 8, 7, 8, 6],

            mode: "lines",

            name: "dashdot",

            line: {
              dash: "dashdot",

              width: 4,
            },
          },
          {
            x: [1, 2, 3, 4, 5],

            y: [11, 13, 12, 13, 11],

            mode: "lines",

            name: "Solid",

            line: {
              dash: "solid",

              width: 4,
            },
          },
          {
            x: [1, 2, 3, 4, 5],

            y: [16, 18, 17, 18, 16],

            mode: "lines",

            name: "dot",

            line: {
              dash: "dot",

              width: 4,
            },
          },
        ]}
        layout={{
          alignItems: "center",
          justifyContent: "center",
          height: 300,
          width: 600,
          title: "Line Dash",

          xaxis: {
            range: [0.75, 5.25],

            autorange: false,
          },

          yaxis: {
            range: [0, 18.5],

            autorange: false,
          },

          legend: {
            y: 0.5,

            traceorder: "reversed",

            font: {
              size: 16,
            },
          },
        }}
      />
    </StyledLineDash>
  );
};

export default LineDash;
