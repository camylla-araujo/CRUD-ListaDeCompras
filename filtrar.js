function filtrar() {
    let expressao = input_busca.value.toLowerCase(); //valor que o usuario digitou;

//pegando todas as linhas da tabela;
    let linhas = tabela_compras.getElementsByTagName('tr');

    for (let posicao in linhas) {
    
    if (isNaN(posicao) ) {
        continue;

    }
    
    //se dentro da linha atual (<tr>) existir a expressao;
    //digitada pelo usuario, mostrar a linha;
    //se nao, escolhe a linha;

    let coluna1 = linhas[posicao].children[1].innerText.toLowerCase();
    let coluna2 = linhas[posicao].children[2].innerText.toLowerCase();

    let colunas = coluna1 +coluna2;
    

    if (colunas.includes(expressao) ) {
        linhas[posicao].style.display = '';
    } else {
        linhas[posicao].style.display = 'none';
    }

}
    // console.log(input_busca.value); valor que o usuario digita no console;

    
}