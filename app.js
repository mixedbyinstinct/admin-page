const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

let app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json(), urlencodedParser);
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

const url = 'mongodb://localhost:27018/personal-site-db';
const PORT = 4040;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get("/songs", (req, res) => {

    MongoClient.connect(url, async function(err, db) {
        if(err) console.log(err);
        let dbo = db.db('personal-site-db');
        let songs = await dbo.collection("songs").find().toArray();
        res.send(songs);
        db.close();
    })

})

app.get("/users", (req, res) => {

    MongoClient.connect(url, async function(err, db) {
        if(err) console.log(err);
        let dbo = db.db('personal-site-db');
        let users = await dbo.collection("users").find().toArray();
        res.send(users);
        db.close();
    })

})
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}).then((res) => {
    app.listen(PORT, () => console.log('server started at port ' + PORT));
}).catch(err => console.log(err));
