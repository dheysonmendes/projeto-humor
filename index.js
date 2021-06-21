const pessoa = {
    nome: 'Sheldon Cooper',    
    idade: 40,
    feliz: true,
    imagemFeliz: 'https://1.bp.blogspot.com/-mwize2IR6KI/V6FVVTItO2I/AAAAAAAAA5I/H1vytBkmiUoQRj0IizB005bt3zhN6ZjfwCLcB/s1600/Segurando%2Bo%2BRiso%2B2.gif',
    imagemHisterico: 'https://afroliteraria.com.br/wp-content/uploads/2017/01/I-Am-Suddenly-Enraged.gif',
    
}
const elementoNome = document.getElementById('nome');
const elementoIdade = document.getElementById('idade');
elementoNome.innerText = pessoa.nome;
elementoIdade.innerText = pessoa.idade;
function atualizarHumor() {
    const elementoImagem = document.getElementById('imagem');
    const blocoHumor = document.getElementById('bloco_humor');
    if (pessoa.feliz) {
        elementoImagem.src = pessoa.imagemFeliz;
        blocoHumor.innerText = pessoa.nome + ' está Feliz!';
    } else {
        elementoImagem.src = pessoa.imagemHisterico;
        blocoHumor.innerText = pessoa.nome + ' está Histerico!';
    }
}
atualizarHumor();
const botaoAlterarHumor = document.getElementById('alterarHumor');
botaoAlterarHumor.addEventListener('click', function () {
    pessoa.feliz = !pessoa.feliz;

    atualizarHumor();
});
