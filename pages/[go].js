import React from 'react'
import { useRouter } from 'next/router';
import Navigation from '../components/Navigation';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const go = () => {
const router = useRouter();
const pid = router.query;
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
if(pid.go=='favorites'){
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div>
        <Navigation val={1}/>
    </div>
    </ThemeProvider>
  )
}
else if(pid.go=='orders'){
    return (
        <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div>
            <Navigation val={2}/>
        </div>
        </ThemeProvider>
      )
}
else{
    return (
        <div></div>
      )
}
}

export default go