'use client'
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ImageScrollEffect = ({ imageSrc }) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ scale: 1 });
    } else {
      controls.start({ scale: 0.7 });
    }
  }, [isVisible, controls]);

  return (
    <div style={{ height: '1000px', padding: '20px' }}>
      <motion.img
        src={imageSrc}
        alt="Image"
        width={100}
        initial={{ scale: 0.5 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        style={{ display: 'block', maxWidth: '100%' }}
      />
    </div>
  );
};

export default ImageScrollEffect;
