/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white selection:bg-brand-accent/30 selection:text-brand-primary">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Subtle separator */}
        <div className="section-padding py-0">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent w-full" />
        </div>

        <Services />
        
        <LocationContact />
      </main>

      <Footer />
      
      <WhatsAppButton />
    </div>
  );
}
