const express = require("express");
const knex = require("knex");

const knexFile = require("./knexfile").development;

const db = knex(knexFile);

const router = express.Router();

router.get("/", (req, res) => {
  db("orders")
    .select()
    .then((data) => res.send(data));
});

router.post("/", (req, res) => {
  const { body } = req;
  db("orders")
    .insert({ name: body.name, price: body.price, user_id: body.user_id })
    .then((data) => res.send(201));
});

router.put("/:id", (req, res) => {
  const { params, body } = req;
  db("orders")
    .where("id", "=", `${params.id}`)
    .update({ name: body.name, price: body.price, user_id: body.user_id })
    .then((data) => res.send(204));
});

router.delete("/:id", (req, res) => {
  const { params, body } = req;
  db("orders")
    .where("id", "=", `${params.id}`)
    .delete({ name: body.name, price: body.price, user_id: body.user_id })
    .then((data) => res.send(204));
});

module.exports = router;
