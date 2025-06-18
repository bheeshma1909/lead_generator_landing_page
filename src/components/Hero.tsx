import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export const Hero = () => {
  return <section className="py-16 md:py-24 text-center">
      <motion.div className="inline-flex items-center bg-[#1A1F29] rounded-full px-4 py-1 mb-6 text-green-400" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.3
    }}>
        <span className="text-green-400 mr-2">✦</span>
        <span>AI-Powered Sales Automation</span>
      </motion.div>
      <motion.h1 className="text-4xl md:text-6xl font-bold text-white mb-4" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.4
    }}>
        AI-Powered Agents
      </motion.h1>
      <motion.h2 className="text-4xl md:text-6xl font-bold text-green-400 mb-8" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.5
    }}>
        for Outbound Sales
      </motion.h2>
      <motion.p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.6
    }}>
        Fully Autonomous AutoPilot Sales Agents. Generate Leads 24/7/365 with AI
        that operates entirely without human input.
      </motion.p>
      <motion.div className="flex justify-center space-x-4" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.7
    }}>
        <button className="bg-green-500 text-white px-6 py-3 rounded flex items-center hover:bg-green-600 transition-colors">
          Start Trial
          <ArrowRight size={18} className="ml-2" />
        </button>
        <button className="border border-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">
          Schedule Demo
        </button>
      </motion.div>
    </section>;
};