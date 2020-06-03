
exports.up = function(knex) {
    return knex.schema.createTable('Cliente_Compra', function (table) {
        table.increments();
        table.integer('Id_Cliente').notNullable();
        table.date('Dt_Compra').notNullable();

        table.foreign('Id_Cliente').references('id').inTable('Cliente');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Cliente_Compra');  
};
