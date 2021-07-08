import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {getAuthReducer} from "../../../redux/reducers";
import {getPosts} from "../../../redux/actions/postList"
import Loader from '../../../components/Loader'

import List from './List'

export default (props: any) => {
    const {history} = props
    const dispatch = useDispatch()
    const [loading, setLoading] = useState<any>(null)
    const {user}: any = useSelector(getAuthReducer);

    useEffect(() => {
        const init = async () => {
            try {
                dispatch(getPosts({start: 0, perPage:25}))
            } catch(e) {
                console.log(e)
                history.push(`/error/500`)
            }
        }
        setLoading(true)
        init().then(() => {
            setLoading(false)
        })
    }, [props])

    if (loading) return <Loader />
    return <List user={user} props={props} />
}