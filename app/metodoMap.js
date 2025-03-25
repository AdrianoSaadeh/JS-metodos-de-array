function aplicarDesconto(listaDeLivros) {
  const desconto = 0.3;
  const livrosDescontoAplicado = livros.map(livro => {
    return {
      ...livro,
      preco: livro.preco - (livro.preco * desconto)
    }
  })
  return livrosDescontoAplicado
}