import React from "react";
import styled from "styled-components/macro";
import {useHistory} from "react-router-dom";

import {Helmet} from "react-helmet";

import {Button as MuiButton, Typography, Box} from "@material-ui/core";
import {spacing} from "@material-ui/system";

import {MuiButtonSpacingType} from "../../theme/styles";

const Button = styled(MuiButton)<MuiButtonSpacingType>(spacing);

const Wrapper = styled.div`
  top: 30%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  padding: ${(props) => props.theme.spacing(6)}px;

  text-align: center;
  background: transparent;

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)}px;
  }
`;

function Page404() {
  const history = useHistory()
  return (
    <Box style={{position: 'relative', height: '100%'}}>
      <Wrapper>
        <Helmet title="404 Error"/>
        <Typography component="h1" variant="h1" align="center" gutterBottom>
          404
        </Typography>
        <Typography component="h2" variant="h5" align="center" gutterBottom>
          Page not found.
        </Typography>
        <Typography component="h2" variant="body1" align="center" gutterBottom>
          The page you are looking for might have been removed.
        </Typography>

        <Button
          onClick={(e) => history.push({
            pathname: `/post`,
            search: `?mid=일반`,
            state: {id: 43242312}
          })}
          variant="contained"
          color="secondary"
          mt={2}
        >
          Return to website
        </Button>

      </Wrapper>
    </Box>
  );
}

export default Page404;
