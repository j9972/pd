const bodyParser = require("body-parser");
const express = require("express");
const cors = require('cors');
const app = express();
const mysql = require('mysql');

app.use(cors());
app.use(express.json());



app.use(bodyParser.urlencoded({extended:true}));

app.listen(3001, () => {
    console.log("running on 3003");
});


