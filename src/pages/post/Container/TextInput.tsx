import React, {useState} from 'react'
import {
    TextField,
    withStyles
} from "@material-ui/core";

const StyledTextField = withStyles(() => ({
    root: {
        "& .MuiOutlinedInput-multiline": {
            padding: '10px',
        }
    }
}))(TextField);

const TextInput = ({handleChange, input, field, classes}: any) => {
    return (
        <div style={{margin: '10px 10%'}}>
            <StyledTextField
                name={field}
                variant="outlined"
                multiline
                className={classes.input}
                value={input ? input : ''}
                margin="none"
                onChange={(e) => handleChange({[field]: e.target.value})}
            />
        </div>
    )
}

export default React.memo(TextInput);
