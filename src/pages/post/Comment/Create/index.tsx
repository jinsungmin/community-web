import React, {useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
//import {create} from '../../../../services/commentService'

import Create from './Create'
import {getAuthReducer} from "../../../../redux/reducers";
import {createComment} from "../../../../redux/actions/comment";
import {findAll} from "../../../../services/commentService";

export default ({postId, commentId, child, setChild, history, type}: any) => {
    const {user}: any = useSelector(getAuthReducer);
    const dispatch = useDispatch()

    const addComment = async ({submit, ...data}: any) => {
        data.postId = postId
        if (type === 'comment') {
            data.parentId = commentId
        }
        data.userId = user.id
        data.userName = user.name

        try {
            await dispatch(createComment(data))
            if (type === 'comment') {
                const res: any= await findAll({start: 0, perPage: 10, parentId:data.parentId})
                setChild({...child, [data.parentId]: {...res.data, open: true}})
            }
        } catch(error) {
            history.push('/error/500')
            throw error;
        }
    }

    return <Create createComment={addComment} userId={user.id}/>
}