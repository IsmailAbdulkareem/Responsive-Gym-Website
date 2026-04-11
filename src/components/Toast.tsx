"use client";

import React, { memo, useEffect, useCallback } from 'react';
import { FiCheckCircle, FiXCircle, FiX } from 'react-icons/fi';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = memo(({ message, type, onClose, duration = 5000 }) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const timer = setTimeout(handleClose, duration);
    return () => clearTimeout(timer);
  }, [handleClose, duration]);

  return (
    <div
      className={`fixed top-24 right-6 z-[100] flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-sm border transition-all duration-500 animate-slide-in-right ${
        type === 'success'
          ? 'bg-green-500/90 border-green-400 text-white'
          : 'bg-red-500/90 border-red-400 text-white'
      }`}
      role="alert"
    >
      {type === 'success' ? (
        <FiCheckCircle className="text-2xl flex-shrink-0" />
      ) : (
        <FiXCircle className="text-2xl flex-shrink-0" />
      )}
      <p className="font-medium flex-1 pr-4">{message}</p>
      <button
        onClick={handleClose}
        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-200"
        aria-label="Close notification"
      >
        <FiX />
      </button>
    </div>
  );
});

Toast.displayName = 'Toast';

export default Toast;
