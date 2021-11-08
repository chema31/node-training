const empleados = [
    {
        id: 1,
        nombre: 'Chema'
    },
    {
        id: 2,
        nombre: 'Patri'
    },
    {
        id: 3,
        nombre: 'Edurne'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = ( id, callback ) => {

    const empleado = empleados.find( e => e.id === id )

    if ( empleado ) {
        callback( null, empleado.nombre);  //El primer argumento es null porque no hay error

    } else {
        callback( `Empleado con id ${ id } no existe` );
    }
}

const getSalario = ( id, callback ) => {

    const salario = salarios.find( s => s.id === id )?.salario; //Devuelve el atributo salario en caso de que exista

    if ( salario ) {
        callback( null, salario);
    
    } else {
        callback( `Salario para id ${ id } no existe` );
    }
}

//Ejecución:

const id = 3;

getEmpleado( id, ( err, empleado ) => {

    if ( err ) {
        console.log('ERROR!');
        return console.log(err);
    }

    getSalario( id, ( err, salario ) => {

        if ( err ) {
            return console.log(err);
        }
    
        console.log( 'El empleado:', empleado, 'tiene un salario de:', salario );
    })

    
} )
