import React, {useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {create} from '../../../../services/commentService'

import Create from './Create'
import {getAuthReducer} from "../../../../redux/reducers";
import {getComments} from "../../../../redux/actions/comment";

export default ({postId, commentId, history}: any) => {
    const {user}: any = useSelector(getAuthReducer);
    const dispatch = useDispatch()

    const createComment = async ({submit, ...data}: any) => {
        if (data.type === 'post') {
            data.postId = postId
        } else {
            data.parentId = commentId
        }
        data.userId = user.id

        await create(data).then((res: any) => {
            if (res.status === 201) {
                dispatch(getComments({postId, start: 0, perPage: 10}))
            }
        }).catch((error) => {
            history.push('/error/500')
            throw error;
        })
    }

    return <Create createComment={createComment} userId={user.id}/>
}