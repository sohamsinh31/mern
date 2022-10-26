import React,{useState,useEffect} from 'react'
import axios from 'axios';
import PizzaCard from '../../Components/PizzaCard';
import Food from '../../Containers/Foods'

const Favourites = ({userid}) => {

  const [data,setData] = useState([])

  const getData =async () => {
    const response = await axios.get('http://localhost:5000/like/get',{params:{user:userid}});
    //setData(response.data)
    response.data?.map(async val=> {
      //console.log(val.foodId)
      const resp = await axios.get(`http://localhost:5000/product/fetch?hid=${val.foodId}`)
      //console.log(resp.data)
      setData(resp.data)
    })
  }

useEffect(()=>{
getData()
}),[]
//console.log(data)
  return (
    <div>
    <div style={{marginBottom:'56px'}}>
          {/* {
            data.length>0?data.map(val=>(
              <PizzaCard key={val._id} id={val._id} title={val.title} desc={val.desc} imageurl={val.img} extra={val.extraOptions} userid={userid} health={val.health}/>
          )):(<p>hii</p>)
          } */}
          <Food data={data}/>
      </div>
    </div>
  )
}

export default Favourites