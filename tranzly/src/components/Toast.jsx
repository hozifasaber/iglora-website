import React from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  return (
    <div className="fixed top-6 right-6 z-[100] toast-enter">
      <div className={`flex items-center gap-3 px-5 py-3 rounded-xl shadow-2xl border ${
        type === 'success'
          ? 'bg-sage/15 border-sage/30 text-sage'
          : 'bg-terracotta/15 border-terracotta/30 text-terracotta'
      }`}
      style={{ backdropFilter: 'blur(12px)' }}
      >
        {type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
        <span className="text-sm font-medium">{message}</span>
        <button onClick={onClose} className="ml-2 opacity-60 hover:opacity-100 transition-opacity">
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
