let body = document.querySelector("body")

const imagem =[ "./imagem/imagem1.jpg", 
"./imagem/imagem2.jpg", 
"./imagem/imagem3.jpg", 
"./imagem/imagem4.jpg"];


for (const item of imagem) {
    let img = document.createElement("img")
    img.src = item
    body.appendChild(img)

}