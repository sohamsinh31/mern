import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import Navigation from '../components/Navigation';
import Header from '../components/Header'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import PizzaCard from '../components/PizzaCard';
import {signIn,signOut,useSession,getSession} from 'next-auth/react'

const Orders = ({theme}) => {

  const {data : session,status } = useSession();


  return (
    <div>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
        <div>
            
        </div>
        <Navigation val={2}/>
        </ThemeProvider>
    </div>
  )
}

export default Orders