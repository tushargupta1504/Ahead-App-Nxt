'use client'
import { motion, useAnimate } from 'framer-motion';
import { useInView ,useAnimation} from "framer-motion"
import { useRef,useEffect } from "react";

const SlideInText = ({children}) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
        }
    },[isInView])
  const slideVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.5 } },
  };
  return (
    <div ref={ref}>
    <motion.div
      initial="hidden"
      animate={mainControls}
      variants={slideVariants}
    >
      {children}
    </motion.div>
    </div>
  );
};

export default SlideInText;