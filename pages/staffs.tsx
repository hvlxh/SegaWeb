import type { NextPage } from 'next'
import Head from 'next/head'
import Staffs from '../components/Staffs'
import Navbar from '../components/Navbar'

const StaffsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Staffs - Sega</title>
      </Head>

      <Navbar active='staffs' />
      <Staffs />
    </>
  )
}

export default StaffsPage
