import React from 'react';
import { TextField, Grid, } from '@material-ui/core';

const Input = ({ name, handelChange, label, half, autoFocus, type, handleShowPassword }) => (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField
            name={name}
            onChange={handelChange}
            variant="outlined"
            require
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type} 
            InputProps={name === 'password'}
        />
    </Grid>
);


export default Input;
