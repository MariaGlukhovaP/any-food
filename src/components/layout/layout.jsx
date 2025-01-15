"use client";

import { Cart } from "../cart/cart";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { useAuth } from "../auth-context/use-auth";
import { Description } from "../description/description";

export const Layout = ({ children }) => {
  const { auth } = useAuth();

  const { isAuthorized } = auth;

  return (
    <div>
      <Header />
      <Description />
      {children}
      {isAuthorized && <Cart />}
      <Footer />
    </div>
  );
};
