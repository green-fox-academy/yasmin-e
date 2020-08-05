/* eslint-disable no-restricted-syntax */
import Domino from './domino';
import Todo from './todo';

const dominoes: Domino[] = [
  new Domino(4, 4),
  new Domino(6, 2),
  new Domino(3, 5),
];

const todos: Todo[] = [
  new Todo('Buy milk', 'high'),
  new Todo('Find plane ticket to Brazil for December', 'low'),
  new Todo('Feed dog', 'high', true),
];

for (const domino of dominoes) {
  domino.printAllFields();
}

for (const todo of todos) {
  todo.printAllFields();
}
