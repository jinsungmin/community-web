import React, {useState} from "react";
import styled, {createGlobalStyle} from "styled-components/macro";
import {Helmet} from "react-helmet";
import Header from "../../components/Header";
import {spacing} from "@material-ui/system";
import {
    CssBaseline,
    Paper as MuiPaper,
    withWidth,
} from "@material-ui/core";

import {isWidthUp} from "@material-ui/core/withWidth";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: white;
  }

  .MuiCardHeader-action .MuiIconButton-root {
    padding: 4px;
    width: 28px;
    height: 28px;
  }
`;

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Paper = styled(MuiPaper)(spacing);

const MainContent = styled(Paper)`
  flex: 1;
  background: white;
  padding: 0;

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  .MuiPaper-root .MuiPaper-root {
    box-shadow: none;
  }
`;

type DashboardPropsType = {
    width: "md" | "xs" | "sm" | "lg" | "xl";
};

const SignIn: React.FC<DashboardPropsType> = ({ width, children }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Root>
            <Helmet title="커뮤니티"/>
            <CssBaseline/>
            <GlobalStyle/>
            <AppContent>
                <Header onDrawerToggle={handleDrawerToggle}/>
                <MainContent p={isWidthUp("lg", width) ? 12 : 5}>
                    {children}
                </MainContent>
            </AppContent>
        </Root>
    );
};

export default withWidth()(SignIn);
