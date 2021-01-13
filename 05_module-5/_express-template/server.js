const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json())

// app.use("/fruit", require("./routes/fruitRoutes"));
// app.use("/vegetable", require("./routes/vegetableRoutes"));


app.get('/', (req, res) => {
  const obj = {name: "danny", age: 37}
    res.json(obj)
})

// Routes for 'fruits'
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

// Run the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});