import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {getAuthReducer} from "../../../../redux/reducers";
import {getComments, getCommentsInit} from "../../../../redux/actions/comment"
import {deleteOne} from "../../../../services/commentService"

import List from './List'

export default ({postId, history}: any) => {
    const dispatch = useDispatch()
    const {user}: any = useSelector(getAuthReducer);
    const [page, setPage] = useState<number>(0)
    const [child, setChild] = useState<any>({})

    useEffect(() => {
        const init = async () => {
            try {
                await dispatch(getCommentsInit({postId, start: 0, perPage: 10}))
            } catch(e) {
                console.log(e)
                history.push(`/error/500`)
            }
        }
        init().then(() => {
        })
    }, [postId])

    const loadNextComment = async (page: number) => {
        try {
            setPage(page)
            await dispatch(getComments({postId, start: page * 10, perPage: 10}))
        } catch(e) {
            console.log(e)
            history.push(`/error/500`)
        }
    }

    const deleteComment = async (data: any) => {
        const {id, parentId, clicked} = data
        try {
            await deleteOne(id)
            clicked[parentId].data = await clicked[parentId].data.filter((row:any) => row.id !== id)
            await setChild(clicked)
            await dispatch(getCommentsInit({postId, start: 0, perPage: (page+1) * 10}))
        } catch(e) {
            console.log(e)
            history.push(`/error/500`)
        }
    }

    return <List user={user} history={history} page={page} child={child} setChild={setChild} deleteComment={deleteComment} loadNextComment={loadNextComment} />
}