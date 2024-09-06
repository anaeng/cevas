function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor da caixa de pesquisa
    let pesquisa = document.querySelector('input[type="text"]').value.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // Verifica se o título do dado contém o texto de pesquisa
        if (dado.titulo.toLowerCase().includes(pesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
                <div class="item-resultado">
                    <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
                    <p><strong>Descrição:</strong> ${dado.descricao}</p>
                    <p><strong>Origem:</strong> ${dado.origem}</p>
                    <p><strong>Características:</strong> ${dado.caracteristicas}</p>
                    <p><strong>Harmonização:</strong> ${dado.harmonizacao}</p>
                    <p><strong>Curiosidades:</strong> ${dado.curiosidades}</p>
                </div>
            `;
        }
    }

    // Se não houver resultados, exibe uma mensagem
    if (resultados === "") {
        resultados = `<p class="mensagem-erro">Nenhum resultado encontrado para "${pesquisa}".</p>`;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
