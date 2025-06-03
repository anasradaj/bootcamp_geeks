document.getElementById('sunriseForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const city = document.getElementById('city').value.trim();
  const lat = document.getElementById('lat').value.trim();
  const lng = document.getElementById('lng').value.trim();
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = 'Loading...';

  let latitude = lat;
  let longitude = lng;
  let cityName = city;

  if (city) {
    try {
      const geoResp = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`);
      const geoData = await geoResp.json();
      if (geoData.length > 0) {
        latitude = geoData[0].lat;
        longitude = geoData[0].lon;
        cityName = geoData[0].display_name.split(',')[0];
      } else {
        resultDiv.textContent = 'City not found.';
        return;
      }
    } catch (err) {
      resultDiv.textContent = 'Error fetching city coordinates.';
      return;
    }
  } else if (!lat || !lng) {
    resultDiv.textContent = 'Please enter either a city name or both latitude and longitude.';
    return;
  }

  const url = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    if (data.status === 'OK') {
      const sunrise = new Date(data.results.sunrise).toLocaleTimeString();
      const sunset = new Date(data.results.sunset).toLocaleTimeString();
      resultDiv.innerHTML = `
        <div style="margin-bottom: 1em;">
          <img src="https://img.icons8.com/fluency/48/000000/sunrise.png" alt="Sunrise icon" style="vertical-align:middle;margin-right:10px;">Sunrise: <b>${sunrise}</b>
        </div>
        <div>
          <img src="https://img.icons8.com/fluency/48/000000/sunset.png" alt="Sunset icon" style="vertical-align:middle;margin-right:10px;">Sunset: <b>${sunset}</b>
        </div>
      `;
    } else {
      resultDiv.textContent = 'Could not retrieve sunrise/sunset time for this location.';
    }
  } catch (err) {
    resultDiv.textContent = 'Error fetching sunrise/sunset time.';
  }
});

document.getElementById('clearBtn').addEventListener('click', function() {
  document.getElementById('city').value = '';
  document.getElementById('lat').value = '';
  document.getElementById('lng').value = '';
  document.getElementById('result').textContent = '';
});
