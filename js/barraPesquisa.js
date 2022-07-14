//INPUT//
let input = document.querySelector('.input_search');
//ISSO PERCORRE O QUE FOI ESCRITO NO INPUT//
input.addEventListener('keyup', function(e){
    input = e.target.value;
})

//BOTÃO DE PESQUISA//
let inputLink = document.querySelector('[data-input-link]');

//PERCORRE OS PRODUTOS//
let produtos = document.querySelectorAll('[data-nome-produto]');

console.log(produtos);

//FUNÇÃO QUE VAI ACIONAR O BOTÃO//
inputLink.addEventListener('click', function(e) {
    e.preventDefault();

    console.log(input);
});