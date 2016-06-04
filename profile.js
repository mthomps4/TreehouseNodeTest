//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var https = require("https");


//Print out Message
function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

//Print out error messages
function errorMessage(error){
  console.error(error.message);

}

function get(username){
//Connect to the API URL (http://teamtreehouse.com/username.json)
var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response){
            var body = "";
            //Read the data
            response.on('data', function (chunk) {
              body += chunk;
            });

            response.on('end', function(){
              if(response.statusCode === 200){

                try{  // Parse the data
                var profile = JSON.parse(body);  // Print the data
                printMessage(username,profile.badges.length,profile.points.JavaScript);
                }catch(error){errorMessage(error);}//Parse Error

              }else{
                //Status Code Error
                errorMessage({message: "There was a problem getting the profile " + username + ". (" + response.statusMessage + ")"});
              }
            });//End Response.on"end"

});//End Request


//Connection Error
request.on("error", errorMessage);

}//End function get



module.exports.get = get;
