function aplicarDesconto(livros){
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro =>{
        return {...livro, preco: livro.preco - (livro.preco * desconto)} //...livro para fazer uma cópia de livro(spread operator) mas alterando o preço, está sobrescrevendo a propriedade preco do objeto.
    })
    return livrosComDesconto;
}