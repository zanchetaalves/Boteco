
exports.up = function(knex) {
    return knex.schema.createTable('Produto', function (table) {
        table.increments();
        table.integer('Id_Categoria');
        table.integer('Id_Marca');
        table.string('Descricao', 200).notNullable();
        table.decimal('Vl_Custo');
        table.decimal('Vl_Venda').notNullable();

        table.foreign('Id_Categoria').references('id').inTable('Categoria');
        table.foreign('Id_Marca').references('id').inTable('Marca');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Produto');  
};
