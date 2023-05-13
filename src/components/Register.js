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

export default function Register() {
  const [name,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  let {register,getValues, formState:{errors, isValid, dirtyFields, isDirty, isSubmitted,}} =useForm({mode:"onBlur", defaultValues:{age: 15}})

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   await Service.register(userName,email, password);
  //   //navigate("/private", { replace: true });
  // };
  const save = async (event) => {
    event.preventDefault();
    alert(name)
    alert(email)
    alert(password)
    await Service.register(name,email, password);
    
    navigate("/login", { replace: true });
  };
//   const save=(data)=>{
//     console.log(data)
// }
  // function isValidEmail(email) {
  //   return /\S+@\S+\.\S+/.test(email);
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
        <Avatar sx={{ m: 1, bgcolor: "#FFC312"}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="white">
          Register
        </Typography>
        {/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> */}
        <Box component="form" noValidate sx={{ mt: 1 }}>
        {/* <form onSubmit={handleSubmit(save)}> */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User name"
            name="userName"
            autoComplete="userName"
            autoFocus          
            style={{backgroundColor: "white"}}
            {...register("firstName",{minLength: 2, required: "this field is required!"})}
            onChange={(event) => setUserName(event.target.value)}
          />{errors.firstName?.type==="minLength"&& <Alert severity="error">minimum 2 letters</Alert>}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            style={{backgroundColor: "white"}}
            {...register("email",{required:"this field is required"})}
            onChange={(event) => setEmail(event.target.value)}
          /> {errors.email && <p className="error-message">{errors.email.message}</p>}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            style={{backgroundColor: "white"}}
            {...register("password",{minLength: 4,maxLength: 8, required: "this field is required!"})}
            onChange={(event) => setPassword(event.target.value)}
          /> {errors.password?.type==="minLength"&& <Alert severity="error">minimum 4 numbers</Alert>}
          {errors.password?.type==="maxLength"&& <Alert severity="error">maximum 8 numbers</Alert>}
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            // type="submit"
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="login"
            onClick={save}
          >
            Register
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account? to connect"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
