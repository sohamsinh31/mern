/*eslint-disable*/
import React, { useState , useEffect } from 'react'
import Header from './Components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Components/Navbar'
import Hotel from './Containers/Hotel/Hotel'
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import axios from 'axios';
import Food from './Containers/Foods'
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import {auth, provider,messaging} from '../Firebase'
import Favourites from './Containers/Favourites/Favourite';
import User from './Containers/User';
import { getToken } from 'firebase/messaging';

export default function App() {

  const [data,setData] = useState([]);
  const [hotel,setHot] = useState([]);
  const [city,setCity] = useState('');
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     setLat(position.coords.latitude);
  //     setLong(position.coords.longitude);
  //   });

  //   console.log("Latitude is:", lat)
  //   console.log("Longitude is:", long)
  // }, [lat, long]);

  Notification.requestPermission()
  //messaging.request

// getToken(messaging,{vapidKey:'AAAA_cHsQOM:APA91bHM6lcva1V7yiBnRo_splhkaM74hNg_X19_eIUrOqz6rkk6YBcq_sFp-_bSxQz4cCmplweP01_IY1U9J-rmgGUm9qF6uAMuFC5URz82nryZw8v1xLUB8VCdTh_GDsGV31d0dQKq'}).then((currentToken)=>{
//   if (currentToken) {
//     console.log(currentToken)
//     // Send the token to your server and update the UI if necessary
//     // ...
//   } else {
//     // Show permission request UI
//     console.log('No registration token available. Request permission to generate one.');
//     // ...
//   }
// }).catch((err)=>console.log(err))

  const getLocation = async () => {
   await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=5&appid=${process.env.REACT_APP_OPENAPI}`).then(resp=>resp.json()).then(data=>setCity(data[0].name))
  }
  useEffect(() => {
    onAuthStateChanged(auth,(authUser)=>{
      if(authUser){
        //console.log(authUser.displayName);
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
    //console.log(city)
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
    //getLocation()
  }, [])
//console.log(city)
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
          <Navbar val={0}/>
        </div>
      </Route>
      <Route exact path='/Favourites'>
        <Favourites userid={auth?.currentUser?.uid}/>
        <Navbar val={1}/>
      </Route>
      <Route exact path='/User'>
        <User/>
        <Navbar val={0}/>
      </Route>
      <Route path='*'>
        {
          data.length>0?(<div><Food data={data}/><Navbar val={0}/>
          </div>):(<Query/>)
        }
      </Route>
    </Switch>
    </Router>
    </div>
    </ThemeProvider>
  );
}

