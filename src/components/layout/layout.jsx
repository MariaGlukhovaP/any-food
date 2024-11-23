<<<<<<< Updated upstream
export const Layout = ({ children, progressBar }) => {
  return (
    <div>
      {progressBar}
      <header>
        <h1>Restaurants</h1>
      </header>
=======
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";

export const Layout = ({ children }) => {
  return (
    <div>
      <ProgressBar />
      <Header />
>>>>>>> Stashed changes
      {children}
      <Footer />
    </div>
  );
};
