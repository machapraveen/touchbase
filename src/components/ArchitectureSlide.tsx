
import React from 'react';
import { Card } from '@/components/ui/card';
import { Globe, Layers, Settings, Shield } from 'lucide-react';
import FlowDiagram from '@/components/FlowDiagram';
import { motion } from 'framer-motion';

interface ArchitectureSlideProps {
  architectureNodes: any[];
  architectureEdges: any[];
}

const ArchitectureSlide: React.FC<ArchitectureSlideProps> = ({ 
  architectureNodes, 
  architectureEdges 
}) => {
  return (
    <div className="grid grid-cols-1 gap-8">
      <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
        <h3 className="font-bold text-xl mb-4 flex items-center">
          <Layers className="mr-2 h-5 w-5 text-touchbase-purple" />
          Platform Architecture
        </h3>
        <p className="mb-6">
          TouchBase combines powerful backend systems with intuitive interfaces to create 
          seamless connections between users and facilitate meaningful in-person interactions.
        </p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <FlowDiagram
            nodes={architectureNodes}
            edges={architectureEdges}
            title="TouchBase Technical Architecture"
          />
        </motion.div>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-5 shadow-md hover:shadow-lg transition-shadow h-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <div className="rounded-full bg-touchbase-purple/20 p-2 w-12 h-12 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-touchbase-purple" />
            </div>
            <h4 className="font-bold text-lg mb-2">Scalable Infrastructure</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Cloud-native architecture designed to scale across regions with consistent performance
            </p>
          </Card>
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="p-5 shadow-md hover:shadow-lg transition-shadow h-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <div className="rounded-full bg-touchbase-blue/20 p-2 w-12 h-12 flex items-center justify-center mb-4">
              <Settings className="h-6 w-6 text-touchbase-blue" />
            </div>
            <h4 className="font-bold text-lg mb-2">Microservices Design</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Independent services for authentication, matching, events, and analytics for maximum flexibility
            </p>
          </Card>
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className="p-5 shadow-md hover:shadow-lg transition-shadow h-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <div className="rounded-full bg-touchbase-orange/20 p-2 w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-touchbase-orange" />
            </div>
            <h4 className="font-bold text-lg mb-2">Secure Privacy Model</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              End-to-end encryption with granular privacy controls and regional data compliance
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ArchitectureSlide;