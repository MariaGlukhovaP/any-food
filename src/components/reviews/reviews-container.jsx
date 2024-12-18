"use client";

import { Reviews } from "./reviews";
import {
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
} from "../../redux/services/api";
import { useCallback } from "react";

export const ReviewsContainer = ({ restaurantId }) => {
  const { data: reviews, isFetching: isGetReviewsFetching } =
    useGetReviewsByRestaurantIdQuery(restaurantId);
  useGetUsersQuery();

  const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation();

  const handleAddReview = useCallback(
    (review) => {
      addReview({ restaurantId, review });
    },
    [addReview, restaurantId]
  );

  if (isGetReviewsFetching || isAddReviewLoading) {
    return "...loading";
  }

  if (!reviews) {
    return null;
  }

  return <Reviews reviews={reviews} onAddReview={handleAddReview} />;
};
