import React, {useState, useEffect} from 'react'
import {findAll} from '../../../services/newsService'
import Loader from '../../../components/Loader'
import List from './List'

export default (props: any) => {
    const {history, location} = props
    const [news, setNews] = useState<any>()

    const [loading, setLoading] = useState<any>(null)

    useEffect(() => {
        const init = async () => {
            try {
                const {data}: any = await findAll()
                setNews(data)
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

    if (!news) return <Loader />
    else return <List news={news} props={props} />
}