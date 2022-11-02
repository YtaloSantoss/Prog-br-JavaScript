function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35)
]

function temMenosde30(aluno) {
    return aluno.idade < 30 
}

function temMaisde30(aluno) {
    return aluno.idade > 30
}

let alunosComenosde30 = alunos.filter(temMenosde30)

console.log(alunosComenosde30)