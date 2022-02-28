const express = require('express');
const app = express();

//Home route
app.get("/", (require, response) => {

    response.sendFile(__dirname+"/home.html")

})

//About route
app.get("/about", (require, response) => {

    response.sendFile(__dirname+"/about.html")

})

//Contact route
app.get("/contact", (require, response) => {

    response.sendFile(__dirname+"/contact.html")

})

app.listen(4040, () =>{
    console.log("Server running on port 4040")
})