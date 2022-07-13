import { ReactElement } from "react";
import {
  Wrapper,
  Image,
  Content,
  Title,
  Subtitle,
  Value,
  SaleValue,
} from "./styles";
import { SaleItemProps } from "./types";

export function SaleItem({}: SaleItemProps): ReactElement {
  return (
    <Wrapper>
      <Image
        alt="Product image"
        src="https://http2.mlstatic.com/D_NQ_NP_970858-MLA47660639287_092021-V.webp"
      />
      <Content>
        <Title>Titulo de venda do produto</Title>
        <Subtitle>Vendido por fulano de tal</Subtitle>

        <Value>R$ 20,00</Value>
        <SaleValue>R$ 13,99</SaleValue>
      </Content>
    </Wrapper>
  );
}
