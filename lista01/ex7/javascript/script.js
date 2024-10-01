cor = alert("Digite três valores nos passos seguintes para escolher uma cor")

var r = prompt("Digite o primeiro valor entre 0 - 255")
var g = prompt("Digite o segundo valor entre 0 - 255")
var b = prompt("Digite o terceiro valor entre 0 - 255")

document.write(`<h1 style="color: rgb(${r}, ${g}, ${b});">Fundamentos de Web Design II</h1>`);