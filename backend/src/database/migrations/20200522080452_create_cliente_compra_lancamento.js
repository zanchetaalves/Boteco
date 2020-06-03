
exports.up = function(knex) {
    return knex.schema.createTable('Cliente_Compra_Lancamento', function (table) {
        table.increments();
        table.integer('Id_Cliente').notNullable();
        table.integer('Id_Cliente_Compra').notNullable();
        table.integer('Id_Produto').notNullable();
        table.integer('Quantidade').notNullable();
        table.decimal('Vl_Desconto');
        table.decimal('Perc_Desconto');

        table.foreign('Id_Cliente').references('id').inTable('Cliente');
        table.foreign('Id_Cliente_Compra').references('id').inTable('Cliente_Compra');
        table.foreign('Id_Produto').references('id').inTable('Produto');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Cliente_Compra_Lancamento');  
};
