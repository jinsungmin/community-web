import React, {useState} from "react";
import styled from "styled-components/macro";
import {Link} from "react-router-dom";
import {useStyles} from '../../css/style'
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import * as Yup from "yup";
import {spacing} from "@material-ui/system";
import AlertDialog from "../../components/AlertDialog";
import {
    withWidth,
    Card as MuiCard,
    Button,
    Typography,
} from "@material-ui/core";

import TextInput from './Container/TextInput'
import EmailInput from './Container/EmailInput'
import Loader from '../../components/Loader'
import {signUp} from "../../redux/actions/auth";
import {getAuth} from "../../redux/actions/auth";

const Card = styled(MuiCard)(spacing);

const signupScheme = Yup.object({
    name: Yup.string()
        .required("이름을 입력해 주세요.")
        .matches(/^[ㄱ-ㅎ|가-힣A-Za-z*]{1,20}$/, "올바르지 않은 형식 입니다."),
    email: Yup.string()
        .required("이메일을 입력해 주세요.")
        .matches(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i, "올바르지 않은 형식 입니다."),
    password: Yup.string()
        .required("패스워드를 입력해 주세요.")
        .matches(/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, '숫자/영문/특수문자 포함 최소 8자 이상 입력해 주세요.'),
    passwordConfirm: Yup.string()
        .required("패스워드를 다시 입력하세요.")
        .oneOf([Yup.ref('password'), null], "패스워드가 일치하지 않습니다."),
    code: Yup.string()
        .required("인증번호를 입력하세요.")
        .matches(/^[0-9]{6}$/, '인증번호를 확인하세요.')
});

const SignUp = () => {
    const [alert, setAlert] = useState<any>({title: '', msg: '', open: false})
    const [loading, setLoading] = useState<any>(null)
    const dispatch = useDispatch();
    const classes = useStyles()

    let history = useHistory();

    const signupFormik = useFormik({
        initialValues: {
            name: '',
            email: '',
            code: '',
            verifiedToken: '',
            password: '',
            passwordConfirm: '',
            submit: false
        },
        validationSchema: signupScheme,

        onSubmit: async (values, {setErrors, setStatus, setSubmitting}) => {
            try {
                console.log(values)
                setLoading(true)
                await dispatch(
                    signUp({
                        email: values.email,
                        name: values.name,
                        emailToken: values.verifiedToken,
                        password: values.password
                    }))
                await dispatch(getAuth())
                history.push(`/post`)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
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
    } = signupFormik;

    const handleToken = (token: string) => {
        values.verifiedToken = token
        console.log(values.verifiedToken)
    }

    const emailProps = {
        email: {
            value: values.email,
            errors: errors.email,
            touched: errors.email,
        },
        code: {
            value: values.code,
            errors: errors.code,
            touched: errors.code,
        },
        handleToken,
        setAlert,
        setLoading,
        handleChange,
        handleBlur
    }

    return (
        <div className={classes.login_form}>
            <Card style={{height: '800px', backgroundColor: 'white'}}>
                <Typography variant="h3" className={classes.auth_title}>
                    회원가입
                </Typography>
                    <form noValidate onSubmit={handleSubmit} style={{width: '60%', minWidth: '230px', margin: '0 auto'}}>
                        <div style={{height: '400px'}}>
                        {loading && <Loader/>}
                        {alert.open && <AlertDialog data={alert} handleAlert={setAlert} />}
                        <EmailInput {...emailProps} />
                        <TextInput
                            value={values.name}
                            errors={errors.name}
                            touched={touched.name}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            classes={classes}
                            label='이름'
                            field='name'
                        />
                        <TextInput
                            value={values.password}
                            errors={errors.password}
                            touched={touched.password}
                            type='password'
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            classes={classes}
                            label='비밀번호'
                            field='password'
                        />
                        <TextInput
                            value={values.passwordConfirm}
                            errors={errors.passwordConfirm}
                            touched={touched.passwordConfirm}
                            type='password'
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            classes={classes}
                            label='비밀번호 확인'
                            field='passwordConfirm'
                        />
                        </div>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{width: '100%', height: '56px'}}
                            disabled={isSubmitting}
                            className={classes.submitBtn}
                        >
                            회원가입
                        </Button>
                    </form>
                <div style={{padding: '0 20%'}}>
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
    );
};

export default withWidth()(SignUp);
