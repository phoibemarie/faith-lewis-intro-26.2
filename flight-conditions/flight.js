const airports = {
  CVG: {
    name: "Cincinnati/Northern Kentucky International Airport",
    lat: 39.0488,
    lon: -84.6678
  },
  DAY: {
    name: "Dayton International Airport",
    lat: 39.9024,
    lon: -84.2194
  },
  CMH: {
    name: "John Glenn Columbus International Airport",
    lat: 39.998,
    lon: -82.8919
  }
};

const conditionsBtn = document.getElementById("conditionsBtn");
const windBtn = document.getElementById("windBtn");
const results = document.getElementById("results");

conditionsBtn.addEventListener("click", getConditions);
windBtn.addEventListener("click", getWindConditions);

function getConditions() {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=39.0488&longitude=-84.6678&current=temperature_2m,relative_humidity_2m";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      results.innerHTML = `
        <h2>Current Conditions</h2>
        <p>Temperature: ${data.current.temperature_2m}°C</p>
        <p>Humidity: ${data.current.relative_humidity_2m}%</p>
      `;
    })
    .catch(error => {
      results.innerHTML = `<p>Error loading weather data.</p>`;
      console.log(error);
    });
}

function getWindConditions() {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=39.0488&longitude=-84.6678&current=wind_speed_10m";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let status;

      if (data.current.wind_speed_10m < 20) {
        status = "Good Flying Conditions";
      } else {
        status = "Use Caution";
      }

      results.innerHTML = `
        <h2>Wind Conditions</h2>
        <p>Wind Speed: ${data.current.wind_speed_10m} km/h</p>
        <p>Flight Status: ${status}</p>
      `;
    })
    .catch(error => {
      results.innerHTML = `<p>Error loading wind data.</p>`;
      console.log(error);
    });
}