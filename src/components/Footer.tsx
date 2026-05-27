"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Leaf, Mail, Link2, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-12 pt-32 pb-16 px-6">
      {/* CTA Background Image */}
      <div className="absolute top-0 left-0 w-full h-[600px] z-0 overflow-hidden">
        <Image 
          src="/immaginisito/15.jpg" 
          alt="AAFS Community" 
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      {/* Epic CTA */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-40">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-5xl md:text-8xl font-black mb-12 leading-tight tracking-tighter h1-responsive"
        >
          UNIAMO COMPETENZE,<br />IMPRESE E ISTITUZIONI
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto pt-16 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-accent w-8 h-8" />
              <span className="font-bold text-2xl tracking-tight">AAFS</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Associazione Agricoltura Fuori Suolo. <br />
              Promuoviamo l&apos;innovazione sostenibile per il futuro dell&apos;agricoltura italiana
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">Associazione</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-accent transition-colors">Chi Siamo</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Statuto</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Trasparenza</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">Contatti</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@aafs.it</li>
                <li>Via dell&apos;Innovazione, 1</li>
                <li>Roma, Italia</li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">Social</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-accent transition-all"><Link2 className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-accent transition-all"><Globe className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-[10px] uppercase tracking-widest text-white/20">
          <p>© 2026 AAFS - Associazione Agricoltura Fuori Suolo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
