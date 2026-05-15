import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatIs from '@/components/WhatIs';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Certification from '@/components/Certification';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatIs />
      <Problem />
      <Solution />
      <Certification />
      <Team />
      <Footer />
    </main>
  );
}
