
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface NodeType {
  id: string;
  label: string;
  x: number;
  y: number;
  color?: string;
  icon?: React.ReactNode;
  description?: string;
}

interface EdgeType {
  from: string;
  to: string;
  label?: string;
  animated?: boolean;
}

interface FlowDiagramProps {
  nodes: NodeType[];
  edges: EdgeType[];
  className?: string;
  title?: string;
  sourceText?: string;
}

const FlowDiagram: React.FC<FlowDiagramProps> = ({
  nodes,
  edges,
  className,
  title,
  sourceText
}) => {
  const svgWidth = 800;
  const svgHeight = 400;
  const nodeRadius = 40;
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Find a node by ID
  const findNode = (id: string) => nodes.find(node => node.id === id);
  
  // Generate paths between nodes
  const getPath = (edge: EdgeType) => {
    const fromNode = findNode(edge.from);
    const toNode = findNode(edge.to);
    
    if (!fromNode || !toNode) return '';
    
    const startX = fromNode.x;
    const startY = fromNode.y;
    const endX = toNode.x;
    const endY = toNode.y;
    
    // Calculate control points for curved lines
    const dx = Math.abs(endX - startX);
    const dy = Math.abs(endY - startY);
    const controlX = startX + (endX - startX) / 2;
    const controlY = startY + (endY - startY) / 2 - Math.min(50, dx * 0.2 + dy * 0.2);
    
    return `M${startX},${startY} Q${controlX},${controlY} ${endX},${endY}`;
  };

  const handleNodeClick = (nodeId: string) => {
    setActiveNode(activeNode === nodeId ? null : nodeId);
  };

  const expandDiagram = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={cn(
      "w-full my-6 overflow-x-auto transition-all duration-300", 
      isExpanded ? "transform scale-105" : "",
      className
    )}>
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-center flex items-center justify-center">
          {title}
          <button 
            onClick={expandDiagram}
            className="ml-2 text-xs bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-2 py-1 rounded-full"
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
        </h3>
      )}
      <div className="flex justify-center">
        <svg 
          width={svgWidth} 
          height={isExpanded ? svgHeight * 1.2 : svgHeight} 
          viewBox={`0 0 ${svgWidth} ${isExpanded ? svgHeight * 1.2 : svgHeight}`} 
          className="bg-gray-50 dark:bg-gray-900 rounded-lg transition-all duration-300"
        >
          {/* Draw edges first so they appear behind nodes */}
          {edges.map((edge, index) => (
            <g key={`edge-${index}`}>
              <path
                d={getPath(edge)}
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="2"
                className={cn(edge.animated && "connection-line")}
                strokeDasharray={activeNode && (activeNode === edge.from || activeNode === edge.to) ? "none" : ""}
                strokeOpacity={activeNode && (activeNode === edge.from || activeNode === edge.to) ? 1 : 0.6}
              />
              {edge.label && (
                <text
                  x={(findNode(edge.from)?.x || 0) + ((findNode(edge.to)?.x || 0) - (findNode(edge.from)?.x || 0)) / 2}
                  y={(findNode(edge.from)?.y || 0) + ((findNode(edge.to)?.y || 0) - (findNode(edge.from)?.y || 0)) / 2 - 10}
                  textAnchor="middle"
                  className="fill-gray-600 dark:fill-gray-300 text-xs"
                >
                  {edge.label}
                </text>
              )}
            </g>
          ))}
          
          {/* Draw nodes on top of edges */}
          {nodes.map((node) => (
            <g 
              key={node.id} 
              className="diagram-node cursor-pointer" 
              onClick={() => handleNodeClick(node.id)}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={nodeRadius + (activeNode === node.id ? 5 : 0)}
                fill={node.color || "#8B5CF6"}
                className={cn(
                  "opacity-90 transition-all duration-300",
                  activeNode === node.id ? "stroke-white stroke-2 animate-pulse" : "",
                  activeNode && activeNode !== node.id ? "opacity-60" : ""
                )}
              />
              <text
                x={node.x}
                y={node.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-white text-sm font-semibold"
              >
                {node.label}
              </text>
              
              {/* Show description when node is active */}
              {activeNode === node.id && node.description && (
                <g>
                  <rect
                    x={node.x + nodeRadius + 10}
                    y={node.y - 30}
                    width="180"
                    height="60"
                    rx="5"
                    ry="5"
                    fill="white"
                    stroke={node.color || "#8B5CF6"}
                    className="drop-shadow-md animate-fade-in"
                  />
                  <foreignObject
                    x={node.x + nodeRadius + 15}
                    y={node.y - 25}
                    width="170"
                    height="50"
                  >
                    <div className="text-xs text-gray-700">
                      {node.description}
                    </div>
                  </foreignObject>
                </g>
              )}
            </g>
          ))}
        </svg>
      </div>
      
      {sourceText && (
        <div className="mt-2 text-xs text-gray-500 italic text-right">
          Source: {sourceText}
        </div>
      )}
      
      <div className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
        Click on any node to see more details
      </div>
    </div>
  );
};

export default FlowDiagram;
