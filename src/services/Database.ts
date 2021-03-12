import knex, { Knex } from 'knex';
import { Environment } from '../utils/Environment';

export class Database {
  connection: Knex;

  constructor() {
    this.connection = knex({
      client: 'sqlite3',
      connection: {
        filename: Environment.getDBFile(),
      },
    });
  }
}
