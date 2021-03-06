const express = require("express");

//replace fruit with desired route

app.get("/fruit", (req, res) => {
    res.send("GET on /fruit endpoint");
});

app.post("/fruit", (req, res) => {
    res.send("POST on /fruit endpoint");
});

app.get("/fruit/:fruitId", (req, res) => {
    res.send(`GET on /fruit/${req.params.fruitId} endpoint`);
});

app.put("/fruit/:fruitId", (req, res) => {
    res.send(`PUT on /fruit/${req.params.fruitId} endpoint`);
});

app.delete("/fruit/:fruitId", (req, res) => {
    res.send(`DELETE on /fruit/${req.params.fruitId} endpoint`);
});