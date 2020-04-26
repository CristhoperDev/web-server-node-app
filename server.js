const express = require('express')
const app = express()

//Express HBS Engine
app.set('view engine', 'hbs');

app.use(express.static( __dirname + '/public' ));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Cristhoper',
        year: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log(`Listen Port: 3000`);
});
