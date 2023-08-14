import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

const sections = [
  {
    question: "What is SegaMC?",
    answer: <p>SegaMC was established in 2021/06/17 and is a practice server where ANY player can interact and try to improve their PvP skills. Our server is very active, with many active staff always keeping an eye out for reports, ensuring the best experience for each player that joins our server. Our Discord is also a great place to be, with a cool bot and active chats!<br /><br />
      We currently have 8 FFA game modes:<br />
      - Nodebuff<br />
      - Fist<br />
      - Resistance<br />
      - Sumo<br />
      - Combo<br />
      - Gapple<br />
      - Build<br />
      - KnockBack</p>,
    number: 1
  },
  {
    question: "What is IP and Port of SegaMC?",
    answer:
      <p>
        IP: <p className='font-semibold inline-block'>segamc.net</p><br />
        Port: <p className='font-semibold inline-block'>19132</p>
      </p>,
    number: 2
  },
  {
    question: "What do i buy ranks?",
    answer: <p>There is currently one rank called as "SEGA". to buy it, Go to the <Link
      href="/shop"
      className='text-red-500 hover:underline rounded focus:outline-none p-0.5 focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75'
    >Shop</Link> Section and Buy it. PayPal only.</p>,
    number: 3
  }
]

function FAQ() {
  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full rounded-lg bg-white/10 my-4 max-sm:py-2 py-3 shadow-lg">
        <p className='mb-3 text-center text-white font-bold text-xl'>FAQ</p>
        {sections.map((sec, index) => (
          <Disclosure key={index} as="div" className="my-2 mx-3">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white/20 text-white/80 px-4 py-3 text-left text-sm font-medium hover:drop-shadow-xl hover:bg-red-200 duration-100 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                  <span className='drop-shadow-xl text-white/80'>{sec.number}. {sec.question}</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-red-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mx-1 px-4 pt-2 pb-2 text-sm  bg-white/30 text-white/90 rounded-b-lg">
                  {sec.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  )
}

export default FAQ;