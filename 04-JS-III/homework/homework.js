// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}
var cadena = [1,5,6];
devolverPrimerElemento(cadena);


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return (array[array.length-1]);
}
var array =[1,2,3,4];
devolverPrimerElemento(array);

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return (array.length); 
}
var array = [1,2,3,4];
obtenerLargoDelArray(array);

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var i;
  for(i=0;i<array.length;i++){
    array[i]++;
  }
  return array;
}
var array = [1,2,3,4,5,6];
incrementarPorUno(array);

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}
var array = [1,2,3];
var elemento = 5;

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
var array = [1,2,3];
var elemento = 5;


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase='', i;
  for(i=0;i<(palabras.length-1);i++){
    frase = frase + palabras[i]+' ';
  }
  frase=frase + palabras[palabras.length-1];
    return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var result=false, i;
  for(i=0;i<array.length;i++){
    if(elemento==array[i])
    result = true;  
  }
  return result;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var result=0;
  for(var i=0;i<array.length;i++){
    if(numeros[i]=Math.floor(numeros[i]))
    result = result + numeros[i];  
  }
  return result;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var result=0, suma=0;
  for(var i=0;i<resultadosTest.length;i++){
    suma=suma+resultadosTest[i];
  }
  result=(suma/resultadosTest.length);
  return result;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var suma=0;
  for(var i=0;i<numeros.length;i++){
    if(numeros[i]>suma)
    suma=numeros[i];
  }
  return suma;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  var arg = arguments.length;
  var result=1;
  for(var i=0;i<arg;i++){
  result=result*arguments[i];
  }
  if(arg===0)
  result=0;
  return result;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
