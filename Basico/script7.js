
// Nome do aluno - nota 1 - nota 2 - média - Aprovado/Reprovado 

var nomes = ["Igor","José","Maria"];
// cada indece pertence a um aluno 
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];

function media(n1,n2){
    return (n1 + n2)/2;
}

function passou(media) {

    if (media > 7){
        return "Aprovado";
    }else{
        return "Reprovado";
    }
}

for (var index in nomes) {

    var m = media(notasA[index],notasB[index])

    console.log(
    nomes[index]  + " -- "  +   
    notasA[index] + " -- "  +   
    notasB[index] + " -- "  + 
    m + " -- "  + 
    passou(m));
}