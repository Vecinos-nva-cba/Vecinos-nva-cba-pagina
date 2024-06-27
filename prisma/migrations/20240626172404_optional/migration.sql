-- DropForeignKey
ALTER TABLE "Imagen" DROP CONSTRAINT "Imagen_lugarId_fkey";

-- DropForeignKey
ALTER TABLE "Imagen" DROP CONSTRAINT "Imagen_profesionalId_fkey";

-- DropForeignKey
ALTER TABLE "RedSocial" DROP CONSTRAINT "RedSocial_profesionalId_fkey";

-- AlterTable
ALTER TABLE "Imagen" ALTER COLUMN "profesionalId" DROP NOT NULL,
ALTER COLUMN "lugarId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "RedSocial" ALTER COLUMN "profesionalId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "RedSocial" ADD CONSTRAINT "RedSocial_profesionalId_fkey" FOREIGN KEY ("profesionalId") REFERENCES "Profesional"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Imagen" ADD CONSTRAINT "Imagen_profesionalId_fkey" FOREIGN KEY ("profesionalId") REFERENCES "Profesional"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Imagen" ADD CONSTRAINT "Imagen_lugarId_fkey" FOREIGN KEY ("lugarId") REFERENCES "Lugar"("id") ON DELETE SET NULL ON UPDATE CASCADE;
