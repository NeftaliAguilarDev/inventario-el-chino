"use server";

import { Product } from "@prisma/client";
import prisma from "../prisma";
import { ProductCreateInput } from "../schemas";

export const getProducts = async (): Promise<Product[]> => {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
};

export const createProduct = async (
  product: ProductCreateInput
): Promise<Product> => {
  const newProduct = await prisma.product.create({
    data: {
      ...product,
    },
  });
  return newProduct;
};

export const getProductById = async (id: string): Promise<Product | null> => {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  return product;
};
