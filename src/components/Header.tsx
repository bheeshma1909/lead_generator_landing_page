import React from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <motion.div 
        className="container mx-auto"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-3 shadow-lg shadow-black/20">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center" 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/Screenshot_2025-06-17_at_3.49.01_PM.png" 
                alt="Leadgenerator.io Logo" 
                className="h-8 w-auto mr-2" 
              />
              <span className="text-white text-xl font-bold">Leadgenerator.io</span>
            </motion.div>
            
            <motion.nav 
              className="hidden md:flex space-x-8" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
                Product
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
                Features
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
                Pricing
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
                Company
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
                Support
              </a>
            </motion.nav>
            
            <motion.div 
              className="flex items-center space-x-3" 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <button className="text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">
                Login
              </button>
              <button className="relative bg-green-500 text-white px-6 py-2 rounded-full overflow-hidden group hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                <span className="relative z-10">Start Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};