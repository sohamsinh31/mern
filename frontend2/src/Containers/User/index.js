import React,{useState,useEffect} from 'react'
import {auth} from '../../../Firebase'
import style from './Styles'
import { signOut } from 'firebase/auth'
import axios from 'axios'

const User = () => {

    const [add,setAdd] = useState('');
    const [phone,setPhone] = useState('');
    const [city,setCity] = useState('');
    const [state,setState] = useState('');
    const [dist,setDist] = useState('');
    const [pin,setPin] = useState('');
    const [data,setdata] = useState([]);
    const [load,isLoad] = useState(0)
    //console.log(add)

    useEffect(async (auth) => {
        const resp = await axios.get(`http://localhost:5000/user`,{params:{uid:auth?.currentUser?.uid}})
        // await fetch(`http://localhost:5000/user?uid=${auth?.currentUser?.uid}`).then(res=>res.json()).then(resp=>{
        //console.log(auth?.currentUser?.uid)
        setPhone(resp?.data[0]?.phone)
        setDist(resp?.data)
        setPin(resp?.data[0]?.pincode)
        setDist(resp?.data[0]?.district)
        setState(resp?.data[0]?.state)
        setdata(resp.data)
        setAdd(resp?.data[0]?.address)
        setCity(resp?.data[0]?.city)
    // })
    },[data])
    // useEffect(() => {
    // setCity(data[0].city)
    // },[city])
    

    const PostData = async () => {
        const send = await axios.post('http://localhost:5000/user',{
            city:city,
            pincode:pin,
            state:state,
            district:dist,
            phone:phone,
            address:add,
            uid:auth?.currentUser?.uid
        })
        console.log(send.data)
    }

  return (
    <div style={style.box1}>
        <div>
            <img
            style={style.img}
            src={auth?.currentUser?.photoURL}
            /><h4>{auth?.currentUser?.displayName}</h4>
            <hr/>
            <label>Your Address:  </label>
            <input style={style.input1} placeholder={add}  type='text' onChange={(e)=>setAdd(e.target.value)} />
            <hr style={{width:'70%'}}/>
            <label>Contect:</label>
            <input style={style.input1}   onChange={(e)=>setPhone(e.target.value)} placeholder={phone} type='number' />
            <hr style={{width:'70%'}}/>
            <label>City:</label>
            <input style={style.input1}  onChange={(e)=>setCity(e.target.value)} placeholder={city} type='text' />
            <hr style={{width:'70%'}}/>
            <label>PinCode:</label>
            <input style={style.input1}  onChange={(e)=>setPin(e.target.value)} placeholder={pin} type='number' />
            <hr style={{width:'70%'}}/>
            <label>District:</label>
            <input style={style.input1}  onChange={(e)=>setDist(e.target.value)} placeholder={dist} type='text' />
            <hr style={{width:'70%'}}/>
            <label>State:</label>
            <input style={style.input1}  onChange={(e)=>setState(e.target.value)} placeholder={state} type='text' />
            <hr style={{width:'70%'}}/>
            <button style={style.button1} onClick={()=>signOut(auth)}>Logout</button>
            <button style={style.button1} onClick={PostData}>Save</button>
        </div>
    </div>
  )
}

export default User