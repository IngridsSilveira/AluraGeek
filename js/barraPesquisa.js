// FUNÇÃO RESPONSAVEL POR PESQUISAR OS ITENS//
function pesquisa(){
    let input = document.querySelector('.input_search').value
    input = input.toLowerCase();
    let produtos = document.querySelectorAll('[data-nome-produto]');
//FOR PARA PERCORRER OS NOMES DOS PRODUTOS//
    for (i = 0; i < produtos.length; i++) { 
        //ESTE IF É PARA QUANDO O PRODUTO NÃO FOR O ENCONTRADO, ELE TBM DIMINUI A LETRA DOS ITENS PARA PODER ENCONTRAR CASO O USUÁRIO ESCREVA TUDO MINUSCULO//
        if (!produtos[i].innerHTML.toLowerCase().includes(input)) {
            produtos[i].style.backgroundColor = '';
        }
        //ESTE ELSE É PARA QUANDO O PRODUTO FOR ENCONTRADO
        else {
            //ESTE É O CÓDIGO PARA COLOCAR UMA COR NO PRODUTO ENCONTRADO//
            produtos[i].style.backgroundColor = '#ccc';
        }
    }
    return pesquisa;
}
//FUNÇÃO PARA REDIRECINAR OS USUÁRIOS PARA AS TELAS DE PRODUTOS//
function redirecionar(){
    window.location.href = 'produtosHome.html'
}