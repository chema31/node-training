require('dotenv').config();

const {
    inquirerMenu,
    pausa,
    leerInput,
    listadoLugares
 } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async() => {

    const busquedas = new Busquedas();
    let opt;

    do{
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                // Mostrar mensaje
                const termino = await leerInput('Ciudad: ');
                // Buscar los lugares
                const lugares = await busquedas.lookForPlace( termino );
                // Seleccionar el lugar
                const id = await listadoLugares( lugares );
                if (id === 0) continue;

                const lugarSel = lugares.find( lugar => lugar.id === id );

                busquedas.agregarHistorial( lugarSel.nombre );

                // Clima
                const clima = await busquedas.weatherInPlace( lugarSel.lat, lugarSel.lng );

                // Mostrar resultados
                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', lugarSel.nombre);
                console.log('Lat:', lugarSel.lat);
                console.log('Lng:', lugarSel.lng);
                console.log('Temperatura:', clima.temp);
                console.log('Mínima:', clima.min);
                console.log('Máxima:', clima.max);
                console.log('Descripción del clima:', clima.desc.yellow);

            break;

            case 2:
                busquedas.historialCapitalizado.forEach( (lugar, i) => {
                    const idx = `${ i + 1 }.`.green;
                    console.log( `${ idx } ${ lugar }` );
                });

            break;
        }

        if (opt !== 0) {
            await pausa();
        }
    } while ( opt !== 0 );


}

main();