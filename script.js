// const listaExpensa = document.getElementById('box-expensas-list');
const formulario = document.getElementById('box-form'); 
const boxExpensas = document.getElementById('box-expensas'); 

eventListeners();
function eventListeners(){
    formulario.addEventListener('submit', agregarExpensa);     
    boxExpensas.addEventListener('click', borrarExpensa);
}

function agregarExpensa(event){
    event.preventDefault();
    // obtener el valor de cada input 
    const metodo = document.getElementById('metodo').value;
    const fecha = document.getElementById('fecha').value;
    const compra = document.getElementById('compra').value;
    const monto = document.getElementById('monto').value;
    // btn borrar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar';
    botonBorrar.innerText = 'x';
    // crear lista
    const ul = document.createElement('ul');
    const liMetodo = document.createElement('li');
    const liFecha = document.createElement('li');
    const liCompra = document.createElement('li');
    const liMonto = document.createElement('li');
    liMetodo.innerText = metodo;
    liFecha.innerText = fecha;
    liCompra.innerText = compra;
    liMonto.innerText = monto;
    // agregar los li al ul
    ul.appendChild(liMetodo);
    ul.appendChild(liFecha);
    ul.appendChild(liCompra);
    ul.appendChild(liMonto);
    ul.appendChild(botonBorrar);
    ul.classList = 'box-expensas-list';
    boxExpensas.appendChild(ul);
}

function borrarExpensa(event){
    event.preventDefault();
    if(event.target.className ==='borrar'){
        event.target.parentElement.remove();     
  }
}
