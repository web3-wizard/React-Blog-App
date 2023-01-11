// Import express
let express = require("express");
// Import Body parser
let bodyParser = require("body-parser");
// Import Mongoose
let mongoose = require("mongoose");
require("dotenv").config();
// Import routes
let apiRoutes = require("./routes/api-routes");

// Initialize the app
let app = express();

// ---------------------- Middileware configurations -----------------
// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// --------------------- MongoDB Connections ---------------------
// Connect to Mongoose and set connection variable
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true });
var db = mongoose.connection;
// Added check for DB connection
if (!db) console.log("Error connecting db");
else console.log("Db connected successfully");

// ----------------- server configuration -----------------------
// Setup server port
var port = process.env.PORT || 8080;

// Use Api routes in the App
app.use("/api", apiRoutes);

// Send message for default URL
app.get("/", (req, res) =>
  res.send("Hello Dev People ~ from Express \n Created by ~ Rahul Dey")
);

// Launch app to listen to specified port
app.listen(port, function () {
  console.log("Running RestHub on port " + port);
});
