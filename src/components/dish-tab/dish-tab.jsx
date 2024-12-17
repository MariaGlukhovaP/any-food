import { TabLink } from "../tab-link/tab-link";

export const DishTab = ({ dishId, name }) => {
  return <TabLink href={`/dish/${dishId}`} title={name} />;
};
