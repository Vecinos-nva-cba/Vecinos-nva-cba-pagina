-- AlterTable
ALTER TABLE "Lugar" ADD COLUMN     "localizacion" TEXT,
ALTER COLUMN "redes" DROP DEFAULT;

-- CreateTable
CREATE TABLE "urlRede" (
    "id" TEXT NOT NULL,
    "tipo" "Redes" NOT NULL,
    "url" TEXT NOT NULL,
    "profesionalId" TEXT,
    "lugarId" TEXT,

    CONSTRAINT "urlRede_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "urlRede" ADD CONSTRAINT "urlRede_profesionalId_fkey" FOREIGN KEY ("profesionalId") REFERENCES "Profesional"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "urlRede" ADD CONSTRAINT "urlRede_lugarId_fkey" FOREIGN KEY ("lugarId") REFERENCES "Lugar"("id") ON DELETE SET NULL ON UPDATE CASCADE;
