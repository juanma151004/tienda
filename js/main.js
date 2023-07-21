
let button = document.querySelectorAll('.b');
let t = document.getElementById("titulo");
let p = document.getElementById("precio");
let conta = document.getElementById("conta")
let cont = 0;

const agregarButton = document.getElementById('add');
const carritoModal = document.getElementById('carritoModal');
const closeButton = document.querySelector('.close');
const carritoItems = document.getElementById('carritoItems');
const cbutton = document.getElementById("comprar")


function actualizarContador() {
    conta.textContent = cont;
  }

  function incrementarContador() {
    cont++;
    actualizarContador();
  }

  function info() {
    alert("agregado al carrito!")
  }
  
  button.forEach((button) => {
    button.addEventListener('click', incrementarContador);
    button.addEventListener('click', info);
  });

  
 
  

  
  // Función para abrir la ventana modal
  function mostrarCarritoModal() {
    carritoModal.style.display = 'block';
  }
  
  // Función para cerrar la ventana modal
  function cerrarCarritoModal() {
    carritoModal.style.display = 'none';
  }
  
  // Función para agregar un elemento al carrito
  function agregarAlCarrito(nombreProducto) {
    const listItem = document.createElement('li');
    listItem.textContent = nombreProducto;
    carritoItems.appendChild(listItem);
  
    contador++;
    contadorCarrito.textContent = contador;
  }

  function comprar() {
    carritoItems.innerHTML = "";
    cont = 0;
    conta.innerHTML = 0;
  }
  
  // Agregar evento de clic al botón "Carrito de compras"
  agregarButton.addEventListener('click', mostrarCarritoModal);
  
  // Agregar evento de clic al botón de cierre en la ventana modal
  closeButton.addEventListener('click', cerrarCarritoModal);
  
  // Agregar evento para cerrar la ventana modal cuando se haga clic fuera de ella
  window.addEventListener('click', (event) => {
    if (event.target === carritoModal) {
      cerrarCarritoModal();
    }
  });
  
  // Agregar evento de clic a los botones "COMPRAR"
  const buyButtons = document.querySelectorAll('.b');
  buyButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const titulo = button.parentElement.querySelector('.card-titulo').textContent;
      agregarAlCarrito(titulo);
    });
  });

  cbutton.addEventListener("click", comprar)

  
  
  
  
  
  
  