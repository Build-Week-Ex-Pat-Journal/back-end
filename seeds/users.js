
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'josh', password: '12345'},
        {id: 2, username: 'mike', password: '12345'},
        {id: 3, username: 'will', password: '12345'}
      ]);
    });
};
