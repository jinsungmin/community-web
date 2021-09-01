import React, {useEffect, useState} from 'react'
import styled from "styled-components/macro";
import {
    Card as MuiCard,
    Paper as MuiPaper,
    Typography,
    Divider
} from "@material-ui/core";
import {spacing} from "@material-ui/system";
import { useInView } from "react-intersection-observer"

const Card = styled(MuiCard)(spacing);
const Paper = styled(MuiPaper)(spacing);

const PostTable = ({post, history, location, loadNextPosts}: any) => {
    const {search} = location
    const [ref, inView] = useInView()
    const [page, setPage] = useState<number>(0)

    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
        if (inView) {
            if (post.total> (page+1) * 25)
                loadNextPosts(page+1)
                setPage(page + 1)
        }
    }, [inView])

    return (
        <Card mb={6} style={{margin: 0, width: '100%'}}>
            <Paper>
                <div style={{backgroundColor: 'white', marginTop: '20px'}}>
                    {post && post.data.map((row: any, index: number) => (
                        <div key={index} ref={post.data.length - 1 === index ? ref : null}>
                            <div
                                style={{padding: '5px 10px', cursor: 'pointer'}}
                                onClick={() => history.push({
                                    pathname: `/post/detail`,
                                    search: search + `&id=${row.id}`
                                })}
                            >
                                <Typography>
                                    {row.title}
                                </Typography>
                                <div style={{display: 'flex', opacity: '0.5'}}>
                                    <Typography style={{marginRight: '20px'}}>
                                        작성자: {row.userName}
                                    </Typography>
                                    <Typography>
                                        Up: {row.ratings}
                                    </Typography>
                                </div>
                            </div>
                            <Divider/>
                        </div>
                    ))}
                </div>
            </Paper>
        </Card>
    )
}

export default PostTable