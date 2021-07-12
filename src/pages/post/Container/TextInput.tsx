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
        <StyledTextField
            name={field}
            variant="outlined"
            multiline
            className={classes.input}
            value={input ? input : ''}
            margin="none"
            onChange={(e) => handleChange(e.target.value)}
        />
    )
}

export default React.memo(TextInput);
