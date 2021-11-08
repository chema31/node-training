const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    //edad: 50,
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`;
    }
}

console.log( deadpool.getNombre())

const { nombre, apellido, poder, edad = 0 } = deadpool;

console.log( nombre, apellido, poder, edad);

const heroes = ['Deadpool', 'Superman', 'Batman'];

//const [ h1, h2, h3 ] = heroes;
//console.log(h1,h2,h3);

const [ , , h3 ] = heroes;
console.log(h3);