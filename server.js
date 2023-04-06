const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./CookRouter');
const Recipe= require('./CookModel');
const cors = require('cors');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('dotenv').config();
mongoose.set('strictQuery', false);

const PORT=7000 || process.env.port;
app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => {console.log('We were connected to Mongo')})
.catch((err) =>console.log(err))

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/form.html')
})

app.post('/', (req, res) =>{
    let newRecipe = new Recipe({
        name: req.body.name,
        category: req.body.category,
        recipe: req.body.recipe
    })
    newRecipe.save();
//     res.sendFile(__dirname + '/answer.html')
    res.send(newRecipe)
})

app.use(routes);
app.listen(PORT, ()=>{
    console.log (`I am listening on port ${PORT}`)
})
