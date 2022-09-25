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

// console.log(process.env.NEXT_PUBLIC_HOST)

export default function Home(req,res) {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
  const [first, setfirst] = useState('')
  const createTest = async ()=>{
  const random = Math.floor(Math.random()*1000)
  fetch('/api/test/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name:`Test ${random}`,
      email:`test${random}@gmail.com`
    }),
  });
  const data = await res
  console.log(data.json())
}
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header/>
      <PizzaCard/>
      <PizzaCard/>
      <PizzaCard/>
      <Navigation val={0}/>
      </ThemeProvider>
  )
}
