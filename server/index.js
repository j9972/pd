const express = require("express");
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "CRUDDatabase",
});

app.get("/", (req,res) => {
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('inception', 'good movie');"
    db.query(sqlInsert, (err, result) => {
        console.log(result);
        res.send('success');
    });
});

app.listen(3003, () => {
    console.log("running on 3003");
});