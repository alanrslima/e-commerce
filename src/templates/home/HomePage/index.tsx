import { SaleList } from "components/organisms/SaleList";
import { DefaultLayout } from "layouts/DefaultLayout";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { getProducts } from "services/products/getProducts";
import { Product } from "types/product";

function HomePage(): ReactElement {
  const { query } = useRouter();

  console.log(query);

  const [products, setProducts] = useState<Product[]>([]);

  async function handleProducts(search: any) {
    const response = await getProducts(search);
    setProducts(response);
  }

  useEffect(() => {
    handleProducts(query?.search);
  }, [query]);

  return (
    <DefaultLayout>
      <SaleList products={products} />
    </DefaultLayout>
  );
}

export default HomePage;
