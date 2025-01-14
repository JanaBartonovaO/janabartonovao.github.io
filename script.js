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
