/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Task from './task-class';

export default class Todo {
  listOfTasks: Task[];

  constructor(listOfTasks: Task[] = []) {
    this.listOfTasks = listOfTasks;
  }

  listAllTasks(): void {
    if (this.listOfTasks.length === 0) {
      console.log('No todos for today! :)');
    } else {
      this.listOfTasks.forEach((task, i) => {
        if (task.getIsComplete()) {
          console.log(`${i + 1}. [x] ${task.getTaskDesc()}`);
        } else {
          console.log(`${i + 1}. [ ] ${task.getTaskDesc()}`);
        }
      });
    }
  }

  addNewTask(desc: string): void {
    if (!desc) {
      console.log('Unable to add: no task provided');
    } else {
      this.listOfTasks.push(new Task(desc));
    }
  }

  checkTask(taskIndex: number): void {
    try {
      this.listOfTasks.forEach((task, i) => {
        if (i === (taskIndex - 1)) {
          task.setToComplete();
        }
      });
    } catch (e) {
      console.log('Unable to check: index is out of bound');
    }
  }

  removeTask(taskIndex: any): void {
    if (!taskIndex) {
      console.log('Unable to remove: no index provided');
    } else if (taskIndex === '') {
      console.log('Unable to remove: index is not a number');
    } else {
      this.listOfTasks.forEach((task, i, arr) => {
        if (i === (taskIndex - 1)) {
          arr.splice(i, 1);
        } else {
          console.log('Unable to remove: index is out of bound');
        }
      });
    }
  }
}
const myTasks = new Todo([
  new Task('Bitch about stuff', false),
  new Task('Eat'),
]);
myTasks.checkTask(1);
myTasks.listAllTasks();
