import { produtosServices } from "../services/produto-services.js";

const novoProduto = (nome, price, imageUrl) => {
    const card = document.createElement("div");
    const conteudo = `
            <div class="produtos_home">
            <img class="images_home" src="${imageUrl}">
            <h3 class="produtos_titulo" data-nome-produto>${nome}</h3>
            <p class="preco_home">${price}</p>
            <a href="#" class="links link">Ver produto</a>
            </div>
    `
    card.innerHTML = conteudo
    return card
}

const produtos = document.querySelectorAll('[data-product]')

const render = async () => {
    try{
        const listaProdutos = await produtosServices.listaProdutos()
        listaProdutos.forEach(elemento =>{
            for(let i = 0; i < produtos.length; i++){
                produtos[i].appendChild(novoProduto(elemento.nome, elemento.price, elemento.imageUrl));
            }
        });
    }
    catch(erro){
        console.log(erro)
    }
}
render()