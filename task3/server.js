const express = require('express');
const bodyParser = require('body-parser');
const queue = require('./queue');

const PORT = 1338;

const app = express();
app.use(bodyParser.json());


app.post('/process_file', (req, res) => {
    queue.addJob(req.body);
    res.end(`Success! Your file will be processed very soon! ${JSON.stringify(req.body)}`);
});

app.listen(PORT);

console.log(`Server is running on PORT ${PORT}...`);
