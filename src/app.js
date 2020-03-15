const express = require('express');

const app = express();

app.use(express.json());

const projects = [];

app.get('/projects', (req, res) => {
    return res.json(projects);
});

app.post('/projects', (req, res) => {
    const { title, owner } = req.body;

    projects = [...projects, {title, owner}];

    return res.json(projects)
})

module.exports = app;
