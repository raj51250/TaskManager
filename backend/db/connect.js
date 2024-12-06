const mongoose = require("mongoose");

//connect to the database
// mongoose.connect("mongodb+srv://azad:azad@cluster0.09wfibu.mongodb.net/akash?retryWrites=true&w=majority&appName=Cluster0");

mongoose.connect("mongodb://localhost:27017/taskmanager");

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on("error", function (err) {
  console.log(err.message);
});

//up and running then print the message
db.once("open", function () {
  console.log("Successfully connected to the database");
});
