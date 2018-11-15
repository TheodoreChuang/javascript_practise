//// Challenge
// Here's some JSON from Yahoo!'s weather API (2018-03-28)
const weather =
  '{"query":{"count":1,"created":"2018-03-28T00:57:28Z","lang":"en-US","results":{"channel":{"units":{"distance":"mi","pressure":"in","speed":"mph","temperature":"F"},"title":"Yahoo! Weather - Sydney, NSW, AU","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/","description":"Yahoo! Weather for Sydney, NSW, AU","language":"en-us","lastBuildDate":"Wed, 28 Mar 2018 11:57 AM AEDT","ttl":"60","location":{"city":"Sydney","country":"Australia","region":" NSW"},"wind":{"chill":"77","direction":"0","speed":"11"},"atmosphere":{"humidity":"56","pressure":"1013.0","rising":"0","visibility":"16.1"},"astronomy":{"sunrise":"7:5 am","sunset":"6:56 pm"},"image":{"title":"Yahoo! Weather","width":"142","height":"18","link":"http://weather.yahoo.com","url":"http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"},"item":{"title":"Conditions for Sydney, NSW, AU at 11:00 AM AEDT","lat":"-33.856281","long":"151.020966","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/","pubDate":"Wed, 28 Mar 2018 11:00 AM AEDT","condition":{"code":"32","date":"Wed, 28 Mar 2018 11:00 AM AEDT","temp":"77","text":"Sunny"},"forecast":[{"code":"32","date":"28 Mar 2018","day":"Wed","high":"83","low":"57","text":"Sunny"},{"code":"32","date":"29 Mar 2018","day":"Thu","high":"85","low":"61","text":"Sunny"},{"code":"30","date":"30 Mar 2018","day":"Fri","high":"85","low":"64","text":"Partly Cloudy"},{"code":"30","date":"31 Mar 2018","day":"Sat","high":"75","low":"66","text":"Partly Cloudy"},{"code":"30","date":"01 Apr 2018","day":"Sun","high":"90","low":"62","text":"Partly Cloudy"},{"code":"30","date":"02 Apr 2018","day":"Mon","high":"83","low":"66","text":"Partly Cloudy"},{"code":"30","date":"03 Apr 2018","day":"Tue","high":"75","low":"65","text":"Partly Cloudy"},{"code":"30","date":"04 Apr 2018","day":"Wed","high":"74","low":"63","text":"Partly Cloudy"},{"code":"30","date":"05 Apr 2018","day":"Thu","high":"81","low":"61","text":"Partly Cloudy"},{"code":"34","date":"06 Apr 2018","day":"Fri","high":"77","low":"62","text":"Mostly Sunny"}],"guid":{"isPermaLink":"false"}}}}}}';

// Copy the JSON into your code and parse it using JSON.parse
let weatherParse = JSON.parse(weather);

// Log the sunrise and sunset dates
let astronomy = weatherParse.query.results.channel.astronomy;
let sunrise = astronomy.sunrise;
let sunset = astronomy.sunset;

// Log the forecast for the week, make it look nice
let forecast = weatherParse.query.results.channel.item.forecast;
console.table(forecast);

// Temperatures are in fahrenheit, fix this with a fahrenheitToCelcius method.
// subtract 32 and multiply by .5556 (or 5/9).
function fahrenheitToCelcius(f) {
  let celcius;
  try {
    celcius = Math.round((f - 32) * (5 / 9));
    if (isNaN(celcius)) {
      throw "Invalid Input";
    }
    return celcius;
  } catch (error) {
    console.log(error);
    return null;
  }
}

//// Beast Mode
// The sunrise time is missing a zero. Create a method to fix this. E.g:
// Input: 7:5 AM, output: 7:50AM
// Input: 7:50 AM, output: 7:50AM
// regex or colon index + slicing
function fixTime(timeString) {
  return timeString.replace(/(:\d)\s/, `$10 `); // (stuff) saved in $1
}
fixTime("7:5 AM"); // output: 7:50AM

// Beast Mode++
// Figure out a way to get the current weather from Yahoo! weather in your browser.
// Hint 1: We used this url
const url =
  "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22sydney%2Caustralia%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

let weatherRequest = new Request(url);
function getWeatherJSON() {
  fetch(weatherRequest)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(function(data) {
      let currentConditon = data.query.results.channel.item.condition;
      console.log(
        `On ${currentConditon.date} it was ${currentConditon.temp} and ${
          currentConditon.text
        }`
      );
    })
    .catch(function(error) {
      console.log(error);
    });
}

// Hint 2: Get a brief understanding of CORS (a common interview question)
// Hint 3: Get a brief understanding of JSONP (a common interview question)
// Hint 4: Yahoo! Weather API & Demo  https://developer.yahoo.com/weather/
// Got it? now use HTML elements to make it look nice!
