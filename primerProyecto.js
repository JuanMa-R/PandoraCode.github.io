let columnaActiva = 1;

// Seleccionar columnas
const columnas = document.querySelectorAll(".columna")

//Escuchar los "cliks" en cada una de ellas
columnas.forEach((columna, indice) => {
    columna.addEventListener("click", function () {
        cambiarColumna(indice)
    })
})
//Cambiar el estado de las columnas
function cambiarColumna(indice) {
    columnas[columnaActiva].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaActiva = indice
}