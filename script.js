document.addEventListener('DOMContentLoaded', function () {
    const toggleSidebarButton = document.getElementById('toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');

    toggleSidebarButton.addEventListener('click', function () {
        sidebar.classList.toggle('open');
    });

    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && event.target !== toggleSidebarButton) {
            sidebar.classList.remove('open');
        }
    });
});
