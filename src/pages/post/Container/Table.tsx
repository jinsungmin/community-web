import React from 'react'
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

const PostTable = ({post, history, location}: any) => {
    const {search} = location
    return (
        <Card mb={6} style={{margin: 0, width: '100%'}}>
            <Paper>
                <div style={{backgroundColor: 'white', marginTop: '20px'}}>
                    {post && post.data.map((row: any, index: number) => (
                        <div key={index}>
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