import React from "react";
import styled from "styled-components/macro";
import {useHistory} from "react-router-dom";
import {MuiButtonSpacingType} from "../../theme/styles";
import {Helmet} from "react-helmet";

import {Button as MuiButton, Typography} from "@material-ui/core";
import {spacing} from "@material-ui/system";

const Button = styled(MuiButton)<MuiButtonSpacingType>(spacing);

const Wrapper = styled.div`
  padding: ${(props) => props.theme.spacing(6)}px;
  text-align: center;
  background: transparent;
  top: 30%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)}px;
  }
`;

function Page500() {
    const history = useHistory()
    return (
        <Wrapper>
            <Helmet title="500 Error"/>
            <Typography component="h1" variant="h1" align="center" gutterBottom>
                500
            </Typography>
            <Typography component="h2" variant="h5" align="center" gutterBottom>
                Internal server error.
            </Typography>
            <Typography component="h2" variant="body1" align="center" gutterBottom>
                The server encountered something unexpected that didn't allow it to
                complete the request.
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
    );
}

export default Page500;
