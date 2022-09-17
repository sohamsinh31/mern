import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from 'react'

// console.log(process.env.NEXT_PUBLIC_HOST)

export default function Home(req,res) {
  const [first, setfirst] = useState('')
  const createTest = async ()=>{
  const random = Math.floor(Math.random()*1000)
  fetch('/api/test/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name:`Test ${random}`,
      email:`test${random}@gmail.com`
    }),
  });
  const data = await res
  console.log(data.json())
}
  return (
    <div className={styles.container}>
    {/* <form action="api/gett" method="post"> */}
      <label htmlFor="first">First name:</label>
      <input type="text" id="first" name="first" onChange={(e)=>setfirst(e.target.value)} />
      <label htmlFor="last">Last name:</label>
      <input type="text" id="last" name="last" />
      <button onClick={createTest}>Submit</button>
    {/* </form> */}
    </div>
  )
}
