export const Ingredients = ({ ingredients }) => {
  return (
    <div>
      {ingredients.join(", ").charAt(0).toUpperCase() +
        ingredients.join(", ").slice(1)}
    </div>
  );
};
