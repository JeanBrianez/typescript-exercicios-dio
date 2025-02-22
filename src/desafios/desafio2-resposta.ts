type Pessoa = {
    nome: string,
    idade: number,
    profissao: Profissao
}

enum Profissao {
    Atriz,
    Padeiro
}

let pessoa1: Pessoa = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz
}

let pessoa2: Pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}