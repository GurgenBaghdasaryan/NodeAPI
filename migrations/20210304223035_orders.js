
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('orders', function(table) {
        table.increments();
        table.integer('user_id');
        table.foreign('user_id').references('users.id');
        table.string('name');
        table.integer('price');
    });
};

exports.down = function(knex) {
  
};
