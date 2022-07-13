let input = document.querySelector('[data-input]');
let inputLink = document.querySelector('[data-input-link]');
let produtos = document.querySelectorAll('[data-nome-produto]');

inputLink.addEventListener('click', function(e) {
    e.preventDefault();
    inputLink.innerHTML = '';
});

console.log(produtos);