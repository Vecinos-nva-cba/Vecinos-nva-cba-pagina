
import { getProfesionalPaginacion } from "@/actions/profesional/get-profecional-paginacion";
import { Paginacion, ProfesionalGrid } from "@/components";


interface Props {
  searchParams: {
    page?: string
  }
}

export default async function ProfesionalesPage({searchParams}: Props) {
  const pagina = searchParams.page ? parseInt(searchParams.page) : 1
  const {profesionales, totalPaginas, currentPage} = await getProfesionalPaginacion({pagina})
  return (
    <div>
      <ProfesionalGrid profesionales={profesionales} totalPaginas={totalPaginas}/>
      
    </div>
  );
}