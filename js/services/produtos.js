const link = "https://my-json-server.typicode.com/ingridsSilveira/digitalClock/produtos";
const url = 'http://localhost:3000/produtos';

const container = document.querySelector("[data-produtos-container]");

let inputNome = document.querySelector("[data-nome]");
let inputPrice = document.querySelector("[data-price]");
let inputImage = document.querySelector("[data-image]");

let data = "";

//GET//
fetch(link).then(resposta => resposta.json())
.then(dados => pegandoDados(dados));

//MODIFICANDO
const modifica = () => {
    container.addEventListener("click", (e) => {
        e.preventDefault();
    
        let botaoDeletar = e.target.id == 'deletar';
        let botaoEditar = e.target.id == 'editar';
    
        let id = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.id;
        //DELETANDO//
        if(botaoDeletar == botaoDeletar){
            fetch(`${url}/${id}`,{
                method: "DELETE",
            })
            .then(resposta => resposta.json())
            .then(() => location.reload())
        }
    //EDITANDO
        if(botaoEditar == botaoEditar){
            window.location.href = "produtos.html";
        } 
    }) 
    }
    //POST
    const cria = () => {
        document.querySelector("[data-form]").addEventListener("submit", (evento) => {
        evento.preventDefault();
    
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: inputNome.value,
                price: inputPrice.value,
                imageUrl: inputImage.value,
            })
        })
        .then(res => res.json())
        .then(data => {
            const dataArr = [];
            dataArr.push(data);
            pegandoDados(dataArr);
        })
    })
    }
const pegandoDados = (dados) => {
    dados.forEach(element => {
        data += `
            <div class="card" data-id=${element.id}>
                <div class="produtos_itens" data-id=${element.id}>
                <img class="images_produto" src="${element.imageUrl}" data-image>

                <div class="modificarItem">
                    <div>
                        <button id="deletar" class="deletar"><img class="images_modificarItem" src="assets/images/deletar.png" alt="icone de deletar"></button>
                    </div>

                <button id="editar" class="editar"><img class="images_modificarItem" src="assets/images/editar.png" alt="icone de editar"></button>
                </div>

                <h3 class="produtos_titulo" data-nome-produto>${element.nome}</h3>
                <p class="produtos_preco" data-preco>${element.price}</p>
                </div>
            </div>
        `
    })
    container.innerHTML = data;
    modifica()
}
cria()