function filtrar(categoria, botao) {
    const itens = document.querySelectorAll('.item');
    const botoes = document.querySelectorAll('.filtros button');

    botoes.forEach(btn => btn.classList.remove('ativo'));
    botao.classList.add('ativo');

    itens.forEach(item => {
        if (categoria === 'todos' || item.classList.contains(categoria)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

