//RESPONSÁVEL PELO BOTÃO DE ADICIONAR NOVAS IMAGENS//
const inputFile = document.querySelector('#picture__input');
const pictureImage = document.querySelector('.picture_image');
const pictureImageTxt = 'Clique para adicionar uma imagem';
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if(file){
        pictureImage.innerHTML = 'Imagem Selecionada!';
    } else {
        pictureImage.innerHTML = pictureImageTxt;
    }
});