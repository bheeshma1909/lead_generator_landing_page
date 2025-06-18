import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Mail, RefreshCw, Database, Zap } from 'lucide-react';

export const Capabilities = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2 + i * 0.1,
        duration: 0.5
      }
    })
  };

  const capabilities = [
    {
      icon: Target,
      title: "List Building",
      description: "Autopilot agents automatically find and add companies that match your ICP to your CRM."
    },
    {
      icon: Users,
      title: "Find Contacts",
      description: "Autopilot agents automatically find and add contacts that match your ICP to your CRM."
    },
    {
      icon: Mail,
      title: "Content Creation",
      description: "Generate hundreds of hyper-personalized messages using real-time data, working autonomously around the clock."
    },
    {
      icon: RefreshCw,
      title: "Outreach",
      description: "Autopilot agents send cold emails to decision-makers and follow up with them throughout the year until a response is received."
    },
    {
      icon: Database,
      title: "CRM Automation",
      description: "Autopilot agents handle CRM data entry by automatically adding companies and contacts, updating statuses, and managing all manual inputs."
    },
    {
      icon: Zap,
      title: "24/7/365 Operation",
      description: "Your AI agents never sleep, ensuring your CRM stays accurate and up-to-date without human intervention."
    }
  ];

  return (
    <section className="py-section">
      <div className="container mx-auto max-w-container px-gutter">
        <motion.div 
          className="text-center mb-8" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-2 leading-tight">
            AUTOPILOT CAPABILITIES
          </h2>
          <p className="text-text-light/80 text-lg">
            Our AI agents work autonomously to handle your entire outbound sales process
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div 
              key={index}
              className="bg-base-300 rounded-card p-6 shadow-card" 
              custom={index} 
              initial="hidden" 
              animate="visible" 
              variants={cardVariants}
            >
              <div className="bg-base-200 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <capability.icon size={28} className="text-accent-teal" />
              </div>
              <h3 className="text-xl font-semibold text-text-light mb-3 leading-normal">
                {capability.title}
              </h3>
              <p className="text-text-light/70 text-sm leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};