
import React from 'react';
import { Card } from '@/components/ui/card';
import Chart from '@/components/Chart';
import { DollarSign, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface BusinessModelSlideProps {
  marketDataUS: { name: string; value: number }[];
  marketDataIndia: { name: string; value: number }[];
  revenueSourcesData: { name: string; value: number }[];
  revenueSourcesIndiaData: { name: string; value: number }[];
}

const BusinessModelSlide: React.FC<BusinessModelSlideProps> = ({
  marketDataUS,
  marketDataIndia,
  revenueSourcesData,
  revenueSourcesIndiaData
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="font-bold text-xl mb-4 flex items-center">
          <DollarSign className="mr-2 h-5 w-5 text-touchbase-purple" />
          Market Opportunity
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Chart
            type="bar"
            data={marketDataUS}
            title="US Market ($ Billions)"
          />
          <Chart
            type="bar"
            data={marketDataIndia}
            title="India Market ($ Billions)"
            isIndia={true}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
        >
          <h4 className="font-semibold mb-2">Combined TAM</h4>
          <p className="text-sm">
            The Total Addressable Market for both regions reaches $27 Billion, with predicted
            annual growth of 18% as tech-free experiences gain mainstream adoption.
          </p>
        </motion.div>
      </Card>
      
      <div className="space-y-6">
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-xl mb-4 flex items-center">
            <TrendingUp className="mr-2 h-5 w-5 text-touchbase-blue" />
            Revenue Streams
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-center">Global</h4>
              <Chart
                type="pie"
                data={revenueSourcesData}
                title="Revenue Distribution"
              />
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-center">India</h4>
              <Chart
                type="pie"
                data={revenueSourcesIndiaData}
                title="Revenue Distribution"
                isIndia={true}
              />
            </div>
          </div>
        </Card>
        
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-xl mb-4 flex items-center">
            <Users className="mr-2 h-5 w-5 text-touchbase-orange" />
            Business Model Highlights
          </h3>
          
          <motion.div className="space-y-4">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-start gap-3"
            >
              <div className="h-6 w-6 rounded-full bg-touchbase-purple/20 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-touchbase-purple">1</span>
              </div>
              <div>
                <h5 className="font-medium">Premium Subscription Model</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Tiered memberships with enhanced matching features and priority event access
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-start gap-3"
            >
              <div className="h-6 w-6 rounded-full bg-touchbase-blue/20 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-touchbase-blue">2</span>
              </div>
              <div>
                <h5 className="font-medium">Event & Experience Commissions</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Revenue share with venue partners and experience providers
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-start gap-3"
            >
              <div className="h-6 w-6 rounded-full bg-touchbase-orange/20 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-touchbase-orange">3</span>
              </div>
              <div>
                <h5 className="font-medium">Enterprise Connection Programs</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  B2B offerings for corporate team building and wellness programs
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Card>
      </div>
    </div>
  );
};

export default BusinessModelSlide;