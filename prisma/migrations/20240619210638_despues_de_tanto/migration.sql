/*
  Warnings:

  - The primary key for the `Profesional` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `imagen` on the `Profesional` table. All the data in the column will be lost.
  - The `id` column on the `Profesional` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Red` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Red" DROP CONSTRAINT "Red_lugarId_fkey";

-- DropForeignKey
ALTER TABLE "Red" DROP CONSTRAINT "Red_profesionalId_fkey";

-- AlterTable
ALTER TABLE "Profesional" DROP CONSTRAINT "Profesional_pkey",
DROP COLUMN "imagen",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Profesional_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Red";

-- CreateTable
CREATE TABLE "RedSocial" (
    "url" TEXT NOT NULL,
    "tipo" "Redes" NOT NULL,
    "profesionalId" INTEGER NOT NULL,
    "lugarId" TEXT,

    CONSTRAINT "RedSocial_pkey" PRIMARY KEY ("url")
);

-- CreateTable
CREATE TABLE "Imagen" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "profesionalId" INTEGER NOT NULL,

    CONSTRAINT "Imagen_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RedSocial" ADD CONSTRAINT "RedSocial_profesionalId_fkey" FOREIGN KEY ("profesionalId") REFERENCES "Profesional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RedSocial" ADD CONSTRAINT "RedSocial_lugarId_fkey" FOREIGN KEY ("lugarId") REFERENCES "Lugar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Imagen" ADD CONSTRAINT "Imagen_profesionalId_fkey" FOREIGN KEY ("profesionalId") REFERENCES "Profesional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
