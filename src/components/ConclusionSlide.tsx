
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link, MessageCircle, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const ConclusionSlide: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center">
      <motion.div 
        className="flex items-center justify-center w-24 h-24 mb-6 bg-white bg-opacity-20 rounded-full"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0] 
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Link className="w-12 h-12" />
      </motion.div>
      
      {/* Two people walking in different environments animation */}
      <div className="w-full mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Digital Environment */}
          <div className="relative h-64 bg-gradient-to-br from-gray-900 to-purple-900 rounded-xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 opacity-20">
              {/* Digital environment elements */}
              <svg className="w-full h-full">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="absolute top-4 left-4 font-bold text-white text-opacity-80">Digital World</div>
            
            {/* Walking person in digital environment */}
            <motion.div 
              className="absolute bottom-10 flex flex-col items-center"
              initial={{ x: -20 }}
              animate={{ x: 280 }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            >
              <div className="w-10 h-16 bg-blue-400 rounded-t-full relative">
                {/* Body */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-200 rounded-full"></div>
                
                {/* Legs walking animation */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-4 h-4 bg-blue-500"
                  animate={{ rotate: [0, 45, 0, -45, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                ></motion.div>
                
                <motion.div 
                  className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500"
                  animate={{ rotate: [0, -45, 0, 45, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                ></motion.div>
                
                {/* Device emitting light */}
                <motion.div 
                  className="absolute top-4 right-0 w-4 h-6 bg-white rounded"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  <motion.div 
                    className="absolute top-0 right-0 w-12 h-8 bg-white opacity-20 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  ></motion.div>
                </motion.div>
                
                {/* Disconnected bubble */}
                <motion.div 
                  className="absolute -top-8 -right-6 bg-white bg-opacity-20 px-2 py-1 rounded-lg text-xs text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  Disconnected
                </motion.div>
              </div>
            </motion.div>
            
            {/* Digital obstacles */}
            {[...Array(4)].map((_, i) => (
              <motion.div 
                key={i}
                className="absolute bottom-10 w-4 h-12 bg-purple-500 opacity-40"
                style={{ left: `${i * 25 + 15}%` }}
                animate={{ 
                  height: [12, 20, 12],
                  opacity: [0.4, 0.7, 0.4] 
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.5, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
              ></motion.div>
            ))}
          </div>
          
          {/* TouchBase Environment */}
          <div className="relative h-64 bg-gradient-to-br from-green-800 to-blue-700 rounded-xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 opacity-20">
              {/* Natural environment elements */}
              <svg className="w-full h-full">
                <pattern id="waves" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 0,20 Q 10,15 20,20 T 40,20" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#waves)" />
              </svg>
            </div>
            
            <div className="absolute top-4 left-4 font-bold text-white text-opacity-80">TouchBase World</div>
            
            {/* Two walking people in TouchBase environment */}
            <motion.div 
              className="absolute bottom-10 flex items-end"
              initial={{ x: -40 }}
              animate={{ x: 240 }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            >
              {/* Person 1 */}
              <div className="w-10 h-16 bg-green-400 rounded-t-full relative mr-4">
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-200 rounded-full"></div>
                
                {/* Legs walking animation */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-4 h-4 bg-green-500"
                  animate={{ rotate: [0, 45, 0, -45, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                ></motion.div>
                
                <motion.div 
                  className="absolute bottom-0 right-0 w-4 h-4 bg-green-500"
                  animate={{ rotate: [0, -45, 0, 45, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                ></motion.div>
                
                {/* Connection line */}
                <motion.div 
                  className="absolute right-0 top-8 w-8 h-1 bg-yellow-400"
                  animate={{ 
                    width: [8, 12, 8],
                    opacity: [0.6, 1, 0.6] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
              </div>
              
              {/* Person 2 */}
              <div className="w-10 h-16 bg-blue-400 rounded-t-full relative">
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-200 rounded-full"></div>
                
                {/* Legs walking animation */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-4 h-4 bg-blue-500"
                  animate={{ rotate: [0, -45, 0, 45, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                ></motion.div>
                
                <motion.div 
                  className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500"
                  animate={{ rotate: [0, 45, 0, -45, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                ></motion.div>
                
                {/* Connected bubble */}
                <motion.div 
                  className="absolute -top-8 -right-8 bg-white bg-opacity-30 px-2 py-1 rounded-lg text-xs text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Connected!
                </motion.div>
              </div>
            </motion.div>
            
            {/* Natural elements */}
            {[...Array(4)].map((_, i) => (
              <motion.div 
                key={i}
                className="absolute bottom-0 w-8 h-14 bg-green-600 opacity-50 rounded-t-lg"
                style={{ left: `${i * 25 + 12}%` }}
                animate={{ 
                  height: [14, 16, 14],
                  opacity: [0.5, 0.7, 0.5] 
                }}
                transition={{ 
                  duration: 3,
                  delay: i * 0.7, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
              ></motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Card className="p-8 shadow-xl max-w-2xl mx-auto mb-8">
        <h3 className="text-2xl font-bold mb-4">Restoring Human Connection in an AI World</h3>
        <p className="mb-6">
          TouchBase is more than a platform—it's a movement to reclaim authentic human connection 
          in a world increasingly dominated by artificial intelligence and digital intermediaries.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-touchbase-purple/10 p-4 rounded-lg">
            <h4 className="font-semibold text-touchbase-purple mb-2">Device-Free Zones</h4>
            <p className="text-sm">Over 20 locations planned by end of 2024</p>
          </div>
          
          <div className="bg-touchbase-blue/10 p-4 rounded-lg">
            <h4 className="font-semibold text-touchbase-blue mb-2">Interest Matching</h4>
            <p className="text-sm">92% compatibility rate with verified outcomes</p>
          </div>
          
          <div className="bg-touchbase-orange/10 p-4 rounded-lg">
            <h4 className="font-semibold text-touchbase-orange mb-2">Real Connections</h4>
            <p className="text-sm">87% of users form lasting relationships</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            <span>Join Early Access</span>
          </Button>
          
          <Button variant="outline" className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <span>Contact Us</span>
          </Button>
        </div>
      </Card>
      
      <div className="text-lg">
        <p className="mb-4">Thank you for your attention!</p>
        <p className="text-gray-600 dark:text-gray-400">
          Team LEGION: Botla Veerendra, Macha Praveen
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Contact: veerendrabotla@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ConclusionSlide;
