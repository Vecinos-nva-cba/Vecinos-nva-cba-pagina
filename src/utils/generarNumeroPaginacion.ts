export const generarNumeroPaginacion = (
    paginaActual: number,
    totalPaginas: number
  ) => {
    //Si el numero total de paginas es de 7 o menos vamos a mostrar todas las paginas sin numeros suspensivos
    if (totalPaginas <= 7) {
      return Array.from({ length: totalPaginas }, (_, i) => i + 1); // [1,2,3,4,5,6,7]
    }
  
    // Si las paginas actual esta en las primeras 3 paginas, mostar las primeras 3, ... y las ultimas 2
    if (totalPaginas <= 3) {
      return [1, 2, 3, "...", totalPaginas - 1, totalPaginas];
    }
  
    // Si la pagina actual esta entre las ultimas 3 paginas, mostrar las primeras 2 y las ultimas 3
    if (totalPaginas >= totalPaginas - 2) {
      return [1, 2, "...", totalPaginas - 2, totalPaginas - 1, totalPaginas];
    }
  
    // Si la página actual esta en otro lugar (en el medio por ej), mostrar la primera pagina, ... ,pagina actual y vecinos
    return [
      1,
      "...",
      paginaActual - 1,
      paginaActual,
      paginaActual + 1,
      "...",
      totalPaginas,
    ];
  };
  