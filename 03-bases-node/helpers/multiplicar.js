const fs = require('fs');
var colors = require('colors');

const crearArchivo = async( {base = 5, listar = false} ) => {
    
    try{
        let salida = '';

        for( let i=1; i<11; i++ ) {
            salida += `${base}`.underline.green + ` x ${i} = ` + `${base*i}\n`.cyan;
        }
        
        if( listar ){
            console.log(`=======================\n`.bgGreen);
            console.log(`===== `.bgGreen + `Tabla del ${base}`.rainbow + ` ======\n`.bgGreen);
            console.log(`=======================\n`.bgGreen);
        
            console.log(salida);
        }

        fs.writeFileSync( `tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;

    } catch( err ) {
        throw err;
    }
    
}

module.exports = {
    crearArchivo
}