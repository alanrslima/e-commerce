import { ReactElement } from "react";
import { pushCart } from "services/cart/pushCart";
import {
  Wrapper,
  Image,
  Content,
  Title,
  Subtitle,
  Value,
  SaleValue,
} from "./styles";
import { CartItemProps } from "./types";

export function CartItem({}: CartItemProps): ReactElement {
  return (
    <Wrapper>
      <Image
        alt="Product image"
        src="https://http2.mlstatic.com/D_NQ_NP_970858-MLA47660639287_092021-V.webp"
      />
      {/* <Content>
        <Title>{product.title}</Title>
        <Subtitle>Vendido por fulano de tal</Subtitle>

        <Value>R$ 20,00</Value>
        <SaleValue>R$ 13,99</SaleValue>
        <button onClick={handleCart}>Adicionar ao carrinho</button>
      </Content> */}
    </Wrapper>
  );
}
