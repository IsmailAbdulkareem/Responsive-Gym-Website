"use client";

import React from 'react';
import { QuickAction } from '@/types/chat';

interface QuickActionsProps {
  actions: QuickAction[];
  onActionClick: (message: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ actions, onActionClick }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4 animate-fadeIn">
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={() => onActionClick(action.message)}
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-orange-500 text-gray-300 hover:text-white rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 group"
        >
          <span className="group-hover:scale-110 transition-transform duration-300">
            {action.icon}
          </span>
          <span>{action.label}</span>
        </button>
      ))}
    </div>
  );
};

export default QuickActions;
