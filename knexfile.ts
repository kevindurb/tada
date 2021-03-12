import { Environment } from './src/utils/Environment';

module.exports = {

  development: {
    client: "sqlite3",
    connection: {
      filename: Environment.getDBFile(),
    }
  },

};
