import React from 'react'
import Image from 'next/image'
import sign from '../assets/sign.png'
const Test = () => {
  return (
    <div className='flex flex-col'>
      <div className='items-center '>
        <h1 className='text-center text-lg pb-2'>We take privacy seriously</h1>
        <h1 className='text-center text-3xl font-bold pb-2'> Before you get started</h1>
        <p className='text-center text-xl text-[grey] pl-80 pr-80 pb-2'>"We won't share your answers with anyone(and won't ever tell which friends said what about you)"</p>
        <p className='text-center text-xl'>With love,</p>
        <Image className=" mx-auto pb-4" src={sign} alt="sign" width={180} height={180}/>
      </div>
      <div className='mx-auto mb-32'>
      <button type="button" className="transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-110 hover:bg-indigo-500 duration-300 text-white bg-black  hover:bg-grey rounded-full text-sm px-5 py-3  text-center mr-3 md:mr-0 mb-2">Start a test</button>
      <p className='text-sm text-[grey] '>Take only 5 minute</p>
      </div>
    </div>

  )
}

export default Test
