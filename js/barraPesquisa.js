function search(){
    const input = document.querySelector('.input_search').value.toLowerCase();

    const produtos = document.querySelectorAll(".produtos_home")

    const nomeProdutos = document.querySelectorAll('[data-nome-produto]');

    const background = document.querySelector(".section_inicial");
    
    const star = document.querySelector("[data-home-star]");
    const consoles = document.querySelector("[data-home-consoles]");
    const diversos = document.querySelector("[data-home-diversos]");

    for(var i = 0; nomeProdutos.length; i++){
        let teste = produtos[i].getElementsByTagName('h3')[0];

        if(teste){
            let textoValue = teste.textContent || teste.innerHTML

            if(textoValue.toLocaleLowerCase().indexOf(input) > -1){
                produtos[i].style.display = "";
                background.style.display = "";
                star.style.display = "";
                consoles.style.display = "";
                diversos.style.display = "";
            }else {
                produtos[i].style.display = "none";
                background.style.display = "none";
                star.style.display = "none";
                consoles.style.display = "none";
                diversos.style.display = "none";
            }
        }
    }
}

function pesquisa(){
    let input = document.querySelector('.input_search').value
    input = input.toLowerCase();
    let produtos = document.querySelectorAll('[data-nome-produto]');
    let card = document.querySelectorAll("[data-card]");


    for (i = 0; i < produtos.length; i++) { 
        if (!produtos[i].innerHTML.toLowerCase().includes(input)) {
            card[i].style.display = 'none';
        }
        else {
          card[i].style.display = "block";
        }
    }
}

//FUNÇÃO PARA REDIRECINAR OS USUÁRIOS PARA AS TELAS DE PRODUTOS//
function redirecionar(){
    window.location.href = 'produtosHome.html'
}
