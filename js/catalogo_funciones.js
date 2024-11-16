// Si el sesionStorage es falso, redirecciona al login

// document.addEventListener("DOMContentLoaded", () => {
//   if (JSON.parse(localStorage.getItem("sesion")) == false) {
//     window.location.href = "../pages/forms/formulario-login.html";
//   }
// });

function insertarCard(producto, i, productos) {
    const card = crearCard(producto);
    controlPrecio(card);
    renderizarCard(card);
  }
  
  function crearCard(producto) {
    const divCard =document.createElement('div');
    const img = document.createElement('img');
  
    //img.classList.add('catalogo');
    divCard.classList.add('card');
  
    // desestructuración de array
    // const {nombre, precio, anio, urlImg}  =   producto;
    const nombre = producto.nombre;
    const precio = producto.precio;
    const anio = producto.anio;
    const urlDownload = producto.urlDownload;
    const urlImg = producto.urlImg;
       
    divCard.innerHTML = `
       <a href="${producto.urlDownload}"><img src="${producto.urlImg}" alt="Imagen del producto ${nombre}"></a> 
       <h2>${nombre}</h2>
       <p>Precio USD: ${precio}</p>
       <p>Año: ${anio}</p>`;
  
    return divCard;
  }
  
  function controlPrecio(card) {
    console.log();
    if(obtenerPrecio(card) < 15){
      card.classList.add('bajo-precio')
    }
  }
  
  function obtenerPrecio(card){
    let parrafos = card.querySelectorAll('p');
    let parrafoPrecio = parrafos[0];
    let contenidoParrafo = parrafoPrecio.textContent
  
    let precioValor = contenidoParrafo.split(':')[1];
  
    return parseInt(precioValor);
  }
  
  function renderizarCard(card){
    const container = document.querySelector('#catalogo-container');
    container.appendChild(card);
  }

  const menuIcon = document.getElementById('menu');
  const navMenu = document.getElementById('nav');

  menuIcon.addEventListener('click', function() {
    navMenu.classList.toggle('menuMobileActive');
    document.body.classList.toggle('no-scroll');
  });