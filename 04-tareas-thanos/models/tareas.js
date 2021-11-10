const Tarea = require('./tarea');

/**
 * _listado:
 *      {   'uuid-123123-123123-2': { id:12, desc:asdfas, completadoEn:1234}}
 */

class Tareas {

    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea )
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray( tareasArray = [] ){
        tareasArray.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });

        return this._listado;
    }

    crearTarea( desc = '' ) {
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;