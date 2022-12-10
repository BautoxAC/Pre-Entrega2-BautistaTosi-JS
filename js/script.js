

/* //funciones
//distintas formas de pagar
function pagar() {
    let precio = 0
    let faltapagar = true
    let vuelto = 0
    let tipo = 0
    let product = 0
    do {
        let pago = Number(prompt("Debe pagar: " + precio + "$"))
        if (pago < precio) {
            precio = precio - pago
            faltapagar = true
        } else if (pago > precio) {
            vuelto = precio - pago
            alert("Su vuelto es de: " + (-vuelto) + "$")
            alert("Disfrute su producto")
            faltapagar = false
            break;
        } else if (pago === precio) {
            pago = precio - pago
            alert("Disfrute su producto")
            faltapagar = false
            break;
        } else {
            alert("ERROR")
            faltapagar = true
        }
    } while (faltapagar === true);
} */
//array
let productos=[
    { nombre: "JeansB", id: 1, categoria: "pantalon", stock: 4, precio: 20 },
    { nombre: "MediasC", id: 2, categoria: "interior", stock: 10, precio: 30 },
    { nombre: "MediasB", id: 3, categoria: "interior", stock: 8, precio: 20 },
    { nombre: "Bluney", id: 4, categoria: "remera", stock: 12, precio: 20 },
    { nombre: "PantC", id: 5, categoria: "pantalon", stock: 14, precio: 45 },
    { nombre: "DarkC", id: 6, categoria: "remera", stock: 20, precio: 20 },
    { nombre: "Celestyn", id: 7, categoria: "accesorio", stock: 3, precio: 20 },
    { nombre: "Celest", id: 8, categoria: "vestido", stock: 11, precio: 50 },
    { nombre: "LightE", id: 8, categoria: "remera", stock: 16, precio: 15 },
    { nombre: "LightB", id: 9, categoria: "vestido", stock: 6, precio: 50 },
    { nombre: "LightE2", id: 10, categoria: "remera", stock: 7, precio: 20 }
]
//codigo
let pregunta=Number(prompt("BIENVENIDO USUARIO A UNA TIENDA DE ROPA \n¿Quiere comprar algo?\n1.Sí   2.No"))
let compra = prompt("¿Qué desea de la tienda?")
