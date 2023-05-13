const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

// GET API endpoint
app.get('/posts', async (req, res) => {
    if(!req.query.id)
    {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            res.json(response.data);
        } catch (error) {
            res.status(500).send(error.message);
        }
     }
     else{
    try {
        let id = req.query.id;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

});

// PUT API endpoint
app.put('/posts', async (req, res) => {
    try {
        let id = req.query.id;
const updatedData = req.body;
const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

response.data["console"] = updatedData.console;
res.json(response.data);
} catch (error) {
    res.status(500).send(error.message);
}
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
