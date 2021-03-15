import { App } from '../App';
import { Todo as TodoType } from '../types/todo';

export class TodosService {
  getDBConnection() {
    return App.getContainer().get('database').connection;
  }

  getTodos() {
    const connection = this.getDBConnection();
    return connection('todos').select('*');
  }
  createTodo(todo: TodoType) {
    const connection = this.getDBConnection();
    return connection('todos').insert(todo);
  }
}
