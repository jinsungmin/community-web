import React, {useState} from "react";
import styled, {createGlobalStyle} from "styled-components/macro";
import {useDispatch} from "react-redux";
import {useHistory, Link} from "react-router-dom";
import {signIn, getAuth} from "../../redux/actions/auth";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Helmet} from "react-helmet";

import Header from "../../components/Header";
import Button from '@material-ui/core/Button';
import {useStyles} from '../../css/style'

import {spacing} from "@material-ui/system";
import {
    CssBaseline,
    Paper as MuiPaper,
    withWidth,
    TextField as MuiTextField,
    Card as MuiCard,
    Typography,
} from "@material-ui/core";

import {isWidthUp} from "@material-ui/core/withWidth";
import AlertDialog from "../../components/AlertDialog";

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

const signInScheme = Yup.object({
    email: Yup.string()
        .required("이메일을 입력해 주세요.")
        .matches(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i, "올바르지 않은 형식 입니다."),
    password: Yup.string()
        .required("비밀번호를 입력해 주세요.")
        .matches(
            /^[0-9a-zA-Z!@#$%^&*()?+-_~=/]{6,40}$/,
            "올바르지 않은 형식 입니다."
        )
});

const TextField = styled(MuiTextField)<{ my?: number }>(spacing);

const SignIn: React.FC<DashboardPropsType> = ({ width }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [alert, setAlert] = useState<any>({title: '', msg: '', open: false})
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const signInFormik = useFormik({
        initialValues: {
            email: "",
            password: "",
            submit: false
        },
        validationSchema: signInScheme,
        onSubmit: async (values, {setErrors, setStatus, setSubmitting}) => {
            try {
                await dispatch(
                    signIn({
                        email: values.email,
                        password: values.password
                    })
                );

                await dispatch(getAuth())

                history.push("/");
            } catch (error) {
                console.log(error);
                setAlert({title: '로그인 안내', msg: '로그인에 실패하였습니다. 이메일과 패스워드를 확인해주세요.', open: true})

                setStatus({success: false});
                setErrors({submit: 'fail'});
                setSubmitting(false);
            }
        }
    });

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        isSubmitting,
        errors,
        values,
        touched
    } = signInFormik;

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
                        <Card style={{height: '550px', backgroundColor: 'white'}}>
                            <Typography variant="h3" style={{
                                height: '107.5px',
                                lineHeight: '107.5px',
                                textAlign: 'center',
                            }}>
                                로그인
                            </Typography>
                            <form noValidate onSubmit={handleSubmit} style={{width: '75%', margin: '0 auto', marginTop: '20px'}}>
                                {alert.open && <AlertDialog data={alert} handleAlert={setAlert}/>}
                                <div style={{maxWidth: '300px', margin: '0 auto'}}>
                                    <TextField
                                        type="email"
                                        name="email"
                                        label="Email"
                                        value={values.email}
                                        error={Boolean(touched.email && errors.email)}
                                        fullWidth
                                        helperText={touched.email && errors.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        my={2}
                                        style={{height:'60px'}}
                                    />
                                    <TextField
                                        type="password"
                                        name="password"
                                        label="Password"
                                        value={values.password}
                                        error={Boolean(touched.password && errors.password)}
                                        fullWidth
                                        helperText={touched.password && errors.password}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        my={2}
                                        style={{marginTop: '10px', height:'40px'}}
                                    />
                                    <Button
                                        type="submit"
                                        className={classes.submitBtn}
                                        style={{
                                            marginTop: '60px',
                                            marginBottom: '5px',
                                            width: '100%',
                                            height: '56px',
                                            fontSize: '14px'
                                        }}
                                        variant="contained"
                                        color="primary"
                                        disabled={isSubmitting}
                                    >
                                        로그인
                                    </Button>
                                    <div style={{fontSize: '15px'}}>
                                        <Button
                                            component={Link}
                                            to="/auth/forgot-password"
                                            fullWidth
                                            color="primary"
                                        >
                                            Forgot password
                                        </Button>
                                        <div style={{marginTop: '40px', fontSize: '15px'}}>
                                            <Button
                                                component={Link}
                                                to="/auth/sign-up"
                                                fullWidth
                                            >
                                                회원 가입
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Card>
                    </div>
                </MainContent>
            </AppContent>
        </Root>
    );
};

export default withWidth()(SignIn);
