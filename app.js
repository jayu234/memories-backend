const express = require("express");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const memories = require('./routes/memoryRoute');

app.use('/api/v1/', memories);

module.exports = app;