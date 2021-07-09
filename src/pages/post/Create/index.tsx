import React, {useCallback, useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {create} from '../../../services/postService'

import Create from './Create'
import {getAuthReducer} from "../../../redux/reducers";
import Loader from "../../../components/Loader";

export default ({match: {path, params}, history}: any) => {
    const {user}: any = useSelector(getAuthReducer);
    const [loading, setLoading] = useState<any>(null)

    const createPost = async ({submit, ...data}: any) => {
        // 임시 (에디터 적용 전)
        data.content = '테스트 내용입니다.'
        data.userId = user.id

        setLoading(true)

        await create(data).then((res: any) => {
            if (res.status === 201) {
                console.log('create:', res.data)
                history.push(`/post`)
            }
            setLoading(false)
        }).catch((error) => {
            setLoading(false)
            history.push('/error/500')
            throw error;
        })
    }

    if (loading) return <Loader />
    return <Create createPost={createPost} userId={user.id}/>
}