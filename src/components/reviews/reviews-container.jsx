import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { Reviews } from "./reviews";
import { useRequest } from "../../redux/hooks/use-request";
import { getReviews } from "../../redux/entities/reviews/get-reviews";
import { getUsers } from "../../redux/entities/users/get-users";
import { PENDING } from "../../redux/UI/request/request-statuses";

export const ReviewsContainer = ({ restaurantId }) => {
  const reviewsRequestStatus = useRequest(getReviews, restaurantId);
  const usersRequestStatus = useRequest(getUsers);

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (reviewsRequestStatus === PENDING || usersRequestStatus === PENDING) {
    return "...loading";
  }

  if (!restaurant) {
    return null;
  }

  const { reviews } = restaurant;

  return <Reviews reviews={reviews} />;
};
