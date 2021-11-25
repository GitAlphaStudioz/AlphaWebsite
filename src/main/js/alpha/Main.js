const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("Main.ejs");
});

app.get("/discord", (req, res) => {
    res.render("Discord.ejs");
})

app.use((req, res) => {
    res.render("404.ejs");
})

console.log("Test");

app.listen(3000);