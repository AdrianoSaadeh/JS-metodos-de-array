const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    //const elementoBtn = document.getElementById(this.id);
    //const categoria = elementoBtn.value;

    //tirando a redundância
    const categoria = this.value; // `this` já é o botão clicado
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    console.table(livrosFiltrados);
}