// src/components/ThumbsRating.tsx
import React, { useState } from 'react';

const ThumbsRating: React.FC = () => {
  const [rating, setRating] = useState<'up' | 'down' | null>(null);

  return (
    <div className="flex items-center space-x-4">
      <button 
        onClick={() => setRating('up')}
        className={`text-4xl transition-colors duration-200 ${
          rating === 'up' ? 'text-yellow-400' : 'text-gray-400'
        }`}
      >
        👍
      </button>
      <button 
        onClick={() => setRating('down')}
        className={`text-4xl transition-colors duration-200 ${
          rating === 'down' ? 'text-yellow-400' : 'text-gray-400'
        } transform rotate-180`}
      >
        👍
      </button>
      <p className="text-xl">
        {rating === 'up' && 'Great!'}
        {rating === 'down' && 'Sorry to hear that.'}
        {rating === null && 'How was your experience?'}
      </p>
    </div>
  );
};

export default ThumbsRating;