// Problem: get the weather data with numbers or city names by typing in the console and print out the results

// Solution: use the OpenWeather API key to get the data and display it

// Function to get the HTTPS module
const https = require('https');
// Function to get the HTTP module

const http = require('http');

// Function tp print message to the console  
function printError(error) {
    console.error(error.message);
}

function printWeather(city, temperature) {
    const message = `Current temperature in ${city} is ${temperature} Celcius`;
    console.log(message);
}
// Function to convert Farenheit to celsius


function toCelsius(kelvin) {
    const celsius = kelvin - 273;
    return Math.round(celsius);

}
// Connect to the OpenWeather API and get the raw data
// Example of calls: api.openweathermap.org/data/2.5/weather?q=Mumbai
function get(query) {
    try {

        const request = https.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=6b624a38c1e66ed01b6a1aea126d63b5`, response => {
            if (response.statusCode === 200) {

                let body = "";
                // Read the data
                response.on('data', data => {

                    body += data.toString();

                }); //data reads ends
                // Parse it 

                response.on('end', () => {
                    try {
                        const profile = JSON.parse(body);
                        printWeather(profile.name, toCelsius(profile.main.temp));
                    } // parse ends
                    catch (error) {
                        console.log('Please enter valid name of the city');
                    }
                });
            } else {
                const message = `There was an error getting ${query} name (${https.STATUS_CODE[response.statusCodeError]})`;
                const statusCodeError = new Error(message);
                printError(statusCodeError);
            }
        });

request.on('error', () => {
    console.log('The URL is wrong. Please type another one.');
  });
} //try block ends
catch(error){
 printError(error);
}
}

module.exports.get = get;