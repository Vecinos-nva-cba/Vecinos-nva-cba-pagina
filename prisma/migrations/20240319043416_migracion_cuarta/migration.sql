/*
  Warnings:

  - You are about to drop the column `redes` on the `Lugar` table. All the data in the column will be lost.
  - You are about to drop the column `redes` on the `Profesional` table. All the data in the column will be lost.
  - You are about to drop the `urlRede` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "urlRede" DROP CONSTRAINT "urlRede_lugarId_fkey";

-- DropForeignKey
ALTER TABLE "urlRede" DROP CONSTRAINT "urlRede_profesionalId_fkey";

-- AlterTable
ALTER TABLE "Lugar" DROP COLUMN "redes";

-- AlterTable
ALTER TABLE "Profesional" DROP COLUMN "redes";

-- DropTable
DROP TABLE "urlRede";

-- CreateTable
CREATE TABLE "Red" (
    "url" TEXT NOT NULL,
    "tipo" "Redes" NOT NULL,
    "profesionalId" TEXT,
    "lugarId" TEXT,

    CONSTRAINT "Red_pkey" PRIMARY KEY ("url")
);

-- AddForeignKey
ALTER TABLE "Red" ADD CONSTRAINT "Red_profesionalId_fkey" FOREIGN KEY ("profesionalId") REFERENCES "Profesional"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Red" ADD CONSTRAINT "Red_lugarId_fkey" FOREIGN KEY ("lugarId") REFERENCES "Lugar"("id") ON DELETE SET NULL ON UPDATE CASCADE;
