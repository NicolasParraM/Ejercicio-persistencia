const nombre = "Nikolai";
const apellido = "Parra";

const datos = {
    nombre,
    apellido
}

// sessionStorage.setItem("datos", JSON.stringify(datos));
// localStorage.setItem("datos", JSON.stringify(datos));

const now = new Date();

document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`

console.log(document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`)