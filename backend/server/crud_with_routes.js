// express is used for middleware. nodejs is not fully made for web programming
// app.use is used for handling express middleware
// express is an UNOPINIONATED  web framework
const express = require('express');
const mysql = require('mysql2');
const bodyparser = require('body-parser');
const port = 3001;

const app = express();

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'MyNewPass',
    database: 'test1'
});

mysqlConnection.connect((err) => {
    if (err) {
        console.log(`Cannot connect to db : ${err}`);
    }
    else {
        console.log(`Connected to db`);
    }
});

app.get('/select', (req, res) => {
    mysqlConnection.query("SELECT * FROM student", (err, rows) => {
        if (err) {
            console.log(`Cannot query`, err);
        }
        else {
            console.log(rows);
            res.send(rows);
        }
    })
});

app.post('/insert', (req, res) => {
    mysqlConnection.query("INSERT INTO student values(3, 'koya', 'koya')", (err, rows) => {
        if (err) {
            console.log(`Cannot query`, err);
        }
        else {
            console.log(rows);
            res.send(rows);
        }
    })
});

app.post('/update', (req, res) => {
    mysqlConnection.query("UPDATE student SET lastname = 'tim' where id = 3", (err, rows) => {
        if (err) {
            console.log(`Cannot query`, err);
        }
        else {
            console.log(rows);
            res.send(rows);
        }
    })
});

app.post('/delete', (req, res) => {
    mysqlConnection.query("DELETE FROM student where id = 3", (err, rows) => {
        if (err) {
            console.log(`Cannot query`, err);
        }
        else {
            console.log(rows);
            res.send(rows);
        }
    })
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})