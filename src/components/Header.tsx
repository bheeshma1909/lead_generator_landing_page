import React from 'react';
import { motion } from 'framer-motion';
export const Header = () => {
  return <header className="border-b border-gray-800 bg-[#0F1218]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div className="flex items-center" initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5
      }}>
          <img src="/Screenshot_2025-06-17_at_3.49.01_PM.png" alt="Leadgenerator.io Logo" className="h-8 w-auto mr-2" />
          <span className="text-white text-xl font-bold">Leadgenerator.io</span>
        </motion.div>
        <motion.nav className="hidden md:flex space-x-8" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }}>
          <a href="#" className="text-white hover:text-green-400 transition-colors">
            Product
          </a>
          <a href="#" className="text-white hover:text-green-400 transition-colors">
            Features
          </a>
          <a href="#" className="text-white hover:text-green-400 transition-colors">
            Pricing
          </a>
          <a href="#" className="text-white hover:text-green-400 transition-colors">
            Company
          </a>
          <a href="#" className="text-white hover:text-green-400 transition-colors">
            Support
          </a>
        </motion.nav>
        <motion.div className="flex items-center space-x-4" initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5
      }}>
          <button className="text-white border border-gray-700 px-4 py-2 rounded hover:bg-gray-800 transition-colors">
            Login
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
            Start Trial
          </button>
        </motion.div>
      </div>
    </header>;
};