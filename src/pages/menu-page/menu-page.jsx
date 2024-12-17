import { MenuContainer } from "../../components/menu/menu-container";

export const MenuPage = async ({ params }) => {
  const { restaurantId } = await params;

  return (
    <div>
      <MenuContainer restaurantId={restaurantId} />
    </div>
  );
};
