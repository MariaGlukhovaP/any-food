import { TabLink } from "./../tab-link/tab-link";
import { LinksContainer } from "../links-container/links-container";

export const Restaurant = ({ id }) => {
  return (
    <LinksContainer>
      <TabLink title="Menu" href={`/restaurants/${id}/menu`} />
      <TabLink title="Reviews" href={`/restaurants/${id}/reviews`} />
    </LinksContainer>
  );
};
