import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Checkbox, FormControlLabel, Paper, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button' ;
const btnstyle={margin: '8px 0'}
const textField={}
const avatarStyle={backgroundColor:"green"}
const Login=()=> {
    const paperStyle={
        padding:"20px",
        height:'70vh',
        width: 280,
        margin:'20px auto'
    }
    return(
    <Grid align="center">
        <Paper Elevation={10}style={paperStyle}>
            
            <Avatar style={avatarStyle}> <LockIcon></LockIcon></Avatar>
            <h2>Sign In</h2>
            
            <TextField label='Username' placeholder='Enter Username' style={textField} margin="dense"fullWidth required></TextField>
            <TextField label='Password' placeholder='Enter Password' style={textField} margin="dense"fullWidth required></TextField>
            <Grid align='left'>

            <FormControlLabel
            control={<Checkbox
            name='Checked'
            color='primary'
            />}
            label='Remember me'
            />
            </Grid>
            <Button type="submit"color="primary"variant="contained"style={btnstyle} fullWidth> Sign In</Button>
            <Typography>
                
            </Typography>

        </Paper>
    </Grid>
    )
}

export default Login;