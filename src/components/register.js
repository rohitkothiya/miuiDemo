import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import { useHistory ,Link} from "react-router-dom";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
     
        Your Website
     
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUpSide() {
 
    const history = useHistory();



  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [name,setName] = useState("")
  const [mobile,setMobile] = useState("")
const [isShowError,setIsShowError] = useState(false)
const [error,setError] = useState("")
  const  handleChangeInputTextEmail=(e) => {
    setEmail(e.target.value)
  }

 const  handleChangeInputTextPassword=(e) => {
  setPassword(e.target.value)
  }

  const handleChangeInputTextName = (e) => {
    setName(e.target.value)
  }


  const handleChangeInputTextMobile = (e) => {
    setMobile(e.target.value)
  }
  const handleRegister = (e) => {
    e.preventDefault()
    const body = {email,password,mobile,name}


axios.post(`http://localhost:3000/register`,body)
    .then(res => {
  
     if(!res.data.error){
      
      localStorage.setItem("userToken",res.data.data.token)
      history.push("/users");
     }
     else {
     
      setIsShowError(true)
      setError(res.data.message)
     }
    })
    .catch(error => {
      // alert("campaign. get assign camp- Something went wrong.");
    console.log("erre",error)
    });

  }


  const  canbeSubmitted = () => {
   
  return  (
    name & email  && mobile
  )
   
}
console.log("condition",!canbeSubmitted)
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} >

          <TextField
             onChange={handleChangeInputTextName}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name"
              type="text"
              id="name"
              value={name}
              autoFocus
            />
            <TextField
               onChange={handleChangeInputTextEmail}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              autoComplete="email"
             
            />
             <TextField
             onChange={handleChangeInputTextMobile}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="mobile"
              label="Mobile"
              type="text"
              id="mobile"
              value={mobile}
            
            />
            <TextField
             onChange={handleChangeInputTextPassword}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
            />
            {isShowError && (
 <div style={{color:"red"}}>
 {error}
</div>
            )}
          
            <Button
        
           onClick={handleRegister}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              // disabled={!canbeSubmitted()}
            >
              Sign In
            </Button>
            <Grid container>
             
              <Grid item>
                <Link to="/login" variant="body2">
                  {"Does have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}