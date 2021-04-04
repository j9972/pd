const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "CRUDDatabase",
});

// app.get("/", (req,res) => {
//     const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('inception', 'good movie');"
//     db.query(sqlInsert, (err, result) => {
//         console.log(result);
//         res.send('success');
//     });
// });

app.use(bodyParser.urlencoded({extended:true}));

app.post("/api/insert", (req,res) => {

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('inception', 'good movie');"
    db.query(sqlInsert, [movieName, movieReview], (err,result) => {
        console.log(result)
    })
})

app.listen(3003, () => {
    console.log("running on 3003");
});