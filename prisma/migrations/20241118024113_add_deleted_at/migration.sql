-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "timestamps" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "timestamps" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
