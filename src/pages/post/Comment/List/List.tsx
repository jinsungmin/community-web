import React, {useState, useEffect} from 'react'
import {useSelector} from "react-redux";
import {getCommentListReducer} from "../../../../redux/reducers";
import styled from "styled-components/macro";
import {
    Card as MuiCard,
    Paper as MuiPaper
} from "@material-ui/core";
import {spacing} from "@material-ui/system";

import Detail from './Detail'
import { useInView } from "react-intersection-observer"

const Card = styled(MuiCard)(spacing);
const Paper = styled(MuiPaper)(spacing);

const List = ({user, history, page, deleteComment, loadNextComment}: any) => {
    const {comments}: any = useSelector(getCommentListReducer);
    const [ref, inView] = useInView()

    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
        if (inView) {
            if (comments.total> (page+1) * 10)
            loadNextComment(page+1)
        }
    }, [inView])

    return (
        <Card mb={6} style={{margin: 0, width: '100%'}}>
            <Paper>
                <div style={{backgroundColor: 'white', marginTop: '20px'}}>
                    {comments && comments.data.map((row: any, index: number) => (
                        comments.data.length -1 === index ?
                            <div key={index} ref={ref}>
                                <Detail row={row} user={user} history={history} deleteComment={deleteComment} />
                            </div>
                             : <div key={index}>
                                 <Detail row={row} user={user} history={history} deleteComment={deleteComment} />
                            </div>

                    ))}
                </div>
            </Paper>
        </Card>

    )
}

export default List