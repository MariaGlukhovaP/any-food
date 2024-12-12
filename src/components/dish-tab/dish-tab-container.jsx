import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice";
import { DishTab } from "./dish-tab";
import { useRequest } from "../../redux/hooks/use-request";
import { getDishById } from "../../redux/entities/dishes/get-dish-by-id";
import { PENDING } from "../../redux/UI/request/request-statuses";

export const DishTabContainer = ({ dishId }) => {
  const dishTabRequestStatus = useRequest(getDishById, dishId);

  const dish = useSelector((state) => selectDishById(state, dishId));

  if (dishTabRequestStatus === PENDING) {
    return "...loading";
  }

  if (!dish) {
    return null;
  }

  const { name } = dish;

  return <DishTab dishId={dishId} name={name} />;
};
