import { SaleList } from "components/organisms/SaleList";
import { DefaultLayout } from "layouts/DefaultLayout";
import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";

function HomePage(): ReactElement {
  const { query } = useRouter();

  useEffect(() => {
    console.log(query?.search);
  }, [query]);

  return (
    <DefaultLayout>
      <SaleList />
    </DefaultLayout>
  );
}

export default HomePage;
