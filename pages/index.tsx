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
      <div className='bg-white/10 text-white/80 rounded-lg prose max-w-full mx-4 mb-4 p-4'>
        <p>Founded on June 17, 2021, SegaMC stands as a dedicated practice server, offering a dynamic platform for players of
          all skill levels to engage and refine their PvP prowess. Our bustling community thrives with unwavering activity,
          owing to a vigilant team of dedicated staff members who tirelessly monitor and respond to any reported issues,
          ensuring an unparalleled experience for every entrant to our domain. Nestled within our server's vibrant ecosystem
          is a Discord hub, brimming with exciting features including an engaging bot and thriving conversations that are
          certain to captivate and connect players.</p>

        <h2 className='text-white/80'>Explore our Diverse FFA Game Modes</h2>
        <p>Delving into the heart of our offerings, SegaMC boasts an impressive selection of eight Free-For-All (FFA) game
          modes, each tailor-made to cater to distinct playstyles and preferences:</p>
        <ol >
          <li><strong className='text-white/80'>Nodebuff:</strong> Engage in strategic combat where quick reflexes and tactical planning are
            paramount, as health regeneration takes a back seat in this adrenaline-fueled battlefield.</li>
          <li><strong className='text-white/80'>Fist:</strong> Hone your close-quarters combat skills with Fist mode, where raw strength and precise
            timing pave the path to victory in intense, hand-to-hand duels.</li>
          <li><strong className='text-white/80'>Resistance:</strong> Put your endurance to the test as you battle opponents in Resistance mode,
            showcasing your ability to outlast and outwit competitors with reduced incoming damage.</li>
          <li><strong className='text-white/80'>Sumo:</strong> Experience the art of controlled aggression in Sumo mode, where the objective lies in
            pushing opponents outside a designated ring, demanding a delicate balance of power and finesse.</li>
          <li><strong className='text-white/80'>Combo:</strong> Unleash a barrage of calculated strikes in Combo mode, chaining together attacks with
            finesse to create devastating combos and overwhelm adversaries.</li>
          <li><strong className='text-white/80'>Gapple:</strong> Embrace the tactical depth of Gapple mode, where the availability of golden apples
            adds a layer of strategy to engagements, allowing for well-timed bursts of regeneration.</li>
          <li><strong className='text-white/80'>Build:</strong> Showcase your dexterity and creativity in Build mode, where not only combat but also
            architect ural finesse plays a pivotal role, enabling players to construct and defend structures amidst the
            chaos.</li>
          <li><strong className='text-white/80'>KnockBack:</strong> Master the art of positioning and timing in KnockBack mode, where manipulating
            knockback mechanics is the key to outmaneuvering opponents and securing triumph.</li>
        </ol>

        <h2 className='text-white/80'>Embark on a Journey of Improvement and Camaraderie</h2>
        <p>The SegaMC experience transcends mere gameplay, encapsulating a holistic journey of improvement and camaraderie.
          Whether engaging in fierce battles within the diverse FFA modes or immersing oneself in our thriving Discord
          community, every aspect of SegaMC resonates with the promise of growth, excitement, and connection.</p>
      </div>
    </>
  )
}

export default Home
