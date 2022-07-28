import { produtosServices } from "../services/produto-services.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) =>{
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-price]").value;
    const imagem = document.querySelector("[data-image]").value;

    produtosServices.criarProdutos(nome, imagem, preco).then(resposta => {
        window.location.pathname = "/index.html";
        console.log(resposta)
    }).catch(err => {
        console.log(err)
    })
})