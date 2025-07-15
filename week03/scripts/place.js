// Display current year in the footer
document.addEventListener("DOMContentLoaded", () => {
  // Current year
  const year = new Date().getFullYear();
  const footer = document.querySelector(".page-footer");
  footer.innerHTML =
    `&copy; ${year} - Brandon Chinchilla - Guatemala<br>` +
    `Last modified: <span id="last-modified"></span>`;

  // Last modified date
  document.getElementById("last-modified").textContent = document.lastModified;

  // Static weather values (matching your HTML)
  const temperature = 10; // °C
  const windSpeed = 5;    // km/h

  // Wind chill calculation function (°C, km/h)
  function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
  }

  // Only calculate wind chill if conditions are met
  let windChillDisplay = "N/A";
  if (temperature <= 10 && windSpeed > 4.8) {
    windChillDisplay = `${calculateWindChill(temperature, windSpeed)} °C`;
  }

  // Update Wind Chill value in weather-list
  const weatherListDivs = document.querySelectorAll(".weather-list div");
  for (let i = 0; i < weatherListDivs.length; i++) {
    if (
      weatherListDivs[i].textContent.trim().toLowerCase() === "wind chill:"
    ) {
      // The value is the next sibling div
      if (weatherListDivs[i + 1]) {
        weatherListDivs[i + 1].textContent = windChillDisplay;
      }
      break;
    }
  }
});