const express = require("express");
const knex = require("knex");

const knexFile = require("./knexfile").development;

const db = knex(knexFile);

const router = express.Router();

router.get("/", (req, res) => {
  db("orders")
    .leftJoin("users", "users.id", "orders.user_id")
    .select("orders.id", "orders.name", "users.first_name")
    .then((data) => res.send(data));
});

router.post("/", (req, res) => {
  const { body } = req;
  db("users")
    .insert({
      id: body.id,
      first_name: body.firstName,
      last_name: body.lastName,
    })
    .then((data) => res.send(201));
});

module.exports = router;
