const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');



const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));



const csvFilePath = 'assets/dataset.csv';
const csv = require('csvtojson');


app.get("/", function (req, res){
    res.send("working!!");



    //reads data from csv file

    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
        console.log(jsonObj[0]);
    });
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


