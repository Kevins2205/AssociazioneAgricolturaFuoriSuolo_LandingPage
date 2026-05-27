"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="relative h-[120vh] flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        style={{ scale, opacity, y }}
        className="relative z-10 text-center px-4 max-w-[90vw] md:max-w-4xl mx-auto"
      >
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-none mb-6 text-gradient h1-responsive"
        >
          CERTIFICHIAMO{"\u00A0"} <br />INNOVAZIONE
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-accent text-xl md:text-2xl font-bold tracking-widest uppercase responsive-lead"
        >
          AAFS - Associazione Agricoltura Fuori Suolo
        </motion.p>
      </motion.div>

      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/70 z-10" />
        <Image 
          src="/immaginisito/0.jpg" 
          alt="AAFS Innovation" 
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
