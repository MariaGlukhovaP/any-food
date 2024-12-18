"use client";

import { Cart } from "../cart/cart";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { useAuth } from "../auth-context/use-auth";

export const Layout = ({ children }) => {
  const { auth } = useAuth();

  const { isAuthorized } = auth;

  return (
    <div>
      <Header />
      {children}
      {isAuthorized && <Cart />}
      <Footer />
    </div>
  );
};
