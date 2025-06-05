
import { TodoList } from './todo.js';

const myTodos = new TodoList();
myTodos.addTask('Finish Node.js exercise');
myTodos.addTask('Review ES6 modules');
myTodos.addTask('Go for a walk');
myTodos.markComplete(0);
myTodos.markComplete(2);
console.log('Todo List:\n' + myTodos.listTasks());

