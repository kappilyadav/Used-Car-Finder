const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const csv = require('csvtojson');
const cors = require('cors');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// function getData() {
//   const jsonArray = csv().fromFile('assets/dataset.csv');
//   return jsonArray
// }


app.get('/api/data', async (req, res) => {
  const jsonArray = await csv().fromFile('assets/dataset.csv');

  const data = { key: process.env.MAPSAPIKEY , array: jsonArray};

  res.json(data);

});



app.get("/", function(req, res) {
  res.send("working!!");
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


