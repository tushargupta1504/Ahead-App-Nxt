'use client'
import React, { useRef } from 'react';
// import { motion, useScroll } from 'framer-motion';
import "../app/globals.css";
import SlideIn from './SlideIn';

const Item = ({info}) => {
    return(
        <div 
        key={info.key}

        className=' flex flex-row justify-center textcheck '>
            <div className=' flex basis-1/2 justify-end pr-6'>

        <div className=" md:w-12 md:h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full  items-center text-center   shadow-xl">
        </div>
        
            </div>
        <div className=' bais-1/2 pl-6 mr-16 pb-10'>
            <h1 className='text-lg font-semibold pb-4 '>{info.title}</h1>
        <p className='text-left pr-60'>{info.desc}</p>
 
        </div>
        </div>
    
    );
}

const Selfimp = () => {
  return (
    <div className="mr-8 ml-8 mb-36">
    <SlideIn>
    <div className="pl-16">
      <h1 className="pb-4 text-lg">
        Wrong with self improvement & how we're fixing it.
      </h1>
      <h1 className="text-6xl font-bold pb-16">Self Improvement. Ugh. </h1>
    </div>
    </SlideIn>
    {info.map((info) => {
            return <Item info={info} key={info.id} />;
          })}
  </div>
  );
}

export default Selfimp;

const info = [
    {
        key:1,
        title: "It's not as easy as 1-2-3",
        desc: "Lorem fermentum s odio adendum est bitur e ac. vestibulum. Nullam luctus pellentesque risus in ullamcorper. Nam neque nunc, mattis vitae ornare ut, feugiat."
    },
    {
        key:2,
        title: "Old Habits are hard to break",
        desc: "Lorem fermentum s odio adendum est bitur e ac. vestibulum. Nullam luctus pellentesque risus in ullamcorper. Nam neque nunc, mattis vitae ornare ut, feugiat."
    },
    {
        key:3,
        title: "You and your motivation dont have a long term relation",
        desc: "Lorem fermentum s odio adendum est bitur e ac. vestibulum. Nullam luctus pellentesque risus in ullamcorper. Nam neque nunc, mattis vitae ornare ut, feugiat."
    },
    {
        key:4,
        title: "Books just don't offer practical solutions",
        desc: "Lorem fermentum s odio adendum est bitur e ac. vestibulum. Nullam luctus pellentesque risus in ullamcorper. Nam neque nunc, mattis vitae ornare ut, feugiat."
    },

];