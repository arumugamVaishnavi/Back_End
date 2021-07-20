//libraries
const express = require ('express'); 
const app = express();
const morgan  = require('morgan')
const cors    = require('cors')
const helmet  = require('helmet')
// const { MongoClient } = require('mongodb');

// JSfiles
const productRoute = require('./routes/usersRoutes')
require ('dotenv').config({path:'./config/.env'})
require('./config/db');

//routes
//var usersSchema = require ('../models/usersSchema');
// app.use('/api/userRatings', userRoutes);

//Actions
app.use(morgan('dev'))
app.use(cors())
app.use(helmet())
app.use(express.json());
app.listen(process.env.PORT, ()=>{
    console.log('bing successfully');
})
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).send('<h1>It works !</h1>')
})
//app.use('/users', usersRoute)