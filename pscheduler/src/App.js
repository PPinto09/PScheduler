import './App.css';
import * as React from 'react';
import { Box, Button, TextField } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Box
      component="form"
        sx={{
          width: 500,
          height: 500,
          borderRadius: 1,
          bgcolor: '#282c34',
          input: { color: 'white' },
          '& .MuiTextField-root': { m: 1, width: '25ch' }
        }}
        noValidate
        autoComplete="off">
          <h1>PScheduler</h1>
          <br></br>
          <TextField id="outlined-basic" label="Nome ou E-mail" variant="outlined" color="info" focused required />
          <br></br>
          <br></br>
          <TextField id="outlined-basic" label="Password" variant="outlined" color="info" focused required />
          <br></br>
          <br></br>
          <Button variant="outlined" onClick={() => {alert('clicked');}}>Login</Button>
        </Box>
      </header>
    </div>
  );
}

export default App;
