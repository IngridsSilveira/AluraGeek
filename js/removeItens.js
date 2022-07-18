var produtosItens = document.querySelectorAll('.produtos_itens');
const botaoDeletar = document.querySelector('.deletar');

    for (i = 0; i < produtosItens.length; i++) { 
        produtosItens[i].addEventListener('click', (evento)=>{
            evento.target.parentElement.remove();
        }
        ) 
    }
console.log(produtosItens);