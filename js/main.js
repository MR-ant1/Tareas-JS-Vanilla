let numeroventas = parseInt(prompt("introduzca el número de ventas que quiere incluir en la lista"))

let lista = [];

for (let i = 0; i < numeroventas; i++) {
    lista.push(prompt("dime un juego"))
}
console.log(lista)