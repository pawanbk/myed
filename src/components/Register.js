import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { 
    Avatar, 
    TextField, 
    Typography, 
    Button, 
    Paper, 
    MenuItem } from "@material-ui/core";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import axios from "axios";
import { hasError,errMessage } from "../helpers/Helper";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    paper:{
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      width:"370px",
      alignItems: "center",
      height: "70vh"
    },
    avatar:{
      backgroundColor: "#9c27b0 !important",
    },
    h3: {
      marginBottom: "20px"
    },
    form: {
      padding: "0 20px"
    },
    progress:{
        margin: "0 10px"
    }
  })

function Register(){
    const navigate = useNavigate();
    const styles = useStyles();
    const base_url = process.env.REACT_APP_API_URL;
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        userType: ""

    });
    const [errors, setErrors] = useState([])

    const handleChange = (e) => {
        setInputs({...inputs,[e.target.name]: e.target.value})
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        setErrors([])
        axios.post(`${base_url}/register`,inputs)
        .then((response) =>{
            
        })
        .catch((error) => {
            setErrors(error.response.data.errors)
        })
    }
    return(
        <Paper className={styles.paper}>
            <Avatar className={styles.avatar}><AddCircleOutlineIcon/></Avatar>
            <Typography component="h3" className={styles.h3}>Please Sign up</Typography>
            <form className={styles.form} onSubmit={submitHandler}> 
                <TextField 
                    error = {hasError("email", errors)}
                    InputProps={{className: styles.field}} 
                    variant="outlined" 
                    label="Email" 
                    name="email"
                    onChange={handleChange}
                    helperText = { errMessage("email",errors) }
                    margin="dense"
                    fullWidth
                />
                <TextField 
                    error = {hasError("password", errors)}
                    InputProps={{className: styles.field}} 
                    variant="outlined" 
                    label="Password" 
                    type="Password"
                    name="password"
                    onChange={handleChange}
                    helperText = { errMessage("password",errors) }
                    margin="dense"
                    fullWidth
                />
                <TextField  
                    error = {hasError("passwordConfirmation", errors)}
                    InputProps={{className: styles.field}} 
                    variant="outlined" 
                    label="Re-Password"
                    type="Password" 
                    name="passwordConfirmation"
                    onChange={handleChange}
                    helperText = { errMessage("passwordConfirmation",errors) }
                    margin="dense"
                    fullWidth
                />
                <TextField 
                    error = {hasError("userType", errors)}
                    InputProps={{className: styles.field}} 
                    id="select" 
                    label="Register as" 
                    name="userType"
                    value= {inputs.userType}
                    select
                    onChange={handleChange}
                    margin="normal"
                    helperText = { errMessage("userType",errors) }
                    fullWidth
                >
                    <MenuItem value="1">Consumer</MenuItem>
                    <MenuItem value="2">Maker</MenuItem>
                </TextField>
                <Button 
                    variant="contained"
                    size="large"
                    type="submit"
                    color="secondary"
                    fullWidth
                >
                    Sign up
                </Button>
            </form>
        </Paper>
    )
}
export default Register