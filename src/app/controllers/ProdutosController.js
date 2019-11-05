const fs = require("fs")

class ProdutoController {

    search(req, res) {

        const data = fs.readFileSync('mockProdutos.json', 'utf-8');

        const response = JSON.parse(data);

        const dado = response.products.filter((value) => {
            if(value.id === req.query.terms){
                return value 
            }else if (value.title === req.query.terms){
                return value 
            }else if (!req.query.terms || req.query.terms == 'teste' ) {
                return value
            }
        })
        res.send(dado)
    }
};

module.exports = new ProdutoController();