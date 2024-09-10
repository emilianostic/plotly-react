import styled from "styled-components";
import React from "react";
import BarPlot from "./barPlot";
import PiePlot from "./piePlot";
import ScatterPlot from "./ScatterPlot";
import BoxPlot from "./boxPlot";
import LineDash from "./lineDash";
import Bubble from "./bubble";


const ContenedorPlots = styled.div`
  display: flex;
  height: 45%;
  width: 50%;
  margin-top: 2%;
`;

const DivContainer = styled.div`
  width: 90%;
  max-width: 90%;
  margin: auto;
  display: grid;
`;
const DivContainerCards = styled.div`
  display: grid;
  margin-right: 5%;
  margin-bottom: 2%;
  grid-template-columns: repeat(2, 1fr);
  gap: 3%;
`;

const PlotsContenedor = () => {
  return (
    <ContenedorPlots>
      <DivContainer>
        <DivContainerCards>
          <BarPlot />
          <PiePlot />
          <ScatterPlot />
          <BoxPlot />
          <LineDash/>
          <Bubble/>
         
        </DivContainerCards>
      </DivContainer>
    </ContenedorPlots>
  );
};

export default PlotsContenedor;
