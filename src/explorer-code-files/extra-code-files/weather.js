/*
    This file displays the current weather for ...
*/

const weatherWidget = document.getElementById('weather-widget');

if (weatherWidget) {
   weatherWidget.innerHTML = '<p class="weather-status">Loading Troy weather…</p>';
}

fetch('https://api.weather.gov/points/42.7298,-73.6789')
   .then(function (response) {
      if (!response.ok) {
         throw new Error('Weather service responded with an error.');
      }
      return response.json();
   })
   .then(function (data) {
      const forecastURL = data.properties && data.properties.forecast;
      if (!forecastURL) {
         throw new Error('Forecast URL was not returned by the weather service.');
      }
      return fetch(forecastURL);
   })
   .then(function (response) {
      if (!response.ok) {
         throw new Error('Forecast data could not be loaded.');
      }
      return response.json();
   })
   .then(function (data) {
      const period = data.properties && data.properties.periods && data.properties.periods[0];
      const extendedPeriods = data.properties && data.properties.periods ? data.properties.periods.slice(1, 4) : [];

      if (!period) {
         throw new Error('Forecast period was missing.');
      }

      const extendedMarkup = extendedPeriods.map(function (item) {
         return `
            <li>
               <strong>${item.name}:</strong> ${item.temperature}°${item.temperatureUnit}, ${item.shortForecast}
            </li>
         `;
      }).join('');
      const extendedForecastMarkup = extendedPeriods.length
         ? `<button class="weather-toggle" type="button" aria-expanded="false">Show extended forecast</button>
            <ul class="extended-forecast">${extendedMarkup}</ul>`
         : '';

      if (weatherWidget) {
         weatherWidget.classList.add('is-visible');
         weatherWidget.innerHTML = `
            <div class="weather-card">
               <p class="weather-title">Troy, NY forecast</p>
               <p class="weather-detail">${period.name}: ${period.temperature}°${period.temperatureUnit}, ${period.shortForecast}. ${period.detailedForecast}</p>
               ${extendedForecastMarkup}
            </div>
         `;

         const toggleButton = weatherWidget.querySelector('.weather-toggle');
         const extendedForecast = weatherWidget.querySelector('.extended-forecast');

         if (toggleButton && extendedForecast) {
            toggleButton.addEventListener('click', function () {
               const isOpen = weatherWidget.classList.toggle('open');
               toggleButton.setAttribute('aria-expanded', String(isOpen));
               toggleButton.textContent = isOpen ? 'Hide extended forecast' : 'Show extended forecast';
            });
         }
      }
   })
   .catch(function (error) {
      console.error('Weather fetch failed:', error);
      if (weatherWidget) {
         weatherWidget.classList.add('is-visible');
         weatherWidget.innerHTML = '<p class="weather-status">Troy weather is unavailable right now. Please check back soon.</p>';
      }
   });