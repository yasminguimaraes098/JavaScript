var nota1 = parseFloat(prompt("Aluno, informe as notas do 1° bimestre."));
var nota2 = parseFloat(prompt("Agora informe as notas do 2° bimestre."));

var soma = nota1 + nota2;
var notaMin = 60;

if (soma >= notaMin) {
    alert("Parabéns! Você foi aprovado(a).");
} else {
    var falta = notaMin - soma;
    alert("Você foi reprovado(a). Ainda faltam " + falta + " ponto(s).");
}
