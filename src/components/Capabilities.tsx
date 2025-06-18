import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Mail, RefreshCw, Database, Zap } from 'lucide-react';
export const Capabilities = () => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2 + i * 0.1,
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
      delay: 1.2
    }}>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          AUTOPILOT CAPABILITIES
        </h2>
        <p className="text-gray-300">
          Our AI agents work autonomously to handle your entire outbound sales
          process
        </p>
      </motion.div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.div className="bg-[#151D29] rounded-xl p-6" custom={0} initial="hidden" animate="visible" variants={cardVariants}>
            <div className="bg-[#243040] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Target size={28} className="text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              List Building
            </h3>
            <p className="text-gray-400 text-sm">
              Autopilot agents automatically find and add companies that match
              your ICP to your CRM.
            </p>
          </motion.div>
          <motion.div className="bg-[#151D29] rounded-xl p-6" custom={1} initial="hidden" animate="visible" variants={cardVariants}>
            <div className="bg-[#243040] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Users size={28} className="text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Find Contacts
            </h3>
            <p className="text-gray-400 text-sm">
              Autopilot agents automatically find and add contacts that match
              your ICP to your CRM.
            </p>
          </motion.div>
          <motion.div className="bg-[#151D29] rounded-xl p-6" custom={2} initial="hidden" animate="visible" variants={cardVariants}>
            <div className="bg-[#243040] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Mail size={28} className="text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Content Creation
            </h3>
            <p className="text-gray-400 text-sm">
              Generate hundreds of hyper-personalized messages using real-time
              data, working autonomously around the clock.
            </p>
          </motion.div>
          <motion.div className="bg-[#151D29] rounded-xl p-6" custom={3} initial="hidden" animate="visible" variants={cardVariants}>
            <div className="bg-[#243040] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <RefreshCw size={28} className="text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Outreach</h3>
            <p className="text-gray-400 text-sm">
              Autopilot agents send cold emails to decision-makers and follow up
              with them throughout the year until a response is received.
            </p>
          </motion.div>
          <motion.div className="bg-[#151D29] rounded-xl p-6" custom={4} initial="hidden" animate="visible" variants={cardVariants}>
            <div className="bg-[#243040] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Database size={28} className="text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              CRM Automation
            </h3>
            <p className="text-gray-400 text-sm">
              Autopilot agents handle CRM data entry by automatically adding
              companies and contacts, updating statuses, and managing all manual
              inputs.
            </p>
          </motion.div>
          <motion.div className="bg-[#151D29] rounded-xl p-6" custom={5} initial="hidden" animate="visible" variants={cardVariants}>
            <div className="bg-[#243040] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Zap size={28} className="text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              24/7/365 Operation
            </h3>
            <p className="text-gray-400 text-sm">
              Your AI agents never sleep, ensuring your CRM stays accurate and
              up-to-date without human intervention.
            </p>
          </motion.div>
        </div>
      </div>
    </section>;
};