const link = "https://my-json-server.typicode.com/ingridsSilveira/AluraGeek/db";

const container = document.querySelector("[data-container]");

const container2 = document.querySelector("[data-container2]");

const container3 = document.querySelector("[data-container3]");

fetch(link).then(resposta => resposta.json())
.then(data =>{
  const html = data.starWars
  .map(element =>{
    return `
      <div class="card" data-card ${element.categoria}>
            <div class="produtos_home" id="${element.id}">
            <img class="images_home" src="${element.imageUrl}" data-image>
            <h3 class="produtos_titulo" data-nome-produto>${element.nome}</h3>
            <p class="preco_home" data-preco>${element.price}</p>
            <a href="#" class="links link">Ver produto</a>
            </div>
        </div>
    `
  }).join("");
  container.innerHTML = html;
})
fetch(link).then(resposta => resposta.json())
.then(data =>{
  const html = data.consoles
  .map(element =>{
    return `
      <div class="card" data-card ${element.categoria}>
            <div class="produtos_home" id="${element.id}">
            <img class="images_home" src="${element.imageUrl}" data-image>
            <h3 class="produtos_titulo" data-nome-produto>${element.nome}</h3>
            <p class="preco_home" data-preco>${element.price}</p>
            <a href="#" class="links link">Ver produto</a>
            </div>
        </div>
    `
  }).join("");
  container2.innerHTML = html;
})

fetch(link).then(resposta => resposta.json())
.then(data =>{
  const html = data.diversos
  .map(element =>{
    return `
      <div class="card" data-card ${element.categoria}>
            <div class="produtos_home" id="${element.id}">
            <img class="images_home" src="${element.imageUrl}" data-image>
            <h3 class="produtos_titulo" data-nome-produto>${element.nome}</h3>
            <p class="preco_home" data-preco>${element.price}</p>
            <a href="#" class="links link">Ver produto</a>
            </div>
        </div>
    `
  }).join("");
  container3.innerHTML = html;
})