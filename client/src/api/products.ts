import type { ProductFormData, ProductListItem } from "../types/Product";

export async function createProduct(data: ProductFormData) {
  const res = await fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to create product");
  }

  return res.json();
}

 export async function getProduct(): Promise<{ success: boolean; products: ProductListItem[] }> {
  const res = await fetch("/api/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data; 
}