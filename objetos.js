function pessoa(nome, idade, rua, profissao) {
    return {
        nome: nome,
        idade: idade,
        profissao: profissao,
        rua: rua,
        falar: function () {
            console.log("OLÁ, SOU " + this.nome);
        }
    };
}

let pessoa1 = pessoa("Homer", 39, "Av. Sempre-verde 742", "Desempregado");
console.log("Nome: " + pessoa1.nome);
console.log("Quantidade de caracteres no nome:" + pessoa1.nome.length);
console.log("Endereço: " + pessoa1.rua.toUpperCase());
console.log("Endereço: " + pessoa1.rua.toLowerCase());

class Produto {
    constructor(nome, preco) {
        this.nome = nome.toUpperCase();
        this.preco = preco;
        this.vendido = false;
    }
    somaICMS() {
        this.preco = this.preco * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}

const produto1 = new Produto("arroz", 125);
const produto2 = new Produto("macarrão", 50);
produto1.somaICMS();
produto2.somaICMS();
produto1.vender();
console.log(produto1);
console.log(produto2);