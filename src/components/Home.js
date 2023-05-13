import React from 'react';
import Login from './Login'
import Link from "@mui/material/Link";

import "./Style.css"
export default function HomePage() {
    return (
        <>
        <center>
        
          <br/>
            {/* <Login/> */}
        <h1 >In our chat rooms</h1><br/>
        <div className='enter'>
        <h2 style={{margin:"60px"}}>
      You can have lively conversations about the popular technologies<br/>
      With the best minds in Israel and the world</h2><br/>
      <Link href="/login" variant="body2">
      <button type="button" className='loginHome'>Login</button>
      </Link>
    </div>
    </center>
    </>
    )
  }
  