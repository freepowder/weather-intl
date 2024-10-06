export const API_KEY = process.env.API_KEY;
export const API_URL = "https://api.openweathermap.org";

export const DEFAULT_LOCATION = {
  name: "New York",
  country: "US",
  lat: 40.769361,
  lon: -73.977655,
};

export const DEFAULT_SUGGESTIONS = [
  {
    name: "London",
    country: "GB",
    lat: 51.5072,
    lon: 0.1276,
  },
  {
    name: "Berlin",
    country: "DE",
    lat: 52.520008,
    lon: 13.404954,
  },
  {
    name: "New York",
    country: "US",
    lat: 40.769361,
    lon: -73.977655,
  },
  {
    name: "Tokyo",
    country: "JP",
    lat: 35.6764,
    lon: 139.65,
  },
];

export const MESSAGES = {
  FEELS_WARMER: "Feels warmer than the actual temperature.",
  FEELS_COLDER: "Feels colder than the actual temperature.",
  FEELS_SAME: "Feels like the actual temperature.",
  HUMIDITY_HIGH: "High humidity. It might feel humid and uncomfortable.",
  HUMIDITY_LOW: "Low humidity. It might feel dry.",
  HUMIDITY_MODARATE: "Moderate humidity. Comfortable conditions.",
  VISIBILITY_CLEAR: "It's perfectly clear right now.",
  VISIBILITY_GOOD: "Good visibility.",
  VISIBILITY_POOR:
    "Poor visibility. Exercise caution while driving or moving around.",
};
