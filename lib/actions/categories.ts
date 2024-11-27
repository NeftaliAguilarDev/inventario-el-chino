"use server";
import { Category } from "@prisma/client";
import prisma from "../prisma";

export async function getCategories(): Promise<Category[]> {
  const categories = await prisma.category.findMany();
  return categories;
}
