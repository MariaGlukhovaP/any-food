export const Ingredients = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((ingredient, index) => (
        <span key={ingredient}>
          {index > 0 && ", "}
          {index === 0
            ? ingredient.charAt(0).toUpperCase() + ingredient.slice(1)
            : ingredient}
        </span>
      ))}
    </div>
  );
};
