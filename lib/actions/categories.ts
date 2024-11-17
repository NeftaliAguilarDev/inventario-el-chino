"use server";

export interface Category {
  id: number;
  value: string;
}
export async function getCategories(): Promise<Category> {
  return Promise.resolve({
    id: 1,
    value: "next.js",
  });
}
