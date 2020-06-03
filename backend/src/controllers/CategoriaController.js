const connection = require('../database/connection');

module.exports = {
    async Listar(request, response) {
        const categorias = await connection('Categoria').select('*');
        return response.json(categorias);
    },

    async Inserir (request, response) {
        const { Descricao } = request.body;
    
        await connection('Categoria').insert({
            Descricao
        });
    
        return response.json(Descricao);
    },

    async Alterar (request, response) {
        const { id } = request.params;
        const { Descricao } = request.body;

        await connection('Categoria').where('id', id).update({
            Descricao
        });
    
        return response.json(Descricao);
    },

    async Excluir (request, response) {
        const { id } = request.params;

        await connection('Categoria').where('id', id).delete();
    
        return response.json("Categoria excluída com sucesso");
    }
};