import React from 'react'
import {useSelector} from "react-redux";
import {getPostDetailReducer} from "../../../redux/reducers";
import Comment from "../Comment"
import {
    Card as MuiCard,
    Paper as MuiPaper,
    Button,
    Typography,
    Divider
} from "@material-ui/core";
import {useStyles} from "../../../css/style";
import styled from "styled-components/macro";
import {spacing} from "@material-ui/system";
import EditorShow from "../Container/EditorShow";

const Card = styled(MuiCard)(spacing);

const Detail = ({history, user, params, handleRating, rating}: any) => {
    const {post}: any = useSelector(getPostDetailReducer);
    const classes = useStyles()

    return (
        <div className={classes.content}>
            {post && <div style={{display: 'block'}}>
                <div style={{height: '50px', lineHeight: '50px'}}>
                    <Typography variant="h4" style={{float: 'left', marginTop: '10px'}}>
                        {post.title}
                    </Typography>
                    {user.id === post.userId && <Button variant="contained" color="primary" className={classes.createBtn}
                            onClick={(e: any) => history.push({
                                pathname: `/post/edit/${post.id}`,
                                state: params
                            })}
                    >
                        수정
                    </Button>}
                </div>
                <Card style={{margin: '10px 0', backgroundColor: 'white', height:'500px', marginBottom: '20px'}}>
                    <EditorShow content={post.content} />
                </Card>
                <div style={{marginTop: '10px', textAlign: 'center'}}>
                    <Button
                        color={rating && rating.type ? 'primary' : 'default'}
                        onClick={(e) => {
                            handleRating(1)
                        }}>
                        Up
                    </Button>
                    <Button disabled style={{color: 'black'}}>
                        {post.ratings}
                    </Button>
                    <Button
                        color={rating && !rating.type ? 'primary' : 'default'}
                        onClick={(e) => {
                            handleRating(0)
                        }}>
                        Down
                    </Button>
                </div>
                <Divider style={{margin: '40px 0'}}/>
                <Comment history={history} postId={post.id}/>

            </div>}
        </div>
    )
}

export default Detail