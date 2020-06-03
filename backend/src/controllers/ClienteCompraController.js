const connection = require('../database/connection');

module.exports = {
    async Listar(request, response) {
        const categorias = await connection('Cliente_Compra')
            .innerJoin('Cliente', 'Cliente.id', 'Cliente_Compra.Id_Cliente')
            .select('Cliente.Nome',  'Cliente.Sobrenome', 'Dt_Compra');
        return response.json(categorias);
    },

    async Inserir (request, response) {
        const { Id_Cliente,  Dt_Compra} = request.body;
    
        await connection('Cliente_Compra').insert({
            Id_Cliente,
            Dt_Compra
        });
    
        return response.json('Compra inserida com sucesso.');
    },

    async Excluir (request, response) {
        const { id } = request.params;

        await connection('Cliente_Compra').where('id', id).delete();
    
        return response.json("Compra excluída com sucesso.");
    }
};