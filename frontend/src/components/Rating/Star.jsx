const Star = ({ index, rating, onRatingChange }) => {
  const handleLeftHalfClick = () => onRatingChange(index, true);
  const handleRightHalfClick = () => onRatingChange(index, false);

  const isFullStar = rating >= index + 1;
  const isHalfStar = rating >= index + 0.5 && rating < index + 1;
  const starClass = isFullStar
    ? "bxs-star"
    : isHalfStar
      ? "bxs-star-half"
      : "bx-star";

  return (
    <div className="relative">
      <i className={`bx ${starClass} text-4xl text-dark-orange`}></i>
      <button
        className="absolute top-0 left-0 w-1/2 h-full cursor-pointer"
        onClick={handleLeftHalfClick}
      />
      <button
        className="absolute top-0 right-0 w-1/2 h-full cursor-pointer"
        onClick={handleRightHalfClick}
      />
    </div>
  );
};

export default Star;
