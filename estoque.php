
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Estoque Comercial</title>
</head>
<body>
    <header>
        <button id="toggle-sidebar">&#9776; Menu</button>
        <div class="logo">
            <img src="logo.png" alt="Logo">
        </div>
    </header>
    <div class="container">
        <div class="sidebar">
            <nav>
                <ul>
                    <li><a href="index.html">Menu</a></li>
                    <li><a href="estoquelog.html">Estoque Logística</a></li>
                </ul>
            </nav>
        </div>
        <main>
            <!-- Conteúdo principal aqui -->

            <!-- Elemento para incorporar a planilha com um ID -->
            <iframe id="planilha" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQekh1AA7seyXPVh2nRbacI2-mZKYkNcs0SXWoSAn8OEEmOS2qr4GbPWz60qoqRpzDyuBDMbqm_yPWC/pubhtml" width="1100" height="600" frameborder="1" scrolling="yes"></iframe>
        </main>
        <footer>
            <p>&copy; 2023 Kauan Lauer. Todos os direitos reservados. Site desenvolvido para uso interno na empresa Manupackaging Fitasa e Amazonia.</p>
        </footer>
    </div>
    <script src="script.js"></script>
</body>
</html>
