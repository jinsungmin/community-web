import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {getAuthReducer} from "../../../redux/reducers";
import {getPost} from "../../../redux/actions/post"
import Loader from '../../../components/Loader'

import Detail from './Detail'

export default ({match:{path, params}, history}: any) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState<any>(null)
    const {user}: any = useSelector(getAuthReducer);

    useEffect(() => {
        const init = async () => {
            try {
                dispatch(getPost(params.id))
            } catch(e) {
                console.log(e)
                history.push(`/error/500`)
            }
        }
        setLoading(true)
        init().then(() => {
            setLoading(false)
        })
    }, [history])

    if (loading) return <Loader />
    return <Detail user={user} history={history} />
}