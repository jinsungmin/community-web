import React from 'react'
import styled from "styled-components/macro";
import {
    Card as MuiCard,
    Table,
    Paper as MuiPaper,
    Typography,
    TableCell,
    TableBody,
    TableHead,
    TableRow,
    TableSortLabel,
    Divider
} from "@material-ui/core";
import {spacing} from "@material-ui/system";
import moment from 'moment';

const Card = styled(MuiCard)(spacing);
const Paper = styled(MuiPaper)(spacing);

const PostTable = ({post, history}: any) => {
    return (
        <Card mb={6} style={{margin: 0}}>
            <Paper>
                <Table style={{backgroundColor: 'white', marginTop: '20px'}}>
                    <TableBody>
                        {post && post.data.map((row: any, index: number) => (
                            <>
                                <div key={index}
                                     style={{padding: '5px 10px'}}
                                     onClick={() => history.push(`/post/detail/${row.id}`)}
                                >
                                    <Typography>
                                        {row.title}
                                    </Typography>
                                    <div style={{display:'flex', opacity: '0.5'}}>
                                        <Typography style={{marginRight: '20px'}}>
                                            작성자: {row.userName}
                                        </Typography>
                                        <Typography>
                                            Up: {row.ratings}
                                        </Typography>
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

export default PostTable