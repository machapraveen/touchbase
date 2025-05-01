
import React from 'react';
import { Card } from '@/components/ui/card';
import { BookOpen, Calendar, MessageCircle, Users } from 'lucide-react';

const TeamAndTimelineSlide: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="font-bold text-xl mb-4 flex items-center">
          <Users className="mr-2 h-5 w-5 text-touchbase-purple" />
          Our Team
        </h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-touchbase-purple to-touchbase-blue flex items-center justify-center text-white font-bold text-2xl">
              VB
            </div>
            <div>
              <h4 className="font-semibold text-lg">Botla Veerendra</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Chief Executive Officer</p>
              <p className="text-sm">
                15+ years in technology leadership with expertise in human-centered design and community building
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-touchbase-blue to-touchbase-orange flex items-center justify-center text-white font-bold text-2xl">
              MP
            </div>
            <div>
              <h4 className="font-semibold text-lg">Macha Praveen</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Chief Technology Officer</p>
              <p className="text-sm">
                Tech innovator with background in social psychology and machine learning for human connection
              </p>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold mb-2">Advisory Board</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <p className="font-medium">Dr. Anjali Sharma</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Digital Well-being Expert</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <p className="font-medium">Robert Chen</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Community Building Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
        <h3 className="font-bold text-xl mb-4 flex items-center">
          <Calendar className="mr-2 h-5 w-5 text-touchbase-blue" />
          Roadmap & Timeline
        </h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          <div className="mb-8 ml-10 relative">
            <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-green-500 border-4 border-white dark:border-gray-800"></div>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
              <h4 className="font-medium flex items-center">
                <span className="mr-2">Q3 2023</span>
                <span className="text-xs bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-0.5 rounded">Completed</span>
              </h4>
              <p className="text-sm mt-1">
                Beta launch in Mumbai and Bangalore with 5 tech-free zones
              </p>
            </div>
          </div>
          
          <div className="mb-8 ml-10 relative">
            <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-green-500 border-4 border-white dark:border-gray-800"></div>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
              <h4 className="font-medium flex items-center">
                <span className="mr-2">Q1 2024</span>
                <span className="text-xs bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-0.5 rounded">Completed</span>
              </h4>
              <p className="text-sm mt-1">
                Full platform launch in India with 15 tech-free zones and mobile app
              </p>
            </div>
          </div>
          
          <div className="mb-8 ml-10 relative">
            <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
              <h4 className="font-medium flex items-center">
                <span className="mr-2">Q3 2024</span>
                <span className="text-xs bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded">In Progress</span>
              </h4>
              <p className="text-sm mt-1">
                US market entry with pilot locations in NYC, SF, and Austin
              </p>
            </div>
          </div>
          
          <div className="ml-10 relative">
            <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 border-4 border-white dark:border-gray-800"></div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <h4 className="font-medium">Q2 2025</h4>
              <p className="text-sm mt-1">
                Global expansion to 50 cities with partner network and enterprise solutions
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TeamAndTimelineSlide;
