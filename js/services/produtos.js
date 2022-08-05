const link = "produtos.json";

const container = document.querySelector("[data-produtos-container]");

fetch(link).then(resposta => resposta.json())
.then(data =>{
  const html = data.produtos
  .map(element =>{
    return `
    <div class="produtos_itens" id="${element.id}">
    <img class="images_produto" src="${element.imageUrl}">
    <div class="modificarItem">
    <button class="deletar"><img class="images_modificarItem" src="assets/images/deletar.png" alt="icone de deletar"></button>

    <button class="editar"><img class="images_modificarItem" src="assets/images/editar.png" alt="icone de editar"></button>
    </div>
    <h3 class="produtos_titulo" data-nome-produto>${element.nome}</h3>
    <p class="produtos_preco">${element.price}</p>
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