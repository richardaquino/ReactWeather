var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a71203dd4fdee95c5885eb1d904e4558&units=metric';


// a71203dd4fdee95c5885eb1d904e4558

module.exports = {
    getTemp: function(location) { 
        var encondedLocation = encodeURIComponent(location);
        var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encondedLocation}`;

        return axios.get(requestURL).then(function(res) {
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }

}