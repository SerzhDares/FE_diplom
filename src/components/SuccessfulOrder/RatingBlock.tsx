import { FaStar } from "react-icons/fa";
import { useState } from "react";

export const RatingBlock = () => {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="rating_block">
        <span className="rating_text">Оценить сервис</span>
        <div className="stars_block">
            {[...Array(5)].map((_star, i) => {

            const ratingValue = i + 1;
                
            return (
                <label key={i}>
                    <input 
                      type="radio" 
                      className="star-input" 
                      name="rating" 
                      value={ratingValue} 
                      onClick={() => setRating(ratingValue)}
                    />
                    <FaStar className="star" size={40}
                      color={ratingValue <= (hover || rating) ? "yellow" : "#F4F3F6"}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                    />
                </label>
                )
            })}
        </div>
    </div>
  )
}
