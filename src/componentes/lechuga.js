

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
        className="flourish-embed-iframe"
    
        style={{ width: '100%', height: '100%' }}
        sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      ></iframe>
      <div style={{ width: '100%', marginTop: '4px', textAlign: 'right' }}>
        <a
          className="flourish-credit"
          href="https://public.flourish.studio/visualisation/19582976/?utm_source=embed&utm_campaign=visualisation/19582976"
          target="_top"
          style={{ textDecoration: 'none' }}
        >
          {/* <img
            alt="Made with Flourish"
            src="https://public.flourish.studio/resources/made_with_flourish.svg"
            style={{ width: '105px', height: '16px', border: 'none', margin: '0' }}
          /> */}
        </a>
      </div>
    </StyledPlot>
  );
};

export default BarLechuga