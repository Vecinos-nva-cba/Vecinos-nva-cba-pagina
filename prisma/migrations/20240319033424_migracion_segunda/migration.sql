/*
  Warnings:

  - The `redes` column on the `Profesional` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Redes" AS ENUM ('Twitter', 'Instagram', 'Facebook', 'Linkedin', 'Web');

-- AlterTable
ALTER TABLE "Lugar" ADD COLUMN     "redes" "Redes"[] DEFAULT ARRAY[]::"Redes"[];

-- AlterTable
ALTER TABLE "Profesional" DROP COLUMN "redes",
ADD COLUMN     "redes" "Redes"[] DEFAULT ARRAY[]::"Redes"[];
