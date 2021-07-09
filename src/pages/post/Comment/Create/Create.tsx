import React, {useEffect, useState} from 'react'
import {useStyles} from "../../../../css/style";

import TextInput from '../Container/TextInput'
import {
    Typography,
    Button
} from "@material-ui/core";

const Create = ({createComment, userId}: any) => {
    const [content, setContent] = useState('')
    const classes = useStyles()

    const submitCheck = () => {
        return !(content && content.length <= 1000);
    }

    const submitBtn = async () => {
        try {
            await createComment({content, type: 'post'})
            setContent('')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Typography>댓글 작성</Typography>
            <TextInput input={content} handleChange={setContent} classes={classes}/>
            <div style={{textAlign: 'center'}}>
                <Button variant="outlined"
                        disabled={submitCheck()}
                        onClick={submitBtn}
                        style={{width: '30%', height: '30px'}}>
                    등록
                </Button>
            </div>
        </>
    )
}

export default Create