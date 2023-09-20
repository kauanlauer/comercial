<?php
// Iniciar a sessão
session_start();

// Definir o tempo de inatividade (em segundos)
$inactivity_timeout = 5; // 5 segundos (você pode ajustar conforme necessário)

// Verificar se o usuário está logado
if (isset($_SESSION['user_id'])) {
    // O usuário está logado, exibir o conteúdo protegido

    // Verificar o tipo de usuário
    $user_type = $_SESSION['user_type'];

    // Função para verificar o acesso a uma página
    function checkAccess($allowed_types) {
        global $user_type;
        if (in_array($user_type, $allowed_types)) {
            return true;
        } else {
            return false;
        }
    }

    // Verificar se o tempo de inatividade foi atingido
    if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity'] > $inactivity_timeout)) {
        // O tempo de inatividade foi atingido, redirecionar para a página de login
        header('Location: login.php');
        exit;
    }

    // Atualizar o último tempo de atividade
    $_SESSION['last_activity'] = time();
} else {
    // O usuário não está logado, redirecionar para a página de login
    header('Location: login.php');
    exit;
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Página Protegida</title>
</head>
<body>
    <h1>Bem-vindo à página protegida</h1>
    
    <?php
    // Verificar se o usuário tem acesso a esta página
    if (checkAccess(['Administrador', 'Usuário Comum'])) {
        echo '<p>Você tem acesso a esta página.</p>';
    } else {
        echo '<p>Você não tem permissão para acessar esta página.</p>';
    }
    ?>

    <p><a href="logout.php">Sair</a></p>
</body>
</html>
