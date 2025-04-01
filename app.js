const express = require('express'); 
//require("dotenv").config();
//myMode = require("./scripts/myMode");
//myMode = require("./scripts/myMode.js")
//bodyParser = require("body-parser");

//const saveDropbox = myMode.saveDropbox;
//const json_to_csv = myMode.json_to_csv;

const app = express();

//static middleware
  //old version?
//app.use("jspsych", express.static(__dirname + "/jspsych"));
//app.use("scripts", express.static(__dirname + "/scripts"));
//app.use(express.static(__dirname + "/public"));
const path = require('path')

//DO NOT PUT PRIVATE FILES INSIDE YOUR STATIC FOLDER.

app.use('/audioStimuli', express.static(path.join(__dirname, 'audioStimuli')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/jspsych', express.static(path.join(__dirname, 'jspsych')));

//app.use(bodyParser.json());

// fixing 413 request entity too large
//app.use(express.json({limit: "10mb", extended: true}));
//app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}));

app.set("views", __dirname + "/public/views");
//app.set
//app.engine("html", require("ejs").renderFile);
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

//routes
app.get("/", (req, res) => {
    res.render("testingJsPsych.html");
});

/*app.get("/finish", (req, res) => {
  res.render("finish.html");
})*/

/*app.post("/experiment-data", (req, res) => {
  //retrive data
  //convert json to csv
  DATA_CSV =  json_to_csv(req.body)
  
  //get filename
  const rows = DATA_CSV.split("\n");
  ID_DATE_index = rows[0].split(",").indexOf('"ID_DATE"');
  ID_DATE = rows[1].split(",")[ID_DATE_index];
  ID_DATE = ID_DATE.replace(/"/g, "");
  filename = ID_DATE + ".csv";
  saveDropbox(DATA_CSV, filename);
  res.send();
  //save data

});*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    //console.log(process.env);
});