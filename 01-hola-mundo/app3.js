//Orden de ejecución

console.log('Inicio de programa');  //Se ejecuta el 1º

setTimeout( () => {
    console.log('Primer Timeout');  //Se ejecuta el último
}, 3000 );

setTimeout( () => {
    console.log('Segundo Timeout'); //Se ejecuta el 3º, porque JS almacena los callback en una cola de ejecución
}, 0 );

setTimeout( () => {
    console.log('Tercer Timeout');  //Se ejecuta el 4º
}, 0 );

console.log('Fin de programa'); //Se ejecuta el 2º