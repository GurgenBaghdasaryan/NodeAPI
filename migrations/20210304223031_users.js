
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('users', function(table) {
        table.increments();
        table.string('first_name');
        table.string('last_name');
    });
};

exports.down = function(knex) {
  
};
