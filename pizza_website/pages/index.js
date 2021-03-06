import Head from 'next/head'
import Image from 'next/image'
import List from '../components/List'
import NavBar from '../components/NavBar'
import Pizza from '../components/Pizza'
import PizzaList from '../components/PizzaList'
import Title from '../components/Title'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <List />
      <Title />
      <PizzaList />
    </div>
  )
}
