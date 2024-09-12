
import Plot from 'react-plotly.js'
import React from 'react';
import styled from "styled-components";
import { StyledBox } from './boxPlot';

const StyledPlot = styled(StyledBox)``;



const BarPlot = ()=> {
 
    return (
      <StyledPlot>
         
         <Plot   data={[{
          x:[1,2,3], y:[1,2,3],
          type: 'bar',
          mode: 'lines+markers',
          marker: {color: 'red'}
         }]}
         layout = { {justifyContent: 'center', height: 300, width: 600, title: 'Simple Bar Plot'}} />
       
      </StyledPlot>
    )
  }

export default BarPlot