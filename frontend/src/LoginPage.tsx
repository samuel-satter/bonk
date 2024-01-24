import React, { useState } from "react";
import {TextField, Button, Link} from '@mui/material';
import { invoke } from '@tauri-apps/api/tauri'

const LoginPage: React.FC = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await invoke('login', {email, password});
            console.log(response);
            //TODO handle successfull login attempt by redirecting 
        } catch(error) {    
            console.log(error);
        }
    };

    const handleCreateAccount = async () => {
        try {
            const response = await invoke('create_account', {email, password});
            console.log(response)
            //TODO handle successfull create_account attempt by redirecting to back to main page 
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
          <h2>Login</h2>
          <form>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
          </form>
          <p>
            Don't have an account?{' '}
            <Link href="#" onClick={handleCreateAccount}>
              Create one
            </Link>
          </p>
        </div>
      );
    };
    
    export default LoginPage;