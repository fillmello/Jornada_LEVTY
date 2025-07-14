const express = require('express');
const path = require('path');
const app = express();
const morgan = require ('morgan');
const port = 4000;


app.use(morgan('dev')); //ja inclui o next()

app.use('/site', express.static('public'));

app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.use((req,res) => {
    res.status (404).send('404 Not Found');   
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

