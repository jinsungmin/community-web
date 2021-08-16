import React, {useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateOne} from '../../../../services/commentService'

import Edit from './Edit'
import {getAuthReducer} from "../../../../redux/reducers";
import {getComments} from "../../../../redux/actions/comment";

export default ({comment, history}: any) => {
    const {postId, id, content, parentId} = comment
    const {user}: any = useSelector(getAuthReducer);
    const dispatch = useDispatch()

    const updateComment = async ({submit, ...data}: any) => {
        if (parentId) {
            data.parentId = parentId
        }
        await updateOne(id, data).then((res: any) => {
            dispatch(getComments({postId, start: 0, perPage: 10}))
        }).catch((error) => {
            history.push('/error/500')
            throw error;
        })
    }

    return <Edit updateComment={updateComment} input={content} userId={user.id}/>
}