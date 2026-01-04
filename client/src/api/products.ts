import type { Product, ProductTableItem } from "../types/Product";


// Create a Product
export async function createProduct(data: Product): Promise<ProductTableItem> {
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

// Get All Product
 export async function getProduct(): Promise<{ success: boolean; products: ProductTableItem[] }> {
  const res = await fetch("/api/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data; 
}

// Get A Single Product
export async function getSingleProduct(productId: string): Promise<Product> {
  const res = await fetch(`/api/products/${productId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  const json = await res.json();
  return json.product;
}


// Update A Product
export async function updateProduct(productId: string, data: Product): Promise<Product> {
  const res = await fetch(`/api/products/${productId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if(!res.ok){
    throw new Error(json.error || "Failed to update product");
  }
  return json.product;
}


// Delete A Product
export async function deleteProduct(productId: string) {
  const res = await fetch(`/api/products/${productId}`, {
    method: "DELETE"
  });

  if(!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to delete product");
  }
}