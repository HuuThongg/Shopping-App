const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const mongoose = require('mongoose')

const Product = require('./models/product')

const homeRoutes = require('./routes/home')
const productsRoutes = require('./routes/products')
const aboutRoutes = require('./routes/about')


const app = express()
app.set('view engine', 'ejs')
app.set('views','views')

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(homeRoutes)
app.use('/products', productsRoutes)
app.use('/about', aboutRoutes)

const MONGODB_URI = 'mongodb+srv://thong0506:thong0506@cluster0.nrohf5r.mongodb.net/shopping?retryWrites=true&w=majority';



mongoose.connect(MONGODB_URI)
.then(result =>{

    

    app.listen(3002)
})
.catch(err => console.log(err))