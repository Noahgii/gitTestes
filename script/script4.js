const imagens = ["./imagem/imagem1.jpg", "./imagem/imagem2.jpg", "./imagem/imagem3.jpg", "./imagem/imagem4.jpg"]

let imagem = document.querySelector("img");
let indice = 0;

imagem.src = imagens[indice]

function voltar() {
    if(indice > 0){
        indice--;
    } else {
        indice = 3;
    }
    imagem.src =imagens[indice];
}
function proximo() {
    if(indice < 3){
        indice++;
    } else {
        indice = 0;
    }
    
   imagem.src =imagens[indice];
  
}