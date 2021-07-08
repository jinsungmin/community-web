import React from 'react'
import {useSelector} from "react-redux";
import {getPostDetailReducer} from "../../../redux/reducers";

const Detail = ({history, user}: any) => {
    const {post}: any = useSelector(getPostDetailReducer);
    console.log(post)
    return(
        <></>
    )
}

export default Detail