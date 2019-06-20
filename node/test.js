// we can run this file by typing node ./filename.js
console.log(2 +2 );

// create new file with node
// require fs(fileststem) uses node package
var fileSystem = require('fs');

// after we imported the package we can use methods that will create files on it

// writeFile accepts 3 arguments
    // location on disk - __dirname is current directory
    // content of the file
    // callback function that will run after creation of file fails/succeds
fileSystem.writeFile(__dirname + "/index.html", "<h1>Html is awesome</h1>", function(error){
    if(error){
        return console.log(error);
    } else {
        return console.log("Congrats");
    }
});


// import module for https requests
var https = require('https');

let imgUrl = "https://images.unsplash.com/photo-1560942485-b2a11cc13456?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1276&q=80";


// get accepts url and callback function saying what we want to do with that file
https.get(imgUrl, function(response){
    response.pipe(fileSystem.createWriteStream(__dirname + "/image.jpg"))
})

