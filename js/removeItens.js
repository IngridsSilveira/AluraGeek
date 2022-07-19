const botaoDeletar = document.querySelector('.deletar');

function deletar(){
    var produtosItens = document.querySelectorAll('.produtos_itens');
        for(let i = 0; i < produtosItens.length; i++){
            if(!produtosItens[i]){
            console.log(produtosItens)
            }else {
               console.log(produtosItens[i]);
            }
        }
}