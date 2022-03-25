const express = require('express');
const port = 8080;

const app = express();
app.use(express.static(__dirname + './../build'));

app.listen(port, () => console.log(`Listening on ${port}`));