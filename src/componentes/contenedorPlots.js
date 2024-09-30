import styled from "styled-components";
import React from "react";
import BarPlot from "./barPlot";
import PiePlot from "./piePlot";
import ScatterPlot from "./ScatterPlot";
import BoxPlot from "./boxPlot";
import LineDash from "./lineDash";
import Bubble from "./bubble";
import Texture from "./Texture";
import FancyPlot from "./fancyPlot";
import BarLechuga from "./lechuga"


const ContenedorPlots = styled.div`
  display: flex;
  height: 100%;
  width: 80%;
  margin-top: 2%;
`;

const DivContainer = styled.div`
  width: 90%;
  max-width: 90%;
  margin: auto;
  
`;
const DivContainerCards = styled.div`
  display: grid;
  margin-right: 5%;
  margin-bottom: 2%;
  grid-template-columns: repeat(2, 1fr);
  gap: 1%;
`;

const PlotsContenedor = () => {
  return (
    <ContenedorPlots>
      <DivContainer>
        <DivContainerCards>
          <BarPlot />
          <PiePlot />
          <ScatterPlot />
          <BoxPlot/>
          <LineDash/>
          <Bubble/>
         <Texture/>
         <FancyPlot/>
         <BarLechuga/>
         <FancyPlot/>
        </DivContainerCards>
      </DivContainer>
    </ContenedorPlots>
  );
};

export default PlotsContenedor;
