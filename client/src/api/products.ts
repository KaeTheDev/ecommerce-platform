import type { ProductFormData } from "../types/Product";

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