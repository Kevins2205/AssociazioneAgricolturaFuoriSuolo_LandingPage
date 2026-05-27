"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: "Massimo Gatta",
    role: "Referente Nord, Agronomo",
    image: "/immaginisito/2.jpg"
  },
  {
    name: "Francesco Manara",
    role: "Referente Centro, Progettista",
    image: "/immaginisito/3.jpg"
  },
  {
    name: "Andrea Fasolino",
    role: "Referente Sud, Progettista",
    image: "/immaginisito/4.png"
  }
];

const Team = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-4xl md:text-6xl font-bold mb-6 h2-responsive"
        >
          Gruppo Promotore
        </motion.h2>
        <p className="text-white/50 text-lg">Le menti dietro l'Associazione</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center group"
          >
            <div className="relative w-48 h-48 mb-8 overflow-hidden rounded-full">
              <div className="absolute inset-0 rounded-full border-2 border-accent scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
              <Image 
                src={member.image} 
                alt={member.name}
                fill
                className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
            <p className="text-accent font-medium text-sm">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
