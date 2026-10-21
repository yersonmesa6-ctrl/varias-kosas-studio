const usuarios = [
    {
        nombre: "Yerson Estiben Mesa Trujillo",
        telefono: "3246216479",
        correo: "correo@correo.com",
        contrasena: "1234567890",
        id: "id1234567890"
    },

    {
        nombre: "Ana Soto Suarez",
        telefono: "3124567890",
        correo: "ana@correo.com",
        contrasena: "0987654321",
        id: "id0987654321"
    }
];

export function guardarUsuario(){

}

export function buscarUsuario(correo, contasena){
    let auth = usuarios.some((usuario)=> correo == usuario.correo && contrasena == usuario.contrasena)
    return auth
}

