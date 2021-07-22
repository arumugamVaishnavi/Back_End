//libraries
const express = require ('express'); 
const app = express();
const morgan  = require('morgan')
const cors    = require('cors')
const helmet  = require('helmet')
// const { MongoClient } = require('mongodb');

// JSfiles


const bodyParser = require('body-parser');
require ('dotenv').config({path:'./config/.env'})
require('./config/db');

const usersRoutes = require('./routes/usersRoutes')
const statusRoutes = require('./routes/statusRoutes')
const rateRoutes = require('./routes/rateRoutes')
const payementRoutes = require('./routes/payementRoutes')
const itemsRoutes = require('./routes/itemsRoutes')
const historyStatusRoutes = require('./routes/historyStatusRoutes')
const headOrderRoutes = require('./routes/headOrderRoutes')
const categoryRoutes = require('./routes/categoryRoutes')

//routes
app.use('/users', usersRoutes)
app.use('/status',statusRoutes)
app.use('/rate',rateRoutes)
app.use('/rate', rateRoutes)
app.use('/headOrder', headOrderRoutes)
app.use('/category', categoryRoutes)
app.use('/historyStatus', historyStatusRoutes)
app.use('/payement', payementRoutes)
app.use('/items', itemsRoutes)

//Actions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'))
app.use(cors())
app.use(helmet())
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).send('<h1>It works !</h1>')
})
app.get('/', (req, res) => {
    res.status(200).send('<h1>It works !</h1>')
})


app.listen(process.env.PORT, ()=>{
    console.log('bing successfully');
})