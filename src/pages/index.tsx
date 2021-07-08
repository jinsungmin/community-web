import React, {useState, useEffect} from "react";
import styled, {createGlobalStyle} from "styled-components/macro";
import { GlobalStyleProps } from "../theme/styles";
import {Helmet} from "react-helmet";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import {useHistory} from 'react-router-dom';

import {useSelector, useDispatch} from "react-redux";
import {getAuthReducer} from "../redux/reducers";

import {spacing} from "@material-ui/system";
import {
    Hidden,
    CssBaseline,
    Paper as MuiPaper,
    withWidth,
} from "@material-ui/core";

import {isWidthUp} from "@material-ui/core/withWidth";
import {getAuth} from "../redux/actions/auth";

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

const Drawer = styled.div`
  background-color: ${(props) => props.theme.palette.background.default};

  ${(props) => props.theme.breakpoints.up("md")} {
    width: ${drawerWidth}px;
    flex-shrink: 0;
  }
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
    const history = useHistory();
    const {user}: any = useSelector(getAuthReducer);
    const dispatch = useDispatch()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        const url = window.location.pathname.split('/')[1]
        if (url)
            dispatch(getAuth())
    }, [dispatch])



    return (
        <Root>
            <Helmet title="커뮤니티"/>
            <CssBaseline/>
            <GlobalStyle/>
            {user && <Drawer>
                <Hidden mdUp implementation="js">
                    <Sidebar
                        PaperProps={{style: {width: drawerWidth}}}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                    />
                </Hidden>
                <Hidden smDown implementation="css">
                    <Sidebar
                        PaperProps={{style: {width: drawerWidth}}}
                    />
                </Hidden>
            </Drawer>}
            <AppContent>
                <Header onDrawerToggle={handleDrawerToggle} category={title}/>
                <MainContent p={isWidthUp("lg", width) ? 12 : 5}>
                    {children}
                </MainContent>
            </AppContent>
        </Root>
    );
};

export default withWidth()(Layout);
