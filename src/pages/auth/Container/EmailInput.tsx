import React from 'react'
import Timer from "../../../components/Timer";
import {verifyConfirm, verifyEmail} from "../../../services/authService";
import VerifyButton from '../../../components/VerifyButton';

import {
    TextField,
    Box
} from "@material-ui/core";

const EmailInput = (props: any) => {
    const {email, code, handleChange, setAlert, setLoading, handleBlur, handleToken} = props
    const [emailToken, setEmailToken] = React.useState<string>()
    const [timeOut, setTimeOut] = React.useState(false)
    const [disabled, setDisabled] = React.useState(false)

    const submitCode = async (style: any) => {
        if (style.backgroundColor === '#3269d3') {
            try {
                if (!disabled) {
                    if (!timeOut) {
                        const result: any = await verifyConfirm({
                            code: code.value,
                            codeToken: emailToken
                        })
                        setAlert({title: '인증번호 안내', msg: '인증에 성공하셨습니다.', open: true})
                        handleToken(result.emailToken)
                        setDisabled(true)
                    } else {
                        setAlert({title: '인증번호 안내', msg: '인증시간이 만료되었습니다. 다시 인증을 진행해주세요.', open: true})
                    }
                } else {
                    setAlert({title: '인증번호 안내', msg: '이미 인증하셨습니다.', open: true})
                }
            } catch (error) {
                console.log(error)
                setAlert({title: '인증번호 안내', msg: '입력하신 인증번호가 일치하지 않습니다. 인증 번호를 확인해주세요.', open: true})
            }
        }
    }

    const handleTimer = (timeout: any) => {
        if (timeout) {
            setTimeOut(true)
        }
    }

    const submitEmail = async (style: any) => {
        if (style.backgroundColor === '#3269d3') {
            try {
                if(!disabled) {
                    setLoading(true)
                    const ret: any = await verifyEmail({
                        email: email.value,
                        type: 'register'
                    })
                    if (ret.codeToken) {
                        console.log('email:', ret);
                    }
                    setLoading(false)
                    setEmailToken(ret.codeToken);
                    setTimeOut(false)
                    setAlert({title: '인증번호 안내', msg: '입력하신 이메일 주소로 인증번호를 전송하였습니다. 이메일로 보내드린 코드를 입력해주세요.', open: true})
                } else {
                    setAlert({title: '인증번호 안내', msg: '이미 인증하셨습니다.', open: true})
                }
            } catch (error) {
                console.log(error)
                setAlert({title: '안내', msg: '이미 가입된 이메일입니다.', open: true})
                setLoading(false)
            }
        }
    }

    return (
    <>
        <Box style={{display: 'flex', marginTop: '25px'}}>
            <Box style={{width: '85%'}}>
                <TextField
                    name="email"
                    label="이메일"
                    placeholder="이메일을 입력해주세요"
                    error={Boolean(email.touched && email.errors)}
                    value={email.value}
                    helperText={email.touched && email.errors}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputProps={{
                        readOnly: disabled
                    }}
                    style={{width: '100%', height:'30px', fontSize: '15px'}}
                />
            </Box>
            <VerifyButton
                data={{
                    text: '전송',
                    token: null,
                    match: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                    data: email.value
                }}
                disabled={!disabled}
                submit={submitEmail}/>
        </Box>
        {!disabled && emailToken && <Box style={{marginTop: '25px', height:'50px'}}>
            <Box style={{display: 'flex'}}>
                <Box style={{width: '85%'}}>
                    <TextField
                        name="code"
                        label="인증 번호"
                        placeholder="인증 번호를 입력해주세요"
                        error={Boolean(code.touched && code.errors)}
                        value={code.value}
                        helperText={code.touched && code.errors}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        inputProps={{
                            readOnly: disabled
                        }}
                        style={{width: '100%', height: '30px', fontSize: '15px'}}
                    />
                </Box>
                <VerifyButton data={{text: '인증', token: emailToken, match: /^[0-9]{6}$/, data: code.value}}
                              submit={submitCode}/>
            </Box>
            {!disabled && emailToken && <Box style={{textAlign: 'right', marginRight: '10px'}}>
                <Timer time={180} handleTimer={handleTimer} reset={emailToken}/>
            </Box>}
        </Box>}
    </>
    )
}

export default React.memo(EmailInput);