//Con esto hacemos que al apretar el boton no se recargue la pagina automaticamente.
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
})


const input = document.getElementById('input');
const ul = document.getElementById('ul');
const botonAgregarTarea = document.getElementById('listarTarea');

//Aca podemos capturar el click del boton para agregar la tarea.
botonAgregarTarea.addEventListener('click', () => {
    //Creamos un par de elementos html para despues ponerlo dentro del ul.
    const p = document.createElement('p');
    const tarea = input.value;
    const li = document.createElement('li');
    const botonEliminar = document.createElement('button');
    const botonEditar = document.createElement('button');
    
    //Aca a los elementos creados le asignamos contenido.
    p.textContent = tarea;
    botonEditar.textContent = "Editar tarea.";
    botonEliminar.textContent = "Eliminar tarea.";

    //Aca metemos todos los elementos creados, dentro del ul.
    //Osea el p y los botones van dentro del li, que este va dentro del ul.
    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(botonEliminar);
    li.appendChild(botonEditar);

    //Aca escuchamos el click del boton para eliminar la tarea.
    botonEliminar.addEventListener('click', (e) => {
        console.log(e.target.parentNode); //En esta parte vemos al padre del boton, en este caso seria el li.
        const item = e.target.parentNode; //Lo almacenamos en una constante.
        ul.removeChild(item); //Eliminamos un nodo hijo del ul que seria el li almacenado en item.
    });

    //Escuchamos el boton para poder editar la tarea.
    botonEditar.addEventListener('click', (e) => {
        const item = e.target.parentNode; //Almacenamos en una constante el padre del boton, que seria el li.
        const parrafo = item.querySelector('p'); //Aca podemos almacenar el parrafo del li, buscando el unico p con querySelector.
        console.log(parrafo);
        const contenidoPromp = prompt('Modificar tarea: '); //Almacenamos el nuevo contenido que va a tener el parrafo.
        parrafo.textContent = contenidoPromp; //Le asignamos el nuevo contenido al parrafo, osea la tarea.
    });
    
    
    




    input.value = "";
})



