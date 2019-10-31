class ProdutoController {
    async store(req, res){

        const product = [
            {

                id: "476735KgLNC3644",
           
                title: "Oferta Padrao de base Teste - 476735KgLNC3644",
           
                img: "http://busca-images.neemu.com/neemu_chaordic.png",
           
                status: "available",
           
                price: 193.99,
           
                sPrice: 174.59,
           
            }
        ];

        res.send(product);
    }
}

module.exports = new ProdutoController();