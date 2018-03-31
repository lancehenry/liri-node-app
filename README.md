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
  
  * 'spotify-this-song'
    * Returns information for the title of the song entered
    * If no song is entered, returns 'The Sign' by Ace of Base
  
  * 'movie-this'
    * Returns information for the title of the movie entered
    * If no song is entered, returns 'Mr. Nobody'
  
  * 'do-what-it-says'
    * Reads the file random.txt and executes the command

Struggles
=========
Some of the challenges I encountered:

* getting my tweets to only return the tweet and date
* getting a callback from spotify after installing its npm
* getting the if/else statement to return Ace of Base if no input
