
import { useState } from 'react'
import Paper from '@mui/material/Paper'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Login from "./Login"
import Register from "./Register"
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  paper:{
    width: "400px",
    margin: "20px auto",
    paddingRight: "20px"
  }
})
function Auth() {
  const styles = useStyles()
  const [value, setValue] = useState("0");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper elevation={20} className={styles.paper}>
      <TabContext 
        value={value}
      >
          <TabList 
            onChange={handleChange}
            indicatorColor="secondary" 
            textColor="secondary"
          >
            <Tab label="Sign In" value="0" />
            <Tab label="Sign up" value="1" />
          </TabList>
        <TabPanel value="0">
          <Login />
          </TabPanel>
        <TabPanel value="1">
          <Register />
        </TabPanel>
      </TabContext>
    </Paper>
  );
}

export default Auth
