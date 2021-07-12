import React, {useCallback, useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateOne} from '../../../services/postService'
import {getPost} from "../../../redux/actions/post"
import Edit from './Edit'
import {getAuthReducer} from "../../../redux/reducers";
import Loader from "../../../components/Loader";

export default ({match: {path, params}, history}: any) => {
    const dispatch = useDispatch()
    const {user}: any = useSelector(getAuthReducer);
    const [loading, setLoading] = useState<any>(null)

    useEffect(() => {
        dispatch(getPost(params.id))
    }, [])

    const editPost = async ({submit, ...data}: any) => {
        // 임시 (에디터 적용 전)
        data.content = '테스트 내용입니다.'
        data.userId = user.id

        setLoading(true)

        await updateOne(Number(params.id), data).then((res: any) => {
            console.log('update:', res.data)
            history.push(`/post`)
            setLoading(false)
        }).catch((error) => {
            setLoading(false)
            history.push('/error/500')
            throw error;
        })
    }

    if (loading) return <Loader />
    return <Edit editPost={editPost} userId={user.id} />

}