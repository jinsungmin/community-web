import React, {useState, useEffect} from "react";
import styled, {createGlobalStyle} from "styled-components/macro";
import {GlobalStyleProps} from "../theme/styles";
import {Helmet} from "react-helmet";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import {useSelector, useDispatch} from "react-redux";
import {getAuthReducer} from "../redux/reducers";

import {spacing} from "@material-ui/system";
import {
    CssBaseline,
    Paper as MuiPaper,
    withWidth,
} from "@material-ui/core";

import {isWidthUp} from "@material-ui/core/withWidth";
import {getAuth} from "../redux/actions/auth";
import {getCategories} from "../redux/actions/category";

const drawerWidth = 200;

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: ${(props) => props.theme.palette.background.default};
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
  background-color: ${(props) => props.theme.palette.background.default};

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

const Layout: React.FC<DashboardPropsType> = ({
                                                  children,
                                                  width,
                                              }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [title, setTitle] = useState('');
    const dispatch = useDispatch()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        dispatch(getCategories({}))
        const url = window.location.pathname.split('/')[1]
        if (url)
            dispatch(getAuth())
    }, [])

    return (
        <Root>
            <Helmet title="커뮤니티"/>
            <CssBaseline/>
            <GlobalStyle/>
            <AppContent>
                <Header onDrawerToggle={handleDrawerToggle} category={title}/>
                <Sidebar
                    PaperProps={{style: {width: drawerWidth}}}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                />
                <MainContent p={isWidthUp("lg", width) ? 12 : 5}>
                    {children}
                </MainContent>
            </AppContent>
        </Root>
    );
};

export default withWidth()(Layout);
