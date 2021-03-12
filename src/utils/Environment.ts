import * as dotenv from 'dotenv';

export class Environment {
  private static _env?: Record<string, string | undefined>;

  private static getEnvironment() {
    if (!Environment._env) {
      dotenv.config();
      Environment._env = process.env;
    }

    return Environment._env;
  }

  static getDBFile() {
    return Environment.getEnvironment().DB_FILE;
  }

  static getPort() {
    return Environment.getEnvironment().PORT;
  }
}
