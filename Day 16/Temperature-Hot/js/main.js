const API_KEY =`e3f1be6531515252232d131c764b7c15`;
const searchTemperature = () => {
        const city = document.getElementById('city-name').value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        fetch(url)
            .then(res => res.json())
            .then(data => displayTemperature(data));
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('country', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}


