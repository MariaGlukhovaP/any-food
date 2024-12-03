import { Card } from "../card/card";

import { UserContainer } from "../user/user-container";

export const Review = ({ userId, text, rating }) => {
  return (
    <Card
      cardTitle={text}
      cardFirstRowItem={<UserContainer id={userId} />}
      cardSideItem={`${rating} ★`}
    />
  );
};
