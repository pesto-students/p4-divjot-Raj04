const express = require("express");
const request = require("request");

const app = express();

//requesting data for a particular city
app.get("/", (req, res) => {
  let city = req.query.city;
  var request = require("request");

  request(
    `http://api.weatherapi.com/v1/current.json?key=372f208a3f284a61b4670325222910&q=${city}&aqi=no`,
    function (error, response, body) {
      if (response.statusCode === 200) {
        res.send(`The weather in your city ${city} is ${body}`);
      }
    }
  );
});
//requesting data for multiple cities
app.get("/", (req, res) => {
  let cities = req.query.cities;
  var request = require("request");

  const getWeatherData = () =>
    Promise.all(
      cities.map(
        (city) =>
          new Promise((resolve, reject) =>
            request.get(
              `http://api.weatherapi.com/v1/current.json?key=372f208a3f284a61b4670325222910&q=${city}&aqi=no`,
              function (error, response, body) {
                if (response.statusCode === 200) {
                  return resolve(body);
                }
                return reject(error);
              }
            )
          )
      )
    );

  const main = async () => {
    const data = await getWeatherData();
    res.send(data);
  };
  main();
});
//requesting data by pincode
app.get("/zipcode", (req, res) => {
  let postalcode = req.query.code;
  var request = require("request");

  request(
    `http://api.weatherapi.com/v1/current.json?key=372f208a3f284a61b4670325222910&q=${postalcode}&aqi=no`,
    function (error, response, body) {
      if (response.statusCode === 200) {
        res.send(`The weather in your city with ${postalcode} is ${body}`);
      }
    }
  );
});

//requesting data for next X days
app.get("/forecast", (req, res) => {
  let city = req.query.city;
  let days = parseInt(req.query.days);
  var request = require("request");
  // http://api.weatherapi.com/v1/forecast.json?key=372f208a3f284a61b4670325222910&q=GL7
  // &days=1&aqi=no&alerts=no

  request(
    `http://api.weatherapi.com/v1/current.json?key=372f208a3f284a61b4670325222910&q=${city}&days=${days}&aqi=no`,
    function (error, response, body) {
      if (response.statusCode === 200) {
        res.send(`${body}`);
      }
    }
  );
});
//requesting data with Particular date past or future
app.get("/date", (req, res) => {
  let city = req.query.city;
  let date = req.query.days;
  var request = require("request");
  // http://api.weatherapi.com/v1/future.json?key=372f208a3f284a61b4670325222910&q=GL7&dt=2022-11-28

  request(
    `http://api.weatherapi.com/v1/future.json?key=372f208a3f284a61b4670325222910&q=${city}&dt=${date}`,
    function (error, response, body) {
      if (response.statusCode === 200) {
        res.send(`${body}`);
      }
    }
  );
});
//

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
