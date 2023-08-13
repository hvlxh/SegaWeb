import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useEffect } from 'react';

import Navbar from '../../components/Navbar';
import SEGAImage from '../../public/shop/sega.png'; // Make sure to import the image correctly

const Shop: NextPage = () => {
  return (
    <>
      <Head>
        <title>SEGA Rank - Shop</title>
      </Head>
      <Navbar active="shop" />
      <div className="md:flex md:justify-between mx-4">
        <Image src={SEGAImage} alt="Logo" width={500} height={500} />
        <div className="md:mr-20">
          <h1 className="text-black dark:text-white text-2xl font-semibold mb-3">
            SEGA Rank - $4.99
          </h1>
          <div className="rounded-lg bg-white dark:bg-[rgb(20,20,20)] my-4 px-3 py-3">
            <p className="text-black dark:text-white text-lg">This rank will give you:</p>
            <ul className="text-black/70 dark:text-gray-300 list-disc pl-6">
              <li>SEGA rank in-game and on Discord via roles</li>
              <li>3000 coins in-game</li>
              <li>Access to the /fly command in-game</li>
            </ul>
          </div>
          <PayPalScriptProvider
            options={{ 'client-id': 'AR1RJEzxIfVYf3XQewueYDcBGHEiofaKIwf_xOW-VciXkpifbuBCdruCiiIvrhN71FriOkegL5g_Ixnn' }} // Replace with your live client ID
          >
            <PayPalButtons
              style={{
                layout: 'horizontal',
                color: 'silver',
                tagline: false,
              }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: '4.99', // Replace with the correct price
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order!.capture().then((details) => {
                  const orderID = data.orderID;
                  alert(`You Successfully paid the SEGA Rank!\n\nOrder ID: ${orderID}`);
                  // Additional actions like notifying the user or updating the server can be done here
                });
              }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </>
  );
};

export default Shop;
