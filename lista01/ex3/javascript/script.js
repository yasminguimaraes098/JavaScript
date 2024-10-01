nome = prompt("Digite seu nome completo");
idade = prompt("Agora digite sua idade");

if (idade >= 18) {
alert(nome + ", você já POSSUI idade para tirar carteira ")    
} else {
    var falta = 18 - idade;
    alert(nome + ", você ainda NÃO POSSUI idade para tirar carteira. Falta(m) " + falta + " ano(s)");
}