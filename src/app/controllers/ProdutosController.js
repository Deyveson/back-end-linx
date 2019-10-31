const fs = require("fs")

class ProdutoController {
    async store(req, res){

        const data = fs.readFileSync('mockProdutos.json', 'utf-8');

        const response = JSON.parse(data)

        res.send(response);
    }
}

module.exports = new ProdutoController();