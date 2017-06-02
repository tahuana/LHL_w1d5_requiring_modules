//I am refactoring the exercise "music library" from week1 day 3
//this file contains functions that I want to export


//Data of my library:
var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}


//FUNCTIONS - SHOULD BE EXPORTED:

//function that prints all Play Lists
var printAllPlaylists = function () {
  var libraryPlaylists =  library.playlists;
  for (var currentPlaylist in libraryPlaylists) {
    if(libraryPlaylists.hasOwnProperty(currentPlaylist)) {
      console.log(returnPlaylists(libraryPlaylists[currentPlaylist]));
    }
  }
};

//function that prints all tracks
var printAllTracks = function () {
    var libraryTracks =  library.tracks;
    for (var currentTrack in libraryTracks) {
    if(libraryTracks.hasOwnProperty(currentTrack)) {
      console.log(returnTracks(libraryTracks[currentTrack]));
    }
  }
}

//function that prints a list of tracks for a given playlist
var printPlaylist = function (playlistId) {
  console.log(returnPlaylists(library.playlists[playlistId]));
  var tracks = library.playlists[playlistId].tracks;
  for (i = 0; i < tracks.length; i++) {
     console.log(returnTracks(library.tracks[tracks[i]]));
  }
}

//function that adds an existing track to an existing playlist
var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
}

//function that adds a unique new track to the library
var addTrack = function (name, artist, album) {
  // we need create an id
  var id = "t" + uid();
  library.tracks[id] = {id: id, name: name, artist: artist, album: album};
}

//function that adds a playlist to the library
var addPlaylist = function (name) {
  var id = "p" + uid();
  library.playlists[id] = {id: id, name: name, tracks: []};
}


//PRIVATE FUNCTIONS - SHOULD NOT BE EXPORTED

//function that returns a line with informations about the given play list, in the following format:
//ID: name of play list - numberOfTracks tracks
//example: "p01: Coding Music - 2 tracks"
function returnPlaylists(currentPlaylist) {
    var playlistId = currentPlaylist.id;
    //console.log(playlistId);
    var playlistName = currentPlaylist.name;
   // console.log(playlistName);
    var numberOfTracks = currentPlaylist.tracks.length;
    return (playlistId + ": " + playlistName + " - " + numberOfTracks+ " tracks" );
}

//function that returns a line with informations about the given track, in the following format:
//ID: name of track by name of artist (name of album)
//example: "t02: Model View Controller by James Dempsey (WWDC 2003)""
function returnTracks(currentTrack) {
    var trackId = currentTrack.id;
    var trackName = currentTrack.name;
    var trackArtist = currentTrack.artist;
    var trackAlbum = currentTrack.album;
   return (trackId + ": " + trackName + " by " + trackArtist + " (" + trackAlbum +")" );
}

//function that generates a unique id to be used for addTrack and addPlaylist
var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


//exporting functions:
module.exports = {
  printAllPlaylists: printAllPlaylists,
  printAllTracks: printAllTracks,
  printPlaylist: printPlaylist,
  addTrackToPlaylist: addTrackToPlaylist,
  addTrack: addTrack,
  addPlaylist: addPlaylist,
}




