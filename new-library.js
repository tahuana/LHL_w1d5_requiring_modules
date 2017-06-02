//I am refactoring the exercise "music library" from week1 day 3
//this file import functions and use them

var myLibrary = require("./my-module");

console.log("\n*** Refactoring of 'music library' exercise from week1 day3 ***");

console.log("\nHere are all play lists in the library: ")
myLibrary.printAllPlaylists();

console.log("\nHere are all tracks in the library: ")
myLibrary.printAllTracks();

console.log("\nHere are the details of the play list 'p01'");
myLibrary.printPlaylist("p01");
console.log("\n");
