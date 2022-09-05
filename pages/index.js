import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// console.log(process.env.NEXT_PUBLIC_HOST)

export default function Home() {
  return (
    <div className={styles.container}>
    <form action="http://localhost:5000/api/gett" method="post">
      <label htmlFor="first">First name:</label>
      <input type="text" id="first" name="first" />
      <label htmlFor="last">Last name:</label>
      <input type="text" id="last" name="last" />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}
