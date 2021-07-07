import React, {useState} from "react";
import styled, {createGlobalStyle} from "styled-components/macro";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import Header from "../../components/Header";
import {useStyles} from '../../css/style'

import {spacing} from "@material-ui/system";
import {
    CssBaseline,
    Paper as MuiPaper,
    withWidth,
    Card as MuiCard,
    Button,
    Typography,
} from "@material-ui/core";

import {isWidthUp} from "@material-ui/core/withWidth";

const Card = styled(MuiCard)(spacing);
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

const SignUp: React.FC<DashboardPropsType> = ({width}) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const classes = useStyles()

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
                    <div className={classes.login_form}>
                        <Card style={{height: '800px', backgroundColor: 'white'}}>
                            <Typography variant="h3" className={classes.auth_title}>
                                회원가입
                            </Typography>
                            <div style={{height: '500px'}}>

                            </div>
                            <div style={{marginTop: '50px', padding: '0 20%'}}>
                                <Button
                                    component={Link}
                                    to="/auth/sign-in"
                                    fullWidth
                                >
                                    로그인
                                </Button>
                            </div>
                        </Card>
                    </div>
                </MainContent>
            </AppContent>
        </Root>
    );
};

export default withWidth()(SignUp);
