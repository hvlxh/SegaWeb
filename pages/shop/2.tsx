import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {
  PayPalScriptProvider,
  PayPalButtons,
} from "@paypal/react-paypal-js";

const Shop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Unban bypass - Shop</title>
      </Head>
      <Navbar active='shop' />
      <div className="md:flex md:justify-between mx-4">
        <Image
          src="/shop/unban.png"
          alt="Logo"
          width={800}
          height={0}
          className="h-18 self-center"
        />
        <div className='md:mr-20 mt-5'>
          <h1 className='text-black dark:text-white text-2xl font-semibold mb-3'>Unban - $9.99</h1>
          <div className='rounded-lg bg-white dark:bg-[rgb(20,20,20)] my-4 px-3 py-3 text-black dark:text-white'>
            This item when purchased will unbanned you from the server instantly if you got banned.
          </div>
          <PayPalScriptProvider options={{ "client-id": "AR1RJEzxIfVYf3XQewueYDcBGHEiofaKIwf_xOW-VciXkpifbuBCdruCiiIvrhN71FriOkegL5g_Ixnn" }}>
            <PayPalButtons
              style={{
                label: "buynow",
                layout: "horizontal",
                color: "silver",
                tagline: false
              }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      value: '9.99'
                    },
                  }],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order!.capture().then((details) => {
                  alert(`
                    You Successfully paid the Unban Tool!
                    Please go to the discord server, create a ticket and paste the id given below 

                    ${data.orderID}
                  `)
                });
              }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </>
  )
}

export default Shop
