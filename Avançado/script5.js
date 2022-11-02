var aluno = {
    matricula:1234,
    nome:"Marcos",
    telefone: 987654432,
    cidade: "Barra do pirai"
}

var aluno1 = {
    matricula:1235,
    nome:"João",
    telefone: 987654432,
    cidade: "Barra do pirai"
}

var aluno2 = {
    matricula:1236,
    nome:"Jose",
    telefone: 987654432,
    cidade: "Barra do pirai"
}

var alunos = [aluno, aluno1, aluno2]
var [Marcos, ...outros] = alunos

console.log(Marcos)
console.log(outros)