const express = require('express');
const cors = require('cors');
const port = 3001;

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/regform', (req, res) => {
    let data = req.body;
    console.log('RegForm data', data);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.send('<h1>Form data sent successfully</h1>');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})