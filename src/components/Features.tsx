import React from 'react';
import { motion } from 'framer-motion';
import { Target, Mail, RefreshCw } from 'lucide-react';
export const Features = () => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.5
      }
    })
  };
  return <section className="py-16 bg-[#0D1117]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <motion.div className="bg-[#1A1F29] rounded-xl p-8 text-center" custom={0} initial="hidden" animate="visible" variants={cardVariants}>
            <div className="bg-[#243040] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target size={28} className="text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              List Building
            </h3>
            <p className="text-gray-400 text-sm">
              AI agents automatically find ideal companies and contacts for your
              outreach
            </p>
          </motion.div>
          <motion.div className="bg-[#1A1F29] rounded-xl p-8 text-center" custom={1} initial="hidden" animate="visible" variants={cardVariants}>
            <div className="bg-[#243040] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail size={28} className="text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Content Creation
            </h3>
            <p className="text-gray-400 text-sm">
              AI agents write personalized emails and outreach cadences using
              real-time data
            </p>
          </motion.div>
          <motion.div className="bg-[#1A1F29] rounded-xl p-8 text-center" custom={2} initial="hidden" animate="visible" variants={cardVariants}>
            <div className="bg-[#243040] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
              <RefreshCw size={28} className="text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Outreach</h3>
            <p className="text-gray-400 text-sm">
              AI agents automatically send emails and keep following up until
              someone replies
            </p>
          </motion.div>
        </div>
      </div>
    </section>;
};