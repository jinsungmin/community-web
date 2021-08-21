import * as React from 'react';
import GoogleLogin from 'react-google-login';
import {signInSocial, getAuth} from "../../../redux/actions/auth";
import {useDispatch} from "react-redux";

const GoogleLoginBtn = (props: any) => {
    const {history} = props
    //클라이언트 ID (환경변수)
    let googleClientId:string=process.env.REACT_APP_GOOGLE_CLIENT_ID || "";
    const dispatch = useDispatch();
    //사용자 정보를 담아둘 userObj
    const [userObj, setUserObj]=React.useState({
        email:"",
        name:""
    })
    //로그인 성공시 res처리
    const onLoginSuccess = async (res:any)=>{
        setUserObj({...userObj,
            email:res.profileObj.email,
            name:res.profileObj.name
        })
        await dispatch(
            signInSocial({
                type: 'google',
                token: res.tokenId
            })
        );
        await dispatch(getAuth())

        history.push({
            pathname: `/post`,
            search: `?mid=일반`,
            state: {id: 43242312}
        })
    }

    return (
        <div>
            <GoogleLogin
                clientId = {googleClientId}
                buttonText="Login with Google"
                onSuccess={result=>onLoginSuccess(result)}
                onFailure={result => console.log(result)}
            />

        </div>
    );
};

export default GoogleLoginBtn;