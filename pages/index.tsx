import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <div className="mt-5 container container-md">
      <Head>
          <title>Pokemon Voting</title>
      </Head>      
      <h1 className="text-2xl">Pokemon Voting</h1>

    </div>
  )
}

export default Home
