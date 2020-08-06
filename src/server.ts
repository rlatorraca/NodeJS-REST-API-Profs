import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();


app.use(cors());
app.use(express.json()); // para transformas os retornos para JSON
app.use(routes);

// Tipos de Parametros
// [1] Corpo (request body) : dados para criacao ou atualização de um registro; => request.body
// [2] Route params : serve para identificar qual recurso sera atualizado ou deletado Ex: '/usrs/:id') => request.params
// [3] Query Params : serve para paginacao, filtros, ordenacoes. => request.query

//Rota (todo endereco) + recursos (ex: /users)
// app.get('/users', (request, response) => {
//     const users = [
//         {'nome' : 'João', 'idade' : 20},
//         {'nome' : 'Maria', 'idade' : 20},
//         {'nome' : 'José', 'idade' : 33},
//         {'nome' : 'Tião', 'idade' : 44},
//         {'nome' : 'Jonas', 'idade' : 55},
//         {'nome' : 'Josue', 'idade' : 65}
//     ];
//     return response.json(users);
// });

app.listen(1111);

