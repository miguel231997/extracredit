$(document).ready(function(){


    //var weatherHTML = response.data.map(function(weather)
    //$('.weather').on('click',function(e){
    $('#submit').on('click',function(e){

        e.preventDefault();

        var input = $('#input').val();

        var apiKey = 'c63c506f6a23c293d56465edb3c6c77e';

        var url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + input + ',us&units=imperial&APPID=' + apiKey;
        
        axios.get(url).then(function(response){
           
            var weather = response.data.main.temp;
            //var description = response.data.description;
            //var temperature = response.data.main.temp;
            var lowTemp = response.data.main.temp_min;
            var highTemp = response.data.main.temp_max;
            var Wind = response.data.wind.speed;
            var humidity = response.data.humidity
            var country = response.data.sys.country;
            var city = response.data.name;
            let description = response.data.weather.map((weather) => {
                    return weather.description;
            });
            
            
             $('#result').append('<p>'+city +', '+country + ' current temeperature ' + weather.toFixed(0)+' F. </p>');
             $('#result').append('<p> High ' + highTemp.toFixed(0) + ' F ' + ' and low '+ lowTemp.toFixed(0) + ' F.</p>');
             $('#result').append('<p>precipitation '+ description + '</p>');
             $('#result').append('<p>Winds ' + Wind + ' mph </p>');
             $('#result').append('<p>Humidity ' + humidity + '</p>');
         

        });
        //$('#weather').html('LOADING');
        $('#result').html('LOADING');
    });
});