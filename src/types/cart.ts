import { Product } from "./product";

export type Cart = {
  items: CartItem[];
  total?: number;
};

export type CartItem = {
  product: Product;
  count: number;
  total?: number;
};
