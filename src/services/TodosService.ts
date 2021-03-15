import { App } from '../App';

export class TodosService {
  getTodos() {
    const database = App.getContainer().get('database');
    return database.connection('todos').select('*');
  }
}
