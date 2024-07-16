'use client'
import { motion, useTransform, useScroll } from "framer-motion";
import SlideInText from "./SlideIn";
import { useRef } from "react";
import Image from "next/image";
import e1 from '../assets/pngegg-2.png'
import e2 from '../assets/pngegg-3.png'
import e3 from '../assets/pngegg-4.png'
import e4 from '../assets/pngegg-5.png'
import e5 from '../assets/pngegg-6.png'

const Carousel = () => {
  return (
    <div>
      <SlideInText>
        <div className="ml-8">
            <h1 className="pl-16 text-6xl font-bold">Does this sound familiar...</h1>
        </div>
        </SlideInText>
      <HorizontalScrollCarousel />
      </div>
     
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[280px] w-[400px] rounded-3xl overflow-hidden  transition-transform duration-300 hover:scale-110 hover:z-15 hover:rotate-[-5deg] hover:bg-purple-500"
      style={{ backgroundColor: card.bgColor }}
    >
      <div className="pl-12 pt-16 pb-6">
        <Image src={card.emoji} alt="Emoji" width={40} height={40}/>
      </div>
      <div className=" inset-0 z-10 grid pl-12 pb-4 ">
        <p className=" font-medium text-black  ">
          {card.title}
        </p>
      </div>
      <div className="pl-12 pr-12 ">
        <p className="text-[#737272] mb-4">
        {card.desc}
        </p>
      </div>
      
    </div>
  );
};

export default Carousel;

const cards = [
  {
    emoji: e3,
    title: "You argue with a collegue",
    bgColor: "#daeaf6",
    desc:"You get defensive and start arguing instead of staying open and finding a common ground",
    id: 1,
  },
  {
    emoji: e2,
    bgColor: "#fddfdf",
    title: "You get a promotion at work",
    desc:"Lorem ipsum dolor scipit augue, ac tincidunt justo cursus eu. Vivamus auctor orci vel .",
    id: 2,
  },
  {
    emoji: e5,
    bgColor: "#fcf7de",
    title: "You quarrel with your partner",
    desc:"Lorem ipsum dolor sit ameterac tincidunt justo cursus eu. Vivamus auctor orci vel .",
    id: 3,
  },
  {
    emoji: e4,
    bgColor: "#defde0",
    title: "You attend a concert",
    desc:"Lorem ipsum dolor sit ameterat. Nulla facilisi.us eu. Vivamus auctor orci vel .",
    id: 4,
  },
  {
    emoji: e1,
    bgColor: "#f0defd",
    title: "You eat your favourite food",
    desc:"Lorem ipsum dolor sit ameterat. Nulla tincidunt justo cursus eu. Vivamus auctor orci vel .",
    id: 5,
  },

];