const express = require("express");
const knex = require("knex");

const knexFile = require("./knexfile").development;

const db = knex(knexFile);

const router = express.Router();

router.get("/", (req, res) => {
  db("users")
    .select()
    .then((data) => res.send(data));
});

router.post("/", (req, res) => {
  const { body } = req;
  db("users")
    .insert({ first_name: body.firstName, last_name: body.lastName })
    .then((data) => res.sendStatus(201));
});

router.put("/:id", (req, res) => {
  const { params, body } = req;
  db("users")
    .where("id", "=", `${params.id}`)
    .update({ first_name: body.firstName, last_name: body.lastName })
    .then(() => res.sendStatus(204));
});

router.delete("/:id", (req, res) => {
  const { params, body } = req;
  db("users")
    .where("id", "=", `${params.id}`)
    .delete({ first_name: body.firstName, last_name: body.lastName })
    .then((data) => res.sendStatus(204));
});

module.exports = router;
