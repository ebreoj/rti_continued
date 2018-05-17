// ******************  Configuration  ******************
var express = require("express");
var app = express();
var port = 8000;
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
// *****************************************************

// *****************  Express Setting  *****************
// app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(path.join(__dirname, "/client/dist/client")));
app.set("views", path.join(__dirname, "./views"));
app.use(bodyParser.json());
// *****************************************************

// *****************  Mongoose Setting  ****************
mongoose.connect("mongodb://localhost/Restful_Task_continued");
require("./server/models/task");
mongoose.Promise = global.Promise;
// *****************************************************

// *********************  Routing  *********************
require("./server/config/routes")(app);
// *****************************************************

// ********************  Server Up  ********************
app.listen(port, function () {
    console.log("listening on port " + port);
});