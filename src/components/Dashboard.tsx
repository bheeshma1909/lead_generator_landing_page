import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2Icon, TrendingUpIcon } from 'lucide-react';

export const Dashboard = () => {
  return (
    <section className="py-section">
      <div className="container mx-auto max-w-container px-gutter">
        <motion.div 
          className="text-center mb-4" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-2 leading-tight">
            AUTOPILOT DASHBOARD
          </h2>
          <p className="text-text-light/80 text-lg">
            Real-time metrics and performance tracking for your AI sales agents
          </p>
        </motion.div>
        
        <div className="mt-10">
          <motion.div 
            className="bg-base-200 rounded-card p-6 shadow-card" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <BarChart2Icon className="text-accent-teal mr-2" size={24} />
                <div>
                  <h3 className="text-text-light font-semibold text-lg">
                    Campaign Performance
                  </h3>
                  <p className="text-sm text-text-light/70">Last 30 days</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-accent-teal rounded-full mr-2"></span>
                  <span className="text-text-light text-sm">Active</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-accent-electric rounded-full mr-2"></span>
                  <span className="text-text-light text-sm">Auto-optimizing</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-base-300 rounded-lg p-4">
                <div className="flex justify-between">
                  <span className="text-text-light/70 text-sm">Companies Found</span>
                  <span className="text-accent-teal text-xs bg-accent-teal/20 px-2 py-1 rounded">
                    +12%
                  </span>
                </div>
                <div className="mt-2">
                  <span className="text-text-light text-2xl font-bold">2,874</span>
                </div>
                <div className="mt-2 h-2 bg-base-100 rounded-full overflow-hidden">
                  <div className="h-full bg-accent-teal w-3/4 rounded-full"></div>
                </div>
              </div>

              <div className="bg-base-300 rounded-lg p-4">
                <div className="flex justify-between">
                  <span className="text-text-light/70 text-sm">Contacts Found</span>
                  <span className="text-accent-electric text-xs bg-accent-electric/20 px-2 py-1 rounded">
                    +18%
                  </span>
                </div>
                <div className="mt-2">
                  <span className="text-text-light text-2xl font-bold">9,356</span>
                </div>
                <div className="mt-2 h-2 bg-base-100 rounded-full overflow-hidden">
                  <div className="h-full bg-accent-electric w-4/5 rounded-full"></div>
                </div>
              </div>

              <div className="bg-base-300 rounded-lg p-4">
                <div className="flex justify-between">
                  <span className="text-text-light/70 text-sm">Emails Sent</span>
                  <span className="text-cta-orange text-xs bg-cta-orange/20 px-2 py-1 rounded">
                    +24%
                  </span>
                </div>
                <div className="mt-2">
                  <span className="text-text-light text-2xl font-bold">15,427</span>
                </div>
                <div className="mt-2 h-2 bg-base-100 rounded-full overflow-hidden">
                  <div className="h-full bg-cta-orange w-4/5 rounded-full"></div>
                </div>
              </div>

              <div className="bg-base-300 rounded-lg p-4">
                <div className="flex justify-between">
                  <span className="text-text-light/70 text-sm">Contacts Reached</span>
                  <span className="text-cta-gold text-xs bg-cta-gold/20 px-2 py-1 rounded">
                    +15%
                  </span>
                </div>
                <div className="mt-2">
                  <span className="text-text-light text-2xl font-bold">6,218</span>
                </div>
                <div className="mt-2 h-2 bg-base-100 rounded-full overflow-hidden">
                  <div className="h-full bg-cta-gold w-3/4 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-base-300 rounded-lg p-4">
                <span className="text-text-light/70 text-sm">Open Rate</span>
                <div className="mt-2 flex items-end justify-between">
                  <span className="text-text-light text-2xl font-bold">42.8%</span>
                  <div className="flex items-center text-accent-teal">
                    <TrendingUpIcon size={16} className="mr-1" />
                    <span className="text-xs">Industry avg: 21.5%</span>
                  </div>
                </div>
              </div>

              <div className="bg-base-300 rounded-lg p-4">
                <span className="text-text-light/70 text-sm">Response Rate</span>
                <div className="mt-2 flex items-end justify-between">
                  <span className="text-text-light text-2xl font-bold">12.6%</span>
                  <div className="flex items-center text-accent-teal">
                    <TrendingUpIcon size={16} className="mr-1" />
                    <span className="text-xs">Industry avg: 4.2%</span>
                  </div>
                </div>
              </div>

              <div className="bg-base-300 rounded-lg p-4">
                <span className="text-text-light/70 text-sm">Meetings Booked</span>
                <div className="mt-2 flex items-end justify-between">
                  <span className="text-text-light text-2xl font-bold">187</span>
                  <span className="text-text-light/70 text-xs">This month</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};