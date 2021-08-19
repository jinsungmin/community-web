import React, {useState, useEffect} from 'react'
import {useStyles} from '../../../css/style'
import {useSelector} from "react-redux";
import {getPostListReducer} from "../../../redux/reducers";

import {
    Button,
    Typography
} from "@material-ui/core";

import Table from '../Container/Table'

const List = ({user, props}: any) => {
    const {history, location} = props
    const classes = useStyles()

    const {post}: any = useSelector(getPostListReducer);
    return (
        <div className={classes.content}>
            <div style={{height: '50px', lineHeight: '50px'}}>
                <Typography variant="h4" style={{float: 'left', marginTop: '10px'}}>
                    게시글
                </Typography>
                <Button variant="contained" color="primary" className={classes.createBtn}
                        onClick={(e: any) => history.push('/post/create')}
                >
                    글쓰기
                </Button>
            </div>
            <div>
                <Table post={post} history={history} location={location}/>
            </div>
        </div>
    )
}

export default List