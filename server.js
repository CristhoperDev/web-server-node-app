const express = require('express')
const app = express()

app.get('/', (req, res) => {
    //res.send('Hello World');

    let out = {
        name: 'Cristhoper',
        age: 23,
        url: req.url
    };

    res.send(out);
});

app.listen(3000, () => {
    console.log(`Listen Port: 3000`);
});
