
import { getGrupoPaginacion } from "@/actions/grupo/get-grupo-paginacion";
import { GrupoCard, GrupoGrid, Paginacion } from "@/components";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grupos de vecinos",
  description: "Grupos a los cuales puedes unirte segun tus intereses",
};
interface Props {
  searchParams: {
    page?: string
  }
}


export default async function GruposPage({searchParams}: Props) {
  const pagina = searchParams.page ? parseInt(searchParams.page) : 1
  const {grupos, totalPaginas, currentPage} = await getGrupoPaginacion({pagina})
  // console.log({ totalPaginas, currentPage})
  return (
    <div>
      <GrupoGrid grupos={grupos} totalPaginas={totalPaginas}/>
      
    </div>
  );
}