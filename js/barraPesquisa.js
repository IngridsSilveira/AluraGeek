function pesquisa(){
    let input = document.querySelector('.input_search').value
    input = input.toLowerCase();
    let produtos = document.querySelectorAll('[data-nome-produto]');


    for (i = 0; i < produtos.length; i++) { 
        if (!produtos[i].innerHTML.toLowerCase().includes(input)) {
            produtos[i].style.backgroundColor = '';
        }
        else if (input) {
          produtos[i].style.color = "blue";
        }
    }
    return pesquisa;
}

//FUNÇÃO PARA REDIRECINAR OS USUÁRIOS PARA AS TELAS DE PRODUTOS//
function redirecionar(){
    window.location.href = 'produtosHome.html'
}
