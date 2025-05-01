
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
  description?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'javascript',
  title,
  className,
  description
}) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // This is a simplified syntax highlighter
  // For production, you'd use a library like prism-react-renderer
  const highlightedCode = code
    .replace(
      /(const|let|var|function|return|import|export|from|if|else|for|while)/g, 
      '<span class="keyword">$1</span>'
    )
    .replace(
      /(".*?"|'.*?'|`.*?`)/g, 
      '<span class="string">$1</span>'
    )
    .replace(
      /(\/\/.*)/g, 
      '<span class="comment">$1</span>'
    )
    .replace(
      /\b([A-Za-z]+)(?=\()/g, 
      '<span class="function">$1</span>'
    );

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={cn("w-full my-4 transition-all duration-300", 
      expanded ? "transform scale-105" : "", 
      className)}
    >
      {title && (
        <div className="bg-gray-800 text-gray-200 px-4 py-2 font-code text-sm rounded-t-lg flex justify-between items-center">
          <span>{title}</span>
          <div className="flex gap-2">
            <button 
              onClick={toggleExpand}
              className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
            >
              {expanded ? 'Collapse' : 'Expand'}
            </button>
            <button 
              onClick={handleCopy}
              className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded flex items-center gap-1"
            >
              {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      )}
      <pre className={cn(
        "code-block overflow-x-auto font-code text-sm transition-all duration-300",
        !title && "rounded-t-lg",
        expanded ? "max-h-[500px]" : "max-h-[300px]"
      )}>
        <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </pre>
      {description && (
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 italic px-2">
          {description}
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
