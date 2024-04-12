/*
  Warnings:

  - You are about to drop the column `imagen` on the `Lugar` table. All the data in the column will be lost.
  - The `tipo` column on the `Lugar` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Lugar" DROP COLUMN "imagen",
ADD COLUMN     "imagenes" TEXT[],
DROP COLUMN "tipo",
ADD COLUMN     "tipo" TEXT[];
