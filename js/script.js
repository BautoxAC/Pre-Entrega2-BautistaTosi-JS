let pago=0
let precio=0
let faltapagar=true
let vuelto=0
let tipo=0
let product=0
//funciones
//distintas formas de pagar
function pagar() {
    do {
        pago = Number(prompt("Debe pagar: " + precio + "$"))
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
}
//tipos de bebida
function cualtipo() {
    do {
        tipo = Number(prompt("¿De que tipo lo desea? \n 1.Light 2.Zero 3.Normal 0.Volver"))
        switch (tipo) {
            case 1:
                precio = precio * 3
                pagar()
                tipo = 0
                break;
            case 2:
                precio = precio * 2
                pagar()
                tipo = 0
                break;
            case 3:
                pagar()
                tipo = 0
                break;
            case 0:
                break;
            default:
                alert("ERROR")
                break;
        }
    } while (tipo !== 0);
}
//codigo
alert("BIENVENIDO USUARIO A LA MAQUINA EXPENDORA")
//distintos tipos de productos
do {
    product = Number(prompt("¿Que desea? \n 1.Coca-Cola   2.Pepsi    3.Sprite \n 4.Lays        5.Pringles    6.Doritos \n 0.No deseo nada"))
    if (product !== 0) {
        switch (product) {
            case 1:
                precio = 100
                cualtipo()
                break;
            case 2:
                precio = 120
                cualtipo()
                break;
            case 3:
                precio = 140
                cualtipo()
                break;
            case 4:
                precio = 220
                pagar()
                break;
            case 5:
                precio = 250
                pagar()
                break;
            case 6:
                precio = 270
                pagar()
                break;
            case 0:
                break;
            default:
                alert("ERROR")
                break;
        }
    } else {
        break;
    }
} while (product !== 0)