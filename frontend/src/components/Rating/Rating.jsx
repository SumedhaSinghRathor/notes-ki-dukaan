import React, { useState } from "react";
import Star from "./Star";

function Rating() {
  const [rating, setRating] = useState(0);

  const handleRating = (starIndex, isLeftHalf) => {
    const newRating = isLeftHalf ? starIndex + 0.5 : starIndex + 1;
    setRating(newRating);
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl">Rate the document out of 5</h2>
        <div className="flex justify-center gap-1 sm:gap-2">
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              index={index}
              rating={rating}
              setRating={setRating}
              onRatingChange={handleRating}
            />
          ))}
        </div>
        <p className="text-2xl text-center">{rating} out of 5</p>
      </div>
    </div>
  );
}

export default Rating;
