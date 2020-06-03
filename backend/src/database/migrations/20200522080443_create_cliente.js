
exports.up = function(knex) {
    return knex.schema.createTable('Cliente', function (table) {
        table.increments();
        table.string('Cpf_Cnpj', 14);
        table.string('Nome', 50).notNullable();
        table.string('Sobrenome', 50).notNullable();
        table.date('Dt_Nascimento').notNullable();
        table.string('Telefone', 9);
        table.string('Email', 50).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Cliente');  
};
