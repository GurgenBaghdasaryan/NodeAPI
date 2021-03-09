exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("orders")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("orders").insert([
        { user_id: 1, name: "Order 1", price: 200 },
        { user_id: 2, name: "Order 1", price: 200 },
      ]);
    });
};
