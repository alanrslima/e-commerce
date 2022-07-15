import { Cart } from "types/cart";
import { CartKeys } from "./keys";

const processor = (cart: Cart | undefined): Cart | undefined => {
  if (!cart) return undefined;

  // Calc item total
  const items = cart?.items.map((item) => ({
    ...item,
    total: item.product.sellingPrice * item.count,
  }));

  // Calc cart total
  let total = 0;
  items?.reduce((prev, current) => prev + current.total, total);
  return { items, total };
};

export const getCart = (): Cart | undefined => {
  // Get user id
  const cartStr = localStorage.getItem(CartKeys.list(1));
  const data = cartStr ? JSON.parse(cartStr) : undefined;
  return processor(data);
};
