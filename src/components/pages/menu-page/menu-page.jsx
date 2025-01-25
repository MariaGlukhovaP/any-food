import { Menu } from "../../menu/menu";
import { PageContainer } from "./../../page-container/page-container";

export const MenuPage = ({ menu }) => {
  return (
    <PageContainer>
      <Menu menu={menu} />
    </PageContainer>
  );
};
