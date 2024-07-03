
import { getLugarPaginacion } from "@/actions/lugar/get-lugar-paginacion";
import { LugarGrid, Paginacion } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lugares de Nueva cordoba",
  description: "Lugares a los cuales puedes conocer o probar",
};

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function LugaresPage({ searchParams }: Props) {
  const pagina = searchParams.page ? parseInt(searchParams.page) : 1;
  const { lugares, totalPaginas, currentPage } = await getLugarPaginacion({
    pagina,
  });
  return (
    <div>
      <LugarGrid lugares={lugares} totalPaginas={totalPaginas} />
    </div>
  );
}
