const connection = require('../database/connection');

module.exports = {

    async Listar(request, response) {
        const { Id_Cliente, Id_Cliente_Compra } = request.body;

        const categorias = await connection('Cliente_Compra_Lancamento')
            .innerJoin('Produto', 'Produto.id', 'Cliente_Compra_Lancamento.Id_Produto')
            .select(['Produto.Descricao AS Produto', 'Produto.Vl_Venda AS ValorUnitario'])
            .where('Id_Cliente', Id_Cliente)
            .andWhere('Id_Cliente_Compra', Id_Cliente_Compra)
            .sum('Quantidade AS Quantidade')
            .sum('Vl_Desconto AS ValorDesconto')
            .sum('Vl_Total AS ValorTotal')
            .groupBy('Id_Cliente', 'Id_Cliente_Compra', 'Produto.Descricao', 'Produto.Vl_Venda')

        return response.json(categorias);
    },

    async ListarCompleto(request, response) {
        const { Id_Cliente, Id_Cliente_Compra } = request.body;

        const categorias = await connection('Cliente_Compra_Lancamento')
            .innerJoin('Produto', 'Produto.id', 'Cliente_Compra_Lancamento.Id_Produto')
            .where('Id_Cliente', Id_Cliente)
            .andWhere('Id_Cliente_Compra', Id_Cliente_Compra)
            .select(['Produto.Descricao AS Produto', 'Produto.Vl_Venda AS ValorUnitario', 'Quantidade', 'Vl_Desconto', 'Vl_Total']);

        return response.json(categorias);
    },
    
    async Inserir (request, response) {
        const { Id_Cliente, Id_Cliente_Compra, Id_Produto, Quantidade, Vl_Desconto, Perc_Desconto } = request.body;

        const produto = await connection('Produto').where('id', Id_Produto).first().select('*');

        await connection('Cliente_Compra_Lancamento').insert({
            Id_Cliente, 
            Id_Cliente_Compra, 
            Id_Produto, 
            Quantidade, 
            Vl_Desconto, 
            Perc_Desconto,
            Vl_Unitario : produto.Vl_Venda,
            Vl_Total : Quantidade * produto.Vl_Venda
        });

        return response.json("Lançamento realizado com sucesso.");
    },

    async Alterar (request, response) {
        const { id } = request.params;
        const { Id_Produto, Quantidade, Vl_Desconto, Perc_Desconto } = request.body;
        const valorVenda = await connection('Produto').where('id', Id_Produto).first().select('Vl_Venda');

        await connection('Cliente_Compra_Lancamento').where('id', id).update({
            Id_Produto,
            Quantidade, 
            Vl_Desconto, 
            Perc_Desconto,
            Vl_Unitario : valorVenda,
            Vl_Total : Quantidade * valorVenda
        });
    
        return response.json("Lançamento alterado com sucesso.");
    },

    async Excluir (request, response) {
        const { id } = request.params;

        await connection('Cliente_Compra_Lancamento').where('id', id).delete();
    
        return response.json("Lançamento excluído com sucesso.");
    }
};