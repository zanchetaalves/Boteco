const connection = require('../database/connection');

module.exports = {
    async Listar(request, response) {
        const marcas = await connection('Marca').select('*');
        return response.json(marcas);
    },

    async Inserir (request, response) {
        const { Descricao } = request.body;
    
        await connection('Marca').insert({
            Descricao
        });
    
        return response.json(Descricao);
    },

    async Alterar (request, response) {
        const { id } = request.params;
        const { Descricao } = request.body;

        await connection('Marca').where('id', id).update({
            Descricao
        });
    
        return response.json(Descricao);
    },

    async Excluir (request, response) {
        const { id } = request.params;

        await connection('Marca').where('id', id).delete();
    
        return response.json("Marca excluída com sucesso");
    }
};