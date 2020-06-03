
exports.up = function(knex) {
    return knex.schema.table('Cliente_Compra_Lancamento', function (table) {
        table.decimal('Vl_Unitario').notNullable();
        table.decimal('Vl_Total').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Cliente_Compra_Lancamento');  
};
