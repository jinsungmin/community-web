import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {getAuthReducer} from "../../../redux/reducers";
import {getPosts} from "../../../redux/actions/post"
import Loader from '../../../components/Loader'

import List from './List'

const qs = require('qs')

export default (props: any) => {
    const {history, location} = props
    const dispatch = useDispatch()
    const [loading, setLoading] = useState<any>(null)
    const {user}: any = useSelector(getAuthReducer);

    useEffect(() => {
        const init = async () => {
            let params = qs.parse(location.search, {ignoreQueryPrefix: true})
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
    }, [])

    if (loading) return <Loader />
    return <List user={user} props={props} />
}