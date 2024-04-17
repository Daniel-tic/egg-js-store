/*
let totalApagar = 0
const cantidadProducto = Number(prompt("cuantos productos llevara?"));
let nombreProducto = "";

for (let index = 1; index <= cantidadProducto; index++) {
    const nombre =prompt("¿Qué producto desea llevar?");
    nombreProducto = nombreProducto + nombre +", ";
    const cantidad = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuánto sale cada unidad?"));
    const subtotal = cantidad * precio;
    totalApagar = totalApagar + subtotal;
}
//para comentar es crtl + }
//shit +alt +f para el justificado
nombreProducto = nombreProducto.substring(0,nombreProducto.length -2);

alert("los siguientes productos: "+ nombreProducto + "\n hacen un total de: "+ totalApagar);
// alert("el total a pagar es: " + totalApagar);
*/

/* otra forma de hacer el calculo de compra */

const comprar = () => {
  let totalApagar = 0;
  for (let index = 1; index <= 3; index++) {
    const nombre = prompt("¿Qué producto desea llevar?");
    const cantidad = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuánto sale cada unidad?"));
    const subtotal = cantidad * precio;
    totalApagar = totalApagar + subtotal;
  }
  console.log(totalApagar);
  return totalApagar;
}

const total1 = comprar();
const total2 = comprar();
const total3 = comprar();
const total = total1 + total2 + total3;

console.log("el total a pagar es: "+ total);
