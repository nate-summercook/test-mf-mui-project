import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from '_components/Theme';
import { Button } from '_components/Button';
import { createTheme, Paper, ThemeProvider, Typography, Button as MuiButton } from '@mui/material';

const App = () => {
  console.log(theme);
  
  return (
    <Paper>
      <Typography variant="h1">Module Federation Consumer</Typography>
      <Typography variant="body1">This is the host application ready to consume remote modules.</Typography>
      <Button>Remote Button</Button>
      <MuiButton color="primary" variant="contained">Remote Button</MuiButton>
    </Paper>
    
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);

const createdTheme = createTheme(theme.light)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={createdTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
