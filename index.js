const express = require("express");
const bodyParser = require("body-parser");
const userRouting = require("./usersRoutes");
const ordersRouting = require("./ordersRoutes");
const ordersByUSersRouting = require("./ordersByUsers");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.headers);
  next();
});

app.use("/users", userRouting);
app.use("/orders", ordersRouting);
app.use("/ordersByUsers", ordersByUSersRouting);

app.listen(3000, () => console.log("Server started"));
