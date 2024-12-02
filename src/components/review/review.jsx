import { useSelector } from "react-redux";
import { Card } from "../card/card";
import { selectUserById } from "../../redux/entities/users/users-slice";

export const Review = ({ userId, text, rating }) => {
  const user = useSelector((state) => selectUserById(state, userId));

  return (
    <Card
      cardTitle={text}
      cardFirstRowItem={user.name}
      cardSideItem={`${rating} ★`}
    />
  );
};
