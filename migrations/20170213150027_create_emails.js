exports.up = function(knex, Promise) {
  return knex.schema.createTable('emails', function(table){
    table.increments();
    table.integer('user_id').references('users.id');
    table.string('email');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('emails');
};
