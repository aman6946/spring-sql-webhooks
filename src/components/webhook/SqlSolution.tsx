
import React from 'react';

interface SqlSolutionProps {
  sqlSolution: string;
  visible: boolean;
}

const SqlSolution = ({ sqlSolution, visible }: SqlSolutionProps) => {
  if (!visible) return null;
  
  return (
    <div className="p-4 bg-gray-50 rounded-md">
      <h3 className="font-semibold mb-2">SQL Solution</h3>
      <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
        {sqlSolution}
      </pre>
    </div>
  );
};

export default SqlSolution;
