const express = require('express');
const {findResourceByAuthorName, getIndexById, getElementById} = require('./utils');

const musicRouter = express.Router();

music = [
    {
        title: "I will never be the same again",
        author: "Hill",
        id: 2
    },

    {
        title: "The Storm is over now",
        author: "Kirk Frankline",
        id: 2
    }
]

musicRouter.get("/", (req, res, next) => {
    res.send(music);
});

musicRouter.get("/:author", (req, res, next) => {
    const musicByAuthor = findResourceByAuthorName(music, req.params.author);
    if (musicByAuthor.length) {
        res.status(200).send(musicByAuthor);
    }

    else {
        res.status(404).send();
    }
});

musicRouter.put("/:id", (req, res, next) => {
    console.log(req.params.id)
    const index = getIndexById(music, req.params.id);
    console.log(index)

    if (index !== -1) {
        music[index] = req.query;
        res.status(200).send(music[index])
    }

    else{
        res.status(404).send();
    }
    
})

musicRouter.post("/", (req, res, next) => {
    const element = getElementById(music, req.query.id);
    console.log(element)
    if (element) {
        res.status(409).send("An element with that Id already exists");
        return;
    }

    if (req.query.id && req.query.author && req.query.title) {
        music.push(req.query);
        res.status(200).send(req.query);
    }
    else {
        res.status(400).send("Important information missing in your request!");
    }
})

musicRouter.delete("/:id", (req, res, next) => {
    const del = getElementById(music, req.params.id);
    if (del) {
        music.filter((element) => {
            return element.id !== del.id;
        });
        res.status(204).send();
    }

    else {
        res.status(404).send("Not Found");
    }
})

module.exports = musicRouter