import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Description } from "../description/description";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Description />
      {children}
      <Footer />
    </div>
  );
};
