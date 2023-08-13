import Image from 'next/image'
import Link from 'next/link';

const Shop = () => {
  return (
    <div className="bg-white dark:bg-[rgb(20,20,20)]/50 mx-5 mb-4 px-4 py-4 rounded-lg">
      <h1 className="text-center text-black dark:text-white font-medium text-2xl mb-3">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-xl:grid-cols-2 gap-4">
        <div className="rounded overflow-hidden shadow-lg bg-[rgb(230,230,230)] dark:bg-[rgb(15,15,15)]">
          <Image className="w-full" src="/shop/sega.png" alt="Mountain" width={500} height={500} />
          <div className="px-3 py-4">
            <div className="font-bold text-black dark:text-white text-xl">SEGA Rank - $4.99</div>
            <p className="text-black/70 dark:text-gray-300 text-base pb-3">
              Paid Rank of the server.
            </p>
            <Link href="shop/1" className='bg-red-500 hover:bg-red-400 p-2 rounded-md text-white'>View</Link>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg bg-[rgb(230,230,230)] dark:bg-[rgb(15,15,15)] relative">
          <Image className="w-full max-sm:mb-36 max-sm:mt-10 md:mt-36 xl:mt-36 lg:mt-36" src="/shop/unban.png" alt="Mountain" width={500} height={500} />
          <div className="px-3 py-4 absolute bottom-0">
            <div className="font-bold text-black dark:text-white text-xl">Unban - $9.99</div>
            <p className="text-black/70 dark:text-gray-300 text-base pb-3">
              Unban your account for whatever reason
            </p>
            <Link href="shop/2" className='bg-red-500 hover:bg-red-400 p-2 rounded-md text-white'>View</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;