-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true;
