import { getLocalStorage } from "../helpers/local-storage.js";
getLocalStorage("usuario")
console.log(usuario)

let token = getLocalStorage("token")
if (!token){
    window.location.href = "/index.html"
}

let usuario = getLocalStorage("usuario")

document.querySelector("#info-usuario").textContent = "USUARIO: " + usuario.nombre
document.querySelector("#btn-salir").addEventListener("click", function(){
    removeLocalStorage("usuario")
    removeLocalStorage("token")
    window.location.href = "/index.html"
})

document.querySelector("#btn-agregar-kosa").addEventListener("click", () => {
    let nombre_producto = document.querySelector("#nombre-producto").value
    let precio = document.querySelector("#precio").value
    let categoria = document.querySelector("#ncategoria").value
    let materiales = document.querySelector("#materiales").value
    let dimensiones = document.querySelector("#dimensiones").value
    let stock = document.querySelector("#stock").value
    let descripcion = document.querySelector("#descripcion").value
    let foto_producto = document.querySelector("#foto-producto").value
    let kosa = {nombre_producto, precio, categoria, materiales, dimensiones, stock, descripcion, foto_producto}
    console.log(kosa)
})