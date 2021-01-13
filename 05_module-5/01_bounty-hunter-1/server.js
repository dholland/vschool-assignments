const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const fs = require('fs');

const { createPageRequests } = require('./getBounties')
const bounties = require('./data/bounties.json')

//middlewear
app.use(express.json())

app.get('/create-bounties', (req, res) => {
    createPageRequests(req.query.pages).then(data => {
        console.log("Response", data.length)
        
        res.send(`${data.length} Bounties Created`)
    })
})

app.get("/bounties", (req, res) => {
    res.json(bounties);
});

app.get("/bounty/:id", (req, res) => {
    console.log("params", req.params.id)
    res.json(bounties.filter(bounty => bounty.id === Number(req.params.id)));
});


app.post("/bounties", (req, res) => {
    
    
    res.send("POST on /bounty endpoint");

});



app.put("/bounty/:bountyId", (req, res) => {
    res.send(`PUT on /bounty/${req.params.bountyId} endpoint`);
});

app.delete("/bounty/:id", (req, res) => {
    
    res.send(`DELETE on /bounty/${req.params.bountyId} endpoint`);
});

// Run the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});