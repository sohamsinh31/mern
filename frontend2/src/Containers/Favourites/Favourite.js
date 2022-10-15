import React,{useState,useEffect} from 'react'
import Navigation from '../components/Navigation';
import Header from '../components/Header'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import PizzaCard from '../components/PizzaCard';

const Favourites = ({theme,userid}) => {

  const [data,setData] = useState([])

  const getData =async () => {
    const response = await axios.get('http://localhost:5000/like/get',{params:{user:userid}})
    setData(response.data)
  }

useEffect(()=>{
getData()
}),[]
//console.log(data)
  return (
    <div>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header/>
    <div style={{marginBottom:'56px'}}>
          {
            data.length>0?data.map(val=>(
              <PizzaCard key={val._id} id={val._id} title={val.title} desc={val.desc} imageurl={val.img} extra={val.extraOptions} userid={userid} health={val.health}/>
          )):(<p>hii</p>)
          }
      </div>
    <Navigation val={1}/>
    </ThemeProvider>
    </div>
  )
}

export default Favourites