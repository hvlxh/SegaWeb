import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Sega</title>
      </Head>

      <Navbar active='home' />
    </>
  )
}

export default Home
