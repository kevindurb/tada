import knex, { Knex } from 'knex';
import { Environment } from '../utils/Environment';

export const knexConfig: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: Environment.getDBFile(),
  },
};

export class Database {
  connection: Knex;

  constructor() {
    this.connection = knex(knexConfig);
  }
}
