import Image from 'next/image'

import { Carousel, Emoq, Footer, Hero, Navbar, Selfimp, Test } from '../components';


export default function Home() {
  return (
    // <section className='h-full'>
        
    //   <h1 className='text-black'>hi</h1>
    //   <Hero />

    // </section>
    <>
    <Navbar/>
    <Hero/>
    <Emoq/>
    <Carousel/>
    <Selfimp/>
    <Test/>
    <Footer/>
    </>
  )
}
