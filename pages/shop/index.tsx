import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import ShoP from '../../components/Shop/Shop'

const Shop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shop - Sega</title>
      </Head>

      <Navbar active='shop' />
      <div className='w-full'>
        <ShoP />
      </div>
    </>
  )
}

export default Shop
