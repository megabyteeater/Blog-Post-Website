//server.js is used only to compare with this file 
//app.js is better

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();
//DB connect 
const dbURI = "mongodb+srv://abc:test1234@cluster0.akt2l.mongodb.net/node-learn?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000)) //listen 
    .catch((err) => console.log(err));


//register view engine
app.set('view engine', 'ejs');

//listen
//app.listen(3000); moved up

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));



//routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req,res) => {
    res.render('about', { title: 'About'});
});

//Blogs routes
app.use('/blogs', blogRoutes);


//404 page
app.use((req, res) => {
    res.status(400).render('404', { title: '404Error'});
});