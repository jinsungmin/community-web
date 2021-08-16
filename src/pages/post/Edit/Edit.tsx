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
import EditorInput from '../Container/EditorInput'
import {useSelector} from "react-redux";
import {getCategoryListReducer, getPostDetailReducer} from "../../../redux/reducers";
import SelectInput from "../Container/SelectInput";

const Card = styled(MuiCard)(spacing);

const Edit = ({editPost, userId}: any) => {
    const [category, setCategory] = useState<any>({id: -1, name: ''})
    const [title, setTitle] = useState<any>()
    const [content, setContent] = useState<any>()
    const {categories}: any = useSelector(getCategoryListReducer)
    const [loading, setLoading] = useState(false)
    const [submit, setSubmit] = useState(false)
    const classes = useStyles()
    const {post}: any = useSelector(getPostDetailReducer);

    useEffect(() => {
        if (post) {
            setTitle(post.title)
            setContent(post.content)
            setCategory(categories.data.find((row: any) => row.id === post.categoryId))
        }
    }, [post])

    const submitCheck = () => {
        //return !(post.title && post.content && post.content.length <= 1000);
        return false
    }

    useEffect(() => {
        const create = async () => {
            if (submit) {
                try {
                    await editPost({category, title, content})
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
                    게시글 수정
                </Typography>
            </div>
            {loading && <Loader/>}
            <Card style={{backgroundColor: 'white', padding: '20px', marginBottom: '20px', display: 'flex'}}>
                <div style={{flex: 1}}>
                    <SelectInput categories={categories} input={category} field='categoryId' handleChange={setCategory} classes={classes}/>
                </div>
                <div style={{flex: 4}}>
                    <TextInput input={title} field='title' handleChange={setTitle} classes={classes}/>
                </div>
            </Card>
            <Card style={{backgroundColor: 'white', height:'500px', marginBottom: '20px'}}>
                <EditorInput content={content} setContent={setContent}/>
            </Card>
            <div style={{textAlign: 'center'}}>
                <SubmitBtn submitCheck={submitCheck} title='수정 확인' text='수정 완료' msg='게시물을 수정하시겠습니까?' setSubmit={setSubmit}/>
            </div>
        </div>
    )
}

export default Edit