let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco(){
    let livrosOrdenados = livros.sort((a, b)=> a.preco - b.preco); // Ordenando do menor para o maior (preço)
    exibirOsLivrosNaTela(livrosOrdenados)
}