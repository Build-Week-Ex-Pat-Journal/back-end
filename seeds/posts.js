
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, user_id: 1, story: 'heehee1', image: 'test1'},
        {id: 2, user_id: 2, story: 'heehee2', image: 'test2'},
        {id: 3, user_id: 3, story: 'heehee3', image: 'test3'}
      ]);
    });
};
