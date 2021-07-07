import React from "react";
import styled from "styled-components/macro";

import { CircularProgress } from "@material-ui/core";

const Root = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
`;

function Loader() {
  return (
    <Root>
      <CircularProgress color="secondary" />
    </Root>
  );
}

export default Loader;
