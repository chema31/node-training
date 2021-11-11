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

    borrarTarea( id = '' ) {
        if (this._listado[id]) {
            delete this._listado[id];
        }
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

    listadoCompleto() {

        console.log();

        this.listadoArr.forEach( (tarea, idx) => {
            const estado = tarea.completadoEn ? 'COMPLETADA'.green : 'PENDIENTE'.red;
            console.log( `${ idx + 1}. `.blue + tarea.desc + ' | ' + estado);
        });
    }

    listadoPendientesCompletadas( completadas = true ) {
        console.log();

        let idx = 1;

        this.listadoArr.forEach( tarea => {

            if (completadas && tarea.completadoEn) {
                console.log( `${ idx++ }. `.green + tarea.desc + ' | ' + tarea.completadoEn.green );

            } else if (!completadas && tarea.completadoEn === null) {
                console.log( `${ idx++ }. `.red + tarea.desc );
            }
            
        });
    }

    toggleCompletadas( ids = [] ) {
        ids.forEach( id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach( tarea => {
            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        })
    }
}

module.exports = Tareas;