import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from 'react'

// console.log(process.env.NEXT_PUBLIC_HOST)

export default function Home(req,res) {
  const [first, setfirst] = useState('')
function sendData(){
  fetch('/api/hello', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({first:first}),
  })
}
  return (
    <div className={styles.container}>
    {/* <form action="api/gett" method="post"> */}
      <label htmlFor="first">First name:</label>
      <input type="text" id="first" name="first" onChange={(e)=>setfirst(e.target.value)} />
      <label htmlFor="last">Last name:</label>
      <input type="text" id="last" name="last" />
      <button onClick={sendData}>Submit</button>
    {/* </form> */}
    </div>
  )
}
