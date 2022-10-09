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

const go = () => {

const router = useRouter();
const pid = router.query;
const [data , setdata] = useState([])
let data2 = []
async function getUser() {
  try {
    const response = await axios.post('/api/products',{params:{hid:pid.go}})
    console.log(response.data);
    setdata(response.data)
  } catch (error) {
    console.error(error);
  }
}
useEffect(() => {
  getUser()
}, [])
console.log(typeof(data))
console.log(data)

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
if(pid.go=='favorites'){
  return (
    <Favourites theme={darkTheme}/>
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
          {/* {
            data.length>0?data.map(val=>(
              <PizzaCard key={val._id} title={val.title} desc={val.desc} imageurl={val.img} prices={val.prices} extra={val.extraOptions} health={val.health}/>
          )):(<p>hii</p>)
          } */}
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