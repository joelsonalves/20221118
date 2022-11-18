const apresentar_mensagem = () => {
    document.querySelector('a').remove();
    document.querySelector('div').style.display = 'block';
};

document.querySelector('a').addEventListener('click', () => {
    apresentar_mensagem();
});