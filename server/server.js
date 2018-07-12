const express = require('express');
const { fetchCategories, fetchCategoryVideoList, getVideoByID } = require('./Service');

const app = express();
const port = 8080;

app.use(express.static('public')); // point to root directory of the app..

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/api/categories', async (req, res) => {
    try {
        const categories = await fetchCategories();
        res.status(200).send(categories);
    } catch (e) {
        res.status(400).send();
        console.log(e);
    }
});

app.get('/api/videos/:id', async (req, res) => {
    try {
        const result = await fetchCategoryVideoList(req.id);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send();
    }
});

app.get('/api/video/:id', async (req, res) => {
    const result = await getVideoByID(req.id);
    result.then((video) => {
        res.status(200).send(video);
    }).catch((e) => {
        res.status(400).send();
        console.log(e);
    });
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
