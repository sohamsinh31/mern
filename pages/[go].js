/* eslint-disable */
import {React,useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import Navigation from '../components/Navigation';
import Header from '../components/Header'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import PizzaCard from '../components/PizzaCard';

const go = () => {

const router = useRouter();
const pid = router.query;
const [data, setdata] = useState([])
useEffect(() => {
  async function getUser() {
    try {
      const response = await axios.get('/api/products',{params:{hid:pid.go}});
      //console.log(response.data);
      setdata(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  getUser()
}, [data])


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
if(pid.go=='favorites'){
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Header/>
    <div>
        
    </div>
    <Navigation val={1}/>
    </ThemeProvider>
  )
}
else if(pid.go=='orders'){
    return (
        <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header/>
        <div>
            
        </div>
        <Navigation val={2}/>
        </ThemeProvider>
      )
}
else{
  //console.log(data)
    return (
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header/>
      <div>
          {
            data.length>0?data.map(val=>(
              <PizzaCard key={val._id} title={val.title} desc={val.desc} imageurl={val.img} prices={val.prices} extra={val.extraOptions}/>
            )):(<></>)
          }
      </div>
      <Navigation val={0}/>
      </ThemeProvider>
      )
}
}

export default go