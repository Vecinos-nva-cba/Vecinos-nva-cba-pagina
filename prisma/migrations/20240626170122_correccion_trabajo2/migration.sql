/*
  Warnings:

  - The `barrio` column on the `Lugar` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Lugar" DROP COLUMN "barrio",
ADD COLUMN     "barrio" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "Profesional" ALTER COLUMN "trabajo" SET DEFAULT ARRAY[]::TEXT[];
