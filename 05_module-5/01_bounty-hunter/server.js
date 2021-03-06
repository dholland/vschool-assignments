const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const fs = require('fs');
const { v4: uuidv4 } = require('uuid')

const { createPageRequests } = require('./getBounties')
const bounties = require('./data/bounties.json')

console.log("# of Bounties", bounties.length);


//middlewear
app.use(express.json())

//Routes
app.get('/create-bounties', (req, res) => {
    createPageRequests(req.query.pages)
    .then(data => {
        console.log("Response", data.length)

        res.send(`${data.length} Bounties Created`)
    })
})

app.get("/bounties", (req, res) => {
    console.log(bounties.length)
    res.send(bounties);
});

app.get("/bounty/:id", (req, res) => {
    const selected = bounties.filter(bounty => bounty.id === req.params.id)
    // console.log("params", req.params.id)
    console.log(selected)

    if (selected.length === 0) {
        res.send("Bounty Does Not Exist")
    } else {
        res.send(selected)
    }
});


app.post("/bounty", (req, res) => {
    // console.log(req.body)

    let bounty = {
        name: req.body.name,
        id: uuidv4(),
        status: req.body.status,
        gender: req.body.gender,
        type: req.body.type,
        image: req.body.image,
        location: req.body.location,
    }
    // console.log(bounty)
    const newBounties = [...bounties, bounty]

    // console.log(newBounties.length)
    fs.writeFileSync('./data/bounties.json', JSON.stringify(newBounties), (err) => {
        if (err) throw err;
    })

    res.send(`Bounty Added ${JSON.stringify(bounty)}`);
});



app.put("/bounty/:id", (req, res) => {
    const ID = req.params.id
    const bountyIndex = bounties.findIndex(bounty => bounty.id === req.params.id)
    Object.assign(bounties[bountyIndex], req.body)

    fs.writeFileSync('./data/bounties.json', JSON.stringify(bounties), (err) => {
        if (err) throw err;
    })
    //dasd
    res.send(`PUT on endpoint `);
});

app.delete("/bounty/:id", (req, res) => {
    const newBounties = bounties.filter(bounty => bounty.id !== req.params.id)
    const deletedBounty = bounties.filter(bounty => bounty.id === req.params.id)

    fs.writeFileSync('./data/bounties.json', JSON.stringify(newBounties), (err) => {
        if (err) throw err;
    })

    console.log(bounties.length)
    // res.send(`DELETE of Bounty ID:${req.params.id} successful. ${bounties.length} Remain`);
    res.send(`Deleted ${deletedBounty[0].name} - id: ${req.params.id}`);
});

// Run the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});