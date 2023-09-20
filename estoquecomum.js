document.addEventListener('DOMContentLoaded', function () {
    const toggleSidebarButton = document.getElementById('toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');

    // Abrir o menu lateral por padrão
    sidebar.classList.add('open');

    toggleSidebarButton.addEventListener('click', function () {
        sidebar.classList.toggle('open');
    });

    // Impedir que cliques dentro do menu fechem o menu
    sidebar.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    // Fechar o menu quando se clica fora dele
    document.addEventListener('click', function (event) {
        if (sidebar.classList.contains('open') && event.target !== toggleSidebarButton) {
            sidebar.classList.remove('open');
        }
    });
});
