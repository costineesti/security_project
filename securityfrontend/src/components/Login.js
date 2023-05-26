import React, { useState } from 'react';
import { TextField, Container, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { email, password };
    console.log(user);
    fetch('http://localhost:8080/api/v1/auth/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem('authToken', data.token);
        navigate('/');
        // Perform any actions you need after successful login, such as storing the token in local storage
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: 'blue' }}>
          <u>Login</u>
        </h1>

        <form noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={handleLogin}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
