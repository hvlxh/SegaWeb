import type { NextPage } from 'next'
import Head from 'next/head'
import FAQ from '../components/FAQ'
import Navbar from '../components/Navbar'

const FAQPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>FAQ - Sega</title>
      </Head>

      <Navbar active='faq' />
      <FAQ />
    </>
  )
}

export default FAQPage
