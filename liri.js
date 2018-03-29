require("dotenv").config();

// Referenced exercise (18-OMDB_Request_Students) from class to cycle through arguments
// Entire argument stored in array
var nodeArgs = process.argv;

// Pull out user input from array's 3rd position (input[2]) for the switch-case below
var action = nodeArgs[2];

// Variable that stores the Song title or Movie title search value
var secondInput = "";

for (var i = 3; i < nodeArgs.length; i++) {
  if (i > 3 && i < nodeArgs.length) {
    secondInput = secondInput + "+" + nodeArgs[i];
  } else {
    secondInput += nodeArgs[i];
  }
}

// Referenced (15-BankJS) switch-case from class.
switch (action) {
  case "my-tweets":
    // Created this function below
    myTweets();
    break;

  case "spotify-this-song":
    // Created this function below
    spotifyThis();
    break;

  case "movie-this":
    // Created this function below
    movieThis();
    break;

  case "do-what-it-says":
    // Created this function below
    doThis();
    break;
}

// Twitter function for calling 20 tweets
function myTweets() {

  // Import keys.js file and store it in a variable
  var keys = require("./keys.js");

  // This is requiring the Twitter NPM
  var Twitter = require("twitter");

  // This should go through the "./keys.js" file and grab Twitter access keys
  var client = new Twitter(keys.twitter);
  // console.log(client);

  // Referenced https://www.npmjs.com/package/twitter & https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline.html for below
  var params = {
    screen_name: "@schmittling2",
    count: 20
  };

  client.get("statuses/user_timeline", params, function(
    error,
    tweets,
    response
  ) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log("");
        console.log("--------------------------------------");
        console.log(tweets[i].text);
        console.log("This was tweeted on: " + tweets[i].created_at);
        console.log("--------------------------------------");
        console.log("");
      } 
    } else {
      console.log("Something went wrong: " + error);
    }
  });
}

// Spotify function for returning info about a song title
function spotifyThis() {

  // Import keys.js file and store it in a variable
  var keys = require("./keys.js");

  // This is requiring the Spotify NPM
  var Spotify = require("node-spotify-api");

  // This should go through the "./keys.js" file and grab Spotify access keys
  var spotify = new Spotify(keys.spotify);

  // Referenced https://www.npmjs.com/package/node-spotify-api
  spotify.search(
    {
      type: "track",
      query: secondInput
    },
    function(err, data) {
      if (!err) {
        console.log("");
        console.log("");
        console.log("Your song: " + data.tracks.items[0].name);
        console.log("--------------------------------------");
        console.log("The artist is: " + data.tracks.items[0].artists[0].name);
        console.log("From the album: " + data.tracks.items[0].album.name);
        console.log("You can preview it here: " + data.tracks.items[0].preview_url);
        console.log("");
        console.log("");
      } else {
        console.log("Something went wrong: " + err);
      }
    });
}

// Need to figure out how to return "Ace of Base: The Sign" if nothing is entered for the song title

// Movie function that returns info for the movie entered
function movieThis() {
  
  // Referenced exercise (18-OMDB_Request_Students) from class for this OMDB call
  // Request npm package
  var request = require("request");

  var queryURL = "http://www.omdbapi.com/?t=" + secondInput + "&y=&plot=short&apikey=trilogy";
  console.log(queryURL);

  request(queryURL, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log("");
      console.log("");
      console.log("--------------------------------------");
      console.log("Your movie: " + JSON.parse(body).Title);
      console.log("--------------------------------------");
      console.log("Released: " + JSON.parse(body).Year);
      console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
      console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
      console.log("Country Produced: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
      console.log("--------------------------------------");
      console.log("");
      console.log("");
    } else {
      console.log("Something went wrong: " + err);
    }
  })
} 

// Need to figure out how to return "Mr. Nobody" if nothing is entered for the movie title

// Referenced exercise (12-ReadFile) from class to read file
// Do What It Says function which pulls from the random.txt file text
function doThis() {

  // FS require
  var fs = require("fs");

  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    
    // Split the contents of data at the ","
    var dataArr = data.split(",");
    
    // Set the secondInput variable as the second index in the returned array
    secondInput = dataArr[1];

    // Run the spotifyThis(); function above which passes in the song from random.txt
    spotifyThis();
  });
}