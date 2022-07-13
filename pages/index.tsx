import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <div className="mt-5 container container-md">
      <Head>
          <title>Roundest</title>
      </Head>      
      <h1 className="text-2xl">Roundest</h1>
      <div className="flex flex-col justify-center">
        <div className="text-2xl text-center">Which Pokemon is Rounder?</div>
        <div className="container container-sm mt-12 border flex justify-between rounded p-6">
          <div className='w-1/3 h-16 flex justify-center bg-red-200 items-center text-black'>
            Pokemon 1
          </div>
          <div className='w-1/3 h-16 flex justify-center items-center'>vs</div>
          <div className='w-1/3 h-16 flex justify-center bg-red-200 items-center text-black'>
            Pokemon 2
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
