import React from 'react';
import { motion } from 'framer-motion';
export const Stats = () => {
  const statVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.9 + i * 0.1,
        duration: 0.5
      }
    })
  };
  return <section className="py-16">
      <motion.div className="text-center mb-4" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.8
    }}>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          AUTOPILOT AGENTS
        </h2>
        <p className="text-gray-300">10X Leads with 99% Less Effort</p>
      </motion.div>
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.div className="bg-[#111823] rounded-xl p-6 text-center" custom={0} initial="hidden" animate="visible" variants={statVariants}>
            <h3 className="text-4xl font-bold text-green-400 mb-1">300%</h3>
            <p className="text-gray-400 text-sm">Lead Increase</p>
          </motion.div>
          <motion.div className="bg-[#111823] rounded-xl p-6 text-center" custom={1} initial="hidden" animate="visible" variants={statVariants}>
            <h3 className="text-4xl font-bold text-green-400 mb-1">24/7</h3>
            <p className="text-gray-400 text-sm">Operation</p>
          </motion.div>
          <motion.div className="bg-[#111823] rounded-xl p-6 text-center" custom={2} initial="hidden" animate="visible" variants={statVariants}>
            <h3 className="text-4xl font-bold text-green-400 mb-1">85%</h3>
            <p className="text-gray-400 text-sm">Workload Reduction</p>
          </motion.div>
        </div>
      </div>
    </section>;
};