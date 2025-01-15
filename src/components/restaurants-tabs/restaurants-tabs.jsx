import { CardsContainer } from "../cards-container/cards-container";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";

export const RestaurantsTabs = ({ restaurants }) => {
  return (
    <CardsContainer>
      {restaurants.map(({ id, name, img, description }) => (
        <RestaurantTab
          title={name}
          id={id}
          key={id}
          img={img}
          description={description}
        />
      ))}
    </CardsContainer>
  );
};
