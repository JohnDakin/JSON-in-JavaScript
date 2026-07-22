const sampleWeatherData = `{"location":{"City":"San Francisco","Country":"USA"},"Current":{"temp":68,"feels_like":70,"humidity":75,"conditions":"Sunny","icon":"sun"},"daily":[{"day":"Today","high":72,"low":58,"conditions":"Clear"},{"day":"Tommorow","high":70,"low":56,"conditions":"Partly cloudy"}]}`;

const parsedData = JSON.parse(sampleWeatherData);
console.log(parsedData);

console.log(parsedData.location.City);
console.log(parsedData.daily[0].high);

const response = {
  success: true,
  message: "data received"
};

const jsonString = JSON.stringify(response);

console.log(jsonString);
