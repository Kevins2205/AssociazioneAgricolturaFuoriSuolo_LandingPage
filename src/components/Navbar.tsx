"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass m-4 rounded-full max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-2">
        <Leaf className="text-accent w-6 h-6" />
        <span className="font-bold text-xl tracking-tight">ASSOCIAZIONE AGRICOLTURA FUORI SUOLO</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <a href="#cosa-e" className="hover:text-white transition-colors">Cos&apos;è</a>
        <a href="#problema" className="hover:text-white transition-colors">Il Problema</a>
        <a href="#soluzione" className="hover:text-white transition-colors">Soluzione</a>
        <a href="#certificazione" className="hover:text-white transition-colors">Certificazione</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
