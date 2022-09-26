import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from 'react'
import PizzaCard from './components/PizzaCard'
import Navigation from './components/Navigation'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header'
import {green,orange} from '@mui/material/colors'
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios'


// console.log(process.env.NEXT_PUBLIC_HOST)

export default  function Home(req,res) {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
  const [first, setfirst] = useState('')
  const [load, setload] = useState(true)
  async function getUser() {
    try {
      const response = await axios.get('/api/products');
      console.log(response.data[0].prices[0]);
      setload(false);
    } catch (error) {
      console.error(error);
    }
  }
  getUser()
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header/>
      <div style={{marginBottom:'56px',marginTop:'56px'}}>
        {load?(
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />      
):(
  <div>
      <PizzaCard/>
      <PizzaCard/>
      <PizzaCard/>
      </div>
    
)}
</div>
      <Navigation val={0}/>
      </ThemeProvider>
  )
}

