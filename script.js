document.addEventListener('DOMContentLoaded', function() {
    const adicionarBtn = document.getElementById('adicionarBtn');
    const descricaoInput = document.getElementById('descricao');
    const valorInput = document.getElementById('valor');
    const dividasList = document.getElementById('dividasList');
    const totalDividas = document.getElementById('totalDividas');

    let total = 0;

    // Função para atualizar a soma total
    function atualizarSomaTotal() {
        totalDividas.textContent = `R$ ${total.toFixed(2)}`;
    }

    // Função para adicionar dívida
    adicionarBtn.addEventListener('click', function() {
        const descricao = descricaoInput.value.trim();
        const valor = parseFloat(valorInput.value.trim());

        if (descricao && !isNaN(valor)) {
            const divida = { descricao, valor };
            adicionarDivida(divida);
            descricaoInput.value = '';
            valorInput.value = '';
        } else {
            alert('Por favor, preencha a descrição e o valor corretamente!');
        }
    });

    // Função para adicionar dívida à tabela
    function adicionarDivida(divida) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${divida.descricao}</td>
            <td>R$ ${divida.valor.toFixed(2)}</td>
            <td><button class="delete">Excluir</button></td>
        `;

        const excluirBtn = tr.querySelector('.delete');
        excluirBtn.addEventListener('click', function() {
            dividasList.removeChild(tr);
            total -= divida.valor;
            atualizarSomaTotal();
        });

        dividasList.appendChild(tr);

        // Atualiza o total ao adicionar uma dívida
        total += divida.valor;
        atualizarSomaTotal();
    }
});
