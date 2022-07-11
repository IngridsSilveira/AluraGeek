export function valida (input) {
    const tipoDeInput = input.dataset.tipo;

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid){
        input.classList.remove('input-container--invalido');
        input.parentElement.querySelector('.error').innerHTML = '';
    }else {
        input.classList.add('input-container--invalido');
        input.parentElement.querySelector('.error').innerHTML = mostraMensagemDeErro(tipoDeInput, input);
    }
}
const tiposDeErro = [
    'valueMissing',
    'typeMismatch'
]
const mensagensDeErro = {
    nome: {
        valueMissing: 'O nome não pode ser vazio.',
    },
    mensagem: {
        valueMissing: 'A mensagem não pode estar vazia.',
    },
    email: {
        valueMissing: 'O e-mail não pode ser vazio.',
        typeMismatch: 'O e-mail digitado não é válido (seunome@email.com).'
    },
    senha: {
        valueMissing: 'A senha não pode ser vazia.'
    },
    nomeProdutos: {
        valueMissing: 'O nome do produto não pode ser vazio.'
    },
    preco: {
        valueMissing: 'O preço não pode ser vazio.'
    },
    descricao: {
        valueMissing: 'A descrição não pode ser vazia.'
    }
}
const validadores = {

}
function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = '';

    tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            mensagem = mensagensDeErro[tipoDeInput][erro];
        }
    })

    return mensagem;
}