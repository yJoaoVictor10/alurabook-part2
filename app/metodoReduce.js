function calcularValorTotalDeLivrosDisponiveis(livros){
    return livros.reduce((acumulador, livro) => acumulador + livro.preco, 0).toFixed(2); // Soma os preços dos livros disponíveis, começando com o valor 0
}