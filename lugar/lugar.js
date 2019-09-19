const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    //console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': '390c13bd3dmsh98c69d088d1ab1cp1aa90djsnad5ee0218f00' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`Nose encontraron resultados para ${ dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng

}