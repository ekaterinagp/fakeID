const express = require("express");

const app = express();

const cors = require('cors')

const allowedOrigins = ['http://localhost:4200','https://fakeid-mern.herokuapp.com'];

// app.use(cors())
app.use(cors({ 
  credentials:true,
  origin: function(origin, callback){
    // allow requests with no origin  (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const port = process.env.PORT || 9090;
const server = require("http").Server(app);

const MongoClient = require('mongodb').MongoClient
const dbName ='fakeid'
global.db = ''
global.userCollection;
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

const userRoute = require('./userRoutes')
app.use(userRoute) 



process.on("uncaughtException", (err, data) => {
    if(err){
        console.log("critical error, yet system keeps running")
        console.log(data)
        return;
    }
})


server.listen(port, (err) => {
    if(err){console.log("server couldn't connect");return;}
    console.log(`Listening happily on port ${port}`)
})
