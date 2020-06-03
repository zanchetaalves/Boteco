
exports.up = function(knex) {
    return knex.schema.createTable('Marca', function (table) {
        table.increments();
        table.string('Descricao', 200).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Marca');  
};
