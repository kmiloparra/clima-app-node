const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

lugar.getLugarLatLng(argv.direccion)
    .then(console.log);

clima.getClima(8.180000, -73.239998)
    .then(console.log)
    .catch(console.log);

const getInfo = async(direccion) => {
    let infoLugar = await lugar.getLugarLatLng(direccion);
    let infoClima = await clima.getClima(infoLugar.lat, infoLugar.lng);
    return { direccion, infoClima }
}


getInfo(argv.direccion).then((result) => {
    console.log(`El clima de ${ result.direccion } es de ${ result.infoClima }`);
}).catch((err) => {
    console.log(`No se pudo detrminar el clima de ${ result.direccion }`);
});