
exports.up = function(knex) {
    return knex.schema.createTable('Usuario', function (table) {
        table.increments();
        table.string('Nome', 200).notNullable();
        table.string('Sobrenome', 200).notNullable();
        table.string('Login', 200).notNullable();
        table.string('Senha', 200).notNullable();
        table.boolean('Ativo').notNullable().defaultTo(1);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Usuario');  
};
