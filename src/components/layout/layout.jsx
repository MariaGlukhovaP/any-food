export const Layout = ({ children, progressBar }) => {
  return (
    <div>
      {progressBar}
      <header>
        <h1>Restaurants</h1>
      </header>
      {children}
      <footer>Some footer</footer>
    </div>
  );
};
