import React from 'react'
import styled from "styled-components/macro";
import {
    Card as MuiCard,
    Paper as MuiPaper,
    Typography,
    Divider
} from "@material-ui/core";
import {spacing} from "@material-ui/system";

const Card = styled(MuiCard)(spacing);
const Paper = styled(MuiPaper)(spacing);

const NewsTable = ({news, history}: any) => {
    console.log(news)
    return (
        <Card mb={6} style={{margin: 0, width: '100%'}}>
            <Paper>
                <div style={{backgroundColor: 'white', marginTop: '20px'}}>
                    {news.data.map((row: any, index: number) => (
                        <div key={index}>
                            <div
                                style={{padding: '5px 10px', cursor: 'pointer'}}
                                onClick={() => window.open(row.url)}
                            >
                                <Typography>
                                    {row.title}
                                </Typography>
                            </div>
                            <Divider/>
                        </div>
                    ))}
                </div>
            </Paper>
        </Card>
    )
}

export default NewsTable