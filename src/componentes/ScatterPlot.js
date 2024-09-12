import Plot from "react-plotly.js";
import React from "react";
import styled from "styled-components";
import { StyledBox } from './boxPlot';

const StyleScattered= styled(StyledBox)``;

const ScatterPlot = () => {
  return (
    <StyleScattered>
      <Plot
        data={[
          {
            y: [
              5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
              5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            mode: "markers",
            marker: {
              size: 30,
              color: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
                34, 35, 36, 37, 38, 39,
              ],
            },
          },
        ]}
        layout={{justifyContent: 'center', height: 300, width: 600, title: "Scatter Plot with a Color Dimension" }}
      />
    </StyleScattered>
  );
};

export default ScatterPlot;


