export const Tabs = ({ restaurants, onTabClick }) => {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id} onClick={() => onTabClick(restaurant.id)}>
          {restaurant.name}
        </li>
      ))}
    </ul>
  );
};
