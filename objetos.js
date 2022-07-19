// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datos = {
    nombre: "Esteban",
    apellido: "Alban",
    edad: 32,
    altura: 169,
    isDeveloper: true
}

// - Una variable que obtenga tu edad a partir del objeto anterior

const edad = datos.edad
console.log(edad);

/* - Una lista que contenga el objeto con tus datos personales y 
un nuevo objeto con los datos personales de tus dos mejores amig@s*/

const datos2 = [
    {nombre: "Jessica",
    apellido: "Roman",
    edad: 30,
    altura: 165,
    isDeveloper: false},
    {nombre: "Joaquin",
    apellido: "Landazuri",
    edad: 33,
    altura: 170,
    isDeveloper: false}
]

datos2.push(datos)
console.log(datos2);

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

datos2.sort((a,b) => b.edad - a.edad)
console.log(datos2);

