import { SaleItem } from "components/molecules/SaleItem";
import { ReactElement } from "react";
import { Wrapper } from "./styles";
import { SaleListProps } from "./types";

export function SaleList({}: SaleListProps): ReactElement {
  const sales = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <Wrapper>
      {sales.map((sale) => (
        <SaleItem key={sale} />
      ))}
    </Wrapper>
  );
}
