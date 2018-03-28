require("dotenv").config();

// Reference exercise 18 from class to cycle through arguments
// Entire argument stored in array
var nodeArgs = process.argv;

// Pull out user input in array's 3rd position (input[2])
var action = nodeArgs[2];

// Empty variable for holding users input
var userInput = "";

for (var i = 2; i < nodeArgs.length; i++) {
  if (i > 2 && i < nodeArgs.length) {
    userInput = userInput + "+" + nodeArgs[i];
  } else {
    userInput += nodeArgs[i];
  }
}

// Switch-case from class. It will direct which function to run
switch (action) {
  case "my-tweets":
    // Create this function below
    myTweets();
    break;

  case "spotify-this-song":
    // Create this function below
    spotifyThis();
    break;

  case "movie-this":
    // Create this function below
    movieThis();
    break;

  case "do-what-it-says":
    // Create this function below
    doThis();
    break;
}

// Twitter function for calling 20 tweets
function myTweets() {
  
  // FS require
  var fs = require("fs");

  // Import keys.js file and store it in a variable
  var keys = require("./keys.js");
  // console.log(keys.twitter);

  // This is requiring the Twitter NPM
  var Twitter = require("twitter");

  // This should go through the "./keys.js" file and grab Twitter access keys
  var client = new Twitter(keys.twitter);

  // Reference twitter npm documentation for below
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
        console.log("--------------------------------------");
        console.log(tweets[i].text);
        console.log("This was tweeted on: " + tweets[i].created_at);
        console.log("--------------------------------------");
      }
    } 
  });
}

// Not sure what this does yet...
// var spotify = new Spotify(keys.spotify);