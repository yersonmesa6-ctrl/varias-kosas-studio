import { getLocalStorage } from "../helpers/local-storage.js";
getLocalStorage("usuario")
console.log(usuario)

document.querySelector("#info-usuario").textContent = "USUARIO: " + usuario.nombre
document.querySelector("#btn-salir").addEventListener("click", function(){
    removeLocalStorage("usuario")
    window.location.href = "/index.html"
})