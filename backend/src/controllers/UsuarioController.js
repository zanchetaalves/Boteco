const connection = require('../database/connection');

module.exports = {
    async Listar(request, response) {
        const usuarios = await connection('Usuario').select('*, ada');
        return response.json(usuarios);
    },

    async Inserir (request, response) {
        const { Nome, Sobrenome, Login, Senha } = request.body;
    
        await connection('Usuario').insert({
            Nome,
            Sobrenome,
            Login,
            Senha
        });
    
        return response.json("Usuário incluido com sucesso");
    },

    async Alterar (request, response) {
        const { id } = request.params;
        const { Nome, Sobrenome, Login, Senha } = request.body;

        await connection('Usuario').where('id', id).update({
            Nome,
            Sobrenome,
            Login,
            Senha
        });
    
        return response.json("Usuário alterado com sucesso");
    },

    async Excluir (request, response) {
        const { id } = request.params;

        await connection('Usuario').where('id', id).delete();
    
        return response.json("Usuário excluído com sucesso");
    }
};