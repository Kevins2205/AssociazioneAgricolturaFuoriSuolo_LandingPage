"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, BarChart3, Verified } from 'lucide-react';

const pillars = [
  {
    title: "Rappresentanza Istituzionale",
    description: "Confronto diretto con enti pubblici per il riconoscimento normativo del settore.",
    icon: Users
  },
  {
    title: "Raccolta Dati",
    description: "Produzione dei primi dati nazionali per mappare e quantificare il valore del comparto.",
    icon: BarChart3
  },
  {
    title: "Certificazione di Settore",
    description: "Creazione di uno standard qualitativo unico per le produzioni fuori suolo.",
    icon: Verified
  }
];

const Solution = () => {
  return (
    <section id="soluzione" className="relative py-32 px-6 overflow-hidden">
      {/* Background Image with Gradient */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/immaginisito/16.jpg" 
          alt="Solution Background" 
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[120px] rounded-full -z-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-8"
          >
            La nostra missione
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-10 max-w-4xl mx-auto leading-tight"
          >
            AAFS nasce per dare voce a un settore agricolo innovativo
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed"
          >
            "Un’organizzazione senza scopo di lucro, creata per promuovere lo sviluppo. 
            Punto di riferimento nazionale per favorire il dialogo e contribuire alla crescita tecnica, 
            scientifica e normativa dell’agricoltura fuori suolo."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-8"
            >
              <div className="mb-8 p-6 rounded-3xl bg-white/5 border border-white/10 group hover:border-accent/50 transition-all duration-500">
                <pillar.icon className="w-16 h-16 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-white/50 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
