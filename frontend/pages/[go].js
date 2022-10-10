/* eslint-disable */
import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import Navigation from '../components/Navigation';
import Header from '../components/Header'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import PizzaCard from '../components/PizzaCard';
import Orders from '../components/Orders'
import Favourites from '../components/Favourites'
import {signIn,signOut,useSession,getSession} from 'next-auth/react'


const go = () => {

const router = useRouter();
const pid = router.query;
const [data , setdata] = useState([])
const {data : session,status } = useSession();
const [dataa,setDataa] = useState([])
const [len,setLen] = useState(0);

const getData = async () => {
  try {
    const response = await axios.get('http://localhost:5000/like/get',{params:{user:session?.user?.id}});

    response.data.map(async val=> {
    const responsee = await axios.get('http://localhost:5000/product/fetch',{params:{hid:val.foodId}})
    //console.log(response.data);
    setDataa(responsee.data)
    })

  } catch (error) {
    console.error(error);
  }
}


let data2 = []

  async function getUser() {
    try {
      const response = await axios.get('http://localhost:5000/product',{params:{hid:pid.go}})
      //console.log(response.data);
      setDataa(response.data)
    } catch (error) {
      console.error(error);
    }
  }

useEffect(() => {
  getUser()
  getData()
}, [])





//console.log(dataa)

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
if(pid.go=='favorites'){
  return (
    <div>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Header/>
    <div style={{marginBottom:'56px'}}>
          {
            dataa.length>0?dataa.map(val=>(
              <PizzaCard key={val._id} id={val._id} title={val.title} desc={val.desc} imageurl={val.img} prices={val.prices} extra={val.extraOptions} userid={session?.user?.id} health={val.health}/>
          )):(<p>hii</p>)
          }
      </div>
    <Navigation val={1}/>
    </ThemeProvider>
    </div>
  )
}
else if(pid.go=='orders'){
    return (
      <Orders theme={darkTheme}/>
      )
}
else{
  //console.log(data.length)
    return (
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header/>
      <div style={{marginBottom:'56px'}}>
          {
            data.length>0?data.map(val=>(
              <PizzaCard key={val._id} id={val._id} title={val.title} desc={val.desc} imageurl={val.img} prices={val.prices} extra={val.extraOptions} userid={session?.user?.id} health={val.health}/>
          )):(<p>hii</p>)
          }
      </div>
      <Navigation val={0}/>
      </ThemeProvider>
      )
}
}

// export async function getServerSideProps(context){
//   const sessions = await getSession(context);
//   return{
//       props:{
//         sessions,
       
//       }
//     }
// }

export default go