import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from 'react'
import PizzaCard from '../components/PizzaCard'
import Navigation from '../components/Navigation'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/Header'
import {green,orange} from '@mui/material/colors'
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios'
import Hotel from '../components/Hotel'
import {signIn,signOut,useSession,getSession} from 'next-auth/react'
// import Geocode from "react-geocode";
// import { usePosition } from 'use-position';

export default  function Home() {

    const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
  useEffect(() => {
  }, [])

//LOCATION CODE STARTS FROM HERE


// const {latitude, longitude, error} = usePosition();
// const [District, setDistrict] = useState(null);
// const [States, setStates] = useState(null);

// Geocode.setApiKey("AIzaSyDltbQeEmA4QmkYNQckWOIsCNguEbyacZk"); ///here put api key 
// Geocode.setLanguage("en");
// Geocode.setRegion("IN");
// useEffect(() => {
// // console.log(latitude,longitude,State,District)
// if((States==null || District==null )&& latitude!==null){
// Geocode.fromLatLng(latitude, longitude).then(
//   response => {
   
//     for (var i=0; i<response.results[0].address_components.length; i++) {
//       for (var b=0;b<response.results[0].address_components[i].types.length;b++) {

//           if (response.results[0].address_components[i].types[b]=== "administrative_area_level_2") {
//               var city= response.results[0].address_components[i];
          
//               setDistrict(city.long_name)
//               break;
//           }
//       }    
//   }

// for (var i=0; i<response.results[0].address_components.length; i++) {
//   for (var b=0;b<response.results[0].address_components[i].types.length;b++) {
//       if (response.results[0].address_components[i].types[b] === "administrative_area_level_1") {
//           var state = response.results[0].address_components[i];
//           setState(state.long_name)

//           break;
//       }
//   }    
// }
//   },
//   error => {
//     console.error(error);
//   }
// );
// }
// });



  const {data : session,status } = useSession();
  const [first, setfirst] = useState('')
  const [data, setdata] = useState([])
  const [load, setload] = useState(false)
  async function getUser() {
    try {
      const response = await axios.get('http://localhost:5000/hotel');
      //console.log(response.data);
      setdata(response.data)
      setload(false);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUser()
  }, [])
  //console.log(session.user.id)
  if(status!=="authenticated"){ 
    return(
      <div style={{
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        display:'flex',
        top:'50%',
        position:'absolute',
        left:'40%'
      }}> 
           <button style={{color:'black'}} onClick={signIn}>SIGN IN</button>
      </div>
  )
}
  else{
  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header userimage={session.user?.image} username={session.user?.name}/>
        <div style={{marginBottom:'56px',marginTop:'61px'}}>
          {load?(
          <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />      
  ):(
    <div>
      {data.length>0?data.map(val=>(
        <Hotel key={val._id} imageurl={val.imageurl} title={val.title} id={val._id}/>
      )):(<></>)}
      
        </div>
      
  )}
  </div>
        <Navigation val={0}/>
        </ThemeProvider>
    )
}
}

