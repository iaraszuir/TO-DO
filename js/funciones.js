const divLista = document.getElementById('tareasPending');
const addInputTarea = document.getElementById('inputTarea')
const selector = document.getElementById('selectorPrioridadTarea')
const labelTarea = document.getElementById('labelTarea')
const inputPrioridad = document.getElementById('inputPrioridad')
const btnGuardar = document.getElementById('btnGuardar')
const btnDelete = document.querySelector('#tareasPending button')
const selectorBusqueda = document.getElementById('selectorPrioridadBusqueda')
const inputTareaBuscada = document.getElementById('inputTareaBusqueda')


function pintarTarea(pTarea) {


    const nombreTarea = document.createElement('h2')
    nombreTarea.innerText = pTarea.titulo;
    const btnDelete = document.createElement('button')
    btnDelete.innerText = 'Eliminar'

    btnDelete.addEventListener('click', (event) => {
        event.target.parentNode.remove()

    })


    const prioridadTarea = document.createElement('p')
    prioridadTarea.innerHTML = '';


    const divTareasPending = document.createElement('div')

    divTareasPending.appendChild(nombreTarea)
    divTareasPending.appendChild(btnDelete)

    if (pTarea.prioridad.toLowerCase() === 'diario') {
        divTareasPending.style.backgroundColor = 'lightgreen';
    } else if (pTarea.prioridad.toLowerCase() === 'urgente') {
        divTareasPending.style.backgroundColor = 'lightcoral';
    } else {
        divTareasPending.style.backgroundColor = 'lightyellow'
    }
    return divTareasPending;
}



function printListaTareas(pListaTareas) {
    divLista.innerHTML = '';

    for (tarea of pListaTareas) {



        let divTarea = pintarTarea(tarea);
        divLista.appendChild(divTarea);
    }




}

btnGuardar.addEventListener('click', guardaCampolabel)

function guardaCampolabel(event) {

    const tareaNueva = {
        idRutina: listaRutinas.length + 1,
        titulo: addInputTarea.value,
        prioridad: selector.value,
    }

    listaRutinas.push(tareaNueva);


    const divNuevaTarea = pintarTarea(tareaNueva);
    divLista.appendChild(divNuevaTarea)
    return;

}

selectorBusqueda.addEventListener('change', (event) => {

    const priorizados = [];
    for (tarea of listaRutinas) {
        if (tarea.prioridad === event.target.value) {
            priorizados.push(tarea)
        }

    }
    printListaTareas(priorizados, listaRutinas)
})

inputTareaBuscada.addEventListener('input', (event) => {

    const arrFiltradoTarea = [];

    const tareaIncluida = event.target.value.toLowerCase();

    for (tarea of listaRutinas) {
        if (tarea.titulo.toLowerCase().includes(tareaIncluida) && !arrFiltradoTarea.includes(tarea)) {

            arrFiltradoTarea.push(tarea);
        }

    }
    printListaTareas(arrFiltradoTarea, listaRutinas)
})



printListaTareas(listaRutinas)
