const express = require('express');
const app = express();
const port = 3000;
const dbConn = "mongodb+srv://KaramDev:1234@fintechdb.p3cfglt.mongodb.net/fintech_db?retryWrites=true&w=majority"
const mongoose = require('mongoose') 
const playerRouter=require('./routes/playerRoutes')
const contactRoutes=require('./routes/contactRoutes')
const Contact = require('./model/contactUs')

mongoose.connect(dbConn,{useNewUrlParser: true, useUnifiedTopology: true})
.then( result => {app.listen(3000)})
.catch(err => {console.log('Not connected',err)})

 app.set('view engine','ejs')
 app.set('views', 'views')

 app.use(express.static('public'))
 app.use(express.urlencoded({extends: true}))


app.get('/', (req,res)=>{
    res.render('index',{title:'Home'})
})

app.use(contactRoutes)

app.use(playerRouter)

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'})
})
