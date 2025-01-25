import { PageContainer } from "../../page-container/page-container";
import { Reviews } from "../../reviews/reviews";

export const ReviewsPage = ({ reviews, restaurantId }) => {
  return (
    <PageContainer>
      <Reviews restaurantId={restaurantId} reviews={reviews} />
    </PageContainer>
  );
};
