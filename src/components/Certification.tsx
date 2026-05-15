"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const points = [
  "Garantire standard produttivi",
  "Valorizzare le buone pratiche",
  "Rendere riconoscibile il prodotto",
  "Aumentare la fiducia dei consumatori"
];

const Certification = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <section id="certificazione" ref={containerRef} className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-black to-[#051510]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/immaginisito/9.jpg" 
          alt="Certification Background" 
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Il Marchio di Qualità
          </motion.h2>
          <p className="text-white/50 text-lg">Il sigillo dell'innovazione sostenibile.</p>
        </div>

        <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-20">
          {/* Rotating Seal */}
          <motion.div 
            style={{ rotate, scale }}
            className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border-[12px] border-accent/20 border-t-accent shadow-[0_0_50px_rgba(16,185,129,0.2)]" />
            <div className="absolute inset-4 rounded-full border-2 border-dashed border-accent/30 animate-[spin_20s_linear_infinite]" />
            <div className="z-10 flex flex-col items-center">
              <span className="text-accent font-black text-4xl md:text-6xl tracking-tighter italic">AAFS</span>
              <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] mt-2">Certified Innovation</span>
            </div>
          </motion.div>

          {/* Points */}
          <div className="flex flex-col gap-8 w-full max-w-md">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-6 p-6 rounded-2xl glass hover:bg-accent/5 transition-colors group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-xl md:text-2xl font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
