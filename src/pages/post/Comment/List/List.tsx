import React, {useState, useEffect} from 'react'
import {useSelector} from "react-redux";
import {getCommentListReducer} from "../../../../redux/reducers";

import styled from "styled-components/macro";
import {
    Card as MuiCard,
    Table,
    Paper as MuiPaper,
    Typography,
    TableBody,
    Divider
} from "@material-ui/core";
import {spacing} from "@material-ui/system";

const Card = styled(MuiCard)(spacing);
const Paper = styled(MuiPaper)(spacing);

const List = ({user, history, deleteComment}: any) => {
    const {comments}: any = useSelector(getCommentListReducer);

    return (
        <Card mb={6} style={{margin: 0, width: '100%'}}>
            <Paper>
                <Table style={{backgroundColor: 'white', marginTop: '20px'}}>
                    <TableBody>
                        {comments && comments.data.map((row: any, index: number) => (
                            <>
                                <div key={index}
                                     style={{padding: '5px 10px', display:'flex'}}
                                >
                                    <div style={{width:'80%'}}>
                                        <Typography>
                                            작성자: {row.userName}
                                        </Typography>
                                        <Typography>
                                            {row.content}
                                        </Typography>
                                    </div>
                                    <div style={{width:'20%'}}>
                                        {user.id === row.userId &&
                                        <div style={{float:'right'}}
                                             onClick={(e) => deleteComment(row.id)}
                                        >
                                            삭제
                                        </div>}
                                    </div>
                                </div>
                                <Divider/>
                            </>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Card>

    )
}

export default List