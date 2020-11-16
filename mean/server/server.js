const express = require("express");

const app = express();

const port = process.env.PORT || 9090;
const server = require("http").Server(app);

const MongoClient = require('mongodb').MongoClient
const dbName ='fakeid'
let db = ''
let userCollection;
let url = process.env.MONGO_DB || 'mongodb://localhost:27017'

// Connecting to server
    MongoClient.connect(url, { useUnifiedTopology: true } ,(err, client) => {
    if(err){
        console.log('error'); 
        return;
    }
    console.log('connected to mongo')
    db = client.db(dbName)
    userCollection = db.collection("users");
})

process.on("uncaughtException", (err, data) => {
    if(err){
        console.log("critical error, yet system keeps running")
        console.log(data)
        return;
    }
})

app.get('/test', (req, res) => {
    return res.send({message: 'hello MEAn'})
})

server.listen(port, () => console.log(`Listening happily on port ${port}`));


