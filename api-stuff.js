# OpenWeather API Stuff

our open weather key = 391d9430997a4787c74ca34ca02f4dc1

## Call for the 'current location' weather:

api call formula using lat and long:
api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&APPID=OUR KEY GOES HERE

example call using denver's lat and long:
http://api.openweathermap.org/data/2.5/weather?lat=39.75078&lon=-104.99626289999999&appid=c6f9cf80abac0cc0d08971b6c53bfc3c

##Call for the 'pinned cities' weather(s):

api call using zip code:
api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&APPID=OUR KEY GOES HERE

example call using denver's zip:
http://api.openweathermap.org/data/2.5/weather?zip=80218,us&APPID=391d9430997a4787c74ca34ca02f4dc1



# Geolocation API Stuff

if ("geolocation" in navigator) {
  geolocation object is available
} else {
  geolocation object IS NOT available
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
