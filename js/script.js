//funciones
//distintas formas de pagar
function pagar() {
    let precio = productosElegidos[Elegido - 1].precio
    do {
        let pago = Number(prompt("Debe pagar: " + precio + "$"))
        if (pago < precio) {
            precio = precio - pago
            faltapagar = true
        } else if (pago > precio) {
            let vuelto = precio - pago
            alert("Su vuelto es de: " + (-vuelto) + "$")
            alert("Disfrute su producto")
            faltapagar = false
            break
        } else if (pago === precio) {
            pago = precio - pago
            alert("Disfrute su producto")
            faltapagar = false
            break
        } else {
            alert("ERROR")
            faltapagar = true
        }
    } while (faltapagar === true)
}
function pagarSiONo() {
    if (Elegido > 0 && Elegido <= productosElegidos.length) {
        pagar()
    } else if (Elegido === 0) {

    } else {
        alert("ERROR")
    }
}
function listado(categoriaElegida) {
    productosElegidos = productos.filter(productos => productos.categoria === categoriaElegida)
    productosElegidos.sort(function (pro1, pro2) {
        if (pro1.nombre < pro2.nombre) {
            return -1;
        }
        if (pro1.nombre > pro2.nombre) {
            return 1;
        }
        return 0;
    })
    listadoDeProductos = ""
    for (let i = 0; i < productosElegidos.length; i++) {
        listadoDeProductos += "\n" + (i + 1) + "." + productosElegidos[i].nombre
    }
}
//array
let productos = [
    { nombre: "JeansB", id: 1, categoria: "pantalon", stock: 4, precio: 20 },
    { nombre: "MediasC", id: 2, categoria: "medias", stock: 10, precio: 30 },
    { nombre: "MediasB", id: 3, categoria: "medias", stock: 8, precio: 20 },
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
let faltapagar = true
let productosElegidos = []
let Elegido = 0
let listadoDeProductos = ""
let compra = 1
let pregunta = 0
do {
    pregunta = Number(prompt("BIENVENIDO USUARIO A UNA TIENDA DE ROPA \n¿Quiere comprar algo?\n1.Sí   2.No"))
    while (pregunta === 1 && compra !== 0) {
        compra = Number(prompt("¿Qué desea de la tienda?\n1.Pantalones\n2.Remeras\n3.Accesorios\n4.Vestidos\n5.Medias\n0.Volver"))
        switch (compra) {
            case 1:
                listado("pantalon")
                do {
                    Elegido = Number(prompt("Tenemos estos pantalones:" + listadoDeProductos + "\n0.volver"))
                    pagarSiONo()
                } while (Elegido !== 0 && faltapagar === true)
                break
            case 2:
                listado("remera")
                do {
                    Elegido = Number(prompt("Tenemos estas remeras:" + listadoDeProductos + "\n0.volver"))
                    pagarSiONo()
                } while (Elegido !== 0 && faltapagar === true)
                break
            case 3:
                listado("accesorio")
                do {
                    Elegido = Number(prompt("Tenemos estos accesorios:" + listadoDeProductos + "\n0.volver"))
                    pagarSiONo()
                } while (Elegido !== 0 && faltapagar === true)
                break
            case 4:
                listado("vestido")
                do {
                    Elegido = Number(prompt("Tenemos estos vestidos:" + listadoDeProductos + "\n0.volver"))
                    pagarSiONo()
                } while (Elegido !== 0 && faltapagar === true)
                break
            case 5:
                listado("medias")
                do {
                    Elegido = Number(prompt("Tenemos estas medias:" + listadoDeProductos + "\n0.volver"))
                    pagarSiONo()
                } while (Elegido !== 0 && faltapagar === true)
            case 0:
                break
            default:
                alert("ERROR")
                break
        }
        if (compra==!0) {
            pregunta=Number(prompt("¿Seguir comprando?\n1.Sí   2.No"))
        }
    }
} while (pregunta !== 2);




