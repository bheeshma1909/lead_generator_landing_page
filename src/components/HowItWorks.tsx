import React from 'react';
import { motion } from 'framer-motion';
import { Users, Package } from 'lucide-react';
export const HowItWorks = () => {
  const stepVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.3 + i * 0.1,
        duration: 0.5
      }
    })
  };
  return <section className="py-16">
      <motion.div className="text-center mb-8" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 1.3
    }}>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          HOW IT WORKS
        </h2>
        <p className="text-gray-300">
          Four simple steps to revolutionize your sales process
        </p>
      </motion.div>
      <div className="container mx-auto px-4 relative">
        <div className="hidden md:block absolute left-1/2 top-24 bottom-0 w-1 bg-green-500/30 -translate-x-1/2 z-0"></div>
        <div className="max-w-4xl mx-auto">
          <div className="relative z-10">
            <motion.div className="flex flex-col md:flex-row items-start mb-16" custom={0} initial="hidden" animate="visible" variants={stepVariants}>
              <div className="md:w-1/6 flex justify-center mb-4 md:mb-0">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  01
                </div>
              </div>
              <div className="md:w-5/6 bg-[#151D29] rounded-xl p-6 border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="bg-[#243040] w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                    <Users size={20} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Define ICP Companies & Contacts
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Specify your Ideal Customer Profile with detailed criteria
                  including industry, company size, role, and seniority. Our
                  platform helps you pinpoint exactly who your ideal prospects
                  are.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#1A1F29] text-gray-300 px-3 py-1 rounded-full text-sm">
                    Industry Targeting
                  </span>
                  <span className="bg-[#1A1F29] text-gray-300 px-3 py-1 rounded-full text-sm">
                    Company Size
                  </span>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm">
                    Decision Makers
                  </span>
                  <span className="bg-[#1A1F29] text-gray-300 px-3 py-1 rounded-full text-sm">
                    Location Filters
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div className="flex flex-col md:flex-row items-start mb-16" custom={1} initial="hidden" animate="visible" variants={stepVariants}>
              <div className="md:w-1/6 flex justify-center mb-4 md:mb-0">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  02
                </div>
              </div>
              <div className="md:w-5/6 bg-[#151D29] rounded-xl p-6 border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="bg-[#243040] w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                    <Package size={20} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Automated List Building
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">
                  AI Agents automatically find companies and decision makers
                  that match your ICP, then discover and verify their email
                  addresses with unparalleled accuracy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#1A1F29] text-gray-300 px-3 py-1 rounded-full text-sm">
                    Contact Discovery
                  </span>
                  <span className="bg-[#1A1F29] text-gray-300 px-3 py-1 rounded-full text-sm">
                    Email Verification
                  </span>
                  <span className="bg-[#1A1F29] text-gray-300 px-3 py-1 rounded-full text-sm">
                    Title Matching
                  </span>
                  <span className="bg-[#1A1F29] text-gray-300 px-3 py-1 rounded-full text-sm">
                    Data Enrichment
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};