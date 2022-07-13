import { api } from "services/api";
import { Product } from "types/product";

/**
 * This feature should be done by Backend services.
 */
const processor = (data: Product[], filter?: string) => {
  let filtered = data;
  if (filter) {
    filtered = data.filter((item) =>
      item.title.toLowerCase().includes(filter?.toLocaleLowerCase())
    );
  }
  return filtered;
};

export const getProducts = async (filter?: string): Promise<Product[]> => {
  try {
    const { data } = await api.get("/api/products.json");
    return processor(data, filter);
  } catch (error) {
    throw error;
  }
};
