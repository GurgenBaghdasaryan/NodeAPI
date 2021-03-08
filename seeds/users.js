
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Gugo', last_name: 'Baghdasaryan'},
        {first_name: 'Edo', last_name: 'Baghdasaryan'},
      ]);
    });
};
