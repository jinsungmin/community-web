import React, {useCallback, useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {create} from '../../../services/postService'

import Create from './Create'
import {getAuthReducer} from "../../../redux/reducers";
import Loader from "../../../components/Loader";
import {createPosts} from "../../../redux/actions/post"

export default ({match: {path, params}, history}: any) => {
    const {user}: any = useSelector(getAuthReducer);
    const [loading, setLoading] = useState<any>(null)
    const dispatch = useDispatch()

    const createPost = async ({submit, ...data}: any) => {
        data.userId = user.id
        //data.userName = user.name
        data.categoryId = data.category.id
        console.log("test:", data)
        try {
            setLoading(true)

            await dispatch(createPosts(data))

            history.push({
                pathname: `/post`,
                search: `?mid=${data.category.name}`,
                state: {id: data.categoryId}
            })
        } catch(error) {
            history.push('/error/500')
            throw error;
        } finally {
            setLoading(false)
        }
        /*
        await create(data).then((res: any) => {
            if (res.status === 201) {
                history.push({
                    pathname: `/post`,
                    search: `?mid=${data.category.name}`,
                    state: {id: data.categoryId}
                })
            }
            setLoading(false)
        }).catch((error) => {
            setLoading(false)
            history.push('/error/500')
            throw error;
        }) */
    }

    if (loading) return <Loader/>
    return <Create createPost={createPost} userId={user.id}/>
}