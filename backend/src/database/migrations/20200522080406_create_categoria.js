
exports.up = function(knex) {
    return knex.schema.createTable('Categoria', function (table) {
        table.increments();
        table.string('Descricao', 200).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Categoria');  
};
