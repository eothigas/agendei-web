import express from 'express';
import path from 'path';

const app = express();
const port = 3001; // Porta que você deseja usar

// Servir os arquivos estáticos da pasta web/src
app.use(express.static(path.join(__dirname, 'web/src')));

// Rota principal que serve o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'web/src', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://18.230.206.19:${port}`);
});
