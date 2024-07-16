import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
import {MdLocationOn} from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import appstore from '../assets/hero_download.png'
import logotext from '../assets/logotxt.png'

const Footer = () => {
  return (
    <div className='border-t pt-8 border-[#cbcbcb]'>
      <Image className='mx-auto pb-2' src={logo} alt="logo" width={60} height={60}/>
      <Image className='mx-auto pb-6' src={logotext} alt='logotext' width={70} height={70}/>
      <div className='flex flex-row justify-center gap-14 pb-6'>
      <div className='flex flex-row justify-center gap-1'>
        <MdLocationOn className='w-4 h-4'/>
        <p className='text-xs'>Auguststra 26,10117 Berlin</p>
      </div>
      <div className='flex flex-row justify-center gap-2'>
        <MdEmail className='w-4 h-4'/>
        <p className='text-xs'>hi@ahead-app.com</p>
      </div>
    </div>
    <Image className="mx-auto pb-4" src={appstore} alt="appstore" width={120} height={100} />
    <p className='text-xs text-center text-[grey]'>2022 Ahead app.All rights reserved</p>
    </div>
  )
}

export default Footer
