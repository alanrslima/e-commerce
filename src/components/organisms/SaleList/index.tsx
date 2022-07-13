import { SaleItem } from "components/molecules/SaleItem";
import { ReactElement } from "react";
import { Wrapper } from "./styles";
import { SaleListProps } from "./types";

export function SaleList({ products }: SaleListProps): ReactElement {
  return (
    <Wrapper>
      {products?.map((product) => (
        <SaleItem key={product.id} {...product} />
      ))}
    </Wrapper>
  );
}
