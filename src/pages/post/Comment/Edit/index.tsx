import React, {useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {findAll, updateOne} from '../../../../services/commentService'

import Edit from './Edit'
import {getAuthReducer} from "../../../../redux/reducers";
import {getCommentsInit} from "../../../../redux/actions/comment";

export default ({comment, child, setChild, history, page}: any) => {
    const {postId, id, content, parentId} = comment
    const {user}: any = useSelector(getAuthReducer);
    const dispatch = useDispatch()

    const updateComment = async ({submit, ...data}: any) => {
        if (parentId) {
            data.parentId = parentId
        }
        await updateOne(id, data).then(async (res: any) => {
            await dispatch(getCommentsInit({postId, start: 0, perPage: (page+1) * 10}))
            if (parentId) {
                const res: any= await findAll({start: 0, perPage: 10, parentId:data.parentId})
                setChild({...child, [data.parentId]: {...res.data, open: true}})
            }
        }).catch((error) => {
            history.push('/error/500')
            throw error;
        })
    }

    return <Edit updateComment={updateComment} input={content} userId={user.id} />
}