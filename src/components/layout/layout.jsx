export const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Restaurants</h1>
      </header>
      {children}
      <footer>Some footer</footer>
    </div>
  );
};
