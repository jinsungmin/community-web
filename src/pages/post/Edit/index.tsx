import React, {useCallback, useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateOne} from '../../../services/postService'
import {getPost} from "../../../redux/actions/post"
import Edit from './Edit'
import {getAuthReducer} from "../../../redux/reducers";
import Loader from "../../../components/Loader";

export default ({match: {path, params}, history, location}: any) => {
    const dispatch = useDispatch()
    const {user}: any = useSelector(getAuthReducer);
    const [loading, setLoading] = useState<any>(null)
    const {state} = location

    useEffect(() => {
        dispatch(getPost(params.id))
    }, [])

    const editPost = async ({submit, ...data}: any) => {
        data.userId = user.id
        data.categoryId = data.category.id
        setLoading(true)

        await updateOne(Number(params.id), data).then((res: any) => {
            history.push({
                pathname: `/post`,
                search: `?mid=${data.category.name}`,
                state: {id: data.categoryId}
            })
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