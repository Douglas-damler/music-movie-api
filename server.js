const express = require('express');
const app = express();
const musicRouter = require('./music-router')
const moviesRouter = require('./movies-router');

const PORT = process.env.PORT || 4001

app.use(express.static('public'));

app.use("/music", musicRouter);
app.use("/movies", moviesRouter);

app.get('/', (req, res, next) => {
    res.send("This is the Homepage");
});


app.listen(PORT, () => {
    console.log(`Music and Movies Server listening at port ${PORT}`);
});

