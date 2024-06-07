// src/components/StarRating.tsx
import React, { useState } from 'react';

interface StarRatingProps {
  totalStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index} className="cursor-pointer">
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              className="hidden"
            />
            <span
              className="text-4xl transition-colors duration-200"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
              style={{
                color: ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9",
              }}
            >
              &#9733;
            </span>
          </label>
        );
      })}
      <p className="ml-4 text-xl">Rating: {hover || rating}</p>
    </div>
  );
};

export default StarRating;