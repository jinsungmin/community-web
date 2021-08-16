import React, {useEffect, useState} from 'react'
import {useStyles} from "../../../../css/style";

import TextInput from '../Container/TextInput'
import {
    Typography,
    Button
} from "@material-ui/core";

const Edit = ({updateComment, input, userId}: any) => {
    const [content, setContent] = useState<any>(input)
    const classes = useStyles()

    const submitCheck = () => {
        return !(content && content.length <= 1000);
    }

    const submitBtn = async () => {
        try {
            await updateComment({content})
            setContent('')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Typography>댓글 수정</Typography>
            <TextInput input={content} handleChange={setContent} classes={classes}/>
            <div style={{textAlign: 'center'}}>
                <Button variant="outlined"
                        disabled={submitCheck()}
                        onClick={submitBtn}
                        style={{width: '30%', height: '30px'}}>
                    수정
                </Button>
            </div>
        </>
    )
}

export default React.memo(Edit)