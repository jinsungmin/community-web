import React from 'react'
import {Typography} from "@material-ui/core";
import Table from "../Container/Table";
import {useStyles} from "../../../css/style";

const List = ({news, props}: any) => {
    const {history, location} = props
    const classes = useStyles()
    console.log(news)
    return (
        <div className={classes.content}>
            <div style={{height: '50px', lineHeight: '50px'}}>
                <Typography variant="h4" style={{float: 'left', marginTop: '10px'}}>
                    뉴스
                </Typography>
            </div>
            <div>
                <Table news={news} history={history} />
            </div>
        </div>
    )
}

export default List