import React, { useState , useEffect } from 'react'
import Header from './Components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Components/Navbar'
import Hotel from './Containers/Hotel/Hotel'
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import PizzaCard from './Components/PizzaCard';
import Demo from './Containers/Demo'
import axios from 'axios';
import styles from './App.module.css'
import Food from './Containers/Foods'
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import {auth, provider} from '../Firebase'

export default function App() {

  const [data,setData] = useState([]);
  const [hotel,setHot] = useState([]);

  //console.log(auth?.currentUser?.displayName)

  useEffect(() => {
    onAuthStateChanged(auth,(authUser)=>{
      if(authUser){
        console.log(authUser.displayName);
      }
      else{
        signInWithPopup(auth,provider).then(res=>console.log(res.user.displayName)).catch(err=>console.log(err))
      }
    })
  }, [])
  

  function Query() {
    return (
      <div>
Page not found..
      </div>
    );
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
  useEffect(() => {
  }, [])

  let pid = window.location.pathname.split("/")[1];

  async function getUser() {
    try {
      await fetch(`http://localhost:5000/product?hid=${pid}`).then(res=>res.json()).then(data=>setData(data))
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(()=>{
    getUser()
   }),[]

  async function getHotel() {
    try {
      const response = await axios.get('http://localhost:5000/hotel');
      //console.log(response.data);
      setHot(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getHotel()
  }, [])

  //console.log(pid)
  //console.log(data)

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Header/>
      <div style={{marginBottom:'56px',marginTop:'61px',display:'grid'}}>
    <Router>
    <Switch>
      <Route exact path='/'>
      <div style={{display:'grid'}}>
      {hotel.length>0?hotel.map(val=>(
        <Hotel key={val._id} imageurl={val.imageurl} title={val.title} id={val._id}/>
      )):(<></>)}
        </div>
      </Route>
      <Route path='*'>
        {
          data.length>0?(<Food data={data}/>):(<Query/>)
        }
      </Route>
    </Switch>
    </Router>
    </div>
    <Navbar val={0}/>
    </ThemeProvider>
  );
}

