import React, { useState, useEffect } from 'react';
import Slide from '@/components/Slide';
import CodeBlock from '@/components/CodeBlock';
import Chart from '@/components/Chart';
import FlowDiagram from '@/components/FlowDiagram';
import AnimatedCounter from '@/components/AnimatedCounter';
import SlideControls from '@/components/SlideControls';
import ComparisonAnimation from '@/components/ComparisonAnimation';
import AlgorithmSlide from '@/components/AlgorithmSlide';
import BusinessModelSlide from '@/components/BusinessModelSlide';
import TeamAndTimelineSlide from '@/components/TeamAndTimelineSlide';
import ArchitectureSlide from '@/components/ArchitectureSlide';
import ConclusionSlide from '@/components/ConclusionSlide';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Users, 
  Heart, 
  Globe, 
  Database, 
  Link,
  Calendar,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 12; // Update this when adding/removing slides
  const [hasInteracted, setHasInteracted] = useState(false);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
      setHasInteracted(true);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setHasInteracted(true);
    }
  };

  // Function to go directly to a specific slide
  const goToSlide = (slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < totalSlides) {
      setCurrentSlide(slideIndex);
      setHasInteracted(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'PageDown') {
        nextSlide();
      } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  // Sample data for charts - US focused
  const digitalLonelinessDataUS = [
    { name: 'Feel Disconnected', value: 71 },
    { name: 'Mental Health Impact', value: 64 },
    { name: 'Want Deeper Connection', value: 58 },
    { name: 'Daily Screen Time >7h', value: 78 }
  ];
  
  // Sample data for charts - India focused
  const digitalLonelinessDataIndia = [
    { name: 'Feel Disconnected', value: 68 },
    { name: 'Mental Health Impact', value: 72 },
    { name: 'Want Deeper Connection', value: 65 },
    { name: 'Daily Screen Time >7h', value: 83 }
  ];

  // Screen Time Trends - India vs US
  const screenTimeTrendsData = [
    { name: '2020', value: 5.2, india: 4.8 },
    { name: '2021', value: 5.7, india: 5.5 },
    { name: '2022', value: 6.3, india: 6.8 },
    { name: '2023', value: 6.8, india: 7.5 },
    { name: '2024', value: 7.2, india: 8.1 }
  ];
  
  // Formatted for chart usage
  const screenTimeUS = screenTimeTrendsData.map(item => ({
    name: item.name,
    value: item.value
  }));
  
  const screenTimeIndia = screenTimeTrendsData.map(item => ({
    name: item.name,
    value: item.india
  }));

  const marketDataUS = [
    { name: 'TAM', value: 15 },
    { name: 'SAM', value: 2 },
    { name: 'SOM Year 1', value: 0.3 },
    { name: 'SOM Year 3', value: 1.2 }
  ];
  
  const marketDataIndia = [
    { name: 'TAM', value: 12 },
    { name: 'SAM', value: 1.8 },
    { name: 'SOM Year 1', value: 0.2 },
    { name: 'SOM Year 3', value: 1.0 }
  ];

  const revenueSourcesData = [
    { name: 'Subscriptions', value: 65 },
    { name: 'Event Commissions', value: 25 },
    { name: 'Data Analytics', value: 10 }
  ];
  
  const revenueSourcesIndiaData = [
    { name: 'Subscriptions', value: 55 },
    { name: 'Event Commissions', value: 30 },
    { name: 'Data Analytics', value: 15 }
  ];

  // User acquisition flow diagram
  const userFlowNodes = [
    { id: 'discovery', label: 'Discovery', x: 100, y: 200, color: '#8B5CF6', description: 'Users discover TouchBase through social media, word of mouth, and partnerships' },
    { id: 'onboarding', label: 'Onboarding', x: 250, y: 150, color: '#0EA5E9', description: 'Simple sign-up and interest mapping' },
    { id: 'matching', label: 'Matching', x: 400, y: 100, color: '#F97316', description: 'Interest-based algorithm with 92% compatibility' },
    { id: 'events', label: 'Events', x: 550, y: 150, color: '#10B981', description: 'Curated in-person gatherings and activities' },
    { id: 'community', label: 'Community', x: 700, y: 200, color: '#6E59A5', description: 'Long-term connections and repeat engagements' }
  ];

  const userFlowEdges = [
    { from: 'discovery', to: 'onboarding', animated: true },
    { from: 'onboarding', to: 'matching', animated: true },
    { from: 'matching', to: 'events', animated: true },
    { from: 'events', to: 'community', animated: true },
    { from: 'community', to: 'matching', label: 'Continuous Engagement' }
  ];

  // Platform architecture diagram
  const architectureNodes = [
    { id: 'frontend', label: 'Frontend', x: 200, y: 100, color: '#8B5CF6', description: 'React Native for cross-platform support' },
    { id: 'api', label: 'API Gateway', x: 400, y: 100, color: '#0EA5E9', description: 'Manages service routing and authentication' },
    { id: 'auth', label: 'Auth Service', x: 300, y: 200, color: '#F97316', description: 'Secure identity management' },
    { id: 'matching', label: 'Matching Engine', x: 500, y: 200, color: '#10B981', description: 'ML-powered compatibility algorithm' },
    { id: 'events', label: 'Event Service', x: 400, y: 300, color: '#6E59A5', description: 'Organizes and manages gatherings' },
    { id: 'analytics', label: 'Analytics', x: 600, y: 300, color: '#EC4899', description: 'Insights on user engagement patterns' }
  ];

  const architectureEdges = [
    { from: 'frontend', to: 'api', animated: true },
    { from: 'api', to: 'auth' },
    { from: 'api', to: 'matching' },
    { from: 'api', to: 'events' },
    { from: 'events', to: 'analytics' },
    { from: 'matching', to: 'analytics' }
  ];
  
  // Journey Without Devices diagram
  const unpluggingNodes = [
    { id: 'arrival', label: 'Arrival', x: 100, y: 200, color: '#FF9933', description: 'Visitors check in and store devices in secure lockers' },
    { id: 'orientation', label: 'Orientation', x: 250, y: 150, color: '#138808', description: 'Brief introduction to tech-free environment and activities' },
    { id: 'connection', label: 'Connection', x: 400, y: 100, color: '#000080', description: 'Guided activities to break the ice and build trust' },
    { id: 'activities', label: 'Activities', x: 550, y: 150, color: '#800080', description: 'Structured group interactions and shared experiences' },
    { id: 'reflection', label: 'Reflection', x: 700, y: 200, color: '#FF5733', description: 'Sharing insights and building lasting bonds' }
  ];

  const unpluggingEdges = [
    { from: 'arrival', to: 'orientation', animated: true },
    { from: 'orientation', to: 'connection', animated: true },
    { from: 'connection', to: 'activities', animated: true },
    { from: 'activities', to: 'reflection', animated: true },
    { from: 'reflection', to: 'arrival', label: 'Return Visits' }
  ];

  // Sample code for the algorithm section
  const algorithmCode = `// Interest-based matching algorithm
function calculateCompatibility(user1, user2) {
  // Extract shared interests
  const sharedInterests = user1.interests.filter(
    interest => user2.interests.includes(interest)
  );
  
  // Calculate interest overlap score (0-1)
  const interestScore = sharedInterests.length / 
    Math.sqrt(user1.interests.length * user2.interests.length);
  
  // Consider location proximity
  const distanceScore = calculateProximityScore(
    user1.location, user2.location
  );
  
  // Consider activity preferences
  const activityScore = calculateActivityCompatibility(
    user1.activityPreferences, user2.activityPreferences
  );
  
  // Weighted compatibility score
  return (
    interestScore * 0.5 + 
    distanceScore * 0.3 + 
    activityScore * 0.2
  );
}`;

  const touchBaseLaunchCode = `// TouchBase Tech-Free Zone Implementation
import { createTechFreeZone, monitorDigitalDetox } from 'touchbase-sdk';

async function setupTouchBaseZone(location, capacity) {
  // Create a new tech-free environment
  const zone = await createTechFreeZone({
    name: 'TouchBase Connection Hub',
    location: location,
    capacity: capacity,
    deviceLockers: Math.ceil(capacity * 1.2), // Extra lockers for multiple devices
    activities: ['storytelling', 'art-therapy', 'group-games', 'mindfulness']
  });
  
  // Setup digital detox monitoring
  const analytics = monitorDigitalDetox(zone.id, {
    trackTimeSpent: true,
    measureWellbeingImpact: true,
    recordVisitorFeedback: true,
    privacyCompliant: true // GDPR and local privacy laws
  });
  
  return { zone, analytics };
}

// Usage for Mumbai location
const mumbaiHub = await setupTouchBaseZone(
  'Bandra West, Mumbai', 
  75 // initial capacity
);`;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen overflow-x-hidden">
      {/* Title Slide */}
      <Slide 
        id="title" 
        title="TouchBase: Reclaiming Human Connection in a Digital Age" 
        isActive={currentSlide === 0}
        className="gradient-bg text-white"
        titleClass="text-4xl md:text-5xl lg:text-6xl"
        animationVariant="scale"
        subtitle="A human-centric solution for an AI-dominated world"
        bgVariant="none"
      >
        <div className="flex flex-col items-center justify-center space-y-6 max-w-4xl mx-auto text-center">
          <motion.div 
            className="flex items-center justify-center w-20 h-20 mb-4 bg-white bg-opacity-20 rounded-full"
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
            <Link className="w-10 h-10" />
          </motion.div>
          <p className="text-xl md:text-2xl opacity-90">
            Team LEGION: Botla Veerendra, Macha Praveen
          </p>
          <p className="text-lg md:text-xl opacity-75">
            Contact: veerendrabotla@gmail.com
          </p>
          <div className="mt-8 pt-8 border-t border-white border-opacity-20 w-full">
            <p className="text-lg md:text-xl opacity-90">
              A platform designed to restore genuine human connections in the face 
              of overwhelming digital distractions
            </p>
          </div>
          {!hasInteracted && (
            <motion.div 
              className="absolute bottom-24 text-center text-white text-opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p>Press → to begin or use navigation controls</p>
              <div className="mt-2">
                <Search className="inline-block h-5 w-5 animate-bounce" />
              </div>
            </motion.div>
          )}
        </div>
      </Slide>

      {/* Insert the new AI vs TouchBase comparison slide */}
      <Slide 
        id="comparison" 
        title="AI Intermediaries vs. Genuine Human Connection" 
        isActive={currentSlide === 1}
        animationVariant="fade"
        subtitle="The TouchBase difference: Rebuilding emotional infrastructure"
        bgVariant="gradient-1"
      >
        <ComparisonAnimation className="mb-8" />
        
        <Card className="p-6 shadow-md max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">The TouchBase Advantage</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2 flex items-center">
                <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                AI-Mediated Connection
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Screen-based interactions</li>
                <li>• Algorithmic matching</li>
                <li>• Optimized but shallow conversations</li>
                <li>• Limited emotional bandwidth</li>
                <li>• Constant digital distractions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2 flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                TouchBase Connection
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Face-to-face interactions</li>
                <li>• Genuine interest-based community</li>
                <li>• Deep, authentic conversations</li>
                <li>• Full emotional connection</li>
                <li>• Focused presence without devices</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            "TouchBase creates the spaces where human connection thrives in its most natural form - unfiltered, unmediated, and undistracted."
          </div>
        </Card>
      </Slide>

      {/* Problem Slide - US - Now shifted to slide 2 */}
      <Slide 
        id="problem-us" 
        title="The Problem: Digital Overload & Connection Deficit" 
        isActive={currentSlide === 2}
        region="us"
        animationVariant="fade"
        subtitle="The United States Perspective"
        bgVariant="blue"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="rounded-full bg-touchbase-purple/20 p-2 mr-4">
                  <Users className="h-6 w-6 text-touchbase-purple" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Digital Loneliness Paradox</h3>
                  <p>Despite unprecedented digital connectivity, younger generations experience profound disconnection</p>
                </div>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Gen Z & Millennials feeling disconnected:</span>
                <AnimatedCounter value={71} suffix="%" className="text-touchbase-purple" />
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Source: American Psychological Association, 2023
              </div>
            </Card>

            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="rounded-full bg-touchbase-blue/20 p-2 mr-4">
                  <Heart className="h-6 w-6 text-touchbase-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Mental Health Impact</h3>
                  <p>Social media use correlates with increased feelings of isolation and anxiety</p>
                </div>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Reporting negative mental health effects:</span>
                <AnimatedCounter value={64} suffix="%" className="text-touchbase-blue" />
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Source: Newport, C. (2019). Digital Minimalism
              </div>
            </Card>
          </div>

          <div>
            <Chart 
              type="bar" 
              data={digitalLonelinessDataUS}
              title="Digital Connection Paradox in US (% of surveyed users)"
              className="animate-fade-in"
              sourceText="Statista, 2024. Time spent daily with digital media in the U.S."
            />
            <Card className="p-6 mt-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="rounded-full bg-touchbase-orange/20 p-2 mr-4">
                  <Globe className="h-6 w-6 text-touchbase-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Economic Impact</h3>
                  <p>Social isolation has significant societal and economic costs</p>
                </div>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Annual economic cost in the US:</span>
                <AnimatedCounter value={406} prefix="$" suffix=" billion" className="text-touchbase-orange" />
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Source: Deloitte Insights, 2024. The Human Experience in an AI-Driven World
              </div>
            </Card>
          </div>
        </div>
      </Slide>
      
      {/* Problem Slide - India - Now shifted to slide 3 */}
      <Slide 
        id="problem-india" 
        title="The Problem: Digital Overload & Connection Deficit" 
        isActive={currentSlide === 3}
        region="india"
        animationVariant="slide"
        subtitle="The Indian Perspective"
        bgVariant="orange"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex items-start mb-4">
                <div className="rounded-full bg-green-600/20 p-2 mr-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Digital Loneliness in India</h3>
                  <p>Rapid digitization has created a unique disconnect in traditionally collectivist society</p>
                </div>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Urban youth feeling socially isolated:</span>
                <AnimatedCounter value={68} suffix="%" className="text-green-600" />
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Source: Indian Journal of Psychiatry, 2023
              </div>
            </Card>

            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-600">
              <div className="flex items-start mb-4">
                <div className="rounded-full bg-orange-500/20 p-2 mr-4">
                  <Heart className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Mental Health Crisis</h3>
                  <p>Young Indians facing unprecedented mental health challenges linked to digital overload</p>
                </div>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Reported anxiety from social media pressure:</span>
                <AnimatedCounter value={72} suffix="%" className="text-orange-500" />
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Source: National Mental Health Survey, India, 2022
              </div>
            </Card>
          </div>

          <div>
            <Chart 
              type="bar" 
              data={digitalLonelinessDataIndia}
              title="Digital Connection Paradox in India (% of surveyed users)"
              className="animate-fade-in"
              sourceText="TRAI Digital India Report, 2023"
              isIndia={true}
            />
            <Card className="p-6 mt-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-700">
              <div className="flex items-start mb-4">
                <div className="rounded-full bg-blue-700/20 p-2 mr-4">
                  <Globe className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Economic Potential</h3>
                  <p>Addressing digital isolation could unlock significant economic value</p>
                </div>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Potential annual economic benefit:</span>
                <AnimatedCounter value={185} prefix="₹" suffix=" billion" className="text-blue-700" />
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Source: McKinsey Global Institute, India's Digital Opportunity, 2023
              </div>
            </Card>
          </div>
        </div>
      </Slide>
      
      {/* Comparative Screen Time Analysis - Now shifted to slide 4 */}
      <Slide 
        id="screen-time-analysis" 
        title="Alarming Screen Time Trends" 
        isActive={currentSlide === 4}
        animationVariant="fade"
        subtitle="Comparative analysis of average daily screen time (hours/day)"
        bgVariant="gradient-2"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Chart 
            type="line" 
            data={screenTimeUS}
            title="US Average Screen Time (hours/day)"
            sourceText="Statista, 2024; Hari, J. (2022). Stolen Focus"
          />
          
          <Chart 
            type="line" 
            data={screenTimeIndia}
            title="India Average Screen Time (hours/day)"
            sourceText="TRAI Digital India Report, 2023"
            isIndia={true}
          />
          
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-red-600">
                  <AnimatedCounter value={83} suffix="%" />
                </div>
                <p className="text-center">of Indian youth check their phone within 5 minutes of waking up</p>
                <div className="mt-2 text-xs text-gray-500">
                  Source: India Smartphone Report, 2023
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-amber-600">
                  <AnimatedCounter value={67} suffix="%" />
                </div>
                <p className="text-center">feel anxious when separated from their devices</p>
                <div className="mt-2 text-xs text-gray-500">
                  Source: National Mental Health Survey, India, 2022
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-purple-600">
                  <AnimatePresence>
                    <AnimatedCounter value={8.1} suffix=" hrs" />
                  </AnimatePresence>
                </div>
                <p className="text-center">average daily screen time in India (2024), exceeding global average</p>
                <div className="mt-2 text-xs text-gray-500">
                  Source: TRAI Digital India Report, 2023
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="font-medium">Despite cultural differences, both regions show alarming increases in screen dependency</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                The trend is projected to continue rising, with estimated 9+ hours daily by 2026 without intervention
              </p>
            </div>
          </Card>
        </div>
      </Slide>

      {/* Solution Slide - Now shifted to slide 5 */}
      <Slide 
        id="solution" 
        title="TouchBase: Our Solution" 
        isActive={currentSlide === 5}
        animationVariant="scale"
        bgVariant="purple"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow lg:col-span-3">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <motion.div 
                className="rounded-full bg-gradient-to-br from-touchbase-purple to-touchbase-blue p-8"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Link className="h-12 w-12 text-white" />
              </motion.div>
              <div>
                <h3 className="font-bold text-2xl mb-2">Interest-Based Connection Platform</h3>
                <p className="text-lg">
                  TouchBase is designed to facilitate meaningful in-person connections 
                  through shared interests and curated experiences.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-touchbase-purple/20 p-2 w-12 h-12 flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-touchbase-purple" />
            </div>
            <h3 className="font-bold text-xl mb-2">Smart Matching</h3>
            <p>Interest-based algorithm with 92% compatibility accuracy</p>
            <div className="mt-4">
              <CodeBlock 
                code="// Matching based on:\n- Shared interests\n- Proximity\n- Activity preferences\n- Scheduling compatibility"
                language="javascript"
                className="max-h-32 text-sm"
              />
            </div>
          </Card>
          
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-touchbase-blue/20 p-2 w-12 h-12 flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-touchbase-blue" />
            </div>
            <h3 className="font-bold text-xl mb-2">Curated Experiences</h3>
            <p>Thoughtfully designed events that foster authentic connections</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-touchbase-blue"></span>
                <span>Community workshops</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-touchbase-blue"></span>
                <span>Skill-sharing meetups</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-touchbase-blue"></span>
                <span>Interest-based activities</span>
              </li>
            </ul>
          </Card>
          
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-touchbase-orange/20 p-2 w-12 h-12 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-touchbase-orange" />
            </div>
            <h3 className="font-bold text-xl mb-2">Intuitive Platform</h3>
            <p>Mobile-first design with features that simplify connection</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="bg-touchbase-orange/10 px-3 py-1 rounded-full text-sm text-touchbase-orange">Smart scheduling</div>
              <div className="bg-touchbase-orange/10 px-3 py-1 rounded-full text-sm text-touchbase-orange">Location services</div>
              <div className="bg-touchbase-orange/10 px-3 py-1 rounded-full text-sm text-touchbase-orange">Icebreakers</div>
              <div className="bg-touchbase-orange/10 px-3 py-1 rounded-full text-sm text-touchbase-orange">Community feedback</div>
            </div>
          </Card>
        </div>
        
        <FlowDiagram
          nodes={userFlowNodes}
          edges={userFlowEdges}
          title="User Journey Through TouchBase Platform"
          className="mt-8"
        />
      </Slide>
      
      {/* Human-Only Tech Free Experience - Now shifted to slide 6 */}
      <Slide 
        id="tech-free-experience" 
        title="The TouchBase Experience: Tech-Free Connection Zones" 
        isActive={currentSlide === 6}
        animationVariant="slide"
        subtitle="Re-learning human connection in device-free environments"
        bgVariant="gradient-3"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-xl mb-4 flex items-center">
              <Users className="mr-2 h-5 w-5 text-touchbase-purple" />
              Human-First Environment
            </h3>
            <p className="mb-4">
              TouchBase creates dedicated physical spaces where genuine human connection thrives without digital interruptions or artificial interactions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Eye-Contact Cafés</h4>
                <p className="text-sm">Facilitated conversations with strangers based on meaningful topics, not algorithms</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Analog Activity Rooms</h4>
                <p className="text-sm">Collaborative art, music, and games without screens or digital mediation</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Emotion Corners</h4>
                <p className="text-sm">Safe spaces to express vulnerability with trained empathy facilitators</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Storytelling Circles</h4>
                <p className="text-sm">Traditional oral narratives that cultivate communal bonds and shared meaning</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl mb-4 flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-touchbase-blue" />
              Device-Free Journey
            </h3>
            <p>TouchBase visitors follow a structured path that rebuilds their capacity for genuine human interaction.</p>
            
            <FlowDiagram
              nodes={unpluggingNodes}
              edges={unpluggingEdges}
              title="Journey Through Tech-Free Space"
              className="mt-6"
            />
            
            <CodeBlock
              code={touchBaseLaunchCode}
              language="typescript"
              className="mt-6 max-h-48 text-xs"
              title="TouchBase Tech-Free Zone Implementation"
            />
          </Card>
        </div>
      </Slide>

      {/* Algorithm Slide - New Slide 7 */}
      <Slide 
        id="algorithm" 
        title="Our Compatibility Algorithm" 
        isActive={currentSlide === 7}
        animationVariant="fade"
        subtitle="Creating meaningful connections through intelligent matching"
        bgVariant="green"
      >
        <AlgorithmSlide algorithmCode={algorithmCode} />
      </Slide>

      {/* Architecture Slide - New Slide 8 */}
      <Slide 
        id="architecture" 
        title="Platform Architecture" 
        isActive={currentSlide === 8}
        animationVariant="slide"
        subtitle="Robust infrastructure to power the TouchBase experience"
        bgVariant="gradient-4"
      >
        <ArchitectureSlide 
          architectureNodes={architectureNodes} 
          architectureEdges={architectureEdges} 
        />
      </Slide>

      {/* Business Model Slide - New Slide 9 */}
      <Slide 
        id="business-model" 
        title="Business Model & Market Opportunity" 
        isActive={currentSlide === 9}
        animationVariant="fade"
        subtitle="A sustainable approach to connecting people in the real world"
        bgVariant="blue"
      >
        <BusinessModelSlide 
          marketDataUS={marketDataUS}
          marketDataIndia={marketDataIndia}
          revenueSourcesData={revenueSourcesData}
          revenueSourcesIndiaData={revenueSourcesIndiaData}
        />
      </Slide>

      {/* Team & Timeline Slide - New Slide 10 */}
      <Slide 
        id="team-timeline" 
        title="Our Team & Roadmap" 
        isActive={currentSlide === 10}
        animationVariant="scale"
        subtitle="The people and plan behind TouchBase"
        bgVariant="purple"
      >
        <TeamAndTimelineSlide />
      </Slide>

      {/* Conclusion Slide - New Slide 11 */}
      <Slide 
        id="conclusion" 
        title="Join Us in Rebuilding Human Connection" 
        isActive={currentSlide === 11}
        animationVariant="fade"
        bgVariant="gradient-1"
      >
        <ConclusionSlide />
      </Slide>

      {/* Slide Navigation Controls */}
      <SlideControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={prevSlide}
        onNext={nextSlide}
        onGoToSlide={goToSlide}
      />
    </div>
  );
};

export default Index;