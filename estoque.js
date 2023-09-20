document.addEventListener('DOMContentLoaded', function () {
    const toggleSidebarButton = document.getElementById('toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const planilha = document.getElementById('planilha');
    const searchInput = document.createElement('input');
    const searchButton = document.createElement('button');
    const resultadosDiv = document.createElement('div');

    searchInput.type = 'text';
    searchInput.placeholder = 'Pesquisar...';
    searchButton.textContent = 'Buscar';

    const container = document.querySelector('.container');
    container.insertBefore(searchInput, planilha);
    container.insertBefore(searchButton, planilha);
    container.appendChild(resultadosDiv);

    toggleSidebarButton.addEventListener('click', function () {
        sidebar.classList.toggle('open');
    });

    searchButton.addEventListener('click', function () {
        const termo = searchInput.value.trim().toLowerCase();
        if (termo !== '') {
            const iframeDoc = planilha.contentDocument || planilha.contentWindow.document;
            const cells = iframeDoc.querySelectorAll('.s1'); // Classe de células da planilha, ajuste conforme necessário
            resultadosDiv.innerHTML = ''; // Limpa os resultados anteriores

            cells.forEach(cell => {
                const textoCelula = cell.textContent.trim().toLowerCase();
                if (textoCelula.includes(termo)) {
                    const resultado = document.createElement('div');
                    resultado.textContent = cell.textContent;
                    resultadosDiv.appendChild(resultado);
                }
            });
        }
    });
});
