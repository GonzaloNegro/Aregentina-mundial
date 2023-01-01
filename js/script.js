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