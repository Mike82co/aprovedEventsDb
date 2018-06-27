exports.up = function (knex, Promise) {
    return knex.schema.createTable('event', table => {
        table.increments();
        table.text('date');
        table.text('venue');
        table.text('artist');
        table.text('image');
        table.text('description');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('event')
};