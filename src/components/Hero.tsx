import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="py-section md:py-24 text-center pt-32">
      <div className="container mx-auto max-w-container px-gutter">
        <motion.div 
          className="inline-flex items-center bg-base-200 rounded-full px-4 py-1 mb-6 text-accent-teal border border-base-300" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="text-accent-teal mr-2">✦</span>
          <span className="font-medium text-sm">AI-Powered Sales Automation</span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-text-light mb-4 leading-tight" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          AI-Powered Agents
        </motion.h1>
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-accent-teal mb-8 leading-tight" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          for Outbound Sales
        </motion.h2>
        
        <motion.p 
          className="text-text-light/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Fully Autonomous AutoPilot Sales Agents. Generate Leads 24/7/365 with AI
          that operates entirely without human input.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <button className="relative bg-cta-orange text-base-100 px-8 py-3 rounded-full flex items-center justify-center overflow-hidden group hover:shadow-button-primary transition-all duration-300 font-semibold hover:scale-105">
            <span className="relative z-10 flex items-center">
              Start Trial
              <ArrowRight size={18} className="ml-2" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cta-orange to-cta-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cta-orange to-cta-gold rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </button>
          
          <button className="border border-base-300 text-text-light px-8 py-3 rounded-full hover:bg-base-200 transition-colors font-medium">
            Schedule Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};