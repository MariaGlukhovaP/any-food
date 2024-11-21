export const Layout = ({ children, progressbar }) => {
  return (
    <div>
      {progressbar}
      <header>
        <h1>Restaurants</h1>
      </header>
      {children}
      <footer>Some footer</footer>
    </div>
  );
};
