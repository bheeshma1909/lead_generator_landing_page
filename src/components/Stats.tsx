import React from 'react';
import { motion } from 'framer-motion';

export const Stats = () => {
  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.9 + i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-section">
      <div className="container mx-auto max-w-container px-gutter">
        <motion.div 
          className="text-center mb-4" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-2 leading-tight">
            AUTOPILOT AGENTS
          </h2>
          <p className="text-text-light/80 text-lg">10X Leads with 99% Less Effort</p>
        </motion.div>
        
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div 
              className="bg-base-200 rounded-card p-6 text-center shadow-card" 
              custom={0} 
              initial="hidden" 
              animate="visible" 
              variants={statVariants}
            >
              <h3 className="text-4xl font-bold text-accent-teal mb-1">300%</h3>
              <p className="text-text-light/70 text-sm">Lead Increase</p>
            </motion.div>

            <motion.div 
              className="bg-base-200 rounded-card p-6 text-center shadow-card" 
              custom={1} 
              initial="hidden" 
              animate="visible" 
              variants={statVariants}
            >
              <h3 className="text-4xl font-bold text-accent-teal mb-1">24/7</h3>
              <p className="text-text-light/70 text-sm">Operation</p>
            </motion.div>

            <motion.div 
              className="bg-base-200 rounded-card p-6 text-center shadow-card" 
              custom={2} 
              initial="hidden" 
              animate="visible" 
              variants={statVariants}
            >
              <h3 className="text-4xl font-bold text-accent-teal mb-1">85%</h3>
              <p className="text-text-light/70 text-sm">Workload Reduction</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};