document.addEventListener("DOMContentLoaded", function () {
    // Funkce pro aktualizaci času a datumu
    function updateTime() {
        var dateTimeElement = document.getElementById("date-time");
        var now = new Date();
        var formattedDateTime = now.toLocaleString("cs-CZ", { dateStyle: "full", timeStyle: "long" });
        dateTimeElement.textContent = formattedDateTime;
    }

    // Aktualizace času a datumu každou sekundu
    setInterval(updateTime, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    const weatherContainer = document.getElementById('weather-data');

    // URL pro načtení dat
    const apiURL = 'https://api.open-meteo.com/v1/forecast?latitude=49.4712&longitude=17.9713&current_weather=true';

    // Načtení dat z API
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Chyba při načítání počasí');
            }
            return response.json();
        })
        .then(data => {
            const temp = data.current_weather.temperature; // Teplota
            const windSpeed = data.current_weather.windspeed; // Rychlost větru
            const weatherCode = data.current_weather.weathercode; // Kód počasí (volitelné)

            // Zobrazení dat v HTML
            weatherContainer.innerHTML = `
                <strong>${temp} °C</strong><br>
                Rychlost větru: ${windSpeed} m/s
            `;
        })
        .catch(error => {
            weatherContainer.innerHTML = `Chyba: ${error.message}`;
        });
});
