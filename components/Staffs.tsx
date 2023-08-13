import Image from "next/image";

const Staffs = () => {
  return (
    <div className="bg-white dark:bg-[rgb(20,20,20)]/50 mx-4 mb-4 max-sm:py-3 py-4 rounded-lg">
      <h1 className="text-center text-black dark:text-white font-medium text-2xl">Staffs</h1>
      <div className="px-5 py-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        <div className="rounded overflow-hidden shadow-lg bg-[rgb(230,230,230)] dark:bg-[rgb(15,15,15)]">
          <Image className="w-full" src="/profiles/ReVape.png" alt="Mountain" width={500} height={500} />
          <div className="px-6 py-4">
            <div className="font-bold text-black dark:text-white text-xl m-0 p-0">ReVape</div>
            <div className="text-gray-600 text-sm mb-3">#5306</div>
            <p className="text-black/80 dark:text-gray-300 text-base">
              Main Owner of the server who is the creator of SegaMC.
            </p>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg bg-[rgb(230,230,230)] dark:bg-[rgb(15,15,15)]">
          <Image className="w-full" src="/profiles/zar.gif" alt="Mountain" width={500} height={500} />
          <div className="px-6 py-4">
            <div className="font-bold text-black dark:text-white text-xl">zar</div>
            <div className="text-gray-600 text-sm mb-3">#6000</div>
            <p className="text-black/80 dark:text-gray-300 text-base">
              Investor Maintain Domain, Server Hosting, etc. And Manage the Server
            </p>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg bg-[rgb(230,230,230)] dark:bg-[rgb(15,15,15)]">
          <Image className="w-full" src="/profiles/hvlxh.png" alt="Mountain" width={500} height={500} />
          <div className="px-6 py-4">
            <div className="font-bold text-black dark:text-white text-xl">hvlxh</div>
            <div className="text-gray-600 text-sm mb-3">#8846</div>
            <p className="text-black/80 dark:text-gray-300 text-base">
              Website and Discord Bot Developer of the server.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staffs;