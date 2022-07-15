import { MessageContainer } from "components/molecules/MessageContainer";
import { CartList } from "components/organisms/CartList";
import { EMPTY_CART_SUBTITLE, EMPTY_CART_TITLE } from "constants/messages";
import { DefaultLayout } from "layouts/DefaultLayout";
import { ReactElement, useEffect, useState } from "react";
import { getCart } from "services/cart/getCart";
import { Cart } from "types/cart";
import { WrapperTotal } from "./styles";

function CartPage(): ReactElement {
  const [cart, setCart] = useState<Cart>();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const Content = () => {
    if (!cart) {
      return (
        <MessageContainer
          title={EMPTY_CART_TITLE}
          subTitle={EMPTY_CART_SUBTITLE}
        />
      );
    }

    return (
      <>
        <CartList {...cart} />
        <WrapperTotal>
          <h2>{cart.total}</h2>
          <button>Checkout</button>
        </WrapperTotal>
      </>
    );
  };

  return (
    <DefaultLayout>
      <Content />
    </DefaultLayout>
  );
}

export default CartPage;
