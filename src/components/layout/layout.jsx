import { Outlet } from "react-router-dom";
import { Cart } from "../cart/cart";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { useAuth } from "../auth-context/use-auth";

export const Layout = () => {
  const { auth } = useAuth();

  const { isAuthorized } = auth;

  return (
    <div>
      <Header />
      <Outlet />
      {isAuthorized && <Cart />}
      <Footer />
    </div>
  );
};
