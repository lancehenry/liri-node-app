# liri-node-app

Liri is a Language Interpretation and Recognition Interface. It is a command line Node app that takes in parameters and gives you back data.

# Table of Contents

<!--ts-->
* [Table of Contents](#table-of-contents)
* [Philosophy](#philosophy)
* [Struggles](#struggles)
  <!--te-->

Philosophy
==========
The concept is simple:

* The command line takes in one of the following commands:
  
  * 'my-tweets'
    * Returns the last 20 tweets from my account

![alt text](https://github.com/lschmittling/liri-node-app/blob/master/images/liri-mytweets.gif "liri-mytweets")    
  
  * 'spotify-this-song'
    * Returns information for the title of the song entered
    * If no song is entered, returns 'The Sign' by Ace of Base

![alt text](https://github.com/lschmittling/liri-node-app/blob/master/images/liri-spotify.gif "liri-spotify")
  
  * 'movie-this'
    * Returns information for the title of the movie entered
    * If no song is entered, returns 'Mr. Nobody'

![alt text](https://github.com/lschmittling/liri-node-app/blob/master/images/liri-movie.gif "liri-movie")    
  
  * 'do-what-it-says'
    * Reads the file random.txt and executes the command

![alt text](https://github.com/lschmittling/liri-node-app/blob/master/images/liri-doit.gif "liri-doit")    

Struggles
=========
Some of the challenges I encountered:

* getting my tweets to only return the tweet and date
* getting a callback from spotify after installing its npm
* getting the if/else statement to return Ace of Base if no input
