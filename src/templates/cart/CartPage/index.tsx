import { SaleList } from "components/organisms/SaleList";
import { DefaultLayout } from "layouts/DefaultLayout";
import { ReactElement } from "react";

function CartPage(): ReactElement {
  return (
    <DefaultLayout>
      <SaleList />
    </DefaultLayout>
  );
}

export default CartPage;
