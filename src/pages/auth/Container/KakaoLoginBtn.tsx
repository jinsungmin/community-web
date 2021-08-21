import React from 'react';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components'
import {signInSocial, getAuth} from "../../../redux/actions/auth";
import {useDispatch} from "react-redux";

const KaKaoLoginBtn = (props: any) => {
    const {history} = props
    const dispatch = useDispatch();
    let token: any = process.env.REACT_APP_KAKAO_JS_KEY;

    const handleLogin = async (data: any) => {
        try {
            const {response} = data
            await dispatch(
                signInSocial({
                    type: 'kakao',
                    token: response.access_token
                })
            );
            await dispatch(getAuth())
            history.push({
                pathname: `/post`,
                search: `?mid=일반`,
                state: {id: 43242312}
            })
        } catch (e) {
            console.log(e)
        }
    }

    return <KaKaoBtn
        style={{width: '170px', height:'40px'}}
        token={token}
        onSuccess={handleLogin}
        onFail={handleLogin}
        onLogout={console.info}
    >
        <div>
            카카오로 로그인하기
        </div>
    </KaKaoBtn>
}

const KaKaoBtn = styled(KakaoLogin)`
  padding: 0;
  width: 150px;
  line-height: 40px;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;

export default KaKaoLoginBtn;