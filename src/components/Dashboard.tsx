import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2Icon, TrendingUpIcon } from 'lucide-react';
export const Dashboard = () => {
  return <section className="py-16">
      <motion.div className="text-center mb-4" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 1.0
    }}>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          AUTOPILOT DASHBOARD
        </h2>
        <p className="text-gray-300">
          Real-time metrics and performance tracking for your AI sales agents
        </p>
      </motion.div>
      <div className="container mx-auto px-4 mt-10">
        <motion.div className="bg-[#111823] rounded-xl p-6 max-w-5xl mx-auto" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 1.1
      }}>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <BarChart2Icon className="text-green-400 mr-2" size={24} />
              <div>
                <h3 className="text-white font-semibold">
                  Campaign Performance
                </h3>
                <p className="text-sm text-gray-400">Last 30 days</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span className="text-white text-sm">Active</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-white text-sm">Auto-optimizing</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-[#151D29] rounded-lg p-4">
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Companies Found</span>
                <span className="text-green-500 text-xs bg-green-900/30 px-2 py-1 rounded">
                  +12%
                </span>
              </div>
              <div className="mt-2">
                <span className="text-white text-2xl font-bold">2,874</span>
              </div>
              <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-3/4 rounded-full"></div>
              </div>
            </div>
            <div className="bg-[#151D29] rounded-lg p-4">
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Contacts Found</span>
                <span className="text-blue-500 text-xs bg-blue-900/30 px-2 py-1 rounded">
                  +18%
                </span>
              </div>
              <div className="mt-2">
                <span className="text-white text-2xl font-bold">9,356</span>
              </div>
              <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-4/5 rounded-full"></div>
              </div>
            </div>
            <div className="bg-[#151D29] rounded-lg p-4">
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Emails Sent</span>
                <span className="text-purple-500 text-xs bg-purple-900/30 px-2 py-1 rounded">
                  +24%
                </span>
              </div>
              <div className="mt-2">
                <span className="text-white text-2xl font-bold">15,427</span>
              </div>
              <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 w-4/5 rounded-full"></div>
              </div>
            </div>
            <div className="bg-[#151D29] rounded-lg p-4">
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Contacts Reached</span>
                <span className="text-pink-500 text-xs bg-pink-900/30 px-2 py-1 rounded">
                  +15%
                </span>
              </div>
              <div className="mt-2">
                <span className="text-white text-2xl font-bold">6,218</span>
              </div>
              <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-pink-500 w-3/4 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#151D29] rounded-lg p-4">
              <span className="text-gray-400 text-sm">Open Rate</span>
              <div className="mt-2 flex items-end justify-between">
                <span className="text-white text-2xl font-bold">42.8%</span>
                <div className="flex items-center text-green-400">
                  <TrendingUpIcon size={16} className="mr-1" />
                  <span className="text-xs">Industry avg: 21.5%</span>
                </div>
              </div>
            </div>
            <div className="bg-[#151D29] rounded-lg p-4">
              <span className="text-gray-400 text-sm">Response Rate</span>
              <div className="mt-2 flex items-end justify-between">
                <span className="text-white text-2xl font-bold">12.6%</span>
                <div className="flex items-center text-green-400">
                  <TrendingUpIcon size={16} className="mr-1" />
                  <span className="text-xs">Industry avg: 4.2%</span>
                </div>
              </div>
            </div>
            <div className="bg-[#151D29] rounded-lg p-4">
              <span className="text-gray-400 text-sm">Meetings Booked</span>
              <div className="mt-2 flex items-end justify-between">
                <span className="text-white text-2xl font-bold">187</span>
                <span className="text-gray-400 text-xs">This month</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};