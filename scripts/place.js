
document.addEventListener("DOMContentLoaded", () => {
  
  const year = new Date().getFullYear();
  const footer = document.querySelector(".page-footer");
  footer.innerHTML =
    `&copy; ${year} - Brandon Chinchilla - Guatemala<br>` +
    `Last modified: <span id="last-modified"></span>`;

  document.getElementById("last-modified").textContent = document.lastModified;

  const temperature = 10; 
  const windSpeed = 5;    

  function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
  }

  let windChillDisplay = "N/A";
  if (temperature <= 10 && windSpeed > 4.8) {
    windChillDisplay = `${calculateWindChill(temperature, windSpeed)} °C`;
  }

  const weatherListDivs = document.querySelectorAll(".weather-list div");
  for (let i = 0; i < weatherListDivs.length; i++) {
    if (
      weatherListDivs[i].textContent.trim().toLowerCase() === "wind chill:"
    ) {
      if (weatherListDivs[i + 1]) {
        weatherListDivs[i + 1].textContent = windChillDisplay;
      }
      break;
    }
  }
});