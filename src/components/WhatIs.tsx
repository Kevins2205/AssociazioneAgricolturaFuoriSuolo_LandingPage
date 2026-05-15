"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Droplets, Wind, Waves, Layers } from 'lucide-react';

const cards = [
  {
    title: "Idroponica",
    description: "Coltivazione in soluzioni acquose nutritive, senza l'uso del suolo.",
    icon: Droplets,
    image: "/immaginisito/7.jpg"
  },
  {
    title: "Aeroponica",
    description: "Le radici sono sospese in aria e nebulizzate con sostanze nutritive.",
    icon: Wind,
    image: "/immaginisito/5.jpg"
  },
  {
    title: "Acquaponica",
    description: "Simbiosi tra acquacoltura e idroponica in un ecosistema circolare.",
    icon: Waves,
    image: "/immaginisito/8.jpg"
  },
  {
    title: "Vertical Farming",
    description: "Agricoltura in strati sovrapposti per massimizzare la resa in spazi ridotti.",
    icon: Layers,
    image: "/immaginisito/6.jpg"
  }
];

const WhatIs = () => {
  return (
    <section id="cosa-e" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Cos'è l'agricoltura<br />fuori suolo?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/50 max-w-2xl"
        >
          Sistemi produttivi innovativi che cambiano le regole della produzione alimentare globale.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-[400px] rounded-3xl overflow-hidden glass"
          >
            <div className="absolute inset-0 z-0">
              <Image 
                src={card.image} 
                alt={card.title}
                fill
                className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
              />
            </div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 border border-accent/30 group-hover:bg-accent group-hover:text-black transition-colors duration-500">
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatIs;
