import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes)

// GET: Buscar ou listar uma informação
// POST: Criar uma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação , filtragem, ordenação



app.listen(3333);