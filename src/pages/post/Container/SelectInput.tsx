import React, {useState} from 'react'
import {
    TextField,
    withStyles,
    MenuItem
} from "@material-ui/core";
import {useSelector} from "react-redux";
import {getCategoryListReducer} from "../../../redux/reducers";

const StyledTextField = withStyles(() => ({
    root: {
        "& .MuiOutlinedInput-multiline": {
            padding: '10px',
        }
    }
}))(TextField);

const SelectInput = ({handleChange, input, field, classes, categories}: any) => {
    console.log(input)
    return (
        categories ?
            <StyledTextField
                name={field}
                select
                variant="outlined"
                multiline
                className={classes.input}
                value={input ? input : ''}
                onChange={(e) => handleChange(e.target.value)}
            >
                {categories.data.map((option: any) => (
                    <MenuItem key={option.id} value={option}>
                        {option.name}
                    </MenuItem>
                ))}
            </StyledTextField>
            : <></>
    )
}

export default React.memo(SelectInput);
