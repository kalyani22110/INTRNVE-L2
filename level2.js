const apiKey = 'c020ec67a83d90da7b634cdf50598850';  

document.getElementById('sb').addEventListener('click', function() {
    const location = document.getElementById('in').value;
    if (location) {
        getWeather(location);
    } else {
        alert('Please enter a location');
    }
});

function getWeather(location) {
    const apiURL = ` https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric` ;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('Location not found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <p><strong>Location:</strong> ${data.name}, ${data.sys.country}</p>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
}