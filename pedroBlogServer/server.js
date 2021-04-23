const express = require("express");
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require("body-parser");
const db = require("./config/db");

const app = express();
const PORT = 3004;

app.use(cors());
app.use(express.json());

app.get("/api/get", (req,res) => {
    db.query("SELECT * FROM posts",
    (err,result) => {
        if(err) {
            console.log(err, 'err');
        } 
        res.send(result, 'success');
    } );
}) 

app.post('/api/create', (req,res) => {

    const userName = req.body.userName;
    const title = req.body.title;
    const text = req.body.text;

    db.query("INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",
    [title, text, userName],
    (err,result) => {
        if(err) {
            console.log(err, 'err');
        } else {
            console.log(result, 'success');
        }
    } );
})

app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
});


