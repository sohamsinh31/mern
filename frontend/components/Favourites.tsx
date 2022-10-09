import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import Navigation from '../components/Navigation';
import Header from '../components/Header'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import PizzaCard from '../components/PizzaCard';

const Favourites = ({theme}) => {
  return (
    <div>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header userimage={null}/>
    <div>
        
    </div>
    <Navigation val={1}/>
    </ThemeProvider>
    </div>
  )
}

export default Favourites