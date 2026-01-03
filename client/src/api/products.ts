import type { ProductFormData, ProductListItem } from "../types/Product";

export async function createProduct(data: ProductFormData): Promise<ProductListItem> {
  const res = await fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to create product");
  }

  return json.product;
}

 export async function getProduct(): Promise<{ success: boolean; products: ProductListItem[] }> {
  const res = await fetch("/api/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data; 
}

export async function deleteProduct(productId: string) {
  const res = await fetch(`/api/products/${productId}`, {
    method: "DELETE"
  });

  if(!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to delete product");
  }
}