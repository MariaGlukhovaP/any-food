"use client";

import { useEffect, useState } from "react";
import { getDish } from "../../services/get-dish-by-id";
import { CartItem } from "./cart-item";

export const CartItemContainer = ({ id }) => {
  const [dish, setDish] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDish = async () => {
      const data = await getDish(id);
      setDish(data);
      setLoading(false);
    };
    fetchDish();
  }, [id]);

  if (loading) {
    return <div>Dish Loading...</div>;
  }

  return <CartItem dish={dish} />;
};
