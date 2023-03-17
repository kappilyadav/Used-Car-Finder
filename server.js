const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const csv = require('csvtojson');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


function getData() {
  let data;

  const csvFilePath = 'assets/dataset.csv';
  csv().fromFile(csvFilePath).then((jsonObj) => {
    data = jsonObj;
  });

  return data;
}


app.get('/api/data', (req, res) => {
  const data = { key: process.env.MAPSAPIKEY };
  res.json(data);

});



app.get("/", function(req, res) {
  res.send("working!!");
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


