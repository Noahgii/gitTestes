const nomes = ["Gabi", "Leo", "Pina"]

let body = document.querySelector("body")


for (const algo of nomes) {
   let p = document.createElement("p");
   p.textContent = algo;
   body.appendChild(p)
}