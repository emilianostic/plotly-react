import Plot from "react-plotly.js";
import React from "react";
import styled from "styled-components";
import { StyledBox } from "./boxPlot";

const StyledPlot = styled(StyledBox)``;

const PiePlot = () => {
  return (
    <StyledPlot>
  
      <Plot
        data={[
          {
            values: [19, 26, 55],

            labels: ["Residential", "Non-Residential", "Utility"],

            type: "pie",
            domain: {
              x: [0, 1], // Controla la posición horizontal (0 a 1 es todo el ancho)
              y: [0, 1],
            }
          },
        ]}
        layout={{margin: { l: 20, r: 10, b: 10, t: 30 }, justifyContent: 'center', height: 300, width: 600, title: "Pie Chart"   }}
      />
    </StyledPlot>
  );
};

export default PiePlot;
