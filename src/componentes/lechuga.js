

import React from "react";
import styled from "styled-components";
import { StyledBox } from './boxPlot';

const StyledPlot = styled(StyledBox)``;



const BarLechuga = ()=> {
  return (
    <StyledPlot>
      <iframe
        src="https://flo.uri.sh/visualisation/19582976/embed"
        title="Interactive or visual content"
          
        style={{ width: '100%', height: '100%' }}
       
      ></iframe>
     
    </StyledPlot>
  );
};

export default BarLechuga