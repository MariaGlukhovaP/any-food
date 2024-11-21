import { ReviewForm } from "../review-form/review-form";
import { Review } from "../review/review";

export const Reviews = ({ reviews }) => {
  return (
    <section>
      <h3>Reviews</h3>
      {reviews.map(({ id, user, text, rating }) =>
        text ? (
          <ul key={id}>
            <li>
              <Review user={user} text={text} rating={rating} />
            </li>
          </ul>
        ) : null
      )}
      <ReviewForm />
    </section>
  );
};
