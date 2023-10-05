const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/save-login') {
        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            // Analise os dados JSON recebidos do cliente
            const loginInfo = JSON.parse(data);

            // Crie uma string com os dados a serem gravados no arquivo
            const loginDataString = `Username: ${loginInfo.username}, LoginTime: ${loginInfo.loginTime}\n`;

            // Grave os dados no arquivo login.txt
            fs.appendFile('login.txt', loginDataString, (err) => {
                if (err) {
                    console.error(err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Erro interno do servidor');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Dados de login salvos com sucesso');
                }
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página não encontrada');
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
