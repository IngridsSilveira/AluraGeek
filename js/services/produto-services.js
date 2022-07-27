// GET

const listaProdutos = () => fetch("http://localhost:3000/produtos").then(resposta => resposta.json())

export const produtosServices = {
    listaProdutos,
}