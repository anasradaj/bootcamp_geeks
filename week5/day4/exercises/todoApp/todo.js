export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    this.tasks.push({ description, completed: false });
  }

  markComplete(index) {
    if (this.tasks[index]) {
      this.tasks[index].completed = true;
    }
  }

  listTasks() {
    return this.tasks.map((task, i) =>
      `${i + 1}. [${task.completed ? 'x' : ' '}] ${task.description}`
    ).join('\n');
  }
}