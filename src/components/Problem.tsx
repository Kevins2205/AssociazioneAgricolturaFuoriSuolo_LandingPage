"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AlertTriangle, ShieldAlert, Ban, EyeOff, Globe } from 'lucide-react';

const problems = [
  {
    title: "Nessuna Definizione",
    description: "Manca un quadro normativo che definisca chiaramente l'attività fuori suolo a livello nazionale.",
    icon: Ban
  },
  {
    title: "Invisibilità Statistica",
    description: "Le aziende non sono censite correttamente, rendendo impossibile pianificare politiche di settore.",
    icon: EyeOff
  },
  {
    title: "Esclusione dai Fondi",
    description: "Senza riconoscimento, l'accesso ai finanziamenti del PSR e ad altri incentivi agricoli è spesso precluso.",
    icon: ShieldAlert
  },
  {
    title: "Nessun Marchio di Categoria",
    description: "Impossibilità di valorizzare il prodotto sul mercato attraverso un marchio che ne certifichi l'origine e la qualità.",
    icon: AlertTriangle
  }
];

const Problem = () => {
  return (
    <section id="problema" className="relative py-32 px-6 overflow-hidden">
      {/* Section Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/immaginisito/1.jpg" 
          alt="Problem Background" 
          fill
          className="object-cover opacity-10 blur-sm"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Sticky Left Content */}
          <div className="lg:w-1/2 lg:sticky lg:top-32 lg:h-fit">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              Un settore<br />senza<br />riconoscimento
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/50 mb-12 max-w-md"
            >
              In Italia esiste un vuoto istituzionale che frena l'innovazione. Le aziende fuori suolo oggi:
              <ul className="mt-4 space-y-2 text-white/70 italic">
                <li>• Non hanno una rappresentanza ufficiale</li>
                <li>• Non hanno una classificazione economica dedicata</li>
                <li>• Non hanno strumenti di valorizzazione del prodotto</li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl overflow-hidden glass"
            >
              <div className="absolute inset-0 z-0 opacity-20">
                <Image 
                  src="/immaginisito/14.jpg" 
                  alt="NACE EU" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 text-accent">
                  <Globe className="w-6 h-6" />
                  <h4 className="font-bold uppercase tracking-widest text-sm">Contesto Europeo</h4>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  La classificazione <strong>NACE Rev. 2.1 (2025)</strong> include esplicitamente le colture fuori suolo come attività agricola. 
                  L'Italia oggi è in ritardo nel recepimento. Serve un soggetto che rappresenti il settore.
                </p>
              </div>
            </motion.div>
          </div>

        {/* Scrolling Right Content */}
        <div className="lg:w-1/2 space-y-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-10 rounded-3xl glass hover:border-accent/30 transition-colors"
            >
              <problem.icon className="text-accent w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
              <p className="text-white/60 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Problem;
