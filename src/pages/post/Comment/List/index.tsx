import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {getAuthReducer} from "../../../../redux/reducers";
import {getComments} from "../../../../redux/actions/comment"
import {deleteOne} from "../../../../services/commentService"

import List from './List'

export default ({postId, history}: any) => {
    const dispatch = useDispatch()
    const {user}: any = useSelector(getAuthReducer);

    useEffect(() => {
        const init = async () => {
            try {
                dispatch(getComments({postId, start: 0, perPage: 10}))
            } catch(e) {
                console.log(e)
                history.push(`/error/500`)
            }
        }
        init().then(() => {
        })
    }, [history])

    const deleteComment = async (commentId: number) => {
        try {
            await deleteOne(commentId)
            dispatch(getComments({postId, start: 0, perPage: 10}))
        } catch(e) {
            console.log(e)
            history.push(`/error/500`)
        }
    }

    return <List user={user} history={history} deleteComment={deleteComment} />
}