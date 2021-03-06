const express = require("express");
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require("body-parser");
const db = require("./config/db");

const app = express();
const PORT = 3004;

app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());
app.use(express.json());

app.get('/api/get', (req,res) => {
    
    db.query("SELECT * FROM posts",
    (err,result) => {
        if(err) {
            console.log(err, 'err');
        }
        //res.send(result, 'success'); -> 이러면 code: 'ERR_HTTP_INVALIDE_STATUS_CODE" 에러뜸, + nodemon app crashing뜸.
        const asult = {'result' : result}
        res.status(200).send(JSON.parse(JSON.stringify(asult)));
        console.log(result, '0_success');
    });
});

app.get('/api/getFromId/:id', (req,res) => {
    
    const id = req.params.id;
    db.query("SELECT * FROM posts WHERE id = ?", 
    id,
    (err,result) => {
        if(err) {
            console.log(err, 'err');
        }
        const asult = {'result' : result}
        res.status(200).send(JSON.parse(JSON.stringify(asult)));
        console.log(result, '1_success');
    });
});

app.post('/api/create', (req,res) => {

    const userName = req.body.userName;
    const title = req.body.title;
    const text = req.body.text;
    

    db.query("INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",
    [title, text, userName],
    (err,result) => {
        if(err) {
            console.log(err, '2_err');
        } else {
            console.log(result, '2_success');
        }
    } );
})

app.post('/api/like/:id', (req,res) => {
    const id = req.params.id;
    db.query("UPDATE posts SET likes = likes + 1 WHERE id = ?",
    id,
    (err,result) => {
        if(err) {
            console.log(err, '3_err');
        } else {
            console.log(result, '3_success');
        }
    } );
})

app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
});


