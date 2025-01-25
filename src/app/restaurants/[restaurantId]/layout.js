import { RestaurantLayout } from "../../../components/pages/restaurant-layout";

export const generateStaticParams = () => {
  return [
    { restaurantId: "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2" },
    { restaurantId: "bb8afbec-2fec-491f-93e9-7f13950dd80b" },
    { restaurantId: "982bfbce-c5e0-41a0-9f99-d5c20ecee49d" },
    { restaurantId: "d9241927-09e1-44f3-8986-a76346869037" },
  ];
};

export default RestaurantLayout;
