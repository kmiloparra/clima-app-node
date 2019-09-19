const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=d23f8cb6c589020fff292bc6f0bed64d&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima

}