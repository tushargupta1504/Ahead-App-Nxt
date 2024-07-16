import img1 from '../assets/hero_download.png';
import {AiFillStar} from 'react-icons/ai'
import Image from 'next/image';
import right_base from '../assets/rightbase.png'
import SlideIn from '../components/SlideIn'
import ImageScrollEffect from './ImageScrollEffect';
import phone1 from '../assets/phone1.png'
import redg from '../assets/redg.png'
import blueg from '../assets/blueg.png'
import pinkg from '../assets/pinkg.png'
import '../app/globals.css'

const Hero = () => {
  return (
    <div className='bg-[#ECEBFD]  h-full rounded-3xl flex flex-row mr-8 ml-8'>
      <div className="basis-1/2 flex flex-col ref={ref}">
      <SlideIn>
        <div className="pt-40 pl-10 pb-16">
          <h1 className='pb-6 text-lg'>
            Ahead app
          </h1>
          
          <h1 className='text-7xl font-bold'>Master your life by mastering emotions</h1>
        </div>
        </SlideIn>
        <div className="flex flex-row pl-10 pb-40">
          <div>
          <Image className='mr-6' src ={img1} width={170} height={100}/>
          </div>
          <div className='flex flex-col'>
            <div className='flex mb-1 mt-1'>
          <AiFillStar className='text-[#fcd04b] text-2xl mr-1'/>
          <AiFillStar className='text-[#fcd04b] text-2xl mr-1 '/>
          <AiFillStar className='text-[#fcd04b] text-2xl mr-1'/>
          <AiFillStar className='text-[#fcd04b] text-2xl mr-1'/>
          <AiFillStar className='text-[#fcd04b] text-2xl'/>
          </div>
          <h1 className='text-[grey] text-sm pl-1 '>100+ AppStore reviews</h1>
          </div>

        </div>
        
      </div>
      
      <div className='flex basis-1/2 pl-16 pt-20'>
        <div className="absolute z-0"><Image className="z-0" src={right_base} width={600} height={500}/></div>
        <div className='z-10 pl-56 pt-24 absolute '><Image src={phone1} alt="phone1" width={200} height={200}/></div>
        <div className='relative z-10 mr-80 mt-96 scale-120'>
        <div className="circular-animation">
          <Image src={redg} alt="redg" width={70} height={40} />
        </div>
      </div>

      <div className='relative z-10 mr-40 mt-10'>
  <div className="circular-animation">
    <Image src={blueg} alt="blueg" width={70} height={40} />
  </div>
</div>

<div className='relative z-10 mt-60'>
  <div className="circular-animation">
    <Image src={pinkg} alt="pinkg" width={70} height={40} />
  </div>
</div>

      </div>
    </div>

   
  )
}
export default Hero
