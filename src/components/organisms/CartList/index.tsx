import { SaleItem } from "components/molecules/SaleItem";
import { ReactElement } from "react";
import { Wrapper } from "./styles";
import { CartListProps } from "./types";

export function CartList(cart: CartListProps): ReactElement {
  return (
    <Wrapper>
      {cart.items.map((item) => (
        <SaleItem key={item.product.id} {...item.product} />
      ))}
    </Wrapper>
  );
}
