var profile = require("./profile.js")
// profile.get("mthomps4");
var users = ["mthomps4"]

// users.forEach(function(username){
//   profile.get(username);
// });
//get method obtains the username so code was shortened below.

users.forEach(profile.get);

// entering users in console
// //slice(2) returns everything in Array at second position and beyond
// // silce (0 and 1) are the node request and http request
// var users = process.argv.slice(2); //argv is in the process return researched
// users.forEach(profile.get);//get includes getting the username

//node app.js mthomps4 otherusername
