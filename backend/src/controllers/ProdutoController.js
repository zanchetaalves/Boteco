const connection = require('../database/connection');

module.exports = {
    async Listar(request, response) {
        const produtos = await connection('Produto').select('*');
        return response.json(produtos);
    },

    async Inserir (request, response) {
        const { Id_Categoria, Id_Marca, Descricao, Vl_Custo, Vl_Venda } = request.body;
    
        await connection('Produto').insert({
            Id_Categoria,
            Id_Marca,
            Descricao,
            Vl_Custo,
            Vl_Venda
        });
    
        return response.json(Descricao);
    },

    async Alterar (request, response) {
        const { id } = request.params;
        const { Id_Categoria, Id_Marca, Descricao, Vl_Custo, Vl_Venda } = request.body;

        await connection('Produto').where('id', id).update({
            Id_Categoria,
            Id_Marca,
            Descricao,
            Vl_Custo,
            Vl_Venda
        });
    
        return response.json(Descricao);
    },

    async Excluir (request, response) {
        const { id } = request.params;

        await connection('Produto').where('id', id).delete();
    
        return response.json("Produto excluído com sucesso");
    }
};