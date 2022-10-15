import React from 'react'
import { Button } from '@mui/material';
import Header from './Components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Components/Navbar'

const App = () => {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Header/>
    <Navbar val={0}/>
    </ThemeProvider>
  )
}

export default App;