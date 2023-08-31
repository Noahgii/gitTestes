const numerosInteiro = [ 1, 2, 3, 4, 5];

let body = document.querySelector("body")
let paragrafo = document.getElementById("pId")


for (const algo of  numerosInteiro) {
    paragrafo.textContent += (algo *9) + " , ";
    let botao = document.createElement('button');
    botao.textContent = algo;
    body.appendChild(botao); 
   
}