/*
  Warnings:

  - The `imagen` column on the `Lugar` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Lugar" DROP COLUMN "imagen",
ADD COLUMN     "imagen" TEXT[];
