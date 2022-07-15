import { Cart, CartItem } from "types/cart";
import { Product } from "types/product";
import { getCart } from "./getCart";
import { CartKeys } from "./keys";

const productExistsOnCart = (product: Product, cart?: Cart) => {
  return !!cart?.items.find((item) => item.product.id === product.id);
};

const createCart = (cart: Cart) => {
  const data = JSON.stringify(cart);
  localStorage.setItem(CartKeys.list(1), data);
  return cart;
};

export const pushCart = (product: Product) => {
  const cart = getCart();

  // Create a cart entity
  if (!cart) {
    const newCart: Cart = {
      items: [{ count: 1, product }],
    };
    return createCart(newCart);
  }

  // Manager cart entity
  if (productExistsOnCart(product, cart)) {
    const items = cart?.items.map((item) => ({
      ...item,
      count: item.product.id === product.id ? (item.count += 1) : item.count,
    }));
    cart.items = items;
  } else {
    const newCartItem: CartItem = {
      count: 1,
      product,
    };
    cart.items = [...cart.items, newCartItem];
  }

  return createCart(cart);
};
