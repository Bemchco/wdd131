const temperature = document.getElementById("temperature").innerHTML;
const windSpeed = document.getElementById("wind").innerHTML;
function calculateWindChill(temperature, windSpeed){
    if (temperature <= 10 && windSpeed > 4.8) {
        return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        return "N/A";
    }
}
if (temperature > 10 || windSpeed <= 4.8) {
    document.getElementById("windchill").innerHTML = "N/A";
} else {
document.getElementById("windchill").innerHTML = calculateWindChill(temperature, windSpeed).toFixed(2);
}