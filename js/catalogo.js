let productos;

async function cargarDatos() {
  const response = await fetch("../data/data.json");
  //const response = await fetch("http://localhost:8088/catalogo");
  productos = await response.json();
  mostrarPorPantalla(productos);
}

cargarDatos()

function mostrarPorPantalla(productos) {
  const productosFiltradosPorPrecio = productos.filter((objeto) => objeto.precio > 0);
  productosFiltradosPorPrecio.forEach(insertarCard);
}

  // OPCIONES CON OTROS FILTROS APLICABLES
  //--------------------------------------------------------------------------
  // const productosFiltradosPorPrecio = productos.filter( objeto => {
  //   return objeto.precio > 2
  // });
  //const productosFiltradosPorPrecio = productos.filter((objeto) => objeto.precio > 2);
  //productosFiltradosPorPrecio.forEach(insertarCard);
  // console.log(productosFiltradosPorPrecio);
  //--------------------------------------------------------------------------
  // const encontrarProducto = productos.find((producto) => {
  //   return producto.nombre === "Amor Amarillo";
  // });
  //const encontrarProducto = productos.find((producto) => producto.nombre === "Amor Amarillo");
  // console.log(encontrarproducto);
  // productos.forEach(insertarCard);
  //--------------------------------------------------------------------------
