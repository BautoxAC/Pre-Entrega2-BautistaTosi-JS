//Array
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
//Funciones
//distintas formas de pagar
function pagar() {
    for (const producto of factura) {
        precio += producto.precio * producto.cant
        textoFactura += "\n" + producto.nombre + "    " + producto.precio + "$     cantidad: " + producto.cant
    }
    alert(textoFactura)
    do {
        let pago = Number(prompt("Debe pagar: " + precio + "$"))
        if (pago < precio) {
            precio = precio - pago
            faltapagar = true
        } else if (pago > precio) {
            let vuelto = precio - pago
            alert("Su vuelto es de: " + (-vuelto) + "$")
            alert("Disfrute su compra")
            faltapagar = false
            break
        } else if (pago === precio) {
            pago = precio - pago
            alert("Disfrute su compra")
            faltapagar = false
            break
        } else {
            alert("ERROR")
            faltapagar = true
        }
    } while (faltapagar === true)
}
//agregar los productos comprados a la factura
function agregarFactura() {
    if (elegido > 0 && elegido <= productosElegidos.length) {
        do {
            cantidad = parseInt(prompt("¿Cuantos desea?\nDisponibles:" + productosElegidos[elegido - 1].stock))
            if (cantidad > productosElegidos[elegido - 1].stock) {
                alert("Lo sentimos no tenemos esa cantidad de productos\nIngrese una cantidad menor")
            } else if (cantidad > 0 && cantidad <= productosElegidos[elegido - 1].stock) {
                let nombreIgual = factura.find(producto => producto.nombre === productosElegidos[elegido - 1].nombre)
                factura.push(productosElegidos[elegido - 1])
                factura[pasadas].cant = cantidad
                pasadas++
                if (nombreIgual) {
                    nombreIgual.cant += cantidad
                    factura.pop()
                    pasadas--
                }
                let comprado = productos.find(producto => producto.id === productosElegidos[elegido - 1].id)
                comprado.stock -= cantidad
                break
            } else {
                alert("Ingrese el número correctamente")
            }
        } while (cantidad <= 0 || cantidad > productosElegidos[elegido - 1].stock)
    } else if (elegido === 0) {
    } else {
        alert("ERROR")
    }
}
//filtrar los productos de la categoria elegida
function listado(categoriaElegida) {
    productosElegidos = productos.filter(productos => productos.categoria === categoriaElegida && productos.stock > 0)
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
        if (productosElegidos[i].stock > 0) {
            listadoDeProductos += "\n" + (i + 1) + "." + productosElegidos[i].nombre + "    Precio: " + productosElegidos[i].precio + "$"
        }
    }
}
//Codigo
let faltapagar = true
let productosElegidos = []
let elegido = 0
let listadoDeProductos = ""
let compra = 1
let pregunta = 0
let factura = []
let cantidad = 0
let precio = 0
let pasadas = 0
let textoFactura = "Su compra es"
while (pregunta !== 2 && compra !== 0) {
    pregunta = Number(prompt("BIENVENIDO USUARIO A UNA TIENDA DE ROPA \n¿Quiere comprar algo?\n1.Sí   2.No"))
    while (pregunta === 1 && compra !== 0) {
        compra = Number(prompt("¿Qué desea de la tienda?\n1.Pantalones\n2.Remeras\n3.Accesorios\n4.Vestidos\n5.Medias\n6.Pagar mi compra\n0.Dejar de comprar"))
        switch (compra) {
            case 1:
                do {
                    listado("pantalon")
                    elegido = Number(prompt("Tenemos estos pantalones:" + listadoDeProductos + "\n0.volver"))
                    agregarFactura()
                } while (elegido !== 0 && faltapagar === true)
                break
            case 2:
                do {
                    listado("remera")
                    elegido = Number(prompt("Tenemos estas remeras:" + listadoDeProductos + "\n0.volver"))
                    agregarFactura()
                } while (elegido !== 0 && faltapagar === true)
                break
            case 3:
                do {
                    listado("accesorio")
                    elegido = Number(prompt("Tenemos estos accesorios:" + listadoDeProductos + "\n0.volver"))
                    agregarFactura()
                } while (elegido !== 0 && faltapagar === true)
                break
            case 4:
                do {
                    listado("vestido")
                    elegido = Number(prompt("Tenemos estos vestidos:" + listadoDeProductos + "\n0.volver"))
                    agregarFactura()
                } while (elegido !== 0 && faltapagar === true)
                break
            case 5:
                do {
                    listado("medias")
                    elegido = Number(prompt("Tenemos estas medias:" + listadoDeProductos + "\n0.volver"))
                    agregarFactura()
                } while (elegido !== 0 && faltapagar === true)
            case 6:
                console.log(compra)
                pagar()
                pregunta = parseInt(prompt("¿Seguir comprando?\n1.Sí   2.No"))
                factura = []
                pasadas = 0
                textoFactura = "Su compra es"
                break
            case 0:
                break
            default:
                alert("ERROR")
                break
        }
    }
}