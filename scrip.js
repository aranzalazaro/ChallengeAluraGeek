const carrito= document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById ('vaciar-carrito');

cargarEventListeners ();

function cargarEventListeners(){
    elementos1.addEventListener('click', ComprarElemento);
    carrito.addEventListener('click', EliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}

function ComprarElemento(e){
    e.preventDefault();
    if(e,targer.classlist.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento (elemento);
    }
}


function leerDatosElemento(elemento){
    const infoElemento={
        imagen: elemento.querySelector('img').scr,
        titulo: elemento.querySelector ('h3').textContent,
        precio: elemento.querySelector('precio').textContent,
        id:elemento.querySelector('a').getAttribute ('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML =  `
    <td>
        <img src= "${elemento.imagen}" width=100>
    </td>

    <td>
        ${elemento.titulo}
    </td>

    <td>
        ${elemento.precio}
    </td>

    <td>
        <a herf="#" class="borrar" data-id="${elemento.id}>X </a>
    </td>
     `;
     lista.appendChild(row);
}

function eliminarElemento(e){
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classlist.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento= e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');

    }
}

function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild (lista.firstChild);
    }
    return false;
}