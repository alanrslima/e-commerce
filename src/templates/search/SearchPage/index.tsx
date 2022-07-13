import { SaleList } from "components/organisms/SaleList";
import { DefaultLayout } from "layouts/DefaultLayout";
import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";

function SearchPage(): ReactElement {
  const { query } = useRouter();

  useEffect(() => {
    // Get search items
  }, [query]);

  return (
    <DefaultLayout>
      <SaleList />
    </DefaultLayout>
  );
}

export default SearchPage;
