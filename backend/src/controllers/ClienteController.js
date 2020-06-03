const connection = require('../database/connection');

module.exports = {
    async Listar(request, response) {
        const clientes = await connection('Cliente').select('*');
        return response.json(clientes);
    },

    async Inserir (request, response) {
        const { Cpf_Cnpj, Nome, Sobrenome, Dt_Nascimento, Telefone, Email } = request.body;
    
        await connection('Cliente').insert({
            Cpf_Cnpj, 
            Nome, 
            Sobrenome, 
            Dt_Nascimento, 
            Telefone, 
            Email
        });
    
        return response.json(Nome);
    },

    async Alterar (request, response) {
        const { id } = request.params;
        const { Cpf_Cnpj, Nome, Sobrenome, Dt_Nascimento, Telefone, Email } = request.body;

        await connection('Cliente').where('id', id).update({
            Cpf_Cnpj, 
            Nome, 
            Sobrenome, 
            Dt_Nascimento, 
            Telefone, 
            Email
        });
    
        return response.json(Nome);
    },

    async Excluir (request, response) {
        const { id } = request.params;

        await connection('Cliente').where('id', id).delete();
    
        return response.json("Cliente excluído com sucesso");
    }
};