// Print out data to the console

// Make it flexible with ARGV key
const weather = require('./weather.js');
let city = process.argv.slice(2);
city.forEach(data1 => {
   weather.get(data1);
});


  // If the users types number it will change the q to id

  if (isNaN(city)===false){
    //generate an country ID query like => id= 07011
    query = `id=${city}`;
  }else {
    //generate a simple q query like => q=${city}
    query = `q=${city}`;
  }


