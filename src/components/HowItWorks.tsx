import React from 'react';
import { motion } from 'framer-motion';
import { Users, Package } from 'lucide-react';

export const HowItWorks = () => {
  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.3 + i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-section">
      <div className="container mx-auto max-w-container px-gutter">
        <motion.div 
          className="text-center mb-8" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-2 leading-tight">
            HOW IT WORKS
          </h2>
          <p className="text-text-light/80 text-lg">
            Four simple steps to revolutionize your sales process
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-24 bottom-0 w-1 bg-accent-teal/30 -translate-x-1/2 z-0"></div>
          
          <div className="relative z-10">
            <motion.div 
              className="flex flex-col md:flex-row items-start mb-16" 
              custom={0} 
              initial="hidden" 
              animate="visible" 
              variants={stepVariants}
            >
              <div className="md:w-1/6 flex justify-center mb-4 md:mb-0">
                <div className="w-12 h-12 bg-cta-orange rounded-full flex items-center justify-center text-base-100 font-bold">
                  01
                </div>
              </div>
              <div className="md:w-5/6 bg-base-300 rounded-card p-6 border border-base-200 shadow-card">
                <div className="flex items-center mb-4">
                  <div className="bg-base-200 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                    <Users size={20} className="text-accent-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-light leading-normal">
                    Define ICP Companies & Contacts
                  </h3>
                </div>
                <p className="text-text-light/80 mb-6 leading-relaxed">
                  Specify your Ideal Customer Profile with detailed criteria
                  including industry, company size, role, and seniority. Our
                  platform helps you pinpoint exactly who your ideal prospects
                  are.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-base-200 text-text-light/80 px-3 py-1 rounded-full text-sm">
                    Industry Targeting
                  </span>
                  <span className="bg-base-200 text-text-light/80 px-3 py-1 rounded-full text-sm">
                    Company Size
                  </span>
                  <span className="bg-accent-teal/20 text-accent-teal px-3 py-1 rounded-full text-sm">
                    Decision Makers
                  </span>
                  <span className="bg-base-200 text-text-light/80 px-3 py-1 rounded-full text-sm">
                    Location Filters
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col md:flex-row items-start mb-16" 
              custom={1} 
              initial="hidden" 
              animate="visible" 
              variants={stepVariants}
            >
              <div className="md:w-1/6 flex justify-center mb-4 md:mb-0">
                <div className="w-12 h-12 bg-cta-orange rounded-full flex items-center justify-center text-base-100 font-bold">
                  02
                </div>
              </div>
              <div className="md:w-5/6 bg-base-300 rounded-card p-6 border border-base-200 shadow-card">
                <div className="flex items-center mb-4">
                  <div className="bg-base-200 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                    <Package size={20} className="text-accent-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-light leading-normal">
                    Automated List Building
                  </h3>
                </div>
                <p className="text-text-light/80 mb-6 leading-relaxed">
                  AI Agents automatically find companies and decision makers
                  that match your ICP, then discover and verify their email
                  addresses with unparalleled accuracy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-base-200 text-text-light/80 px-3 py-1 rounded-full text-sm">
                    Contact Discovery
                  </span>
                  <span className="bg-base-200 text-text-light/80 px-3 py-1 rounded-full text-sm">
                    Email Verification
                  </span>
                  <span className="bg-base-200 text-text-light/80 px-3 py-1 rounded-full text-sm">
                    Title Matching
                  </span>
                  <span className="bg-base-200 text-text-light/80 px-3 py-1 rounded-full text-sm">
                    Data Enrichment
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};