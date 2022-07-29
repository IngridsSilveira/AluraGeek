import { produtosServices } from "../services/produto-services.js";

const novoProduto = (nome, price, imageUrl, id, categoria) => {
    const card = document.createElement("div");
    const conteudo = `
        <div class="card" ${categoria}>
            <div class="produtos_home" id="${id}">
            <img class="images_home" src="${imageUrl}">
            <h3 class="produtos_titulo" data-nome-produto>${nome}</h3>
            <p class="preco_home">${price}</p>
            <a href="#" class="links link">Ver produto</a>
            </div>
        </div>
    `
    card.innerHTML = conteudo;
    return card
}

const produtos = document.querySelectorAll('[data-product]')

const render = async () => {
    try{
        const listaProdutos = await produtosServices.listaProdutos()
        listaProdutos.forEach(elemento =>{
            for(let i = 0; i < produtos.length; i++){
                    produtos[i].appendChild(novoProduto(elemento.nome, elemento.price, elemento.imageUrl, elemento.id, elemento.categoria));
            }
        });
    }
    catch(erro){
        console.log(erro)
    }
}
render()