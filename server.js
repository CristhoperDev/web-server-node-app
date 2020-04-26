const express = require('express')
const app = express()

app.use(express.static( __dirname + '/public' ));

const hbs = require('hbs');
require('./hbs/helpers');
//Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        name: 'cristhoper alvarez',
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(3000, () => {
    console.log(`Listen Port: 3000`);
});
