import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {getAuthReducer, getCommentListReducer} from "../../../../redux/reducers";
import {getComments} from "../../../../redux/actions/comment"
import {deleteOne} from "../../../../services/commentService"

import List from './List'

export default ({postId, history}: any) => {
    const dispatch = useDispatch()
    const {user}: any = useSelector(getAuthReducer);
    const [page, setPage] = useState<number>(0)
    const {comments}: any = useSelector(getCommentListReducer);

    useEffect(() => {
        const init = async () => {
            try {
                await dispatch(getComments({postId, start: 0, perPage: 10}))
            } catch(e) {
                console.log(e)
                history.push(`/error/500`)
            }
        }
        init().then(() => {
        })
    }, [])

    const loadNextComment = async (page: number) => {
        try {
            setPage(page)
            await dispatch(getComments({postId, start: page * 10, perPage: 10}))
        } catch(e) {
            console.log(e)
            history.push(`/error/500`)
        }
    }

    const deleteComment = async (commentId: number) => {
        try {
            await deleteOne(commentId)
            dispatch(getComments({postId, start: 0, perPage: 10}))
        } catch(e) {
            console.log(e)
            history.push(`/error/500`)
        }
    }

    return <List user={user} comments={comments} history={history} page={page} deleteComment={deleteComment} loadNextComment={loadNextComment} />
}