import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Dashboard } from './components/Dashboard';
import { Capabilities } from './components/Capabilities';
import { HowItWorks } from './components/HowItWorks';
import { AccountProspecting } from './components/AccountProspecting';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';
export function App() {
  return <div className="flex flex-col w-full min-h-screen bg-[#0F1218]">
      <motion.div initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }}>
        <Header />
      </motion.div>
      <main className="flex-1">
        <Hero />
        <Features />
        <Stats />
        <Dashboard />
        <Capabilities />
        <HowItWorks />
        <AccountProspecting />
      </main>
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5,
      delay: 1.8
    }}>
        <Footer />
      </motion.div>
    </div>;
}