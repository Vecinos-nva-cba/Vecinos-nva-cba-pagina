<div className="mt-5 mb-20 grid gtid-cols-1 md:grid-cols-3 gap-3">
      {/* Muestra */}
      <div className="col-span-1 md:col-span-2">
        {/* Desktop */}
        <MuestraLugar
          titulo={lugar.nombre}
          imagenes={lugar.imagenes}
          className="hidden md:block"
        />
        {/* Mobile */}
        <MuestraLugarMobile
          titulo={lugar.nombre}
          imagenes={lugar.imagenes}
          className="block md:hidden"
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5 md:px-0">
        <div className="mt-2">
          <h1 className="text-xl md:text-2xl font-bold">{lugar?.nombre}</h1>
        </div>
        <div className="flex flex-row items-center mt-5">
          <h2 className="font-bold">Zona:</h2>
          <span className="ml-2">{lugar.zona}</span>
        </div>

        <h2 className="text-xl md:text-2xl font-bold mb-2 md:ml-0">
          Tipo de lugar:
        </h2>
        <div className="flex justify-start md:my-4">
          {lugar.tipo.map((tipo, index) => (
            <span
              key={index}
              className="bg-gray-500 text-white py-1 px-2 rounded-md text-sm mr-2"
            >
              {tipo}
            </span>
          ))}
        </div>

        <div className="flex flex-row items-center mt-5">
          <h1 className="font-bold">
            {lugar.direccion.length > 1 ? "Direcciones:" : "Direccion:"}
          </h1>
          {lugar.direccion.map((direccion, index) => (
            <span key={index} className="ml-2">
              {direccion.calle} {direccion.altura}
            </span>
          ))}
        </div>

        {lugar.localizacion && (
          <div className="text-blue-500 hover:text-blue-700 mt-4">
            <Link href={`${lugar?.localizacion}`}>Ir a la ubicacion</Link>
          </div>
        )}

        {lugar.redes.length > 0 && (
          <div className="flex flex-row items-center mt-5">
            <h1 className="mr-3 font-bold">Mis redes son:</h1>
            {lugar.redes.map((red, index) => (
              <Link href={red.url} key={index} passHref>
                {red.tipo === "Instagram" && (
                  <IoLogoInstagram className="text-3xl md:text-4xl text-pink-500 hover:text-pink-700 cursor-pointer mr-2" />
                )}
                {red.tipo === "Twitter" && (
                  <IoLogoTwitch className="text-3xl md:text-4xl text-purple-500 hover:text-purple-700 cursor-pointer mr-2" />
                )}
                {red.tipo === "Linkedin" && (
                  <IoLogoLinkedin className="text-3xl md:text-4xl text-blue-500 hover:text-blue-700 cursor-pointer mr-2" />
                )}
                {red.tipo === "Facebook" && (
                  <IoLogoFacebook className="text-3xl md:text-4xl text-blue-500 hover:text-blue-700 cursor-pointer mr-2" />
                )}
                {red.tipo === "Web" && (
                  <IoLogoWebComponent className="text-3xl md:text-4xl text-gray-500 hover:text-gray-700 cursor-pointer mr-2" />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>