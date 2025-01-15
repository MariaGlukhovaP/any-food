import { PageContainer } from "../page-container/page-container";
import { TabLinks } from "../tab-links/tab-links";

export const RestaurantsLayout = ({ children }) => {
  return (
    <PageContainer>
      <TabLinks />
      {children}
    </PageContainer>
  );
};
