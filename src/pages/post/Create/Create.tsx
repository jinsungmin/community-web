import React, {useState, useEffect} from 'react'
import {useStyles} from "../../../css/style";
import {
    Card as MuiCard,
    Paper as MuiPaper,
    Button,
    Typography,
    Divider
} from "@material-ui/core";
import styled from "styled-components/macro";
import {spacing} from "@material-ui/system";
import SubmitBtn from "../../../components/SubmitBtn";
import Loader from '../../../components/Loader'
import TextInput from '../Container/TextInput'

const Card = styled(MuiCard)(spacing);

const Create = ({createPost, userId}: any) => {
    const [post, setPost] = useState({title: '', content: ''})
    const [loading, setLoading] = useState(false)
    const [submit, setSubmit] = useState(false)
    const classes = useStyles()

    const submitCheck = () => {
        //return !(post.title && post.content && post.content.length <= 1000);
        return false
    }

    useEffect(() => {
        const create = async () => {
            if (submit) {
                try {
                    await createPost(post)
                } catch (error) {
                    console.log(error)
                }
            }
        }
        create()
    }, [submit])

    return (
        <div className={classes.content}>
            <div style={{height: '50px', lineHeight: '50px'}}>
                <Typography variant="h4" style={{marginTop: '10px'}}>
                    게시글 등록
                </Typography>
            </div>
                {loading && <Loader/>}
                <Card style={{backgroundColor: 'white', marginBottom: '20px'}}>
                    <TextInput input={post.title} field='title' handleChange={setPost} classes={classes}/>
                </Card>
                <Card style={{backgroundColor: 'white', height:'400px', marginBottom: '20px'}}>
                </Card>
                <div style={{textAlign: 'center'}}>
                    <SubmitBtn submitCheck={submitCheck} title='등록 확인' text='등록 완료' msg='게시물을 등록하시겠습니까?' setSubmit={setSubmit}/>
                </div>
        </div>
    )
}

export default Create