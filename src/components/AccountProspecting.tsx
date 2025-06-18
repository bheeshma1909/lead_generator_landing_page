import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export const AccountProspecting = () => {
  return <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div className="max-w-4xl mx-auto bg-[#151D29] rounded-xl p-8 border border-gray-800" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 1.4
      }}>
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Account Based Prospecting
          </h2>
          <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Lists are spammy and scattered. Leadgenerator.io's account-based
            approach with built-in CRM provides a clear, structured target list
            of key accounts, ensuring a strong account-to-lead ratio for more
            focused and effective outreach
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded flex items-center justify-center hover:bg-green-600 transition-colors">
              Start Trial
              <ArrowRight size={18} className="ml-2" />
            </button>
            <button className="border border-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>;
};