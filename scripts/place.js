const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;

const temperature = 10;
const windSpeed = 5;

function calculateWindChill(t, v) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}

const windChillElement = document.getElementById("windChill");

if (temperature <= 10 && windSpeed > 4.8) {
    
    windChillElement.textContent = calculateWindChill(temperature, windSpeed) + " °C";
} else {
    windChillElement.textContent = "N/A";
}