import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  price: z.number().positive("El precio debe ser mayor que 0"),
  description: z.string().min(1, "La descripción es requerida"),
  categoryId: z.string().optional().nullable(), // Puede ser opcional y permitir `null`
});
export type ProductCreateInput = z.infer<typeof productSchema>;
