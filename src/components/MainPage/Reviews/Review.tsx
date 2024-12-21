interface ReviewProps {
    reviewImg: string;
    reviewTitle: string;
    reviewText: string;
}

export const Review = ({reviewImg, reviewTitle, reviewText}: ReviewProps) => {
  return (
    <div className="review">
        <img src={reviewImg} alt="photo" className="review_photo"/>
        <div className="review_content">
            <span className="review_title">{reviewTitle}</span>
            <blockquote className="review_text">{reviewText}</blockquote>
        </div>
    </div>
  )
}
