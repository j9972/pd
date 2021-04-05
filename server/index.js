const bodyParser = require("body-parser");
const express = require("express");
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '', // or 'password'
    database: 'CRUDDatabase',
});

app.post('/create', (req,res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    // value에 실제 값을 입력하지 말기 이유는 안전하지 않기 때문이다
    db.query('INSERT INTO employee (name, age, country, position, wage) VALUES (?,?,?,?,?)',
    [name,age,country,position,wage],
    (err,result) => {
        if(err) {
            console.log(err);
        } else {
            res.send("value insert");
        }
    }); 
});

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));


app.listen(3003, () => {
    console.log("running on 3003");
});