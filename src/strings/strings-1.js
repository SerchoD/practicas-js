const myString = 'timoteo';

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

const firstLetterUpperCase = (value) => {
	const restOfTheText = value.slice(1, value.length).toLowerCase();
	const firstLetter = value[0].toUpperCase();

	return firstLetter + restOfTheText;
};

// console.log(firstLetterUpperCase(myString));

// ----

// ----
// Crear una función que convierta todas las palabras
// de un string a que empiecen con mayúscula:
// ejemplos de entrada y salida

// 'HolS sEnIOR' -> 'Hola Senior'
// 'pepe fernandez' -> 'Pepe Fernandez'

// const tuFunciónAca .

// ----
