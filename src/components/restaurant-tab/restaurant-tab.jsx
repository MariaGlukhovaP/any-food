import Link from "next/link";
import { Card } from "../card/card";

export const RestaurantTab = ({ id, title, img, description }) => {
  return (
    <Link href={`/restaurants/${id}`}>
      <Card
        cardImg={img}
        alt={`Restaurant ${id}`}
        cardTitle={title}
        cardFirstRowItem={description}
      />
    </Link>
  );
};
