import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const AccountProspecting = () => {
  return (
    <section className="py-section">
      <div className="container mx-auto max-w-container px-gutter">
        <motion.div 
          className="bg-base-300 rounded-card p-8 border border-base-200 shadow-card" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-text-light text-center mb-4 leading-tight">
            Account Based Prospecting
          </h2>
          <p className="text-text-light/80 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
            Lists are spammy and scattered. Leadgenerator.io's account-based
            approach with built-in CRM provides a clear, structured target list
            of key accounts, ensuring a strong account-to-lead ratio for more
            focused and effective outreach
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="relative bg-cta-orange text-base-100 px-8 py-3 rounded-full flex items-center justify-center overflow-hidden group hover:shadow-button-primary transition-all duration-300 font-semibold hover:scale-105">
              <span className="relative z-10 flex items-center">
                Start Trial
                <ArrowRight size={18} className="ml-2" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cta-orange to-cta-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cta-orange to-cta-gold rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </button>
            
            <button className="border border-base-200 text-text-light px-8 py-3 rounded-full hover:bg-base-200 transition-colors font-medium">
              Schedule a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};