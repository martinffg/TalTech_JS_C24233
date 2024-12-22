// Si el sesionStorage es falso, redirecciona al login

// document.addEventListener("DOMContentLoaded", () => {
//   if (JSON.parse(localStorage.getItem("sesion")) == false) {
//     window.location.href = "../pages/forms/formulario-login.html";
//   }
// });

function insertarCard(producto, id, productos) {
    const card = crearCard(producto, id, productos);
    controlPrecio(card);
    renderizarCard(card);
  }
  
  function crearCard(producto, id, productos) {
    const divCard =document.createElement('div');
    const img = document.createElement('img');
  
    //img.classList.add('catalogo');
    divCard.classList.add('card');
  
    // desestructuración de array
    // const {nombre, precio, anio, urlImg, descripcion}  =   producto;
    const nombre = producto.nombre;
    const precio = producto.precio;
    const anio = producto.anio;
    const urlDownload = producto.urlDownload;
    const urlImg = producto.urlImg;
    const descripcion = producto.descripcion;
       
    divCard.innerHTML = `
       <a href="${urlDownload}"><img src="${urlImg}" alt="Imagen del producto ${nombre}"></a> 
       <h2>${nombre}</h2>
       <p>Precio USD: ${precio}</p>
       <p>Año: ${anio}</p>
       <button id="btnMasInfo${id}" class="buttonCatalogo" onclick="masInfoProducto(${id})">+Info</button>
       <div id="botonera${id}">
          <button class="buttonCatalogo" value="Comprar" onclick="comprarProducto(${id})">Comprar</button>
       </div>
       <div id="divOutput">
          <output id="description${id}" class="description" style="display:none">
            ${descripcion}
            <br>
              <button id="btnCompra${id}" class="buttonCatalogo" type="submit" value="Comprar" onclick="comprarProducto(${id})">Comprar</button>
          </output>
        </div>
       `;
    return divCard;
  }

  function masInfoProducto(id){
    // alert("¿Querés más información sobre " + productos[id].nombre + "?\nDescripción: " + productos[id].descripcion);
    event.preventDefault();
    let idx = id.toString();
    //seleccionamos los elementos, le damos un id unico
    //y los guardamos en una variable
    let param = 'description' + idx;
    let btnMasInfo = 'botonera' + idx;
    let btnComprar = 'btnMasInfo' + idx;
    let btnComprarDesc = 'comprar' + idx;

    // console.log(param)
    // console.log(btnMasInfo)
    // console.log(btnComprar)
    // console.log(btnComprarDesc)

    //ocultamos o mostramos los elementos
    document.getElementById(param).style.display = "block";
    document.getElementById(btnComprar).style.display = "none";
    document.getElementById(btnMasInfo).style.display = "none";
   }

  function comprarProducto(id){
    alert("¿Querés comprar " + productos[id].nombre + "?\nTodavía falta un poco para que terminemos de implementar el Carrito de Compras, te pedimos por favor que tengas paciencia y recuerda que:\n'TARDA EN LLEGAR Y AL FINAL HAY RECOMPENSA'");
    // //Extraigo los datos a guardar
    // let idx = id.toString();
    // let param = 'my_form' + idx;
    // let form = document.getElementById(param);
    // console.info('Tipo ' + typeof form);
    // const nombre = form.elements['nombre'].value; // accessing element by name
    // const precio = form.elements['precio'].value; // accessing element by name
    // //const firstElement = form.elements[0]; // accessing first element by index no.
    // console.log("Cantidad de elementos: "+ form.length);
    // console.log("Nombre " + nombre);
    // console.log("precio2 " + precio);

    // //Armo el objeto a guardar
    // let pedido = {
    //   "id" : Date.now(),
    //   "productoId" : idx,
    //   "name" : nombre,
    //   "price" : precio,
    //   "amount" : 1
    // }
    // //LocalStorage
    // if (typeof(Storage) !== "undefined") {
    //   localStorage.setItem(pedido.id, JSON.stringify(pedido));
    // } 
    
    // return false;
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