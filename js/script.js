const img = document.querySelector("#img");
const btn = document.querySelector("#btn");
const txt = document.querySelector("#txt");

btn.addEventListener("click", ()=>{
    txt.style.visibility = "visible";
    txt.innerHTML = "Buscando..."
    btn.style.visibility = "hidden";
    setTimeout(() => {
        cargar()
    }, 2000);
})

function cargar(){
    img.classList.add("contPri-search-img2");
    img.classList.remove("contPri-search-img");

    txt.innerHTML = "¡No hemos encontrado ningúno a la altura!<br/><br>Recargando...<br/>"
    setTimeout(() => {
        location.reload() 
    }, 4000);
}

/* ------------------------- */

/* EJECUTAR LA FUNCIÓN AL CARGAR LA PÁGINA */
window.onload = getData();
/* window.onload = getData2(); */

const info = document.querySelector('.player');
/* const info2 = document.querySelector('#dato'); */

/* FUNCION ASINCRONA PARA TRAER LOS DATOS DEL JSON */
async function getData(){
    const response = await fetch('./jugadores.json');
    const data = await response.json();
    createHTML(data);
}

/* async function getData2(){
    const response = await fetch('../estadisticas.json');
    const data2 = await response.json();
    createHTML2(data2);
}
 */
/* FUNCIÓN PARA AGREGAR AL HTML CONTENIDO MEDIANTE LOS DATOS TRAIDOS DEL JSON */
function createHTML(array){
    info.innerHTML = ''
    let p = 1;
    array.forEach((jugador) => {
        const card = `
        <div class="player-${jugador.id}">
            <div>
                <img src="${jugador.imagen}" alt="">
            </div>
            <div>
                <h2>${jugador.nombre}</h2>
            </div>
            <div>
                <li>Goles: ${jugador.goles}</li>
                <li>Disparos: ${jugador.disparos}</li>
                <li>Asistencias: ${jugador.asistencias}</li>
                <li>Pases: ${jugador.pases}</li>
            </div>
        </div>`
        info.innerHTML += card
        p += 1;
        }
    )
}

/* function createHTML2(array){
    info2.innerHTML = ''
    let p = 1;
    array.forEach((estadistica) => {
        const card = 
        `<div>
            <td>${estadistica.nombre} - ${estadistica.cantidad}</td>
        </div>
        `
        info2.innerHTML += card
        p += 1;
        }
        )
} */
