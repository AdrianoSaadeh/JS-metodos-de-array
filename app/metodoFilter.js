const btnLivrosFront = document.getElementById('btnFiltrarLivrosFront');

btnLivrosFront.addEventListener('click', filtrarLIvros);

function filtrarLIvros() {
    let livrosFiltrados = livros.filter(livro => livro.categoria == 'front-end');
    console.table(livrosFiltrados);

}