export const Review = ({ user, text, rating }) => {
  return (
    <>
      <p>
        <strong>{text}</strong> - {rating}★
      </p>
      <p>{user}</p>
    </>
  );
};
