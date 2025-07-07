//Con esto hacemos que al apretar el boton no se recargue la pagina automaticamente.
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
})

//Almacenar el valor del input:
const input = document.getElementById('input');

//Almacenar en una variable un "ul" para poder listar las tareas con un "li".
const ul = document.getElementById('ul');

//Funcion donde se dispare un evento cuando se activa el boton.
const listar = () => {
    const li = document.createElement('li');
    const contenido = document.createTextNode(input.value);
    ul.appendChild(li);
    li.appendChild(contenido);

//Creamos el boton para eliminar la tarea.
    const boton = document.createElement('button');
    const contenidoBoton = document.createTextNode('Borrar');
    li.appendChild(boton);
    boton.appendChild(contenidoBoton);

    input.value = "";
}



