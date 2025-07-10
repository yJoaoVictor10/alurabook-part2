let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const resposta = await fetch(endpointDaAPI); // Usa fetch() para fazer uma requisição HTTP GET para a URL da API
    livros = await resposta.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
    
}