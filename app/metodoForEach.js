const elementoParaInseririLivros = document.getElementById('livros');
const elemntoComValorTotalLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirOsLivrosNaTela(listaDeLivros) {
  elemntoComValorTotalLivrosDisponiveis.innerHTML = '';
  elementoParaInseririLivros.innerHTML = '';
  listaDeLivros.forEach(livro => {
    // let disponibilidade = verificarDisponibilidadeDoLivro(livro);

    // usando operador ternario e tirando a necvessidade de uso da função
    let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';
    elementoParaInseririLivros.innerHTML += `
    <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
      ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
    `
  });
}

// function verificarDisponibilidadeDoLivro(livro) {
//   if (livro.quantidade > 0) {
//     return 'livro__imagens';
//   } else {
//     return 'livro__imagens indisponivel';
//   }
// }