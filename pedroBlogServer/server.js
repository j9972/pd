const express = require("express");
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("hi");
})

app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
});


