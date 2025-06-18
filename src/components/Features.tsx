import React from 'react';
import { motion } from 'framer-motion';
import { Target, Mail, RefreshCw } from 'lucide-react';

export const Features = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-section bg-base-200">
      <div className="container mx-auto max-w-container px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="bg-base-300 rounded-card p-8 text-center shadow-card" 
            custom={0} 
            initial="hidden" 
            animate="visible" 
            variants={cardVariants}
          >
            <div className="bg-base-200 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target size={28} className="text-accent-teal" />
            </div>
            <h3 className="text-xl font-semibold text-text-light mb-3 leading-normal">
              List Building
            </h3>
            <p className="text-text-light/70 text-sm leading-relaxed">
              AI agents automatically find ideal companies and contacts for your
              outreach
            </p>
          </motion.div>

          <motion.div 
            className="bg-base-300 rounded-card p-8 text-center shadow-card" 
            custom={1} 
            initial="hidden" 
            animate="visible" 
            variants={cardVariants}
          >
            <div className="bg-base-200 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail size={28} className="text-accent-teal" />
            </div>
            <h3 className="text-xl font-semibold text-text-light mb-3 leading-normal">
              Content Creation
            </h3>
            <p className="text-text-light/70 text-sm leading-relaxed">
              AI agents write personalized emails and outreach cadences using
              real-time data
            </p>
          </motion.div>

          <motion.div 
            className="bg-base-300 rounded-card p-8 text-center shadow-card" 
            custom={2} 
            initial="hidden" 
            animate="visible" 
            variants={cardVariants}
          >
            <div className="bg-base-200 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
              <RefreshCw size={28} className="text-accent-teal" />
            </div>
            <h3 className="text-xl font-semibold text-text-light mb-3 leading-normal">
              Outreach
            </h3>
            <p className="text-text-light/70 text-sm leading-relaxed">
              AI agents automatically send emails and keep following up until
              someone replies
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};