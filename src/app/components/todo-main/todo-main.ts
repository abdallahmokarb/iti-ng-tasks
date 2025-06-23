import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ITodo } from '../../models/ITodo';

@Component({
  selector: 'app-todo-main',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-main.html',
})
export class TodoApp {
  task: string = '';
  todos: ITodo[] = [];

  addTodo() {
    const title = this.task.trim();
    if (title) {
      this.todos.push({
        id: Date.now(),
        title,
        completed: false,
      });
      this.task = '';
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleComplete(id: number) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}
