function mostrar () {

const numero = parseInt(prompt ("Ingrese un numero: ")); 
if (numero <= 50) {
    console.log ("El numero es menor que 50");
}
else if (numero < 20)
    console.log ("El numero es menor que 20");

else if (numero >30)
    console.log ("El numero es mayor que 30");

else (numero >= 40)
    console.log ("El numero es menor que 40");
}

mostrar ()

let nombre = prompt ("Ingresar nombre: ");

while (nombre != "ESC") {
    alert ("El usuario ingreso: " + nombre);
    nombre = prompt ("Ingresar otro nombre: ");
}

function calcular () {

let cantidad = parseFloat(prompt ("Ingresar cantidad"))
let precio = parseFloat(prompt ("Ingresar precio"))

compra = precio * cantidad;
desc = compra * 0.15;
pagar = compra - desc;
console.log ("El descuento es: " + desc)
console.log ("El total a pagar es: " + pagar)
}

calcular ()



