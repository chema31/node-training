require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { 
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

console.clear();

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();
    if (tareasDB) {
        tareas.cargarTareasFromArray( tareasDB );
    }

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':   //crear opción
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea( desc );
            break;

            case '2':   //todas las tareas
                tareas.listadoCompleto();
            break;

            case '3':   //tareas completadas
                tareas.listadoPendientesCompletadas();
            break;

            case '4':   //tareas pendientes
                tareas.listadoPendientesCompletadas( false );
            break;

            case '5':   //completar tareas
                const ids = await mostrarListadoChecklist( tareas.listadoArr );
                tareas.toggleCompletadas( ids );
            break;

            case '6':   //borrar
                const id = await listadoTareasBorrar( tareas.listadoArr );
                if (id !== '0') {
                    const ok = await confirmar('¿Está seguro?');
                    if (ok) {
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada');
                    }
                }
            break;
        }

        guardarDB( tareas.listadoArr );

        if ( opt !== '0' ) {
            console.log( '\n' );
            await pausa();
        }
    
    } while( opt !== '0' );
}

main();