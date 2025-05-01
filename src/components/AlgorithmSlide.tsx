
import React from 'react';
import { Card } from '@/components/ui/card';
import { Code, Database, Settings } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';

interface AlgorithmSlideProps {
  algorithmCode: string;
}

const AlgorithmSlide: React.FC<AlgorithmSlideProps> = ({ algorithmCode }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="font-bold text-xl mb-4 flex items-center">
          <Settings className="mr-2 h-5 w-5 text-touchbase-purple" />
          Compatibility Algorithm
        </h3>
        <p className="mb-4">
          Our proprietary matching system creates connections based on shared interests, values, and personality traits.
        </p>
        <CodeBlock
          code={algorithmCode}
          language="javascript"
          title="Interest-Based Matching Algorithm"
        />
      </Card>
      
      <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-start mb-4">
          <div className="rounded-full bg-touchbase-blue/20 p-2 mr-4">
            <Database className="h-6 w-6 text-touchbase-blue" />
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Technical Highlights</h3>
            <p>Advanced technology with a human-centric approach</p>
          </div>
        </div>
        <ul className="space-y-3">
          <li className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
            <h4 className="font-medium text-touchbase-purple mb-1">ML-Powered but Human-Verified</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Machine learning algorithms suggest matches, but human moderators oversee connections to ensure quality and safety
            </p>
          </li>
          
          <li className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
            <h4 className="font-medium text-touchbase-orange mb-1">Multi-Dimensional Compatibility</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Beyond shared interests, we measure communication styles, values alignment, and activity preferences
            </p>
          </li>
          
          <li className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
            <h4 className="font-medium text-touchbase-blue mb-1">Continuous Learning</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              System refines matches based on real-world interaction feedback, improving compatibility over time
            </p>
          </li>
        </ul>
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-touchbase-purple" />
            <span className="font-semibold">92% Match Satisfaction Rate</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Based on post-interaction feedback from over 10,000 connections
          </p>
        </div>
      </Card>
    </div>
  );
};

export default AlgorithmSlide;