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

const TextInput = ({handleChange, input, classes}: any) => {
    return (
        <div style={{margin: '10px 0'}}>
            <StyledTextField
                variant="outlined"
                multiline
                className={classes.input}
                value={input ? input : ''}
                margin="none"
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
}

export default React.memo(TextInput);
