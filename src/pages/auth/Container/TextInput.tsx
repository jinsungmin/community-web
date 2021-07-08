import React from 'react'
import {
    TextField
} from "@material-ui/core";

const TextInput = ({
                       handleChange,
                       label,
                       field,
                       type,
                       value,
                       placeholder,
                       touched,
                       errors,
                       handleBlur,
                       classes
                   }: any) => {
    return (
        <div className={classes.formControl}>
            <TextField
                name={field}
                label={label}
                type={type}
                placeholder={placeholder}
                style={{width: '100%', height: '30px', fontSize: '15px', marginTop: '15px'}}
                className={classes.input}
                value={value ? value : ''}
                margin="none"
                error={Boolean(touched && errors)}
                helperText={touched && errors}
                onBlur={handleBlur}
                onChange={handleChange}
            />
        </div>
    )
}

export default React.memo(TextInput);
