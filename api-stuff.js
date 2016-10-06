*OpenWeather API Stuff*

our open weather key = 391d9430997a4787c74ca34ca02f4dc1

api call formula using lat and long:
api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&APPID={KEY GOES HERE}

api call formula using city ID (OpenWeather's RECOMMENDED method):
api.openweathermap.org/data/2.5/forecast?id={city ID}&APPID={KEY GOES HERE}

Denver City Id = 5419384

Call for Denver 5-day, 3-hour, using city ID:
api.openweathermap.org/data/2.5/forecast?id=5419384&APPID=391d9430997a4787c74ca34ca02f4dc1

Call for Denver current weather, using city ID:
api.openweathermap.org/data/2.5/weather?id=5419384&APPID=391d9430997a4787c74ca34ca02f4dc1

*Geolocation API Stuff*

if ("geolocation" in navigator) {
  geolocation is available
} else {
  geolocation IS NOT available
}

so we can do something like this:

function GetLatAndLong(){
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
    return(
        { latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      );
  });
  } else {
    console.error('navigator.geolocation object not found. No geolocation services available.')
  }
};  
