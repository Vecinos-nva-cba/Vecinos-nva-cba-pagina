/*
  Warnings:

  - The primary key for the `Imagen` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `imagenes` on the `Lugar` table. All the data in the column will be lost.
  - You are about to drop the column `zona` on the `Lugar` table. All the data in the column will be lost.
  - The primary key for the `Profesional` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `lugarId` to the `Imagen` table without a default value. This is not possible if the table is not empty.
  - Added the required column `barrio` to the `Lugar` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Imagen" DROP CONSTRAINT "Imagen_profesionalId_fkey";

-- DropForeignKey
ALTER TABLE "RedSocial" DROP CONSTRAINT "RedSocial_profesionalId_fkey";

-- AlterTable
ALTER TABLE "Imagen" DROP CONSTRAINT "Imagen_pkey",
ADD COLUMN     "lugarId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "profesionalId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Imagen_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Imagen_id_seq";

-- AlterTable
ALTER TABLE "Lugar" DROP COLUMN "imagenes",
DROP COLUMN "zona",
ADD COLUMN     "barrio" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Profesional" DROP CONSTRAINT "Profesional_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Profesional_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Profesional_id_seq";

-- AlterTable
ALTER TABLE "RedSocial" ALTER COLUMN "profesionalId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "RedSocial" ADD CONSTRAINT "RedSocial_profesionalId_fkey" FOREIGN KEY ("profesionalId") REFERENCES "Profesional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Imagen" ADD CONSTRAINT "Imagen_profesionalId_fkey" FOREIGN KEY ("profesionalId") REFERENCES "Profesional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Imagen" ADD CONSTRAINT "Imagen_lugarId_fkey" FOREIGN KEY ("lugarId") REFERENCES "Lugar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
