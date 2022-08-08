const link = "produtos.json";
const teste = 'https://my-json-server.typicode.com/ingridsSilveira/AluraGeek/starWars';

const container = document.querySelector("[data-produtos-container]");

fetch(link).then(resposta => resposta.json())
.then(data =>{
  const html = data.produtos
  .map(element =>{
    return `
    <div class="card" data-card ${element.categoria}>
    <div class="produtos_itens" id="${element.id}">
    <img class="images_produto" src="${element.imageUrl}" data-image>
    <div class="modificarItem">
    <button class="deletar"><img class="images_modificarItem" src="assets/images/deletar.png" alt="icone de deletar"></button>

    <button class="editar"><img class="images_modificarItem" src="assets/images/editar.png" alt="icone de editar"></button>
    </div>
    <h3 class="produtos_titulo" data-nome-produto>${element.nome}</h3>
    <p class="produtos_preco" data-preco>${element.price}</p>
    </div>
    </div>
    `

  }).join("");
  container.innerHTML = html;

  
const produtosItens = document.querySelectorAll('.produtos_itens');

document.querySelectorAll('.deletar').forEach(function(button){
    button.addEventListener("click", function(event){
        const el = event.target;

        const id = el.parentNode.parentNode.parentNode.id;  

            for(let i = 0; i < produtosItens.length; i++){
                if(produtosItens[i].id == id){
                    produtosItens[i].remove();
                }
            }
    })
})

//RESPONSÁVEL PELO BOTÃO DE EDITAR//
document.querySelectorAll('.editar').forEach(function(button){
    button.addEventListener("click", function(event){
        const el = event.target;

        const id = el.parentNode.parentNode.parentNode.id;  

            for(let i = 0; i < produtosItens.length; i++){
                if(produtosItens[i].id == id){
                    window.location.href = "produtos.html";
                }
            }
    })
})
})

const criaProdutos = (nome, imageUrl, price) => {
    return fetch(teste, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome,
            imageUrl,
            price
        })
    }).then(resposta => {
        if (resposta.ok) {
           return resposta.json();
        } else {
            throw new Error("Não foi possível criar o produto");
        }
    })
}

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value
    const preco = document.querySelector("[data-price]").value
    const imagem = document.querySelector("[data-image]").value

    criaProdutos(nome, imagem, preco).then(resposta => {
        window.location.pathname = "/produtosHome.html";
        console.log(resposta)
    }).catch(err => {
        console.log(err)
    })
})