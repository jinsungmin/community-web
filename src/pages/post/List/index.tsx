import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {getAuthReducer} from "../../../redux/reducers";
import {getPosts} from "../../../redux/actions/post"
import Loader from '../../../components/Loader'
import List from './List'

export default (props: any) => {
    const {history, location} = props
    const dispatch = useDispatch()
    const [loading, setLoading] = useState<any>(true)
    const {user}: any = useSelector(getAuthReducer);

    useEffect(() => {
        const init = async () => {
            try {
                dispatch(getPosts({start: 0, perPage:25, categoryId: location.state.id}))
            } catch(e) {
                console.log(e)
                history.push(`/error/500`)
            }
        }
        setLoading(true)
        init().then(() => {
            setLoading(false)
        })
    }, [location])

    const loadNextPosts = async (page: number) => {
        try {
            await dispatch(getPosts({start: page * 10, perPage:25, categoryId: location.state.id}))
        } catch(e) {
            console.log(e)
            history.push(`/error/500`)
        }
    }

    if (loading) return <Loader />
    return <List user={user} props={props} loadNextPosts={loadNextPosts}/>
}