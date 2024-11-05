const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const entityMachine = require("./services/entityMachine");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use a different port for the Express server
const PORT_A = process.env.PORT_A || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the Entity Analysis API");
});

app.post("/", (req, res) => {
  entityMachine(req.body.urlA, req.body.urlB)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(500).send({ error: "Internal Server Error" }));
});

app.listen(PORT_A, () =>
  console.log(`Example app listening at http://localhost:${PORT_A}`)
);
