const bodyParser = require("body-parser");
const express = require("express");
const cors = require('cors');
const app = express();
const mysql = require('mysql');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password', // or ''
    database: 'CRUDDatabase',
});

// const db = {
//     user: 'pedro',
//     host: 'localhost',
//     password: 'password', // or ''
//     database: 'CRUDDatabase',
// }

const handleDisconnect = () => {
    const connection = mysql.createConnection(db);

    connection.connect((err) => {
        if(err) {
            console.log('error whenn connection to db:', err);
            setTimeout(handleDisconnect, 2000);
        }
    });

    connection.on('error', (err) => {
        console.log('db error', err);
        if(err.code === 'PROTOCO_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    })
}

handleDisconnect();


db.query('SELECT * FROM CRUDDatabase', (error,results, fields) => {
    if(error) {
        console.log(error);
    }
    console.log(results, 'shits');
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

//app.use(bodyParser.urlencoded({extended:true}));

app.listen(3003, () => {
    console.log("running on 3003");
});


