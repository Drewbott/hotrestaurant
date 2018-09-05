// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// / Star Wars Characters (DATA)
// =============================================================
var reservations = [
  {
    routeName: "bobsmith",
    name: "Bob Smith",
    phone: "555-555-5555",
    email: "bob@smith.com",
    id: "Bobby S"
  }

];
var waitList = [
    {
        routeName: "caroljohnson",
        name: "Carol Johnson",
        phone: "333-333-3333",
        email: "carol@gmail.com",
        id: "CJ"

    }
];
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });
  
  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  // Displays all characters
app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });

  // Displays all characters
app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
  });

  app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    // console.log(newcharacter);
  if (reservations <= 5 && reservations > 0){
    reservations.push(newReservation);
    res.json(newReservation);
  }
  else {
      waitList.push(newReservation);
      res.json(newReservation)
  }
    
  });




  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });