// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if(x>y)
  var valor=x;
  else
  var valor=y;
  return valor;
}
obtenerMayor(5,6);

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  switch(idioma){
    case 'aleman': var frase = 'Guten Tag!'; break;
    case 'ingles': var frase = 'Hello!'; break;
    case 'mandarin': var frase = 'Ni Hao!'; break;
    default: var frase = 'Hola!'; break;
  }
  return frase;
}
saludo('ingles');

function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    if(numero===5||numero===10)
    var valor = true;
    else 
    var valor = false;
    return valor;}
    esDiezOCinco(6);


function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero<50&&numero>20)
  var valor= true;
  else
  var valor = false;
  return valor;
}
estaEnRango(45);

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (numero==Math.floor(numero))
  var valor=true;
  else
  var valor= false;
  return valor;
}
esEntero(7.4);


function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if(!(numero % 3))
  var result='fizz';
  if(!(numero % 5))
  var result='buzz';
  if(!(numero%3)&&!(numero%5))
  var result='fizzbuzz';
  if((numero%3)*(numero%5))
  var result=numero;
  return result;
}
fizzBuzz(15);

function esPrimo(numero) {
  var i, div=0;
  for(i=2;i<numero;i++){
    if(!(numero%i))
    div++;
  }
  if(div===0&&numero!==0&&numero!==1)
  var valor=true; 
  else 
  var valor=false;
  return valor;
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
}
esPrimo(7);



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
