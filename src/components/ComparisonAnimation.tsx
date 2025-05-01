
import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

interface ComparisonAnimationProps {
  className?: string;
}

const ComparisonAnimation: React.FC<ComparisonAnimationProps> = ({ className }) => {
  return (
    <div className={`w-full max-w-4xl mx-auto p-4 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* AI World Side */}
        <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-xl p-6 relative overflow-hidden">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">With AI Intermediaries</h3>
          
          {/* Digital environment elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-[10%] left-[20%]">
              <motion.div
                className="h-8 w-8 rounded-full bg-blue-500"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </div>
            <div className="absolute top-[30%] right-[30%]">
              <motion.div
                className="h-6 w-6 rounded-full bg-green-400"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                }}
              />
            </div>
            <div className="absolute bottom-[25%] left-[35%]">
              <motion.div
                className="h-10 w-10 rounded-full bg-purple-400"
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                }}
              />
            </div>
            {/* Digital grid lines */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="border border-white border-opacity-10" />
              ))}
            </div>
          </div>
          
          {/* Person 1 */}
          <div className="relative z-10">
            <motion.div 
              className="mb-12"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gray-700 rounded-full p-3">
                  <Users className="h-6 w-6 text-gray-300" />
                </div>
                <div className="ml-3 bg-gray-800 rounded-lg p-2 text-gray-300">
                  <p className="text-sm">Looking for connection...</p>
                </div>
              </div>
              
              {/* Digital screens between people */}
              <motion.div 
                className="flex justify-center my-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {Array.from({ length: 3 }).map((_, i) => (
                  <div 
                    key={i}
                    className="h-16 w-3 bg-gray-600 mx-1 rounded-md opacity-80"
                  />
                ))}
              </motion.div>
              
              {/* Person 2 (distant) */}
              <motion.div 
                className="flex items-center flex-row-reverse"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="bg-gray-700 rounded-full p-3">
                  <Users className="h-6 w-6 text-gray-300" />
                </div>
                <div className="mr-3 bg-gray-800 rounded-lg p-2 text-gray-300">
                  <p className="text-sm">Also here, but distant...</p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Status indicators */}
            <div className="mt-6 pt-4 border-t border-white border-opacity-20">
              <div className="flex justify-between text-white text-opacity-70 text-sm">
                <span>Connection Quality:</span>
                <span className="text-red-400">Low</span>
              </div>
              <div className="flex justify-between text-white text-opacity-70 text-sm mt-1">
                <span>Emotional Depth:</span>
                <span className="text-red-400">Minimal</span>
              </div>
              <div className="flex justify-between text-white text-opacity-70 text-sm mt-1">
                <span>Authenticity:</span>
                <span className="text-red-400">Filtered</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* TouchBase Side */}
        <div className="bg-gradient-to-br from-green-800 to-blue-700 rounded-xl p-6 relative overflow-hidden">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">With TouchBase</h3>
          
          {/* Natural environment elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-[15%] left-[25%]">
              <motion.div 
                className="h-12 w-12 rounded-full bg-green-300"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity
                }}
              />
            </div>
            <div className="absolute top-[40%] right-[20%]">
              <motion.div 
                className="h-8 w-8 rounded-full bg-blue-300"
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity
                }}
              />
            </div>
            {/* Natural patterns */}
            <svg className="absolute inset-0 w-full h-full">
              <pattern
                id="natural-pattern"
                x="0"
                y="0"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0,25 Q12.5,0 25,25 T50,25"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#natural-pattern)" />
            </svg>
          </div>
          
          {/* Person 1 and 2 in close connection */}
          <div className="relative z-10">
            <motion.div 
              className="flex justify-center mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <div className="flex items-center space-x-4">
                <motion.div 
                  className="bg-blue-600 rounded-full p-3"
                  animate={{ 
                    x: [0, -3, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Users className="h-6 w-6 text-white" />
                </motion.div>
                
                {/* Connection between people */}
                <motion.div
                  className="h-1 w-8 bg-yellow-400 rounded-full"
                  animate={{ 
                    opacity: [0.6, 1, 0.6],
                    height: [4, 6, 4]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                
                <motion.div
                  className="bg-green-600 rounded-full p-3"
                  animate={{ 
                    x: [0, 3, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Users className="h-6 w-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Dialog bubbles showing authentic connection */}
            <div className="mt-8 space-y-3">
              <motion.div 
                className="bg-white bg-opacity-20 p-3 rounded-lg max-w-[80%]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <p className="text-white text-sm">I'm really glad we could meet in person today!</p>
              </motion.div>
              
              <motion.div 
                className="bg-white bg-opacity-20 p-3 rounded-lg max-w-[80%] ml-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <p className="text-white text-sm">Me too! There's something special about real face-to-face connection.</p>
              </motion.div>
            </div>
            
            {/* Status indicators */}
            <div className="mt-6 pt-4 border-t border-white border-opacity-20">
              <div className="flex justify-between text-white text-opacity-90 text-sm">
                <span>Connection Quality:</span>
                <span className="text-green-300">High</span>
              </div>
              <div className="flex justify-between text-white text-opacity-90 text-sm mt-1">
                <span>Emotional Depth:</span>
                <span className="text-green-300">Meaningful</span>
              </div>
              <div className="flex justify-between text-white text-opacity-90 text-sm mt-1">
                <span>Authenticity:</span>
                <span className="text-green-300">Genuine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonAnimation;