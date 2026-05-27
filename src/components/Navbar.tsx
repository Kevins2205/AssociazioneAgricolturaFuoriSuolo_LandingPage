"use client";

import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Leaf, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const closeMenu = () => setMenuOpen(false);

  const handleNavigate = (hash: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(hash);
    if (el) {
      // delay to allow menu close animation to finish, then smooth-scroll with custom duration
      const smoothScrollTo = (element: Element, duration = 800) => {
        const start = window.scrollY || window.pageYOffset;
        const rect = element.getBoundingClientRect();
        const navbarHeight = navRef.current ? (navRef.current.offsetHeight || 0) : 0;
        const target = rect.top + start - navbarHeight - 8; // small offset
        const startTime = performance.now();

        const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const step = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeInOutCubic(progress);
          window.scrollTo(0, Math.round(start + (target - start) * eased));
          if (elapsed < duration) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
      };

      setTimeout(() => smoothScrollTo(el, 800), 220);
    } else {
      // fallback: change location
      window.location.hash = hash;
    }
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (!menuOpen) return;
      const target = e.target as Node | null;
      if (navRef.current && target && !navRef.current.contains(target)) {
        setMenuOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 mx-4 mt-4 rounded-3xl glass md:rounded-full md:max-w-7xl md:mx-auto"
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5 md:px-6 md:py-4">
        <div className="flex min-w-0 items-center gap-2">
          <Leaf className="text-accent w-5 h-5 shrink-0 sm:w-6 sm:h-6" />
          <span className="font-bold text-sm tracking-tight sm:text-base md:hidden">AAFS</span>
          <span className="hidden font-bold text-base tracking-tight sm:text-lg md:inline md:text-xl">Associazione Agricoltura Fuori Suolo</span>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={menuOpen}
          className="inline-flex items-center justify-center p-2 text-white/80 transition-colors hover:text-white md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#cosa-e" className="hover:text-white transition-colors">Cos&apos;è</a>
          <a href="#problema" className="hover:text-white transition-colors">Il Problema</a>
          <a href="#soluzione" className="hover:text-white transition-colors">Soluzione</a>
          <a href="#certificazione" className="hover:text-white transition-colors">Certificazione</a>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/10 px-5 pb-5 md:hidden"
          >
            <div className="mt-4 grid gap-2 text-sm font-medium text-white/80">
              <a href="#cosa-e" onClick={(e) => handleNavigate('#cosa-e', e)} className="rounded-xl px-3 py-3 transition-colors hover:bg-white/5 hover:text-white">Cos&apos;è</a>
              <a href="#problema" onClick={(e) => handleNavigate('#problema', e)} className="rounded-xl px-3 py-3 transition-colors hover:bg-white/5 hover:text-white">Il Problema</a>
              <a href="#soluzione" onClick={(e) => handleNavigate('#soluzione', e)} className="rounded-xl px-3 py-3 transition-colors hover:bg-white/5 hover:text-white">Soluzione</a>
              <a href="#certificazione" onClick={(e) => handleNavigate('#certificazione', e)} className="rounded-xl px-3 py-3 transition-colors hover:bg-white/5 hover:text-white">Certificazione</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
