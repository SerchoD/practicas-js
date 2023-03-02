// for (inicialización; condición; actualización) {
//sentencias a ejecutar en cada iteración
// }

const myString = "Lata";
let response;

for (let i = 0; i < myString.length; i++) {
  if (myString[i] === "a" || myString[i] === "A") {
    response = true;
    break;
  } else {
    response = false;
  }
}

console.log(`el string "${myString}" tiene a ???: `, response);
