const myString = "timoteo";

// console.log("myString: ", myString);
// console.log("Longitud: ", myString.length);
// console.log("Primer Letra: ", myString[0]);
// console.log("Ultima letra: ", myString[myString.length - 1]);
// console.log("Mayúsculas: ", myString.toUpperCase());
// console.log("Minúsculas: ", myString.toLowerCase());

// ----
// Crea una funcion, que tome cualqier nombre, y siempre te devuelva
// todo el nombre en minúscula, excepto la priemer letra
// que ha de ser en mayúsculas.

// ----

const firstLetterUpperCase = (text) => {
  const firstLetter = text[0].toUpperCase();
  const restOfTheText = text.slice(1, text.length).toLowerCase();

  return firstLetter + restOfTheText;
};

console.log(firstLetterUpperCase(myString));
