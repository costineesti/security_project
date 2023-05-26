import React from 'react';
import { useState } from 'react';
import { TextField, Container, Paper, Button} from '@mui/material';
  
  export default function Security() {
      const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
      const[firstname,setFirstName]=useState('')
      const[lastname,setLastName]=useState('')
      const[email,setEmail]=useState('')
      const[password,setPassword]=useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        const user = {firstname,lastname,email,password}
        console.log(user)
        fetch("http://localhost:8080/api/v1/auth/register",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(user)
        }).then(()=>{
        console.log("New user added")
  })
}

    return (
  
      <Container>
          <Paper elevation={3} style={paperStyle}>
              <h1 style={{color:"blue"}}><u>Security</u></h1>
  
      <form noValidate autoComplete="off">
      
        <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth 
        value={firstname}
        onChange={(e)=>setFirstName(e.target.value)}
        />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth
        value={lastname}
        onChange={(e)=>setLastName(e.target.value)}
        />
        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={handleClick}>
    Register
  </Button>
      </form>
      </Paper>
      </Container>
    );
  }