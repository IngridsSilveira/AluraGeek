const email = document.querySelector("#email");

const emailLogin = "admin@email.com";

const senha = document.querySelector("#senha");

const senhaLogin = "admin123";

const botao = document.querySelector(".btn");

    botao.addEventListener('click', function(e){
        e.preventDefault();

        const itensValidos = validandoItens();

        e.target = !itensValidos;
    })

function validandoItens(){
   
    if( email.value != emailLogin 
        && senha.value != senhaLogin){
            openModal();
    } 
    else if (email.value == emailLogin 
            && senha.value != senhaLogin){
            openModal();
    }
    else if (email.value != emailLogin 
            && senha.value == senhaLogin){
                openModal();
    }
     else if (email.value == emailLogin 
            && senha.value == senhaLogin){
            window.location.href = "produtos.html";
    }
}

const modal = document.querySelector(".modalContainer");

function openModal(){
    modal.classList.add('active');
}

function closeModal(){
    modal.classList.remove('active');
}