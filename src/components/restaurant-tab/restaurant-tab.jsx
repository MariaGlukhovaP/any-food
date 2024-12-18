import { TabLink } from "../tab-link/tab-link";

export const RestaurantTab = ({ id, title }) => {
  return <TabLink href={`/restaurants/${id}`} title={title} />;
};
