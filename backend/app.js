const express = require('express')
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


// Routes import
const userRoutes = require('./api/routes/user')
const emailRoutes=require('./api/routes/sendemail')



//Mongodb connection
const db = 'mongodb+srv://iamsamir855:1gZSbfilmi9Uu7zp@softmoreassesments.mjc1dja.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db).then(() => {
    console.log('connection successful');
}).catch((err) => console.log('Error'))
mongoose.Promise = global.Promise;

//Body Parser
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



//Handeling cors error

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')  //wildcard
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Methods', 'POST', 'GET', 'PATCH', 'DELETE')
        return res.status(200).json({});
    }
    next();
})


// Routes used
app.use('/user', userRoutes)
app.use('/sendemail',emailRoutes);

//Error handeling
//if no paths matched

app.use((req, res, next) => {
    const error = new Error('No matching paths')
    error.status = 404;
    next(error);
})

// if methods not matched

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;