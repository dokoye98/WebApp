const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const{restart} = require('nodemon')
const app = express();
app.use(cors());
app.use(express.json()); // This is typically enough for parsing JSON payloads

app.post('/compiler', async (req, res) => {
    const { msg } = req.body;
    console.log("Received message:", msg);
    res.status(200).json({ message: "Data received", data: msg });
});

app.listen(3001, () => {
    console.log("Server is running on port 3000");
});
