import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Avatar, TextField, Typography, Button, Paper } from "@material-ui/core";
import LockIcon from '@mui/icons-material/Lock';
import { hasError, errMessage } from "../helpers/Helper";
import axios from "axios";

const useStyles = makeStyles({
    paper:{
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      width:"370px",
      alignItems: "center",
      height: "80vh",
    },
    avatar:{
      backgroundColor: "#9c27b0 !important",
      marginBottom:"20px"
    },
    field: {
      marginBottom: "10px"
    },
    h3: {
      marginBottom: "50px"
    },
    form: {
      padding: "20px"
    }
  })
  
function Login(){
    const styles = useStyles();
    const base_url = process.env.REACT_APP_API_URL;
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState([])
    const handleChange = (e) => {
        setInputs({...inputs,[e.target.name]: e.target.value})
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        setErrors([])
        axios.post(`${base_url}/login`,inputs)
        .then((response) =>{
            setErrors([])
            console.log(response.toJSON())
        })
        .catch((error) => {
            setErrors(error.response.data.errors)
        })
    }
    return(
        <>
            <Paper className={styles.paper}>
                <Avatar className={styles.avatar}>
                    <LockIcon />
                </Avatar>
                <Typography component="h3" className={styles.h3}>Login</Typography>
                <form className={styles.form} onSubmit={submitHandler}> 
                    <TextField 
                        error = {hasError("email", errors)}
                        InputProps={{className: styles.field}} 
                        variant="outlined" 
                        label="Email" 
                        name="email"
                        helperText = { errMessage("email",errors) }
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField 
                        error = {hasError("password", errors)}
                        InputProps={{className: styles.field}} 
                        variant="outlined" 
                        label="Password" 
                        type="Password"
                        name="password"
                        helperText = { errMessage("password",errors) }
                        onChange={handleChange}
                        fullWidth
                    />
                    <Button 
                        variant="contained"
                        size="large"
                        type="submit"
                        color="secondary"
                        fullWidth
                    >
                        Login
                    </Button>
                </form>
            </Paper>
        </>
    )
}
export default Login