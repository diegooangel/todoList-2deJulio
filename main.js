//Con esto hacemos que al apretar el boton no se recargue la pagina automaticamente.
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
})

const input = document.getElementById('input');
const ul = document.getElementById('ul');
const botonAgregarTarea = document.getElementById('listarTarea');
botonAgregarTarea.addEventListener('click', () => {
    console.log("aprete el boton de listar");
    const element = `
                    <li>
                        <p>${input.value}</p>
                        <button type="submit" id="0">eliminar</button>
                        <button type="submit" id="0">editar</button>
                    </li>
                    `
    ul.insertAdjacentHTML("beforeend", element);
    input.value = "";
})



/*
<li>
            <p></p>
            <button type="submit" id="0">eliminar</button>
            <button type="submit" id="0">editar</button>
        </li>

*/

