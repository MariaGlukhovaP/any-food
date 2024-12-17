import { ReviewsContainer } from "../../components/reviews/reviews-container";

export const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;

  return (
    <div>
      <ReviewsContainer restaurantId={restaurantId} />
    </div>
  );
};
