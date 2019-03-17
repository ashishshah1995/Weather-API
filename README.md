# Weather-API

# Useage

First generate an API key from https://openweathermap.org/

Insert the generated API key inside weather.js file where APPID = 'Insert here'

```
const request = https.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=Insert here`
```

Then, in a command line with Node.js installed, run:

```
node main.js "City name OR Zip code"
```

# By using city name
For example, for Sydney, Australia:

```
node main.js Sydney
```
# By Zip code
```
node main.js 1147
```

# Combination of multiplte City name and Zip code
```
node main.js 
```
