Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i ,this))
    }
    return newArray
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços

//primeiro transformando um JSON em objeto
const paraObjeto = json => JSON.parse(json)
//recebendo apenas os parâmetros que eu escolho 
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)