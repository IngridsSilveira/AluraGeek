// GET

const listaProdutos = () => fetch("http://localhost:3000/produtos").then(resposta => resposta.json())

//POST

const criarProdutos = (nome,imageUrl, price) => {
    return fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome,
            imageUrl,
            price
        })
    })
    .then(resposta => {
        if (resposta.ok) {
            return resposta.body
        } else {
            throw new Error("Não foi possível criar os produtos")
        }
    })
}

export const produtosServices = {
    listaProdutos,
    criarProdutos
}