import knex from 'knex'; /*serve para criar as conexoes e queries*/;
import path from 'path'; /*serve ara direciona os caminhos de arquivos e pastas (integrado dentro do node.js) */

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite') /** __dirname = retorna o propria pasta onde esta chamando a funcao */
  },
  useNullAsDefault: true, /** coloca null nos campos nao preenchidos */
})

export default db;