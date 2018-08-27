
exports.up = function(knex, Promise) {
    return knex.schema.createTable("book_author", table => {
        table.increments("id");
        table.integer("book_id");
        table.integer("author_id");

    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("book_author");
};