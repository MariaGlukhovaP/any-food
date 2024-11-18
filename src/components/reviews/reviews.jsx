export const Reviews = ({ reviews }) => {
  return (
    <section>
      <h3>Reviews</h3>
      {reviews.map(({ id, user, text, rating }) =>
        text ? (
          <ul key={id}>
            <li>
              <p>
                <strong>{text}</strong> - {rating}★
              </p>
              <p>{user}</p>
            </li>
          </ul>
        ) : null
      )}
    </section>
  );
};
