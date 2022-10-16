import axios,{AxiosRequestConfig} from 'axios';
import React, { useEffect, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Like = ({user,food}) => {

    const [like,setLike] = useState(false);

    const getLike = async ()=> {
        const response = await axios.get(`http://localhost:5000/like?user`,{params:{
            user:user,
            food:food
        }})
        //console.log(response.data.status)
        if(response.data.status){
        setLike(true)
        }
    }
useEffect(()=>{
    getLike()
}),[]

    //console.log(like)

    const postLike = async ()=>{
        const respose = await axios.post('http://localhost:5000/like',{
            "userId":user,
            "foodId":food
        })
        //console.log(respose.data.status)
        getLike();
    }

    const delLike = async()=>{
        const response = await axios.delete(`http://localhost:5000/like`,{params:{user:user,food:food}})
        getLike();
    }

    const checkLike = async()=>{
        if(like){
            delLike()
            setLike(false)
        }else{
            postLike()
        }
    }

  return (
    <div style={{margin:'6px',height:'max-content'}}>
        {like?(<FavoriteIcon onClick={checkLike} style={{color:'red'}}/>):(<FavoriteBorderIcon onClick={checkLike}/>)}
    </div>
  )
}

export default Like