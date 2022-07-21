//REPONSÁVEL PELO BOTÃO DE DELETAR//
document.querySelectorAll('.deletar').forEach(function(button){
    button.addEventListener("click", function(event){
        // O EL É PARA LANÇAR UM "TARGET" AO CLICAR NUM ITEM//
        const el = event.target;

        //ESTE PEGA O ID DO ITEM, NO CASO DO PARENTE DELE//
        const id = el.parentNode.parentNode.parentNode.id;  

        //ESTE SELECIONA OS ITENS//
        const produtosItens = document.querySelectorAll('.produtos_itens');

            //CÓDIGO QUE PERCORRE O ARRAY E O ITEM PELO ID E AO CLICAR NO BOTÃO DELETA O ITEM//
            for(let i = 0; i < produtosItens.length; i++){
                if(produtosItens[i].id == id){
                    produtosItens[i].remove();
                }
            }
    })
})
//RESPONSÁVEL PELO BOTÃO DE EDITAR//
document.querySelectorAll('.editar').forEach(function(button){
    button.addEventListener("click", function(event){
        const el = event.target;

        const id = el.parentNode.parentNode.parentNode.id;  

        const produtosItens = document.querySelectorAll('.produtos_itens');

            for(let i = 0; i < produtosItens.length; i++){
                if(produtosItens[i].id == id){
                    window.location.href = "produtos.html";
                }
            }
    })
})

//ADICIONA OS ITENS//
document.querySelector(".btn_produtos").addEventListener("click", function(event){
    const clicado = event.target
    console.log('fui clicado');
})