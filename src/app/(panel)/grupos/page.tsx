import { getGrupoPaginacion } from "@/actions";
import { GrupoCard, GrupoGrid, Paginacion } from "@/components";


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