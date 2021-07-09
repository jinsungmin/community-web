import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {getAuthReducer} from "../../../redux/reducers";
import {getPost} from "../../../redux/actions/post"
import {getComments} from "../../../redux/actions/comment"
import Loader from '../../../components/Loader'
import {create, deleteOne, findAll} from "../../../services/ratingService"

import Detail from './Detail'

export default ({match:{path, params}, history}: any) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState<any>(null)
    const {user}: any = useSelector(getAuthReducer);
    const [rating, setRating] = useState<any>()

    useEffect(() => {
        const init = async () => {
            try {
                const {data}: any = await findAll({userId: user.id, postId: params.id})
                setRating(data.data[0])
                dispatch(getPost(params.id))
                dispatch(getComments({postId: params.id, start: 0, perPage: 10}))
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

    const handleRating = async (type: number) => {
        const props = {
            userId: user.id,
            postId: params.id,
            type
        }
        if (!rating) {
            await create(props).then(async (res) => {
                const {data}: any = await findAll({userId: user.id, postId: params.id})
                setRating(data.data[0])
                dispatch(getPost(params.id))
            }).catch(e => {
                console.log(e)
                history.push(`/error/500`)
            })
        }
        if (rating && type === rating.type) {
            await deleteOne(rating.id).then(async (res) => {
                setRating(null)
                dispatch(getPost(params.id))
            }).catch(e => {
                console.log(e)
                history.push(`/error/500`)
            })
        }
    }

    if (loading) return <Loader />
    return <Detail user={user} history={history} handleRating={handleRating} rating={rating}/>
}