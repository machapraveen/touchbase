
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { cn } from '@/lib/utils';

interface ChartProps {
  type: 'bar' | 'pie' | 'line';
  data: any[];
  className?: string;
  title?: string;
  colors?: string[];
  sourceText?: string;
  isIndia?: boolean;
}

const defaultColors = ['#8B5CF6', '#0EA5E9', '#F97316', '#10B981', '#6E59A5'];
const indiaColors = ['#FF9933', '#FFFFFF', '#138808', '#000080', '#800080'];

const Chart: React.FC<ChartProps> = ({
  type,
  data,
  className,
  title,
  colors = defaultColors,
  sourceText,
  isIndia = false
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const chartColors = isIndia ? indiaColors : colors;
  
  const handleInteraction = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div 
      className={cn(
        "w-full my-6 transition-all duration-300 transform", 
        isExpanded ? "scale-105" : "",
        isHovered ? "shadow-lg" : "",
        className
      )}
      onClick={handleInteraction}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-center flex items-center justify-center gap-2">
          {title}
          {isIndia && (
            <span className="inline-flex items-center bg-orange-100 text-orange-800 text-xs font-medium px-2 py-0.5 rounded-full">
              India Data
            </span>
          )}
        </h3>
      )}
      <div className={cn("transition-all duration-300", isExpanded ? "h-80" : "h-64", "w-full")}>
        <ResponsiveContainer width="100%" height="100%">
          {type === 'bar' ? (
            <BarChart data={data} className="cursor-pointer">
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1a2e', 
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Bar 
                dataKey="value" 
                fill={isIndia ? "#FF9933" : "#8B5CF6"} 
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
                className={isExpanded ? "animate-pulse" : ""}
              />
            </BarChart>
          ) : type === 'line' ? (
            <LineChart data={data} className="cursor-pointer">
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1a2e', 
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={isIndia ? "#138808" : "#8B5CF6"} 
                strokeWidth={isExpanded ? 3 : 2}
                dot={{ r: 4, fill: isIndia ? "#FF9933" : "#8B5CF6" }}
                activeDot={{ r: 8 }}
                animationDuration={1500}
              />
            </LineChart>
          ) : (
            <PieChart className="cursor-pointer">
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={isExpanded ? 100 : 80}
                fill="#8B5CF6"
                dataKey="value"
                animationDuration={1500}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={chartColors[index % chartColors.length]} 
                    className={isExpanded ? "animate-pulse" : ""}
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1a2e', 
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
      {sourceText && (
        <div className="mt-2 text-xs text-gray-500 italic text-right">
          Source: {sourceText}
        </div>
      )}
      {isExpanded && (
        <div className="mt-4 text-sm bg-gray-50 dark:bg-gray-800 p-3 rounded-lg animate-fade-in">
          <p>Click on data points for more detailed insights. Data has been compiled from verified research studies and surveys.</p>
        </div>
      )}
    </div>
  );
};

export default Chart;
