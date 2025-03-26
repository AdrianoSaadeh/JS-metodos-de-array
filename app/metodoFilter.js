const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    //const elementoBtn = document.getElementById(this.id);
    //const categoria = elementoBtn.value;

    //tirando a redundância das linhas acima
    const categoria = this.value; // `this` já é o botão clicado
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    console.table(livrosFiltrados);

    exibirOsLivrosNaTela(livrosFiltrados);

    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotaldeLivrosDisponiveis(livrosFiltrados);
        console.log(valorTotal);

        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elemntoComValorTotalLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}