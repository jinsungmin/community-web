import React from 'react'

import List from './List'
import Create from './Create'
import {Typography} from "@material-ui/core";
import {useStyles} from "../../../css/style";

const Comment = ({postId, history}: any) => {
    const classes = useStyles()
    return (
        <div className={classes.content}>
            <div style={{height: '50px', lineHeight: '50px'}}>
                <Typography variant="h4" style={{float: 'left', marginTop: '10px'}}>
                    댓글
                </Typography>
            </div>
            <Create postId={postId} history={history} />
            <List postId={postId} history={history} />
        </div>
    )
}

export default Comment
