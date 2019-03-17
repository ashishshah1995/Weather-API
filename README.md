# Weather-API

#Useage

First, get an API key from https://openweathermap.org/

Insert the generated API key inside weather.js file where APPID = 'Insert here'

```
const request = https.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=Insert here`
```

Then, in a command line with Node.js installed, just run:

node app "ADDRESS OR LOCATION"

For example, for Brisbane, Australia:

node app Brisbane
