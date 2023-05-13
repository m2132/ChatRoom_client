import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Service from "../Service";
import { useState } from "react";
import Container from "@mui/material/Container";
import {useForm} from 'react-hook-form';
import Alert from '@mui/material/Alert';
import "./Style.css"
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"></link>


export default function Login() {
  
  const [password, setPassword] = useState("");
  const [userName,setUserName] = useState("");
  let {register,getValues, formState:{errors, isValid, dirtyFields, isDirty, isSubmitted,}} =useForm({mode:"onBlur", defaultValues:{age: 15}})


  const navigate = useNavigate();

  const save = async (event) => {
    event.preventDefault();
    alert(userName)
    alert(password)
    await Service.login(userName, password);
    
    navigate("/register", { replace: true });
  };


  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   await Service.login(userName, password);
  //   navigate("/register", { replace: true });
  // };

//   const save=(data)=>{
//     console.log(data)
// }
  return (
    <Container maxWidth="xs" className="card">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
        }}
      >
       {/* <div class="input-group-prepend" backgroundColor="#FFC312">
							<span class="input-group-text" backgroundColor="#FFC312"><i class="fas fa-user"></i></span>
				</div> */}
        <Avatar sx={{ m: 1, bgcolor: "#FFC312"}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="white">
          LogIn
        </Typography>
        <Box component="form"/* onSubmit={handleSubmit}*/ noValidate sx={{ mt: 1 }}>
        {/* <form onSubmit={handleSubmit(save)}> */}
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="User name"
            name="userName"
            autoComplete="userName"
            autoFocus
            style={{backgroundColor: "white"}}
            // onFocus={ this.onFocus } 
            // onFocus={(style={color = "red"})}
            // onFocus={style={color: "red"}}
            // className="textInput"
            // onFocus="myFunction(this)"
            {...register("firstName",{minLength: 2, required: "this field is required!"})}
            onChange={(event) => setUserName(event.target.value)}

          />  {errors.firstName?.type==="minLength"&& <Alert severity="error">minimum 2 letters</Alert>}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            // helperText={"סיסמה ברירת מחדל: 123456"}
            // className="textInput"
            style={{backgroundColor: "white"}}
            {...register("password",{minLength: 4,maxLength: 8, required: "this field is required!"})}
            onChange={(event) => setPassword(event.target.value)}

          /> {errors.password?.type==="minLength"&& <Alert severity="error">minimum 4 numbers</Alert>}
           {errors.password?.type==="maxLength"&& <Alert severity="error">maximum 8 numbers</Alert>}
          <br/><br/>
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="login"
            onClick={save}
          >
            login
          </Button> <br/><br/>
          <hr style={{borderStyle: "solid",backgroundColor:"blue"}}/>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
              {"Don't have an account yet? To register"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      
      </Box>
      {/* <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">@</span>
        
      </div>
      <input type="text" class="form-control" placeholder="Username" id="usr" name="username"/>
    </div> */}
    </Container>
  );
}
