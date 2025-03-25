let livros = [];
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
    const response = await fetch(endpointDaApi);
    livros = await response.json();
    console.table(livros);

    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
}