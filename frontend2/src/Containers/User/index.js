import React,{useState} from 'react'
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
    //console.log(auth?.currentUser)

    const getData = async () => {
        const resp = await axios.get('http://localhost:5000/user',{params:{uid:auth?.currentUser?.uid}})
        console.log(resp.data)
    }
    //getData()

  return (
    <div style={style.box1}>
        <div>
            <img
            style={style.img}
            src={auth?.currentUser?.photoURL}
            /><h4>{auth?.currentUser?.displayName}</h4>
            <hr/>
            <label>Your Address:  </label>
            <input style={style.input1} placeholder='enter your address' value={add} type='text' onChange={(e)=>setAdd(e.target.value)} />
            <hr style={{width:'70%'}}/>
            <label>Contect:</label>
            <input style={style.input1} val={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter your phone number" type='number' />
            <hr style={{width:'70%'}}/>
            <label>City:</label>
            <input style={style.input1} val={city} onChange={(e)=>setCity(e.target.value)} placeholder="Enter your city" type='number' />
            <hr style={{width:'70%'}}/>
            <label>PinCode:</label>
            <input style={style.input1} val={pin} onChange={(e)=>setPin(e.target.value)} placeholder="Enter your Pincode" type='number' />
            <hr style={{width:'70%'}}/>
            <label>District:</label>
            <input style={style.input1} val={dist} onChange={(e)=>setDist(e.target.value)} placeholder="Enter your District" type='number' />
            <hr style={{width:'70%'}}/>
            <label>State:</label>
            <input style={style.input1} val={state} onChange={(e)=>setState(e.target.value)} placeholder="Enter your State" type='number' />
            <hr style={{width:'70%'}}/>
            <button style={style.button1} onClick={()=>signOut(auth)}>Logout</button>
        </div>
    </div>
  )
}

export default User