const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( {base = 5, listar = false, hasta = 10} ) => {
    
    try{
        let salida = '';
        let consola = '';

        for( let i = 1; i <= hasta; i++ ) {
            consola += `${base}`.underline.green + ` x ${i} = ` + `${base*i}\n`.cyan;
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        
        if( listar ){
            console.log(`=======================`.bgGreen);
            console.log( `Tabla del `.green, colors.blue( base ) );
            console.log(`=======================\n`.bgGreen);
        
            console.log(consola);
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;

    } catch( err ) {
        throw err;
    }
    
}

module.exports = {
    crearArchivo
}