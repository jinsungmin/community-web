import React, {useState, useEffect} from 'react'
import {useSelector} from "react-redux";
import {getPostListReducer} from "../../../redux/reducers";

const List = ({user, props}: any) => {

    const {post}: any = useSelector(getPostListReducer);
    useEffect(() => {
        console.log(post)
    }, [post])

    return (
        <>
        </>
    )
}

export default List